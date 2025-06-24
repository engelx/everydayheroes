// src/components/wizard/StepBackground.jsx
import React from 'react';
import { backgrounds } from '../../data/backgrounds';

const StepBackground = ({ character, setBackground, nextStep, prevStep }) => {
  const handleSelectBackground = (bgData) => {
    setBackground(bgData);
    nextStep(); // <-- Avance automático
  };

  return (
    <div>
      <h2>Paso 2: Elige tu Trasfondo</h2>
      <p>El trasfondo representa tu pasado, moldeando quién eres y otorgándote beneficios únicos.</p>
      <div className="options-grid">
        {backgrounds.map(bg => (
          <div
            key={bg.id}
            className={`option-card ${character.backgroundId === bg.id ? 'selected' : ''}`}
            onClick={() => handleSelectBackground(bg)}
          >
            <h3>{bg.name}</h3>
            {bg.specialFeature && <p><strong>{bg.specialFeature.name}:</strong> {bg.specialFeature.description}</p>}
          </div>
        ))}
      </div>
      <div className="wizard-navigation">
        <button onClick={prevStep}>Anterior</button>
        {/* El botón siguiente se elimina para el auto-avance */}
      </div>
    </div>
  );
};

export default StepBackground;