// src/components/wizard/StepAbilityScores.jsx
import React, { useState } from 'react';

const ABILITIES = ['fuerza', 'destreza', 'constitucion', 'inteligencia', 'sabiduria', 'carisma'];

const StepAbilityScores = ({ character, setAbilityScores, nextStep, prevStep }) => {
  const [scores, setScores] = useState(character.abilityScores.base);
  
  const handleScoreChange = (ability, value) => {
    const numValue = Math.max(3, Math.min(20, parseInt(value, 10) || 3));
    const newScores = { ...scores, [ability]: numValue };
    setScores(newScores);
  };
  
  const handleSave = () => {
    setAbilityScores(scores);
    nextStep();
  }

  return (
    <div>
      <h2>Paso 4: Determina tus Puntuaciones de Característica</h2>
      <p>Introduce los valores base para cada característica. Puedes usar los métodos del libro (Conjunto Estándar, Compra de Puntos, Tirada de Dados) y colocar los resultados aquí.</p>
      <div className="ability-scores-grid">
        {ABILITIES.map(ability => (
            <div key={ability} className="ability-score-item">
                <label>{ability.charAt(0).toUpperCase() + ability.slice(1)}</label>
                <input 
                    type="number"
                    min="3"
                    max="20"
                    value={scores[ability]} 
                    onChange={(e) => handleScoreChange(ability, e.target.value)}
                />
            </div>
        ))}
      </div>
      <p className="info-text">A estos valores se les sumarán automáticamente los bonos de tu trasfondo y profesión.</p>
      
       <div className="wizard-navigation">
        <button onClick={prevStep}>Anterior</button>
        <button onClick={handleSave}>Siguiente</button>
      </div>
    </div>
  );
};

export default StepAbilityScores;