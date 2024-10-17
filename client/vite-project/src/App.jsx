import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/game/:scenarioId"
          element={
            <NoHeaderFooterLayout>
              <GameScreenWrapper />
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
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/stories" element={<Stories />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

const GameScreenWrapper = () => {
  const { scenarioId } = useParams();
  return <GameScreen scenarioId={parseInt(scenarioId, 10)} onExit={() => {}} />;
};

export default App;