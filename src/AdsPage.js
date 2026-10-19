import React from "react";
import "./AdsPage.css";

const AdsPage = () => {
  const googleUrl =
     "/landing?utm_source=google&utm_medium=cpc&utm_campaign=test_campaign&gclid=TEST_GCLID_GOOGLE_001";

  const facebookUrl =
    "/landing?utm_source=facebook&utm_medium=paid_social&utm_campaign=test_campaign&fbclid=TEST_FBCLID_001";

  return (
    <main className="ads-page">
      <header className="ads-header">
        <span className="ads-logo">AD LAB</span>
        <span>Campaign Simulator</span>
      </header>

      <section className="ads-intro">
        <p className="ads-eyebrow">TRACKING DEMO</p>
        <h1>Choose an ad to visit the landing page</h1>
        <p>
          Simulate clicks from different advertising
          platforms and track the entire user journey.
        </p>
      </section>

      <section className="ads-grid">
        <article className="ad-card google-ad">
          <div className="ad-platform">
            <span className="google-mark">G</span>
            Google Ads
          </div>

          <div className="google-visual">
            <span>DISCOVER SOMETHING NEW</span>
            <h2>Your next favorite experience</h2>
            <p>Explore the offer and get started today.</p>
          </div>

          <div className="ad-copy">
            <span className="ad-sponsored">Sponsored</span>
            <h3>Discover Our Exclusive Offer</h3>
            <p>
              Visit our landing page to learn more
              about the offer.
            </p>
            <a href={googleUrl} className="ad-button google-button">
              Visit landing page →
            </a>
          </div>
        </article>

        <article className="ad-card facebook-ad">
          <div className="ad-platform">
            <span className="facebook-mark">f</span>
            Facebook Ads
          </div>

          <div className="facebook-visual">
            <span>YOUR NEXT STEP STARTS HERE</span>
            <h2>Ready to try something new?</h2>
            <p>Find out what awaits you.</p>
          </div>

          <div className="ad-copy">
            <span className="ad-sponsored">Sponsored</span>
            <h3>Don't Miss This Opportunity</h3>
            <p>
              Click below to discover the offer
              on our landing page.
            </p>
            <a
              href={facebookUrl}
              className="ad-button facebook-button"
            >
              Learn more →
            </a>
          </div>
        </article>
      </section>

      <footer className="ads-footer">
        Demo environment · Test click IDs only
      </footer>
    </main>
  );
};

export default AdsPage;
