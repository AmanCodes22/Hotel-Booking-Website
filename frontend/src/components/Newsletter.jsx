
import '../styles/Newselter.css'
const Newselter=()=>{
    return(
        <section class="newsletter-section">
  <div class="newsletter-box">
    <h2>Stay Inspired</h2>

    <p class="subtitle">
      Join our newsletter and be the first to discover new destinations,
      exclusive offers, and travel inspiration.
    </p>

    <form class="newsletter-form">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe →</button>
    </form>

    <p class="privacy-text">
      By subscribing, you agree to our <span>Privacy Policy</span> and consent
      to receive updates.
    </p>
  </div>
</section>
    )
}
export default Newselter