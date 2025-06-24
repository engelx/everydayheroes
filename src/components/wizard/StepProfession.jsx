// src/components/wizard/StepProfession.jsx
import React from 'react';
import { professions } from '../../data/professions';

const StepProfession = ({ character, setProfession, nextStep, prevStep }) => {
  const handleSelectProfession = (profData) => {
    setProfession(profData);
    nextStep(); // <-- Avance automático
  };

  return (
    <div>
      <h2>Paso 3: Elige tu Profesión</h2>
      <p>Tu profesión es tu "trabajo diurno", que te da competencias y determina tu nivel de riqueza.</p>
      <div className="options-grid">
        {professions.map(prof => (
          <div
            key={prof.id}
            className={`option-card ${character.professionId === prof.id ? 'selected' : ''}`}
            onClick={() => handleSelectProfession(prof)}
          >
            <h3>{prof.name}</h3>
            <p><strong>Nivel de Riqueza:</strong> {prof.wealthLevel}</p>
            {prof.specialFeature && <p><strong>{prof.specialFeature.name}:</strong> {prof.specialFeature.description}</p>}
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

export default StepProfession;