import React, { useEffect } from "react";
import "./ThankYou.css";

function Thank() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead",
    });
  }, []);

  return (
    <main className="thank-page">
      <a href="/" className="thank-logo">
        WIN<span>Z</span>
      </a>

      <section className="thank-content">
        <div className="thank-icon" aria-hidden="true">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
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

        <p className="thank-note">
          Our team will contact you shortly with the next steps.
        </p>

        <a href="/landing" className="thank-button">
          <span aria-hidden="true">←</span>
          BACK TO LANDING
        </a>

        <p className="thank-footer">
          WINZ — YOUR NEXT MOVE STARTS HERE
        </p>
      </section>
    </main>
  );
}

export default Thank;