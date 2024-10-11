import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>Willkommen zu KI Text-Adventure</h1>
      <p>Entdecke einzigartige Welten, gesteuert von Künstlicher Intelligenz.</p>
      <Link to="/stories">
        <button>Starte dein Abenteuer</button>
      </Link>
    </main>
  );
};

export default Home;