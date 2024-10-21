import { useState } from 'react';
import PropTypes from 'prop-types';
import useScenarioContext from '../Scenarios/useScenarioContext';
import scenarios from '../Scenarios/scenarios';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import '../Styles/Profile.css';

const Profile = ({ setOriginPage, isLoggedIn, userName, userEmail, onLogout }) => {
  const { likedScenarios, savedScenarios, removeLike, removeFavorite } = useScenarioContext();
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const getScenarioDetails = (id) =>
    scenarios.find((scenario) => scenario.id === id) || {};

  const playScenario = (scenarioId) => {
    setOriginPage("profile");
    navigate(`/game/${scenarioId}`);
  };

  const handleShare = (scenarioId) => {
    const url = `${window.location.origin}/game/${scenarioId}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link zum Szenario wurde kopiert!');
    });
  };

  const handleContactSubmit = (message) => {
    console.log("Kontakt Nachricht:", message);
    // Hier kann man Logik hinzufügen, um die Nachricht zu verarbeiten
  };

  return (
    <main className="profile-background">
      {!isLoggedIn ? (
        <>
          <p>Melde dich an, um die volle Funktion der Seite zu bekommen.</p>
          <button onClick={() => navigate('/register')} className="an-abmelden-toggle-button">Anmelden</button>
        </>
      ) : (
        <>
          <h2>Hallo {userName}</h2>
          <p>Du bist mit {userEmail} angemeldet.</p>
          <button onClick={onLogout} className="an-abmelden-toggle-button">Abmelden</button>
        </>
      )}

      <button onClick={() => toggleSection('likes')} className="an-abmelden-toggle-button">
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

      <button onClick={() => toggleSection('favorites')} className="an-abmelden-toggle-button">
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

      <button onClick={() => toggleSection('contact')} className="an-abmelden-toggle-button">
        Kontakt
      </button>
      {activeSection === 'contact' && (
        <Contact onSubmit={handleContactSubmit} />
      )}
    </main>
  );
};

Profile.propTypes = {
  setOriginPage: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default Profile;