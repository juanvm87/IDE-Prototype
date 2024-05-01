import React, { useState } from "react";
import "./AddSubscriptionForm.css";
import { Link } from "react-router-dom";

function Personalised({ setSubscriptions, subscriptions }) {
  const [profession, setProfession] = useState("");
  const [category, setCategory] = useState("");
  const [frequency, setFrequency] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    switch (selectedCategory) {
      case "Entertainment":
        setRecommendations(["Netflix", "Amazon Prime", "Hulu"]);
        break;
      case "Photography":
        setRecommendations(["Adobe Lightroom", "Adobe Photoshop", "Canva"]);
        break;
      default:
        setRecommendations([]);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Preferences saved successfully!");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="subscription-form">
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        >
          <option value="">Select Your Profession</option>
          <option value="Student">Student</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Photographer">Photographer</option>
          <option value="Teacher">Teacher</option>
        </select>

        <select value={category} onChange={handleCategoryChange} required>
          <option value="">Select Application Category</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Photography">Photography</option>
        </select>

        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        >
          <option value="">How Often Will You Use It?</option>
          <option value="Everyday">Everyday</option>
          <option value="Twice A Week">Twice A Week</option>
          <option value="Once A Week">Once A Week</option>
          <option value="Once A Month">Once A Month</option>
        </select>

        {recommendations.length > 0 && (
          <div>
            <h3>Recommended Subscriptions:</h3>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit">Save Preferences</button>
      </form>
      <Link to="/" className="link-home">
        Home
      </Link>
    </>
  );
}

export default Personalised;
