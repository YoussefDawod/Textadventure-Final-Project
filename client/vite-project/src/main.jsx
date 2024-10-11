import React from 'react';
import ReactDOM from 'react-dom/client';  // Importiere ReactDOM für die Erstellung des React-Roots
import App from './App';  // Importiere die Haupt-App-Komponente
import './styles/main.css';  // Importiere dein globales CSS für Styling

// Erstelle den Root und rendere die App-Komponente im DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);