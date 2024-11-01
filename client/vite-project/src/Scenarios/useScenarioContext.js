import { useContext } from 'react';
import { ScenarioContext } from './ScenarioContext';

const useScenarioContext = () => useContext(ScenarioContext);

export default useScenarioContext;