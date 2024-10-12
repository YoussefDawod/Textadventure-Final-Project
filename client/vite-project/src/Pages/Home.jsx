import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="home-background">
      <div>
      <h1>Willkommen zu TIA</h1>
      <h2>Deine KI Text-Adventure</h2>
      <p>Entdecke einzigartige Welten und Geschichten, gesteuert von Künstlicher Intelligenz.</p>
      <p>Erlebe spannende Abenteuer, die du mit deinen Entscheidungen beeinflussen kannst.</p>
      <p>Finde heraus, was dich erwart</p>
      <p>Worauf wartest du noch?</p>
      <Link to="/stories">
        <button>Starte dein Abenteuer</button>
      </Link>
      </div>
    </main>
  );
};

export default Home;