import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Stories from './Pages/StoriesSeite/Stories';
import GameScreen from './Pages/StoriesSeite/GameScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NoHeaderFooterLayout from './Components/NoHeaderFooterLayout';
import { ScenarioProvider } from './Scenarios/ScenarioContext';

function App() {
  const [originPage, setOriginPage] = useState("stories");

  return (
    <ScenarioProvider>
      <Router>
        <Routes>
          <Route
            path="/game/:scenarioId"
            element={
              <NoHeaderFooterLayout>
                <GameScreenWrapper originPage={originPage} />
              </NoHeaderFooterLayout>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile setOriginPage={setOriginPage} />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/stories" element={<Stories setOriginPage={setOriginPage} />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </ScenarioProvider>
  );
}

const GameScreenWrapper = ({ originPage }) => {
  const navigate = useNavigate();
  const { scenarioId } = useParams();

  const exitGame = () => {
    navigate(`/${originPage}`);
  };

  return <GameScreen scenarioId={parseInt(scenarioId, 10)} onExit={exitGame} />;
};

GameScreenWrapper.propTypes = {
  originPage: PropTypes.string.isRequired,
};

export default App;