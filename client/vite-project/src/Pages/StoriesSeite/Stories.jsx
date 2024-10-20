import "../../Styles/storiesSeite/Stories.css";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import ScenarioCard from "./ScenarioCard";
import scenarios from "../../Scenarios/scenarios";
import NoHeaderFooterLayout from "../../Components/NoHeaderFooterLayout";
import useScenarioContext from "../../Scenarios/useScenarioContext";

const Stories = ({ setOriginPage }) => {
  const navigate = useNavigate();
  const { likeScenario, saveScenario } = useScenarioContext();
  const [customTitle, setCustomTitle] = useState("");
  const [customDescription, setCustomDescription] = useState("");

  const playScenario = (scenarioId) => { // Changed here
    setOriginPage("stories");
    navigate(`/game/${scenarioId}`);
  };

  const startGame = (scenarioId) => {
    playScenario(scenarioId); // Changed here
  };

  const createCustomScenario = () => {
    const newScenario = {
      id: `custom-${Date.now()}`,
      title: customTitle,
      description: customDescription,
      likes: 0,
    };
    scenarios.push(newScenario);
    playScenario(newScenario.id); // Changed here
  };

  return (
    <main className="stories-background">
      <div className="stories-contents">
        <div className="create-scenario">
          <h2>Erstelle dein eigenes Szenario</h2>
          <input
            type="text"
            id="customTitle"
            name="customTitle"
            placeholder="Titel (max. 20 Buchstaben)"
            value={customTitle}
            onChange={(e) => setCustomTitle(e.target.value)}
            maxLength="20"
          />
          <textarea
            id="customDescription"
            name="customDescription"
            placeholder="Beschreibung (max. 136 Buchstaben)"
            value={customDescription}
            onChange={(e) => setCustomDescription(e.target.value)}
            maxLength="136"
          />
          <div className="button-container">
            <button className="button-start" onClick={createCustomScenario}>
              Starten
            </button>
          </div>
        </div>

        <div className="stories-container">
          <div className="scenarios-list">
            {scenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                scenario={scenario}
                onPlay={() => startGame(scenario.id)} // Changed here
                onLike={() => likeScenario(scenario.id)} 
                onSave={() => saveScenario(scenario.id)} 
                onShare={() => console.log(`Szenario ${scenario.id} geteilt`)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

Stories.propTypes = {
  setOriginPage: PropTypes.func.isRequired,
};

export default Stories;