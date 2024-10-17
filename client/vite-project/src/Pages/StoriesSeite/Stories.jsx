import "../../Styles/storiesSeite/Stories.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import GameScreen from "./GameScreen";
import ScenarioCard from "./ScenarioCard";
import scenarios from "../../Scenarios/scenarios";
import NoHeaderFooterLayout from "../../Components/NoHeaderFooterLayout";

const Stories = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);

  const startGame = (scenarioId) => {
    setSelectedScenarioId(scenarioId);
    setIsPlaying(true);
    navigate(`/game/${scenarioId}`);
  };

  const exitGame = () => {
    setIsPlaying(false);
    setSelectedScenarioId(null);
    navigate('/stories'); // Navigieren Sie zurück zur Stories-Seite
  };

  if (isPlaying) {
    return (
      <NoHeaderFooterLayout>
        <GameScreen scenarioId={selectedScenarioId} onExit={exitGame} />
      </NoHeaderFooterLayout>
    );
  }

  return (
    <main className="stories-background">
      <div className="stories-container">
        <h1>Vorgefertigte und Benutzer-Szenarien</h1>
        <div className="scenarios-list">
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