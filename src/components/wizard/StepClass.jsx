// src/components/wizard/StepClass.jsx
import React from 'react';
// Quita las importaciones de datos locales, ahora vienen por props

const StepClass = ({ character, setClass, nextStep, allClasses, allArchetypes }) => {
  const handleSelectClass = (classData) => {
    const archetypeData = allArchetypes[classData.archetypeId];
    setClass(classData, archetypeData);
    nextStep(); // <-- Avance automático
  };

  // *** NUEVO: Agrupar clases por origen ***
  const baseClasses = allClasses.filter(c => c.source !== 'Tecno-Arcano');
  const tecnoArcanoClasses = allClasses.filter(c => c.source === 'Tecno-Arcano');

  return (
    <div>
      <h2>Paso 1: Elige tu Clase o Arquetipo</h2>
      <p>La clase o arquetipo define tus habilidades principales y tu rol. Al seleccionar una, avanzarás al siguiente paso.</p>
      
      {/* *** NUEVO: Renderizado con separadores *** */}
      
      <h3 className="wizard-group-header">Clases de Everyday Heroes</h3>
      <div className="options-grid">
        {baseClasses.map(cls => (
          <div
            key={cls.id}
            className={`option-card ${character.classId === cls.id ? 'selected' : ''}`}
            onClick={() => handleSelectClass(cls)}
          >
            <h3>{cls.name}</h3>
            <p className="archetype-label">{allArchetypes[cls.archetypeId].name}</p>
            <p>{cls.description}</p>
          </div>
        ))}
      </div>

      <h3 className="wizard-group-header">Arquetipos de Expansión: Tecno-Arcano</h3>
       <div className="options-grid">
        {tecnoArcanoClasses.map(cls => (
          <div
            key={cls.id}
            className={`option-card expansion-card ${character.classId === cls.id ? 'selected' : ''}`}
            onClick={() => handleSelectClass(cls)}
          >
            <span className="expansion-tag">{cls.source}</span>
            <h3>{cls.name}</h3>
            <p className="archetype-label">Facción: {cls.faction}</p>
            <p>{cls.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepClass;