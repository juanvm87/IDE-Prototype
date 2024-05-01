import React from "react";
import Sidebar from "./dashboard_/Sidebar";
import Profile from "./dashboard_/Profile";
import Content from "./dashboard_/Content";
import "./Dashboard.css";
import ChatBot1 from "./chatbot/ChatBot";

const DashBoard = ({ subscriptions, setSubscriptions }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content
          subscriptions={subscriptions}
          setSubscriptions={setSubscriptions}
        />
        <Profile />
        <ChatBot1 />
      </div>
    </div>
  );
};

export default DashBoard;
