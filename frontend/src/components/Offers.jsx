import '../styles/Offers.css'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
const Offers=()=>{
    return(
        <section class="offers">
  <div class="offers-header">
    <div>
      <h2>Exclusive Offers</h2>
      <p>
        Take advantage of our limited-time offers and special packages to
        enhance your stay and create unforgettable memories.
      </p>
    </div>

    <a href="#" class="view-all">View All Offers →</a>
  </div>

  <div class="offers-grid">

    
    <div class="offer-card">
      <span class="discount">25% OFF</span>
      <img src={p1} />

      <div class="offer-content">
        <h3>Summer Escape Package</h3>
        <p class="desc">
          Enjoy a complimentary night and daily breakfast
        </p>
        <span class="expiry">Expires Aug 31</span>

        <a href="#" class="offer-link">View Offers →</a>
      </div>
    </div>

   
    <div class="offer-card">
      <span class="discount">20% OFF</span>
      <img src={p2} />

      <div class="offer-content">
        <h3>Romantic Getaway</h3>
        <p class="desc">
          Special couples package including spa treatment
        </p>
        <span class="expiry">Expires Sep 20</span>

        <a href="#" class="offer-link">View Offers →</a>
      </div>
    </div>

  
    <div class="offer-card">
      <span class="discount">30% OFF</span>
      <img src={p3} />

      <div class="offer-content">
        <h3>Luxury Retreat</h3>
        <p class="desc">
          Book 60 days in advance and save on your stay at any of our luxury
          properties worldwide.
        </p>
        <span class="expiry">Expires Sep 25</span>

        <a href="#" class="offer-link">View Offers →</a>
      </div>
    </div>

  </div>
</section>
    )
}
export default Offers