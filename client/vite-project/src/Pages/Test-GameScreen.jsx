import { useState, useEffect, useCallback } from 'react';
import { fetchText, postOption, fetchImage } from '../API/api';

const GameScreen = () => {
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const startGame = useCallback(async () => {
    setLoading(true);
    try {
      const initialText = await fetchText(0); // Initial text ID
      setCurrentText(initialText.text);
      const initialImage = await fetchImage(0); // Initial image ID
      setImage(initialImage);
    } catch (error) {
      console.error('Failed to start game:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const submitInput = async () => {
    if (!userInput.trim()) {
      alert('Bitte geben Sie eine gültige Eingabe ein.');
      return;
    }
    
    setLoading(true);
    try {
      const userResponse = await postOption({ data1: userInput });
      setCurrentText(userResponse.text);
      setUserInput('');
      const newImage = await fetchImage(0); // Fetch new image based on user input
      setImage(newImage);
    } catch (error) {
      console.error('Failed to submit input:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <p>{currentText}</p>
        <img src={image} alt="Story related" />
      </div>
      <input
        type="text"
        id="userInput"
        name="userInput"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Geben Sie Ihre Eingabe ein"
      />
      <button onClick={submitInput}>Senden</button>
    </div>
  );
};

export default GameScreen;