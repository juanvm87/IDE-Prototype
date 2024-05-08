import React from "react";
import ProfileHeader from "./ProfileHeader";
import userImage from "../../assets/user-1.jpg";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt=""></img>
          <h3 className="username">Juan Martin</h3>
          <span className="profession"> Software Engineer</span>
          <span className="profession"> ElMejor@semaphore.com</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
