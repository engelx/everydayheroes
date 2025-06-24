// src/components/wizard/CharacterWizard.jsx
import React, { useState } from 'react';
import { useCharacterBuilder } from '../../hooks/useCharacterBuilder';
import { classes } from '../../data/classes';
import { backgrounds } from '../../data/backgrounds';
import { professions } from '../../data/professions';
import { archetypes } from '../../data/archetypes';

import StepClass from './StepClass';
import StepBackground from './StepBackground';
import StepProfession from './StepProfession';
import StepAbilityScores from './StepAbilityScores';
import StepSkills from './StepSkills';
import StepSummary from './StepSummary';

const STEPS = { CLASS: 1, BACKGROUND: 2, PROFESSION: 3, ABILITY_SCORES: 4, SKILLS: 5, SUMMARY: 6 };

const CharacterWizard = ({ onClose }) => {
  const [step, setStep] = useState(STEPS.CLASS);
  const { character, ...actions } = useCharacterBuilder();

  const nextStep = () => setStep(s => (s < Object.keys(STEPS).length ? s + 1 : s));
  const prevStep = () => setStep(s => (s > 1 ? s - 1 : s));

  const selectedClass = classes.find(c => c.id === character.classId);
  const selectedArchetype = character.archetypeId ? archetypes[character.archetypeId] : null;
  const selectedBackground = backgrounds.find(b => b.id === character.backgroundId);
  const selectedProfession = professions.find(p => p.id === character.professionId);

  const renderStep = () => {
    switch (step) {
      case STEPS.CLASS:
        return <StepClass character={character} setClass={actions.setClass} nextStep={nextStep} />;
      case STEPS.BACKGROUND:
        return <StepBackground character={character} setBackground={actions.setBackground} nextStep={nextStep} prevStep={prevStep} />;
      case STEPS.PROFESSION:
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