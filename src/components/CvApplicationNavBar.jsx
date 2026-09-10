

const CvApplicationNavBar = ({ index, onSend }) => {
  const handleChangeForm = (target) => {
    if (target.id === "btn-general") {
      onSend(0);
    } else if (target.id === "btn-education") {
      onSend(1);
    } else if (target.id === "btn-experience") {
      onSend(2);
    }
  };

  return (
    <section className="cv-app-navbar">
      <button
        id="btn-general"
        className={`cv-nav-btn ${index === 0 ? "active-btn" : ""}`}
        onClick={(e) => handleChangeForm(e.target)}
      >
        General
      </button>
      <button
        id="btn-education"
        className={`cv-nav-btn ${index === 1 ? "active-btn" : ""}`}
        onClick={(e) => handleChangeForm(e.target)}
      >
        Education
      </button>
      <button
        id="btn-experience"
        className={`cv-nav-btn ${index === 2 ? "active-btn" : ""}`}
        onClick={(e) => handleChangeForm(e.target)}
      >
        Experience
      </button>
    </section>
  );
};

export default CvApplicationNavBar;