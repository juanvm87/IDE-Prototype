import React, { useEffect, useState } from "react";
import { AiFillHtml5, AiFillRobot, AiFillMobile } from "react-icons/ai";
import "./Content.css";
const course = [
  {
    title: "Web Development",
    icon: <AiFillHtml5 />,
  },
  {
    title: "Data Science",
    icon: <AiFillRobot />,
  },
  {
    title: "Mobile Development",
    icon: <AiFillMobile />,
  },
];

const Card = ({ subscriptions }) => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    setlist(subscriptions);
  }, [subscriptions]);

  return (
    <div className="card--container">
      <div key={"Total Hours"} className="card">
        <div className="card--cover">
          ${list.reduce((acc, sub) => acc + Number(sub.price), 0)}
        </div>
        <div className="card--title">
          <h2>Total Price</h2>
        </div>
      </div>
      <div className="card">
        <div className="card--cover">{list.length}</div>
        <div className="card--title">
          <h2>Total Subscriptions</h2>
        </div>
      </div>
      <div className="card">
        <div className="card--cover">NetFlix</div>
        <div className="card--title">
          <h2>Next Payment</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
