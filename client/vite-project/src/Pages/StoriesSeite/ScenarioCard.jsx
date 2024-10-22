import PropTypes from "prop-types";
import "../../Styles/storiesSeite/ScenarioCard.css";
import Icon from "../../Components/Icons";

const ScenarioCard = ({ scenario, onLike, onSave, onShare, onPlay }) => {
  return (
    <div className="scenario-card" style={{ backgroundImage: `url(${scenario.image || '/Scenarios-Images/placeholder.jpg'})` }}>
      <div className="scenario-header">
        <div className="scenario-logo">
        <img src="/Logo/tia-logo.svg" alt="Logo"/>
        </div>
        <button className="scenario-share" onClick={onShare}>Teilen</button>
      </div>
      <div className="scenario-content">
        <h2>{scenario.title}</h2>
        <p>{scenario.description}</p>
      </div>
      <div className="scenario-actions">
        <button onClick={onLike}><Icon type="heart" /> ({scenario.likes})</button>
        <button onClick={onSave}><Icon type="save" /></button>
        <button onClick={onPlay}><Icon type="play" /></button>
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