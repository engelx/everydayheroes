// src/components/wizard/StepSummary.jsx
import React from 'react';

const getModifier = (score) => Math.floor((score - 10) / 2);

// Helper para capitalizar texto
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Helper para renderizar los bonos de características de forma legible
const renderAbilityBonuses = (increase) => {
  if (!increase) return 'Ninguno';
  const parts = [];

  // Handle fixed bonuses
  if (increase.fixed) {
    parts.push(...Object.entries(increase.fixed).map(([key, value]) => `+${value} a ${key}`));
  }

  // Handle choice bonuses (CORREGIDO)
  if (increase.choice) {
    if (Array.isArray(increase.choice)) {
      // Es una elección entre habilidades específicas
      parts.push(`+${increase.amount} a elegir entre ${increase.choice.join(', ')}`);
    } else if (typeof increase.choice === 'number') {
      // Es una elección de N otras habilidades
      const plural = increase.choice > 1 ? 's' : '';
      const pluralPunt = increase.choice > 1 ? 'es' : '';
      parts.push(`+${increase.amount} a ${increase.choice} otra${plural} puntuaci${'ón'.concat(pluralPunt)} de característica a elegir`);
    }
  }

  // Handle "any" bonuses
  if (increase.any) {
    const plural = increase.any > 1 ? 's' : '';
    parts.push(`+${increase.amount} a ${increase.any} característica${plural} a elegir`);
  }
  
  return parts.map(s => capitalize(s.replace(/_/g, ' '))).join('; ') || 'Ninguno';
};


// Helper para renderizar las competencias de habilidad de forma legible
const renderSkillBonuses = (proficiencies) => {
  if (!proficiencies) return 'Ninguna';
  const parts = [];
  if (proficiencies.fixed) {
    parts.push(`Competencia en: ${proficiencies.fixed.map(s => s.replace(/_/g, ' ')).join(', ')}`);
  }
  if (proficiencies.choice) {
    parts.push(`A elegir ${proficiencies.count} de: ${proficiencies.choice.map(s => s.replace(/_/g, ' ')).join(', ')}`);
  }
  if (proficiencies.any) {
      parts.push(`A elegir ${proficiencies.any} de cualquier habilidad.`);
  }
  return parts.map(s => capitalize(s.replace(/_/g, ' '))).join('; ') || 'Ninguna';
}


const StepSummary = ({ character, data, prevStep, onFinish }) => {
  const { selectedClass, selectedArchetype, selectedBackground, selectedProfession } = data;

  const allSkillProficiencies = [
      ...character.skillProficiencies,
      ...(selectedBackground?.skillProficiencies?.fixed || []),
      ...(selectedProfession?.skillProficiencies?.fixed || []),
  ]

  return (
    <div>
      <h2>Paso 6: Resumen del Personaje</h2>
      <div className="summary-grid">

        <div className="summary-section">
            <h3>{selectedClass?.name} ({selectedArchetype?.name})</h3>
            <ul>
                <li><strong>Dado de Golpe:</strong> d{selectedArchetype?.hitDie}</li>
                <li><strong>Defensa:</strong> {selectedArchetype?.defense.name}</li>
                <li className="capitalize"><strong>Salvaciones de Clase:</strong> {selectedClass?.savingThrows.join(', ')}</li>
                <li><strong>Competencias de Equipo de Clase:</strong> {selectedClass?.equipmentProficiencies.map(s => s.replace(/_/g, ' ')).join(', ') || 'Ninguna'}</li>
                <li>
                    <strong>Talentos de Nivel 1:</strong>
                    <ul style={{paddingLeft: '1rem', marginTop: '0.5rem'}}>
                        <li>{selectedArchetype?.talents[1]} (Arquetipo)</li>
                        {selectedClass?.level1Talents?.map(t => <li key={t}>{t} (Clase)</li>)}
                    </ul>
                </li>
            </ul>
        </div>
        
        <div className="summary-section">
            <h3>Trasfondo: {selectedBackground?.name}</h3>
             <ul>
                <li><strong>Bono de Característica:</strong> {renderAbilityBonuses(selectedBackground?.abilityScoreIncrease)}</li>
                <li><strong>Bonos de Habilidad:</strong> {renderSkillBonuses(selectedBackground?.skillProficiencies)}</li>
                {selectedBackground?.language && <li><strong>Idioma:</strong> 1 Adicional</li>}
                {selectedBackground?.specialFeature && <li><strong>Rasgo Especial:</strong> {selectedBackground.specialFeature.name}</li>}
            </ul>
        </div>

        <div className="summary-section">
            <h3>Profesión: {selectedProfession?.name}</h3>
            <ul>
                <li><strong>Nivel de Riqueza:</strong> {selectedProfession?.wealthLevel}</li>
                <li><strong>Bono de Característica:</strong> {renderAbilityBonuses(selectedProfession?.abilityScoreIncrease)}</li>
                <li><strong>Bonos de Habilidad:</strong> {renderSkillBonuses(selectedProfession?.skillProficiencies)}</li>
                {selectedProfession?.language && <li><strong>Idioma:</strong> 1 Adicional</li>}
                 {selectedProfession?.specialFeature && <li><strong>Rasgo Especial:</strong> {selectedProfession.specialFeature.name}</li>}
            </ul>
        </div>

        <div className="summary-section">
          <h3>Puntuaciones Finales</h3>
          <ul className="ability-summary-list">
            {Object.keys(character.abilityScores.final).map((key) => (
              <li key={key}>
                <strong>{capitalize(key)}:</strong> {character.abilityScores.final[key]}
                <em style={{ marginLeft: '8px' }}>({getModifier(character.abilityScores.final[key]) >= 0 ? '+' : ''}{getModifier(character.abilityScores.final[key])})</em>
                <br />
                <small style={{color: '#999'}}>
                  (Base: {character.abilityScores.base[key]}, Bonos: +{character.abilityScores.bonuses[key] || 0})
                </small>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="summary-section">
            <h3>Habilidades con Competencia</h3>
            <ul className="capitalize">
                {[...new Set(allSkillProficiencies)].map(skill => <li key={skill}>{skill.replace(/_/g, ' ')}</li>)}
            </ul>
        </div>

        <div className="summary-section">
          <h3>Equipo Icónico</h3>
          <ul>
            {character.equipment.iconic.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
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