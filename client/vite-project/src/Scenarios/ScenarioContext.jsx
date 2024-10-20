import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ScenarioContext = createContext();

export const ScenarioProvider = ({ children }) => {
  const [likedScenarios, setLikedScenarios] = useState([]);
  const [savedScenarios, setSavedScenarios] = useState([]);

  const likeScenario = (id) => {
    setLikedScenarios((prev) => [...new Set([...prev, id])]);
  };

  const saveScenario = (id) => {
    setSavedScenarios((prev) => [...new Set([...prev, id])]);
  };

  const removeLike = (id) => {
    setLikedScenarios((prev) => prev.filter(scenarioId => scenarioId !== id));
  };

  const removeFavorite = (id) => {
    setSavedScenarios((prev) => prev.filter(scenarioId => scenarioId !== id));
  };

  return (
    <ScenarioContext.Provider
      value={{
        likedScenarios,
        savedScenarios,
        likeScenario,
        saveScenario,
        removeLike,
        removeFavorite
      }}
    >
      {children}
    </ScenarioContext.Provider>
  );
};

ScenarioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ScenarioContext };
