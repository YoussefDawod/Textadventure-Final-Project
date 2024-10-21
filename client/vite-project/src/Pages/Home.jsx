import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../Styles/Home.css';

const Home = () => {
  const [visibleSteps, setVisibleSteps] = useState(1); // Start with the first sentence visible
  const steps = [
    "Willkommen zu TIA - Deinem KI Text-Adventure.",
    "Entdecke einzigartige Welten und Geschichten, gesteuert von Künstlicher Intelligenz.",
    "Erlebe spannende Abenteuer, die du mit deinen Entscheidungen beeinflussen kannst.",
    "Starte dein Abenteuer und entdecke das Unbekannte!"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (visibleSteps < steps.length + 1) {
        setVisibleSteps(prev => prev + 1);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSteps, steps.length]);

  return (
    <main className="home-background">
      <div className="tutorial">
        {steps.map((step, index) => (
          <p
            key={index}
            className={`tutorial-step ${index < visibleSteps ? 'visible' : ''}`}
          >
            {step}
          </p>
        ))}
        {visibleSteps > steps.length && (
          <Link to="/stories">
            <button className="home-button">Starte dein Abenteuer</button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default Home;