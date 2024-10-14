import { Link } from "react-router-dom";
import '../Styles/Home.css';

const Home = () => {
  return (
    <main className="home-background">
      <h1>Willkommen zu TIA</h1>
      <h2>Deine KI Text-Adventure</h2>
      <p>
        Entdecke einzigartige Welten und Geschichten, gesteuert von Künstlicher
        Intelligenz.
      </p>
      <p>
        Erlebe spannende Abenteuer, die du mit deinen Entscheidungen
        beeinflussen kannst.
      </p>
      <p>Finde heraus, was dich erwart</p>
      <p>Worauf wartest du noch?</p>
      <Link to="/stories">
        <button>Starte dein Abenteuer</button>
      </Link>
    </main>
  );
};

export default Home;
