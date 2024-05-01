import React from "react";
import image from "../../assets/Reviews.png";

export const Feedback = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <img src={image} alt="Feedback" />
    </div>
  );
};
