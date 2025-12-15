
import "../styles/Home.css"

const Home = ({setPage}) => {
  return (
    <>
    
    <section class="hero">
    <div class="overlay"></div>

    <div class="hero-content">
        <span class="badge-1">The Ultimate Hotel Experience</span>

        <h1>
            Discover Your Perfect <br/>
            Gateway Destination
        </h1>

        <p>
            Unparalleled luxury and comfort await at the world's most exclusive
            hotels and resorts. Start your journey today.
        </p>

      
        <div class="search-box">
            <div class="field">
                <label>Destination</label>
                <input type="text" placeholder="Type here"/>
            </div>

            <div class="field">
                <label>Check in</label>
                <input type="date"/>
            </div>

            <div class="field">
                <label>Check out</label>
                <input type="date"/>
            </div>

            <div class="field">
                <label>Guests</label>
                <select name="" id="select">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                
            </div>

            <button class="search-btn" onClick={()=>setPage("Notavalable")}>Search</button>
        </div>
    </div>
</section>

    </>
  );
};

export default Home;
