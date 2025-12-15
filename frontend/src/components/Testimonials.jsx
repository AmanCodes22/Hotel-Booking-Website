import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <p className="subtitle">
          Discover why discerning travelers consistently choose QuickStay for their
          exclusive and luxurious accommodations around the world.
        </p>

        <div className="testimonial-grid">


          <div className="testimonial-card">
            <div className="user">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
              <h3>Emma Rodriguez</h3>
            </div>

            <div className="stars">
              ★★★★☆
            </div>

            <p className="review">
              "I've used many booking platforms before, but none compare to the
              personalized experience and attention to detail that QuickStay provides.
              Their curated selection of hotels is unmatched."
            </p>
          </div>


          <div className="testimonial-card">
            <div className="user">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
              <h3>Liam Johnson</h3>
            </div>

            <div className="stars">
              ★★★★☆
            </div>

            <p className="review">
              "I've used many booking platforms before, but none compare to the
              personalized experience and attention to detail that QuickStay provides.
              Their curated selection of hotels is unmatched."
            </p>
          </div>


          <div className="testimonial-card">
            <div className="user">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
              <h3>Sophia Lee</h3>
            </div>

            <div className="stars">
              ★★★★☆
            </div>

            <p className="review">
              "I've used many booking platforms before, but none compare to the
              personalized experience and attention to detail that QuickStay provides.
              Their curated selection of hotels is unmatched."
            </p>
          </div>

        </div>
      </section>

    </>
  )
}
export default Testimonials