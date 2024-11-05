import { useState, useEffect, useCallback } from 'react';
import '../../Styles/storiesSeite/GameScreen.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Icon from "../../Components/Icons";

const GameScreen = ({ onExit }) => {
  const { scenarioTitle } = useParams();
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const dummyInitialText = `Willkommen in deinem Abenteuer!: ${scenarioTitle}`;
  const dummyNextText = "Dies ist der nächste Abschnitt deines Abenteuers.";
  const dummyOptions = ["Option 1", "Option 2", "Option 3"];

  const startGame = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentText(dummyInitialText);
      setGameStarted(true);
      setLoading(false);
    }, 1000);
  }, [dummyInitialText]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const submitInput = async () => {
    if (!userInput) return; 
    setLoading(true);
    setTimeout(() => {
      setCurrentText(`Benutzereingabe: ${userInput}`);
      setUserInput('');
      setLoading(false);
    }, 1000);
  };

  const handleOptionClick = (option) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentText(`Gewählte Option: ${option}`);
      setLoading(false);
    }, 1000);
  };

  const handleExit = () => {
    onExit();
  };

  return (
    <main className="main-gameScreen">
      <div className="exit-button" onClick={handleExit}><Icon type="exit" /></div>
      <div className="game-screen">
        <div className="story-content">
          <div className="story-image">
            {/* Platzhalter für das generierte Bild */}
          </div>
          <div className="story-text">
            <p>{currentText}</p>
          </div>
          <div className="story-options">
            {dummyOptions.map((option, index) => (
              <div key={index} onClick={() => handleOptionClick(option)} className='options'>{option}</div>
            ))}
          </div>
        </div>
        {loading && (
          <div className="loading-overlay">
            <img src="/Logo/tia-logo.svg" alt="Loading" className="loading-logo" />
          </div>
        )}
        <div className="user-interaction">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Geben Sie Ihre Eingabe ein"
            id="user-input"
          />
          <div onClick={submitInput}><Icon type="send" /></div>
        </div>
      </div>
    </main>
  );
};

GameScreen.propTypes = {
  onExit: PropTypes.func.isRequired,
};

export default GameScreen;