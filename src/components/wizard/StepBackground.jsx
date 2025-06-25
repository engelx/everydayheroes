// src/components/wizard/StepBackground.jsx
import React from 'react';
// Quita la importación de datos locales, ahora vienen por props

const StepBackground = ({ character, setBackground, nextStep, prevStep, allBackgrounds }) => {
  const handleSelectBackground = (bgData) => {
    setBackground(bgData);
    nextStep(); // <-- Avance automático
  };

  // *** NUEVO: Agrupar trasfondos por origen ***
  const baseBackgrounds = allBackgrounds.filter(b => b.source !== 'Tecno-Arcano');
  const tecnoArcanoBackgrounds = allBackgrounds.filter(b => b.source === 'Tecno-Arcano');

  return (
    <div>
      <h2>Paso 2: Elige tu Trasfondo</h2>
      <p>El trasfondo representa tu pasado, moldeando quién eres y otorgándote beneficios únicos.</p>
      
      {/* *** NUEVO: Renderizado con separadores *** */}

      <h3 className="wizard-group-header">Trasfondos de Everyday Heroes</h3>
      <div className="options-grid">
        {baseBackgrounds.map(bg => (
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

      <h3 className="wizard-group-header">Trasfondos de Facción: Tecno-Arcano</h3>
      <div className="options-grid">
        {tecnoArcanoBackgrounds.map(bg => (
          <div
            key={bg.id}
            className={`option-card expansion-card ${character.backgroundId === bg.id ? 'selected' : ''}`}
            onClick={() => handleSelectBackground(bg)}
          >
            <span className="expansion-tag">{bg.source}</span>
            <h3>{bg.name}</h3>
            <p>{bg.description}</p>
            {bg.specialFeature && <p><strong>Rasgo: {bg.specialFeature.name}:</strong> {bg.specialFeature.description}</p>}
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