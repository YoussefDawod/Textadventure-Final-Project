import PropTypes from "prop-types";
import "../../Styles/storiesSeite/ScenarioCard.css";

const ScenarioCard = ({ scenario, onLike, onSave, onShare, onPlay }) => {
  return (
    <div className="scenario-card" style={{ backgroundImage: `url(${scenario.image || '/Scenarios-Images/placeholder.jpg'})` }}>
      <div className="scenario-header">
        <div className="scenario-logo">
          <img src="/Logo/TIA-Logo-1.png" alt="Logo" />
        </div>
        <button className="scenario-share" onClick={onShare}>Teilen</button>
      </div>
      <div className="scenario-content">
        <h2>{scenario.title}</h2>
        <p>{scenario.description}</p>
      </div>
      <div className="scenario-actions">
        <button onClick={onLike}>Gefällt mir ({scenario.likes})</button>
        <button onClick={onSave}>Speichern</button>
        <button onClick={onPlay}>Spielen</button>
      </div>
    </div>
  );
};

ScenarioCard.propTypes = {
  scenario: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default ScenarioCard;