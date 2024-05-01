import React from "react";
import ContentHeader from "./ContentHeader";
import "./Content.css";
import Card from "./Card";
import SubscriptionList from "./SubscriptionList";
const Content = ({ subscriptions, setSubscriptions }) => {
  return (
    <div className="content">
      <ContentHeader />
      <Card subscriptions={subscriptions} />
      <SubscriptionList
        subscriptions={subscriptions}
        setSubscriptions={setSubscriptions}
      />
    </div>
  );
};

export default Content;
