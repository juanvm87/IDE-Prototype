import isRenewalWithInOneWeek from "../Utilities/isRenewalWithInOneWeek";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SubscriptionList.css"; // Import CSS for styling

function SubscriptionList({ subscriptions }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const prices = subscriptions.reduce(
      (acc, subscription) => acc + Number(subscription.price), // Ensure 'price' is treated as a number
      0
    );
    setTotalPrice(prices);
  }, [subscriptions]);

  return (
    <div className="subscription-list">
      <h1>Subscription List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, index) => (
            <tr key={index}>
              <td>{subscription.name}</td>
              <td>${Number(subscription.price).toFixed(2)}</td>{" "}
              {/* Convert price to Number here */}
              <td>{subscription.date}</td>
              <td>{subscription.frequency}</td>
              {isRenewalWithInOneWeek(subscription.date) && (
                <td className="notification">
                  Last week to renew {subscription.name}!
                </td>
              )}
            </tr>
          ))}
          <tr>
            <td>Total Cost of the subscriptions:</td>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/home" className="link-home">
        Home
      </Link>
    </div>
  );
}

export default SubscriptionList;
