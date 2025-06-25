// src/components/wizard/CharacterWizard.jsx
import React, { useState, useEffect } from 'react';
import { useCharacterBuilder } from '../../hooks/useCharacterBuilder';

// Datos Base (simulando que vienen de otros archivos)
import { classes as baseClasses } from '../../data/classes';
import { backgrounds as baseBackgrounds } from '../../data/backgrounds';
import { professions } from '../../data/professions';
import { archetypes as baseArchetypes } from '../../data/archetypes';

// *** NUEVO: Importar datos de Tecno-Arcano ***
import { tecnoArcanoClasses } from '../../data/tecno-arcano-classes';
import { tecnoArcanoBackgrounds } from '../../data/tecno-arcano-backgrounds';
import { tecnoArcanoArchetypes } from '../../data/tecno-arcano-archetypes';

import StepClass from './StepClass';
import StepBackground from './StepBackground';
import StepProfession from './StepProfession';
import StepAbilityScores from './StepAbilityScores';
import StepSkills from './StepSkills';
import StepSummary from './StepSummary';

// *** NUEVO: Combinar los datos ***
const allclasses = [...baseClasses, ...tecnoArcanoClasses];
const allBackgrounds = [...baseBackgrounds, ...tecnoArcanoBackgrounds];
const allArchetypes = {...baseArchetypes, ...tecnoArcanoArchetypes};


const STEPS = { CLASS: 1, BACKGROUND: 2, PROFESSION: 3, ABILITY_SCORES: 4, SKILLS: 5, SUMMARY: 6 };

const CharacterWizard = ({ onClose }) => {
  const [step, setStep] = useState(STEPS.CLASS);
  const { character, ...actions } = useCharacterBuilder();
  
  // *** NUEVO: Estado para rastrear si es un personaje de Tecno-Arcano ***
  const [isTecnoArcano, setIsTecnoArcano] = useState(false);

  const selectedClass = allclasses.find(c => c.id === character.classId);
  const selectedArchetype = character.archetypeId ? allArchetypes[character.archetypeId] : null;
  const selectedBackground = allBackgrounds.find(b => b.id === character.backgroundId);
  const selectedProfession = professions.find(p => p.id === character.professionId);

  // *** NUEVO: Hook para detectar si la clase seleccionada es de Tecno-Arcano ***
  useEffect(() => {
    if (selectedClass) {
      setIsTecnoArcano(selectedClass.source === 'Tecno-Arcano');
    }
  }, [character.classId, selectedClass]);

  // *** NUEVO: Lógica de navegación modificada para saltar pasos ***
  const nextStep = () => {
    setStep(currentStep => {
      // Si estamos en el paso de Trasfondo y es un personaje de T-A, saltamos a Habilidades
      if (currentStep === STEPS.BACKGROUND && isTecnoArcano) {
        return STEPS.ABILITY_SCORES;
      }
      // Si estamos en el paso de Profesión y es de T-A (no debería pasar, pero por seguridad)
       if (currentStep === STEPS.PROFESSION && isTecnoArcano) {
        return STEPS.ABILITY_SCORES;
      }
      // Lógica normal
      return currentStep < Object.keys(STEPS).length ? currentStep + 1 : currentStep;
    });
  };

  const prevStep = () => {
    setStep(currentStep => {
       // Si estamos en Habilidades y es de T-A, volvemos a Trasfondo
       if (currentStep === STEPS.ABILITY_SCORES && isTecnoArcano) {
        return STEPS.BACKGROUND;
      }
      // Lógica normal
      return currentStep > 1 ? currentStep - 1 : currentStep;
    });
  };

  const renderStep = () => {
    switch (step) {
      case STEPS.CLASS:
        // Pasamos todas las clases al componente
        return <StepClass character={character} setClass={actions.setClass} nextStep={nextStep} allClasses={allclasses} allArchetypes={allArchetypes} />;
      case STEPS.BACKGROUND:
        // Pasamos todos los trasfondos al componente
        return <StepBackground character={character} setBackground={actions.setBackground} nextStep={nextStep} prevStep={prevStep} allBackgrounds={allBackgrounds} />;
      case STEPS.PROFESSION:
         // Este paso se renderizará pero será saltado por la lógica de nextStep/prevStep si es T-A
        return <StepProfession character={character} setProfession={actions.setProfession} nextStep={nextStep} prevStep={prevStep} />;
      case STEPS.ABILITY_SCORES:
        return <StepAbilityScores character={character} setAbilityScores={actions.setAbilityScores} nextStep={nextStep} prevStep={prevStep} />;
      case STEPS.SKILLS:
        return <StepSkills character={character} updateSkillProficiencies={actions.updateSkillProficiencies} selectedClass={selectedClass} selectedBackground={selectedBackground} nextStep={nextStep} prevStep={prevStep}/>;
      case STEPS.SUMMARY:
        return <StepSummary character={character} data={{selectedClass, selectedArchetype, selectedBackground, selectedProfession}} prevStep={prevStep} onFinish={onClose} />;
      default:
        return <div>Paso desconocido</div>;
    }
  };

  return (
    <div className="wizard-container">
        <button className="wizard-close-btn" onClick={onClose} title="Cerrar y volver al libro">
            &times;
        </button>
      <div className="wizard-header">
        <h1>Asistente de Creación de Personajes</h1>
        <p>Paso {step} de {Object.keys(STEPS).length}</p>
      </div>
      <div className="wizard-content">
        {renderStep()}
      </div>
    </div>
  );
};

export default CharacterWizard;