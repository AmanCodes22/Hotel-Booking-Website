import "../styles/Navbar.css";
import { useEffect } from "react";


const Nav = ({ setPage,page }) => {

  useEffect(() => {
     if (page !== "home") return;
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 10) {
        nav.classList.add("normal");
        nav.classList.remove("transparent");
      } else {
        nav.classList.add("transparent");
        nav.classList.remove("normal");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <nav className={page === "home" ? "transparent" : "normal"}>
      <div className="leftlogo">
        <img src="/tourist.svg" alt="" />
        <h1>Quickstay</h1>
      </div>

      <div className="middlelogo">
        <ul>
          <li><button onClick={() => setPage("home")} className="nav-link">Home</button></li>
          <li><button onClick={() => setPage("hotels")} className="nav-link">Hotels</button></li>
          <li><button className="nav-link" onClick={() => setPage("Experience")}>Experiences</button></li>
          <li><button className="nav-link" onClick={() => setPage("About")}>About</button></li>
        </ul>
      </div>

      <div className="rightlogo">
        <div className="search">
          <i className="bi bi-search-heart"></i>
        </div>
        <div className="profile">
          <i className="bi bi-person"></i>
        </div>
        <div className="login">Login</div>
      </div>
    </nav>
  );
};

export default Nav;
