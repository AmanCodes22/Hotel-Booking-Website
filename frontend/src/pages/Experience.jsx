import "../styles/Experience.css";
import { useState } from "react";

const experiencesData = [
  {
    id: 1,
    title: "Luxury Spa Retreat",
    location: "Bali, Indonesia",
    price: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    category: "Wellness",
  },
  {
    id: 2,
    title: "Mountain Adventure Trek",
    location: "Manali, India",
    price: 90,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "Adventure",
  },
  {
    id: 3,
    title: "City Night Food Tour",
    location: "New York, USA",
    price: 75,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    category: "Food",
  },
  {
    id: 4,
    title: "Desert Safari Experience",
    location: "Dubai, UAE",
    price: 150,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    category: "Adventure",
  },
];

const Experience = () => {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? experiencesData
      : experiencesData.filter((item) => item.category === filter);

  return (
    <section className="experience-page">

      {/* HERO */}
      <div className="experience-hero">
        <h1>Curated Travel Experiences</h1>
        <p>
          Discover premium activities handpicked by Quickstay to elevate
          your travel journey.
        </p>
      </div>

      {/* FILTERS */}
      <div className="experience-filters">
        {["All", "Adventure", "Wellness", "Food"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* EXPERIENCE CARDS */}
      <div className="experience-grid">
        {filteredData.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <div className="img-wrapper">
              <img src={exp.image} alt={exp.title} />
              <span className="tag">{exp.category}</span>
            </div>

            <div className="card-content">
              <h3>{exp.title}</h3>

              <p className="location">
                <i className="bi bi-geo-alt"></i> {exp.location}
              </p>

              <div className="info-row">
                <span>
                  <i className="bi bi-star-fill"></i> {exp.rating}
                </span>
                <span className="price">
                  ${exp.price} / person
                </span>
              </div>

              <button className="book-btn">
                Book Experience
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE */}
      <div className="why-us">
        <h2>Why Choose Quickstay Experiences?</h2>

        <div className="why-grid">
          <div className="why-card">
            <i className="bi bi-patch-check"></i>
            <h4>Verified Partners</h4>
            <p>Only trusted and verified local experience providers.</p>
          </div>

          <div className="why-card">
            <i className="bi bi-gem"></i>
            <h4>Premium Quality</h4>
            <p>High-quality experiences curated by experts.</p>
          </div>

          <div className="why-card">
            <i className="bi bi-calendar-check"></i>
            <h4>Flexible Booking</h4>
            <p>Easy rescheduling and hassle-free cancellations.</p>
          </div>

          <div className="why-card">
            <i className="bi bi-star"></i>
            <h4>Top Rated</h4>
            <p>Loved by thousands of travelers worldwide.</p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="experience-steps">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <i className="bi bi-search"></i>
            <h4>Discover</h4>
            <p>Browse curated experiences across destinations.</p>
          </div>
          <div className="step-card">
            <i className="bi bi-bookmark-check"></i>
            <h4>Book</h4>
            <p>Reserve instantly with transparent pricing.</p>
          </div>
          <div className="step-card">
            <i className="bi bi-emoji-smile"></i>
            <h4>Enjoy</h4>
            <p>Experience unforgettable moments on your trip.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="experience-cta">
        <h2>Start Your Next Adventure</h2>
        <p>
          Explore unforgettable experiences with Quickstay today.
        </p>
        <button>Explore All Experiences</button>
      </div>

    </section>
  );
};

export default Experience;
