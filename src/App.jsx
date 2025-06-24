// src/App.jsx
import React, { useState } from 'react';
import BookReader from './components/BookReader';
import CharacterWizard from './components/wizard/CharacterWizard'; // Se asume que este componente y sus dependencias ya existen
import './App.css';
import './wizard.css'; // Se asume que los estilos del wizard ya existen

function App() {
  const [isWizardOpen, setWizardOpen] = useState(false);

  const handleCloseWizard = () => {
    setWizardOpen(false);
  };

  const handleStartWizard = () => {
    setWizardOpen(true);
  };

  return (
    <>
      {isWizardOpen ? (
        <CharacterWizard onClose={handleCloseWizard} />
      ) : (
        <BookReader onStartWizard={handleStartWizard} />
      )}
    </>
  );
}

export default App;