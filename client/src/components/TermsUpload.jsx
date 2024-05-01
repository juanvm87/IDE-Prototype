import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TermsUpload.css"; // Assuming the CSS file is named TermsUpload.css

function TermsUpload() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://tracking-app-bend.onrender.com/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSummary(data.summary || data); // Assuming the summary might be in a nested property
      } else {
        alert(data.error || "An error occurred");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="terms-upload">
      <h1>Paste your terms and conditions</h1>
      <form onSubmit={handleSubmission} className="upload-form">
        <textarea
          className="terms-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder="Paste your terms and conditions here"
          required
        ></textarea>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Loading..." : "Summarize"}
        </button>
      </form>
      {summary && (
        <div className="summary-section">
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}
      <Link to="/home" className="home-link">
        Home
      </Link>
    </div>
  );
}

export default TermsUpload;
