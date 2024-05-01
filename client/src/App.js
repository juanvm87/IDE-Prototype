import AddSubcriptionForm from "./components/AddSubcriptionForm";
import Bank from "./components/bank/Bank";
import ChatWithSomeOne from "./components/chatbot/ChatWithSomeOne";
import DashBoard from "./components/DashBoard";
import { Feedback } from "./components/feedback/Feedback";
import { MainPage } from "./components/MainPage";
import Personalised from "./components/Personalised";
import AccountBox from "./components/Signup";
import SubscriptionList from "./components/SubscriptionList";
import TermsUpload from "./components/TermsUpload";
import HomePage from "./pages/HomePage";
import { loadState, saveState } from "./Utilities/storage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [subscriptions, setSubscriptions] = useState(
    loadState("subscriptionData") || []
  );

  useEffect(() => {
    saveState("subscriptionData", subscriptions);
  }, [subscriptions]);

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/subscription-list"
          element={<SubscriptionList subscriptions={subscriptions} />}
        />
        <Route
          path="/add-subscription"
          element={
            <AddSubcriptionForm
              subscriptions={subscriptions}
              setSubscriptions={setSubscriptions}
            />
          }
        />
        <Route path="/terms-upload" element={<TermsUpload />} />
        <Route path="/login" element={<AccountBox />} />
        <Route path="/" element={<MainPage />} />
        <Route
          path="/dashBoard"
          element={
            <DashBoard
              subscriptions={subscriptions}
              setSubscriptions={setSubscriptions}
            />
          }
        />

        <Route path="/chat" element={<ChatWithSomeOne />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/bank" element={<Bank />} />
        <Route
          path="/personalised"
          element={
            <Personalised
              subscriptions={subscriptions}
              setSubscriptions={setSubscriptions}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
