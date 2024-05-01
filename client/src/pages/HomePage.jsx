import { Link } from "react-router-dom";
import "./HomePage.css"; // Ensure this points to the correct CSS file location

function HomePage() {
  return (
    <div className="homePage">
      {/* Navigation bar added */}
      <nav className="navigation">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/add-subscription" className="nav-link">
          Add Subscription
        </Link>
        {/* <Link to="/subscription-list" className="nav-link">
          Subscription List
        </Link> */}
        <Link to="/terms-upload" className="nav-link">
          Terms Upload
        </Link>
        <Link to="/dashBoard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/bank" className="nav-link">
          Semapho-Bank
        </Link>
        <Link
          to="/"
          className="s"
          style={{
            color: "red",
            position: "absolute",
            bottom: "10px",
            right: "10px",
            margin: "10px",
            marginRight: "50px",
          }}
        >
          Logout
        </Link>
      </nav>

      <div className="backgroundImage">
        <div className="wave"> </div>
      </div>
      <h1 className="header">Upgrade now and get access to:</h1>
      <div className="button-container">
        <Link to="/personalised" className="nav-link">
          Personalised Recommendatiom
        </Link>
        <Link to="/terms-upload" className="nav-link">
          Subscribe safely with our virtual payment card
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
