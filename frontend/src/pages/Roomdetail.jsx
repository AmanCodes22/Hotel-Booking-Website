import "../styles/Roomdetail.css";
import { useState } from "react";

const roomsData = [
  {
    id: 1,
    name: "Urbanza Suites",
    city: "New York",
    price: 399,
    type: "Luxury",
    bed: "Double",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    name: "Urbanza Suites",
    city: "New York",
    price: 299,
    type: "Standard",
    bed: "Single",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 3,
    name: "Urbanza Suites",
    city: "New York",
    price: 499,
    type: "Luxury",
    bed: "Double",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
  },
  {
    id: 4,
    name: "Urbanza Suites",
    city: "New York",
    price: 199,
    type: "Budget",
    bed: "Single",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
  },
];

const Roomdetail = ({ setPage }) => {
  const [bedFilter, setBedFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sort, setSort] = useState("");

  let filteredRooms = roomsData.filter((room) => {
    return (
      (bedFilter ? room.bed === bedFilter : true) &&
      (typeFilter ? room.type === typeFilter : true)
    );
  });

  if (sort === "low") {
    filteredRooms.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filteredRooms.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="rooms-page">

      {/* LEFT SIDE */}
      <div className="rooms-content">
        <h1>Hotel Rooms</h1>
        <p className="page-subtitle">
          Choose from our curated selection of premium stays.
        </p>

        {filteredRooms.map((room) => (
          <div
            className="room-card"
            key={room.id}
            onClick={() => setPage("moreinfo")}
          >
            <img src={room.image} alt={room.name} />

            <div className="room-info">
              <span className="city">{room.city}</span>
              <h2>{room.name}</h2>

              <div className="rating">
                ★★★★☆ <span>200+ reviews</span>
              </div>

              <p className="location">
                <i className="bi bi-geo-alt"></i> Main Road 123 Street
              </p>

              <div className="features">
                <span><i className="bi bi-bell"></i> Room Service</span>
                <span><i className="bi bi-water"></i> Pool</span>
                <span><i className="bi bi-wifi"></i> Free Wi-Fi</span>
              </div>

              <div className="price">
                ${room.price} <span>/night</span>
              </div>
            </div>
          </div>
        ))}

        {filteredRooms.length === 0 && (
          <p style={{ marginTop: "2rem" }}>
            No rooms match your filters.
          </p>
        )}
      </div>

      {/* RIGHT FILTER PANEL */}
      <aside className="filters">
        <div className="filters-header">
          <h3>Filters</h3>
          <button
            onClick={() => {
              setBedFilter("");
              setTypeFilter("");
              setSort("");
            }}
          >
            Clear
          </button>
        </div>

        {/* BED TYPE */}
        <div className="filter-section">
          <h4>Bed Type</h4>
          <label>
            <input
              type="radio"
              name="bed"
              onChange={() => setBedFilter("Single")}
            />
            Single Bed
          </label>
          <label>
            <input
              type="radio"
              name="bed"
              onChange={() => setBedFilter("Double")}
            />
            Double Bed
          </label>
        </div>

        {/* ROOM TYPE */}
        <div className="filter-section">
          <h4>Room Type</h4>
          <label>
            <input
              type="radio"
              name="type"
              onChange={() => setTypeFilter("Luxury")}
            />
            Luxury
          </label>
          <label>
            <input
              type="radio"
              name="type"
              onChange={() => setTypeFilter("Standard")}
            />
            Standard
          </label>
          <label>
            <input
              type="radio"
              name="type"
              onChange={() => setTypeFilter("Budget")}
            />
            Budget
          </label>
        </div>

        {/* SORT */}
        <div className="filter-section">
          <h4>Sort By</h4>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => setSort("low")}
            />
            Price: Low to High
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => setSort("high")}
            />
            Price: High to Low
          </label>
        </div>
      </aside>

    </section>
  );
};

export default Roomdetail;
