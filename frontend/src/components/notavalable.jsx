const RoomNotAvailable = ({ message }) => {

    const styles = {
  wrapper: {
    textAlign: "center",
    padding: "4rem 2rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    marginTop: "2rem",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
    color: "#333",
  },
  text: {
    color: "#666",
    marginBottom: "1.5rem",
  },
  btn: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Room Not Available</h2>
      <p style={styles.text}>
        {message || "Sorry, this room is currently not available."}
      </p>
      <button style={styles.btn} onClick={() => window.scrollTo(0, 0)}>
        Go Back
      </button>
    </div>
  );
};

export default RoomNotAvailable;
