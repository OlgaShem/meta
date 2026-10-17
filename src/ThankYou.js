import React from "react";
import "./ThankYou.css";

function Thank() {
  return (
    <main className="thank-page">
      <header className="thank-header">
        <a href="/" className="thank-logo">
          WIN<span>Z</span>
        </a>
      </header>

      <section className="thank-content">
        <div className="thank-card">
          <div className="thank-icon">
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <p className="thank-label">REQUEST RECEIVED</p>

          <h1>
            YOU'RE <span>IN!</span>
          </h1>

          <p className="thank-description">
            Thanks for joining WINZ! Your request has been
            successfully submitted.
          </p>

          <div className="thank-divider" />

          <p className="thank-note">
            Our team will contact you shortly with the next steps.
          </p>

          <a href="/" className="thank-button">
            BACK TO HOME
            <span aria-hidden="true">→</span>
          </a>

          <p className="thank-footer">
            WINZ — YOUR NEXT MOVE STARTS HERE
          </p>
        </div>
      </section>
    </main>
  );
}

export default Thank;