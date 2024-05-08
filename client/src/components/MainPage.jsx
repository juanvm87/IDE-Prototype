import React from "react";
import "./MainPage.css";
import asset from "../assets/Asset 2.png";
export const MainPage = () => {
  //when the button is clicked, the function hanlerLogin is is goingg to the page /login

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <img src={asset} alt="logo" />
        </a>
      </header>
      <main>
        <div className="intro">
          <h1>Manage your subscriptions</h1>
          <p>Keep your responsibilities under control with Semaphore</p>
          <button onClick={handleLogin}>Log in</button>
        </div>
        <div className="about-me">
          <div className="about-me-text">
            <h2>About Semaphore</h2>
            <p>
              Unlock a world of premium content and exclusive features by
              subscribing today! With our subscription service, you'll gain
              unlimited access to our vast library of content, enjoy early
              access to new features and updates, and indulge in an ad-free
              experience. Tailored just for you, benefit from personalized
              recommendations and round-the-clock customer support. But
              remember, we encourage informed decisions, so take your time to
              review the benefits, terms, and conditions. Rest assured, your
              data security is our priority, and we offer transparent insights
              into our security measures. Stay ahead with our notifications on
              special offers and relevant subscriptions, while our hassle-free
              sign-up process ensures you can start enjoying premium content in
              minutes. Simplify your life with our centralized dashboard for
              managing all your subscriptions, and gain financial peace of mind
              with our transparent pricing and clear cancellation process.
              Unsure about the value? Let our personalized recommendations and
              value calculators guide you. Join our community of satisfied users
              today and experience the benefits of our subscription app
              firsthand!
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="copy">&copy; 2024 Developer</div>
        <div className="bottom-links">
          <div className="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <span>Social Links</span>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
