import { useState } from "react";
import PropTypes from "prop-types";
import "../../Styles/storiesSeite/ScenarioCard.css";
import Icon from "../../Components/Icons";

const ScenarioCard = ({ scenario, onLike, onSave, onShare, onPlay }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike();
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave();
  };

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
        <button onClick={handleLike}>
          <Icon type="heart" style={{ color: isLiked ? 'red' : 'inherit' }} /> ({scenario.likes})
        </button>
        <button onClick={handleSave}>
          <Icon type="save" style={{ color: isSaved ? 'blue' : 'inherit' }} />
        </button>
        <button onClick={onPlay}>
          <Icon type="play" />
        </button>                                        
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