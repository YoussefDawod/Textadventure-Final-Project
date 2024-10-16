import { useState, useEffect } from 'react';
import '../../Styles/storiesSeite/GameScreen.css';

const GameScreen = ({ scenarioId, onExit }) => {
  // Lokale Zustände für den Spielverlauf
  const [currentText, setCurrentText] = useState(''); // Der aktuelle Text der Geschichte
  const [userInput, setUserInput] = useState(''); // Benutzereingabe
  const [loading, setLoading] = useState(false); // Ladezustand
  const [gameStarted, setGameStarted] = useState(false); // Verfolgung, ob das Spiel gestartet wurde

  // Dummy-Daten (Platzhalter für Backend-Daten)
  const dummyInitialText = "Willkommen in deinem Abenteuer!";
  const dummyNextText = "Dies ist der nächste Abschnitt deines Abenteuers.";

  useEffect(() => {
    startGame(); // Spiel starten, wenn die Komponente geladen wird
  }, []);

  // Funktion, um das Spiel zu starten (Platzhalter für Backend-Aufruf)
  const startGame = async () => {
    setLoading(true);
    // Simulieren einer Verzögerung für den Spielstart
    setTimeout(() => {
      setCurrentText(dummyInitialText); // Platzhaltertext setzen
      setGameStarted(true);
      setLoading(false);
    }, 1000);
  };

  // Funktion, um den nächsten Abschnitt der Geschichte zu laden (Platzhalter für Backend-Aufruf)
  const nextStep = async () => {
    setLoading(true);
    // Simulieren einer Verzögerung für den nächsten Schritt
    setTimeout(() => {
      setCurrentText(dummyNextText); // Platzhalter für den nächsten Abschnitt der Geschichte
      setUserInput(''); // Eingabefeld leeren
      setLoading(false);
    }, 1000);
  };

  // Funktion, um die Benutzereingaben zu verarbeiten und die Geschichte zu beeinflussen
  const submitInput = async () => {
    if (!userInput) return; // Keine Eingabe, kein Absenden
    setLoading(true);
    // Hier würde die Eingabe an das Backend gesendet, aktuell nur ein Platzhalter
    setTimeout(() => {
      setCurrentText(`Benutzereingabe: ${userInput}`); // Die Eingabe als Teil der Geschichte anzeigen
      setUserInput(''); // Eingabefeld leeren
      setLoading(false);
    }, 1000);
  };

  // Wenn das Spiel lädt, einen Ladeindikator anzeigen
  if (loading) {
    return <div>Wird geladen...</div>;
  }

  return (
    <main className="gameScreen-background">
      <div className="game-screen">
        {/* Der Button zum Beenden des Spiels */}
        <button className="exit-button" onClick={onExit}>Beenden</button>

        {/* Aktuelle Geschichte */}
        <div className="story-content">
          <div className="story-text">
            <p>{currentText}</p>
          </div>
        </div>

        {/* Eingabefeld und Buttons */}
        {gameStarted && (
          <div className="user-interaction">
            <input
              type="text"
              id="userInput" // Hinzugefügt
              name="userInput" // Hinzugefügt
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Geben Sie Ihre Eingabe ein"
            />
            <button onClick={submitInput}>Senden</button>
            <button onClick={nextStep}>Weiter</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default GameScreen;