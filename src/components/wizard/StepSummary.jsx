// src/components/wizard/StepSummary.jsx
import React from 'react';

const getModifier = (score) => Math.floor((score - 10) / 2);

const StepSummary = ({ character, data, prevStep, onFinish }) => {
  const { selectedClass, selectedArchetype, selectedBackground, selectedProfession } = data;

  return (
    <div>
      <h2>Paso 6: Resumen del Personaje</h2>
      <div className="summary-grid">
        <div className="summary-section">
          <h3>Clase y Arquetipo</h3>
          <p><strong>Clase:</strong> {selectedClass?.name}</p>
          <p><strong>Arquetipo:</strong> {selectedArchetype?.name}</p>
        </div>
        <div className="summary-section">
          <h3>Trasfondo y Profesión</h3>
          <p><strong>Trasfondo:</strong> {selectedBackground?.name}</p>
          <p><strong>Profesión:</strong> {selectedProfession?.name}</p>
        </div>
        <div className="summary-section">
          <h3>Puntuaciones de Característica</h3>
          <ul>
            {Object.entries(character.abilityScores.final).map(([key, value]) => (
              <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value} ({getModifier(value) >= 0 ? '+' : ''}{getModifier(value)})
              </li>
            ))}
          </ul>
        </div>
         <div className="summary-section">
            <h3>Habilidades con Competencia</h3>
            <ul>
                {character.skillProficiencies.map(skill => <li key={skill}>{skill.replace(/_/g, ' ')}</li>)}
            </ul>
        </div>
        <div className="summary-section">
          <h3>Equipo Icónico</h3>
          <ul>
            {character.equipment.iconic.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="summary-section">
          <h3>Rasgos Especiales</h3>
          {data.selectedBackground.specialFeature && <p><strong>{data.selectedBackground.specialFeature.name}:</strong> {data.selectedBackground.specialFeature.description}</p>}
           {data.selectedProfession.specialFeature && <p><strong>{data.selectedProfession.specialFeature.name}:</strong> {data.selectedProfession.specialFeature.description}</p>}
        </div>
      </div>
       <div className="wizard-navigation">
        <button onClick={prevStep}>Anterior</button>
        <button onClick={onFinish}>¡Finalizar y Guardar!</button>
      </div>
    </div>
  );
};

export default StepSummary;