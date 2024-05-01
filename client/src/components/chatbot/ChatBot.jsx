import React from "react";
import ChatBot from "react-chatbotify";

function ChatBot1() {
  const [form, setForm] = React.useState({});

  const flow = {
    start: {
      message: "Welcome to our subscription service! What's your name?",
      function: (params) => setForm({ ...form, name: params.userInput }),
      path: "ask_email",
    },
    ask_email: {
      message: (params) =>
        `Hi ${params.userInput}, could you please provide your email address?`,
      function: (params) => setForm({ ...form, email: params.userInput }),
      path: "ask_subscription_plan",
    },
    ask_subscription_plan: {
      message: "Which subscription plan are you interested in?",
      options: ["Basic", "Standard", "Premium"],
      function: (params) =>
        setForm({ ...form, subscriptionPlan: params.userInput }),
      path: "ask_payment_method",
    },
    ask_payment_method: {
      message: "Great choice! How would you like to pay for your subscription?",
      options: ["Credit Card", "PayPal", "Bank Transfer"],
      function: (params) =>
        setForm({ ...form, paymentMethod: params.userInput }),
      path: "end",
    },
    end: {
      message:
        "Thank you for your interest in our subscription service! We'll send you a confirmation email shortly.",
      render: (
        <div>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Subscription Plan: {form.subscriptionPlan}</p>
          <p>Payment Method: {form.paymentMethod}</p>
        </div>
      ),
      options: ["Start Over"],
      chatDisabled: true,
      path: "start",
    },
  };

  return <ChatBot flow={flow} />;
}

export default ChatBot1;
