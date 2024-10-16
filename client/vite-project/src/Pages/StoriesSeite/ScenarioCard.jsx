import PropTypes from "prop-types";

// Diese Komponente rendert eine Karte für ein Szenario
const ScenarioCard = ({ scenario, onLike, onSave, onShare, onPlay }) => {
  return (
    <div className="scenario-card">
      <div className="scenario-header">
        <div className="scenario-logo">Logo</div> {/* Logo als Platzhalter */}
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
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default ScenarioCard;
