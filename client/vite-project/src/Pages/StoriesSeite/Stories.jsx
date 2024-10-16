import "../../Styles/storiesSeite/Stories.css";
import { useState } from "react";
import GameScreen from "./GameScreen";
import ScenarioCard from "./ScenarioCard";
import scenarios from "../../Scenarios/scenarios";

const Stories = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);

  // Funktion, um das Spiel zu starten
  const startGame = (scenarioId) => {
    setSelectedScenarioId(scenarioId);
    setIsPlaying(true);
  };

  // Funktion, um das Spiel zu beenden
  const exitGame = () => {
    setIsPlaying(false);
    setSelectedScenarioId(null);
  };

  if (isPlaying) {
    return <GameScreen scenarioId={selectedScenarioId} onExit={exitGame} />;
  }

  return (
    <main className="stories-background">
      <div className="stories-container">
        <h1>Vorgefertigte und Benutzer-Szenarien</h1>
        <div className="scenarios-list">
          {/* Szenarien werden hier aufgelistet */}
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              onPlay={() => startGame(scenario.id)}
              onLike={() => console.log(`Like für Szenario ${scenario.id}`)}
              onSave={() => console.log(`Szenario ${scenario.id} gespeichert`)}
              onShare={() => console.log(`Szenario ${scenario.id} geteilt`)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Stories;