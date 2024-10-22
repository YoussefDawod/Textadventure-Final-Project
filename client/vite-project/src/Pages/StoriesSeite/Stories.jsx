import "../../Styles/storiesSeite/Stories.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ScenarioCard from "./ScenarioCard";
import scenarios from "../../Scenarios/scenarios";
import useScenarioContext from "../../Scenarios/useScenarioContext";
import Icon from "../../Components/Icons";

const Stories = ({ setOriginPage }) => {
  const navigate = useNavigate();
  const { likeScenario, saveScenario } = useScenarioContext();
  const [customTitle, setCustomTitle] = useState("");
  const [customDescription, setCustomDescription] = useState("");

  const playScenario = (scenarioId, scenarioTitle) => {
    setOriginPage("stories");
    navigate(`/game/${scenarioId}/${encodeURIComponent(scenarioTitle)}`);
  };

  const startGame = (scenarioId, scenarioTitle) => {
    playScenario(scenarioId, scenarioTitle);
  };

  const createCustomScenario = () => {
    const newScenario = {
      id: `custom-${Date.now()}`,
      title: customTitle,
      description: customDescription,
      likes: 0,
    };
    scenarios.unshift(newScenario); // Fügt das neue Szenario an den Anfang der Liste hinzu
    playScenario(newScenario.id, newScenario.title); // Änderung: Verwenden von ID und Titel
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
            placeholder="Beschreibung (max. 174 Buchstaben)"
            value={customDescription}
            onChange={(e) => setCustomDescription(e.target.value)}
            maxLength="174"
          />
          <svg
            className="play icon"
            viewBox="0 0 24 24"
            onClick={createCustomScenario}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter") createCustomScenario();
            }}
          >
            <Icon type="play" />
          </svg>
        </div>

        <div className="stories-container">
          <div className="scenarios-list">
            {scenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                scenario={scenario}
                onPlay={() => startGame(scenario.id, scenario.title)}
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
