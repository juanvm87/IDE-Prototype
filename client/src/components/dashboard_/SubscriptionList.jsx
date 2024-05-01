import React from "react";
import isRenewalWithInOneWeek from "../../Utilities/isRenewalWithInOneWeek.js";
import "./SubscriptionList.css";
import { useState, useEffect } from "react";
import Rating from "@mui/lab/Rating";

const SubscriptionList = ({ subscriptions, setSubscriptions }) => {
  const [list, setlist] = useState([]);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    setlist(subscriptions);
  }, [subscriptions]);

  //update the list when the filter changes buy seting the list
  useEffect(() => {}, [filter, subscriptions]);

  const frequencies = [...new Set(subscriptions.map((sub) => sub.frequency))];

  // Function to handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = (index) => {
    // Create a copy of the current list
    const newList = [...list];
    // Remove the subscription at the specified index
    newList.splice(index, 1);
    // Update the state with the new list
    setlist(newList);
    setSubscriptions(newList);
  };
  return (
    <div className="subscription--list">
      <div className="list--header">
        <h2>Subscription List</h2>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          {frequencies.map((frequency, index) => (
            <option key={index} value={frequency}>
              {frequency}
            </option>
          ))}
        </select>
      </div>
      <div className="list--container">
        <table className="subs--details">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Frequency</th>
              <th></th>
              <th></th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody className="tbody1">
            {list.map((subscription, index) => (
              <tr key={index}>
                <td style={{ cursor: "pointer" }}>
                  <a href="/feedback" alt="" title="Feedbacks">
                    {subscription.name}
                  </a>
                </td>
                <td>${Number(subscription.price).toFixed(2)}</td>{" "}
                {/* Convert price to Number here */}
                <td>{subscription.date}</td>
                <td>{subscription.frequency}</td>
                {isRenewalWithInOneWeek(subscription.date) && (
                  <td className="notification">
                    Last week to renew {subscription.name}!
                  </td>
                )}
                {!isRenewalWithInOneWeek(subscription.date) && (
                  <td className="">
                    You have time to renew {subscription.name}
                  </td>
                )}
                {/* add a button to delete  */}
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionList;
