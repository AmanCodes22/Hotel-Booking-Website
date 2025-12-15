import '../styles/Featured.css'
import card4 from "../assets/card4.png";

const Featured = ({setPage}) => {
    return(
         <section class="featured">
  <h2>Featured Destination</h2>
  <p class="subtitle">
    Discover our handpicked selection of exceptional properties around the world,
    offering unparalleled luxury and unforgettable experiences.
  </p>

  <div class="card-grid">

   
    <div class="card"  onClick={() => setPage("moreinfo")}>
      <div class="img-box">
        <span class="badge">Best Seller</span>
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="" />
      </div>

      <div class="card-body">
        <div class="title-row">
          <h3>Urbanza Suites</h3>
          <span class="rating">⭐ 4.5</span>
        </div>

        <p class="location">📍 Main Road 123 Street, 23 Colony</p>

        <div class="bottom-row">
          <p class="price">$399 <span>/night</span></p>
          <button>Book Now</button>
        </div>
      </div>
    </div>

  
    <div class="card"  onClick={() => setPage("moreinfo")}>
      <div class="img-box">
        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="" />
      </div>
      <div class="card-body">
        <div class="title-row">
          <h3>Urbanza Suites</h3>
          <span class="rating">⭐ 4.5</span>
        </div>
        <p class="location">📍 Main Road 123 Street, 23 Colony</p>
        <div class="bottom-row">
          <p class="price">$299 <span>/night</span></p>
          <button>Book Now</button>
        </div>
      </div>
    </div>

    <div class="card"  onClick={() => setPage("moreinfo")}>
      <div class="img-box">
        <span class="badge">Best Seller</span>
        <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457" alt="" />
      </div>
      <div class="card-body">
        <div class="title-row">
          <h3>Urbanza Suites</h3>
          <span class="rating">⭐ 4.5</span>
        </div>
        <p class="location">📍 Main Road 123 Street, 23 Colony</p>
        <div class="bottom-row">
          <p class="price">$249 <span>/night</span></p>
          <button>Book Now</button>
        </div>
      </div>
    </div>

    <div class="card"  onClick={() => setPage("moreinfo")}>
      <div class="img-box">
        <img src={card4} alt="Hotel Room" />

      </div>
      <div class="card-body">
        <div class="title-row">
          <h3>Urbanza Suites</h3>
          <span class="rating">⭐ 4.5</span>
        </div>
        <p class="location">📍 Main Road 123 Street, 23 Colony</p>
        <div class="bottom-row">
          <p class="price">$199 <span>/night</span></p>
          <button>Book Now</button>
        </div>
      </div>
    </div>

  </div>

  <button class="view-all" onClick={() => setPage("hotels")}>View All Destinations</button>
</section>

    )
}
export default Featured