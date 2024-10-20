import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Profile.css';
import useScenarioContext from '../Scenarios/useScenarioContext';
import scenarios from '../Scenarios/scenarios';
import { useNavigate } from 'react-router-dom';

const Profile = ({ setOriginPage }) => {
  const { likedScenarios, savedScenarios, removeLike, removeFavorite } = useScenarioContext();
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const getScenarioDetails = (id) =>
    scenarios.find((scenario) => scenario.id === id) || {};

  const playScenario = (scenarioId) => { // Changed here
    setOriginPage("profile");
    navigate(`/game/${scenarioId}`);
  };

  const handleShare = (scenarioId) => {
    const url = `${window.location.origin}/game/${scenarioId}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link zum Szenario wurde kopiert!');
    });
  };

  return (
    <main className="profile-background">
      <h2>Dein Profil</h2>

      <button onClick={() => toggleSection('likes')} className="toggle-button">
        Likes
      </button>
      <div className='scenario-container'>
      {activeSection === 'likes' && (
        likedScenarios.length > 0 ? (
          likedScenarios.map((id, index) => {
            const { title, description, image } = getScenarioDetails(id);
            return (
              <div key={index} className="scenario">
                <img src={image} alt={title} className="scenario-image" />
                <div className="scenario-details">
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <div className="button-group">
                    <button onClick={() => playScenario(id)}>Spielen</button>
                    <button onClick={() => handleShare(id)}>Teilen</button>
                    <button onClick={() => removeLike(id)}>Löschen</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Keine gelikten Szenarien.</p>
        )
      )}
      </div>

      <button onClick={() => toggleSection('favorites')} className="toggle-button">
        Favoriten
      </button>
      <div className='scenario-container'>
      {activeSection === 'favorites' && (
        savedScenarios.length > 0 ? (
          savedScenarios.map((id, index) => {
            const { title, description, image } = getScenarioDetails(id);
            return (
              <div key={index} className="scenario">
                <img src={image} alt={title} className="scenario-image" />
                <div className="scenario-details">
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <div className="button-group">
                    <button onClick={() => playScenario(id)}>Spielen</button> 
                    <button onClick={() => handleShare(id)}>Teilen</button>
                    <button onClick={() => removeFavorite(id)}>Löschen</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Keine gespeicherten Szenarien.</p>
        )
      )}
      </div>
    </main>
  );
};

Profile.propTypes = {
  setOriginPage: PropTypes.func.isRequired,
};

export default Profile;