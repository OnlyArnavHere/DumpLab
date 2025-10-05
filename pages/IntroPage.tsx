import React from "react";
import "./IntroPage.css";

const IntroPage: React.FC = () => {
  return (
    <div className="intro">
      <h1>Vishlyst</h1>
      <p>
        Your AI-powered shopping assistant that saves you from tab chaos and
        shopping hassles. Snap, Search, and Save – track prices, compare deals,
        and complete purchases in one place.
      </p>
      <div className="btns">
        <button onClick={() => (window.location.href = "/login")}>Login</button>
        <button onClick={() => (window.location.href = "/signup")}>
          Sign Up
        </button>
      </div>
      <footer>© 2025 Vishlyst. All rights reserved.</footer>
    </div>
  );
};

export default IntroPage;
