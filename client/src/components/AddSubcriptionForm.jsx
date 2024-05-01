import React, { useState } from "react";
import "./AddSubscriptionForm.css";
import { Link } from "react-router-dom";

function AddSubcriptionForm({ subscriptions, setSubscriptions }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subscriptionData = {
      name,
      price,
      date,
      frequency,
    };

    setSubscriptions([...subscriptions, subscriptionData]);

    setName("");
    setPrice("");
    setDate("");
    setFrequency("");
    alert("Subscription Added Successfully");
  };

  // Function to check if Name of the Subscription and Price are inputted
  const isDataComplete = () => {
    return name.trim() !== "" && price.trim() !== "";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="subscription-form">
        <input
          type="text"
          placeholder="Name of the Subscription"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="frequency">
          How often you will use the Subscription?
        </label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Everyday">Everyday</option>
          <option value="TwiceAweek">TwiceAweek</option>
          <option value="OnceAweek">OnceAweek</option>
          <option value="OnceAmonth">OnceAmonth</option>
        </select>
        {isDataComplete() && ( // Conditionally render the Reviews link
          <Link to="/feedback" className="link">
            Reviews
          </Link>
        )}
        <button type="submit">Add</button>
      </form>
      <Link to="/home" className="link-home">
        Home
      </Link>
    </>
  );
}
export default AddSubcriptionForm;
//Software Engineer

//Hello marta I need help with a subscription
