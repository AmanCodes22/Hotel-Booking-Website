
      import "../styles/About.css";

const About = () => {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Quickstay</h1>
        <p>
          Quickstay is a modern hotel booking platform designed to help travelers
          find reliable, comfortable, and premium stays with ease.
        </p>
      </div>

      {/* INTRO */}
      <div className="about-container about-intro">
        <div>
          <h2>Who We Are</h2>
          <p>
            At Quickstay, we believe travel should be simple, transparent, and
            stress-free. Our platform connects travelers with carefully verified
            hotels and stays across the globe.
          </p>
          <p>
            From affordable rooms to luxury resorts, every listing on Quickstay
            meets strict quality, safety, and comfort standards.
          </p>
        </div>

        <div className="about-highlight">
          <h3>10,000+</h3>
          <span>Trusted Guests Worldwide</span>
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className="about-container about-cards">
        <div className="about-card">
          <i className="bi bi-bullseye"></i>
          <h3>Our Mission</h3>
          <p>
            To simplify hotel booking by offering verified stays, honest pricing,
            and a seamless user experience.
          </p>
        </div>

        <div className="about-card">
          <i className="bi bi-globe2"></i>
          <h3>Our Vision</h3>
          <p>
            To become the most trusted global platform for hotel discovery and
            reservations.
          </p>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="about-values">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <i className="bi bi-shield-check"></i>
            <h4>Trust & Safety</h4>
            <p>Every property is verified for quality and safety.</p>
          </div>

          <div className="value-card">
            <i className="bi bi-gem"></i>
            <h4>Premium Quality</h4>
            <p>Only hotels that meet our standards are listed.</p>
          </div>

          <div className="value-card">
            <i className="bi bi-lightning-charge"></i>
            <h4>Fast & Simple</h4>
            <p>Book your stay in just a few clicks.</p>
          </div>

          <div className="value-card">
            <i className="bi bi-heart"></i>
            <h4>Customer First</h4>
            <p>Your comfort and satisfaction matter most.</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div className="stat-box">
          <h3>500+</h3>
          <p>Cities Covered</p>
        </div>
        <div className="stat-box">
          <h3>8,000+</h3>
          <p>Hotels Listed</p>
        </div>
        <div className="stat-box">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
        <div className="stat-box">
          <h3>4.8</h3>
          <p>Average Rating</p>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Start Your Journey With Quickstay</h2>
        <p>
          Discover verified hotels, transparent pricing, and seamless booking
          experiences worldwide.
        </p>
        <button>Explore Hotels</button>
      </div>

    </section>
  );
};

export default About;
