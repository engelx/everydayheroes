// src/components/wizard/StepClass.jsx
import React from 'react';
import { classes } from '../../data/classes';
import { archetypes } from '../../data/archetypes';

const StepClass = ({ character, setClass, nextStep }) => {
  const handleSelectClass = (classData) => {
    const archetypeData = archetypes[classData.archetypeId];
    setClass(classData, archetypeData);
    nextStep(); // <-- Avance automático
  };

  return (
    <div>
      <h2>Paso 1: Elige tu Clase</h2>
      <p>La clase define tus habilidades principales en combate y tu arquetipo de héroe. Al seleccionar una, avanzarás al siguiente paso.</p>
      <div className="options-grid">
        {classes.map(cls => (
          <div
            key={cls.id}
            className={`option-card ${character.classId === cls.id ? 'selected' : ''}`}
            onClick={() => handleSelectClass(cls)}
          >
            <h3>{cls.name}</h3>
            <p className="archetype-label">{archetypes[cls.archetypeId].name}</p>
            <p>{cls.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepClass;