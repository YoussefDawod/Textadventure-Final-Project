import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Stories from './Pages/StoriesSeite/Stories';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;