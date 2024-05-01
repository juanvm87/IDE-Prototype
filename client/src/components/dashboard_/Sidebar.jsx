import React from "react";
import "./Sidebar.css";
import logoImage from "../../assets/Asset 2.png";
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="menu1">
      <div className="logo1">
        <img
          className="logo-icon"
          src={logoImage}
          alt=""
          style={{ width: "200px" }}
        />
      </div>
      <div className="menu1--list">
        <a href="/home" className="item">
          <BiSolidReport className="icon" />
          <span>Home</span>
        </a>
        <a href="/add-subscription" className="item">
          <BiTask className="icon" />
          <span>Subscriptions</span>
        </a>
        <a href="/terms-upload" className="item">
          <BiMessage className="icon" />
          <span>Summarize your Terms</span>
        </a>
        <a href="/chat" className="item">
          <BiHelpCircle className="icon" />
          <span>Help</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
