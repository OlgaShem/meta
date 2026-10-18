
import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Thank from "./ThankYou";

const benefits = [
  {
    number: "01",
    icon: "✦",
    title: "A World of Games",
    description:
      "Explore an exciting collection of slots, table games, and live casino experiences.",
  },
  {
    number: "02",
    icon: "♛",
    title: "Exclusive Bonuses",
    description:
      "Discover special offers designed to make your gaming experience even more exciting.",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Quick Registration",
    description:
      "Get started in just a few simple steps with a smooth, user-friendly experience.",
  },
  {
    number: "04",
    icon: "◈",
    title: "Support 24/7",
    description:
      "Find help whenever you need it with our dedicated support team.",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

      // Meta Pixel: track lead
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }

    navigate("/thank-you");
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#home" aria-label="WINZ home">
          WIN<span>Z</span>
          <span className="logo-dot">.</span>
        </a>

        <nav className="navigation">
          <a href="#benefits">Benefits</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#reviews">Reviews</a>
        </nav>

        <button
          className="button button-small"
          onClick={scrollToForm}
          type="button"
        >
          Claim Bonus <span>↗</span>
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-purple" />
          <div className="hero-glow hero-glow-blue" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              WELCOME BONUS FOR NEW PLAYERS
            </div>

            <h1>
              YOUR NEXT
              <br />
              BIG WIN
              <br />
              <span>STARTS HERE.</span>
            </h1>

            <p className="hero-description">
              Discover exciting games, explore exclusive offers, and enjoy
              an immersive gaming experience.
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <span className="feature-icon">✦</span>
                <span>Exclusive Offers</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">⚡</span>
                <span>Quick Registration</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">◈</span>
                <span>Live Casino</span>
              </div>
            </div>

            <button
              className="button button-primary hero-button"
              onClick={scrollToForm}
              type="button"
            >
              CLAIM YOUR BONUS <span>→</span>
            </button>

            <p className="hero-note">
              18+ only. Terms and conditions apply.
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="visual-card visual-card-back">
              <span className="card-sparkle">✦</span>
            </div>

            <div className="visual-card visual-card-main">
              <div className="visual-card-top">
                <span>WINZ EXCLUSIVE</span>
                <span className="live-indicator">LIVE</span>
              </div>

              <div className="visual-symbol">W</div>

              <div className="visual-card-bottom">
                <span>YOUR GAME</span>
                <span>YOUR MOMENT</span>
              </div>
            </div>

            <div className="floating-chip chip-purple">✦</div>
            <div className="floating-chip chip-blue">W</div>
            <div className="floating-chip chip-pink">♛</div>

            <div className="visual-caption">
              <span className="caption-dot" />
              YOUR NEXT CHAPTER STARTS NOW
            </div>
          </div>

          <a className="scroll-indicator" href="#benefits">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="benefits section" id="benefits">
          <div className="section-heading">
            <span className="section-kicker">THE WINZ EXPERIENCE</span>
            <h2>
              MORE THAN JUST
              <br />
              <span>A GAME.</span>
            </h2>
            <p>
              Everything you need for an exciting, seamless, and
              entertaining experience.
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.number}>
                <div className="benefit-card-top">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span className="benefit-number">{benefit.number}</span>
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>

                <div className="card-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-it-works section" id="how-it-works">
          <div className="how-visual" aria-hidden="true">
            <div className="how-orb">
              <div className="how-orb-inner">
                <span>W</span>
              </div>
            </div>
            <div className="how-decoration decoration-one">✦</div>
            <div className="how-decoration decoration-two">✧</div>
            <div className="how-decoration decoration-three">✦</div>
          </div>

          <div className="how-content">
            <span className="section-kicker">YOUR JOURNEY STARTS HERE</span>
            <h2>
              THREE STEPS.
              <br />
              <span>ONE NEW EXPERIENCE.</span>
            </h2>

            <div className="steps">
              <div className="step">
                <span className="step-number">01</span>
                <div>
                  <h3>Enter Your Details</h3>
                  <p>Fill in the form to get started.</p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">02</span>
                <div>
                  <h3>Explore the Offer</h3>
                  <p>Review the available offer and its terms.</p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">03</span>
                <div>
                  <h3>Discover WINZ</h3>
                  <p>Explore the platform and available games.</p>
                </div>
              </div>
            </div>

            <button
              className="button button-outline"
              onClick={scrollToForm}
              type="button"
            >
              GET STARTED <span>→</span>
            </button>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="reviews-heading">
            <span className="section-kicker">BUILT AROUND YOUR EXPERIENCE</span>
            <h2>
              YOUR NEXT MOVE.
              <br />
              <span>YOUR CHOICE.</span>
            </h2>
          </div>

          <div className="review-banner">
            <div className="review-decoration" aria-hidden="true">
              ✦
            </div>
            <div>
              <span className="review-label">READY WHEN YOU ARE</span>
              <h3>Make your next move count.</h3>
              <p>
                Explore the WINZ experience and discover what awaits.
              </p>
            </div>
            <button
              className="button button-primary"
              onClick={scrollToForm}
              type="button"
            >
              EXPLORE WINZ <span>↗</span>
            </button>
          </div>
        </section>

        <section className="lead-section" id="lead-form">
          <div className="lead-glow" />

          <div className="lead-copy">
            <span className="section-kicker">YOUR NEXT CHAPTER</span>
            <h2>
              READY TO
              <br />
              <span>GET STARTED?</span>
            </h2>
            <p>
              Enter your details to discover our welcome offer and learn
              more about the WINZ experience.
            </p>

            <div className="lead-points">
              <div>
                <span>✦</span> Simple registration
              </div>
              <div>
                <span>✦</span> Exclusive offers
              </div>
              <div>
                <span>✦</span> Support when you need it
              </div>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="success-state" role="status">
                <div className="success-icon">✓</div>
                <h3>YOU'RE ON THE LIST!</h3>
                <p>
                  Thanks for your interest. Your details have been
                  submitted in this demo.
                </p>
                <button
                  className="button button-outline"
                  onClick={() => setSubmitted(false)}
                  type="button"
                >
                  BACK TO FORM
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span className="form-kicker">LET'S GET STARTED</span>
                  <h3>Claim Your Bonus</h3>
                  <p>Fill in your details below.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <button
                    className="button button-primary submit-button"
                    type="submit"
                  >
                    GET MY BONUS <span>→</span>
                  </button>

                  <p className="form-disclaimer">
                    18+ only. Offers are subject to eligibility and
                    applicable terms.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#home">
          WIN<span>Z</span>
          <span className="logo-dot">.</span>
        </a>

        <p>Entertainment with responsibility.</p>

        <div className="footer-links">
          <a href="#lead-form">Privacy Policy</a>
          <a href="#lead-form">Terms &amp; Conditions</a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WINZ. All rights reserved.</span>
          <span className="age-label">18+</span>
          <span>Play Responsibly</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<Thank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
