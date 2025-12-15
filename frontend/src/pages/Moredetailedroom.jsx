import "../styles/Moredetailed.css";

const Moreinfo = () => {
  return (
    <section className="room-detail-page">

      {/* HERO */}
      <div className="room-hero">
        <div className="room-hero-text">
          <span className="room-tag">Premium Stay</span>
          <h1>Urbanza Luxury Suites</h1>
          <p>
            <i className="bi bi-geo-alt"></i>
            Main Road 123 Street, New York
          </p>

          <div className="room-rating">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
            <span>4.6 (320 Reviews)</span>
          </div>
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div className="room-gallery">
        <img
          className="gallery-main"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        />
        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
        <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457" />
        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32" />
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" />
        
      </div>

      {/* INFO SECTION */}
      <div className="room-info-wrapper">

        {/* LEFT */}
        <div className="room-info-left">
          <h2>About This Room</h2>
          <p>
            Experience luxury and comfort in our Urbanza Luxury Suites.
            Designed for modern travelers, this room offers premium
            amenities, elegant interiors, and a relaxing atmosphere.
          </p>

          <div className="room-features">
            <span><i className="bi bi-wifi"></i> Free Wi-Fi</span>
            <span><i className="bi bi-cup-hot"></i> Breakfast Included</span>
            <span><i className="bi bi-water"></i> Swimming Pool</span>
            <span><i className="bi bi-snow"></i> Air Conditioning</span>
            <span><i className="bi bi-tv"></i> Smart TV</span>
            <span><i className="bi bi-shield-check"></i> Sanitized Room</span>
          </div>

          <h3>Why Guests Love This Stay</h3>
          <ul className="room-highlights">
            <li><i className="bi bi-check-circle"></i> Excellent city location</li>
            <li><i className="bi bi-check-circle"></i> Friendly staff & quick check-in</li>
            <li><i className="bi bi-check-circle"></i> Premium bedding & interiors</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="room-info-right">
          <div className="price-box">
            <h3>$399 <span>/ night</span></h3>
            <p>Includes all taxes & charges</p>

            <div className="booking-inputs">
              <div>
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div>
                <label>Check-Out</label>
                <input type="date" />
              </div>
              <div>
                <label>Guests</label>
                <input type="number" defaultValue={2} />
              </div>
            </div>

            <button className="book-room-btn">
              Reserve This Room
            </button>
          </div>
        </div>

      </div>

      {/* TRUST SECTION */}
      <div className="room-trust">
        <div>
          <i className="bi bi-shield-lock"></i>
          <h4>Secure Booking</h4>
          <p>Your information is protected with top security standards.</p>
        </div>
        <div>
          <i className="bi bi-arrow-repeat"></i>
          <h4>Free Cancellation</h4>
          <p>Cancel up to 24 hours before check-in.</p>
        </div>
        <div>
          <i className="bi bi-headset"></i>
          <h4>24/7 Support</h4>
          <p>Our team is always available to assist you.</p>
        </div>
      </div>

    </section>
  );
};

export default Moreinfo;
