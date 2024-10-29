import { useState, useEffect, useCallback } from 'react';
import '../../Styles/storiesSeite/GameScreen.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Icon from "../../Components/Icons";
import { fetchOption, fetchText, fetchImage, postOption, postImage } from '../../API/api';

const GameScreen = ({ onExit }) => {
  const { scenarioTitle } = useParams();
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = useCallback(async () => {
    setLoading(true);
    try {
      const initialText = await fetchText(0); // Initial text ID
      setCurrentText(`Willkommen in deinem Abenteuer! Szenario Titel: ${scenarioTitle}\n${initialText.text}`);
      setGameStarted(true);
    } catch (error) {
      console.error('Failed to start game:', error);
      setCurrentText('Fehler beim Starten des Spiels. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  }, [scenarioTitle]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const nextStep = async () => {
    setLoading(true);
    try {
      const nextText = await fetchText(1); // Next text ID
      setCurrentText(nextText.text);
      setUserInput('');
    } catch (error) {
      console.error('Failed to fetch next step:', error);
      setCurrentText('Fehler beim Abrufen des nächsten Schritts. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  const submitInput = async () => {
    if (!userInput.trim()) {
      alert('Bitte geben Sie eine gültige Eingabe ein.');
      return;
    }
    setLoading(true);
    try {
      const userResponse = await postOption({ data1: userInput }); // Option ID based on user input
      setCurrentText(`Benutzereingabe: ${userInput}\n${userResponse.text}`);
      setUserInput('');
    } catch (error) {
      console.error('Failed to submit input:', error);
      setCurrentText('Fehler beim Senden der Eingabe. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  const handleExit = () => {
    onExit();
  };

  if (loading) {
    return <div>Wird geladen...</div>;
  }

  return (
    <main className="gameScreen-background">
      <div className="game-screen">
        <button className="exit-button" onClick={handleExit}><Icon type="exit" /></button>
        <div className="story-content">
          <div className="story-text">
            <p>{currentText}</p>
          </div>
        </div>
        {gameStarted && (
          <div className="user-interaction">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Geben Sie Ihre Eingabe ein"
              id="user-input"
            />
            <button onClick={submitInput}><Icon type="send" /></button>
            <button onClick={nextStep}><Icon type="next" /></button>
          </div>
        )}
      </div>
    </main>
  );
};

GameScreen.propTypes = {
  onExit: PropTypes.func.isRequired,
};

export default GameScreen;