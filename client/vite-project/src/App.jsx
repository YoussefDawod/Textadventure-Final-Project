import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL; // <--- HINZUGEFÜGT

function App() {
  const [userId] = useState('user123'); // In der Praxis durch Authentifizierung ersetzen
  const [scenario, setScenario] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [story, setStory] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const startGame = (selectedScenario) => {
    setScenario(selectedScenario);
    setHasStarted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiBaseUrl}/api/game/interact`, { // <--- GEÄNDERT
        userId,
        scenario: scenario,
        userInput,
      });

      const { text, imageUrl } = response.data;
      setStory([...story, { user: userInput, ai: text }]);
      setImageUrl(imageUrl);
      setUserInput('');
      setScenario(''); // Scenario nur beim Start senden

    } catch (error) {
      console.error('Fehler:', error);
    }
  };

  if (!hasStarted) {
    return (
      <div className="App">
        <h1>Willkommen zum KI Text-Adventure</h1>
        <h2>Wähle ein Szenario oder erstelle dein eigenes</h2>
        <button onClick={() => startGame('Du wachst in einer mysteriösen Höhle auf.')}>Szenario 1</button>
        <button onClick={() => startGame('Du befindest dich in einer futuristischen Stadt.')}>Szenario 2</button>
        <div>
          <input
            type="text"
            placeholder="Eigenes Szenario"
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
          />
          <button onClick={() => startGame(scenario)}>Spiel starten</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>KI Text-Adventure</h1>
      <div className="story">
        {story.map((entry, index) => (
          <div key={index}>
            <p><strong>Du:</strong> {entry.user}</p>
            <p><strong>KI:</strong> {entry.ai}</p>
          </div>
        ))}
      </div>
      {imageUrl && <img src={imageUrl} alt="Szenenbild" />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Was möchtest du tun?"
        />
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}

export default App;
