// src/hooks/useCharacterBuilder.js
import { useState, useCallback } from 'react';

const initialCharacterState = {
  name: '',
  details: {
    age: '',
    persona: '',
    // ... otros detalles que quieras agregar
  },
  level: 1,
  classId: null,
  archetypeId: null,
  backgroundId: null,
  professionId: null,
  abilityScores: {
    base: { fuerza: 8, destreza: 8, constitucion: 8, inteligencia: 8, sabiduria: 8, carisma: 8 },
    bonuses: { fuerza: 0, destreza: 0, constitucion: 0, inteligencia: 0, sabiduria: 0, carisma: 0 },
    final: { fuerza: 8, destreza: 8, constitucion: 8, inteligencia: 8, sabiduria: 8, carisma: 8 }
  },
  skillProficiencies: [],
  equipmentProficiencies: [],
  languages: ['Nativo'],
  wealthLevel: 0,
  equipment: {
    iconic: [],
    recommended: { pack: '', weapons: ''}
  },
  specialFeatures: {
    background: null,
    profession: null
  }
};

export const useCharacterBuilder = () => {
  const [character, setCharacter] = useState(initialCharacterState);

  const updateCharacter = useCallback((newValues) => {
    setCharacter(prev => ({ ...prev, ...newValues }));
  }, []);

  const setClass = useCallback((classData, archetypeData) => {
    setCharacter(prev => ({
      ...prev,
      classId: classData.id,
      archetypeId: classData.archetypeId,
      skillProficiencies: [], // Resetear para la nueva clase
      equipmentProficiencies: classData.equipmentProficiencies || [],
      equipment: {
        ...prev.equipment,
        recommended: classData.equipmentRecommendations || { pack: '', weapons: ''}
      }
    }));
  }, []);

  const setBackground = useCallback((backgroundData) => {
    setCharacter(prev => {
        const newBonuses = { ...prev.abilityScores.bonuses };
        if (backgroundData.abilityScoreIncrease.fixed) {
            const [ability, amount] = Object.entries(backgroundData.abilityScoreIncrease.fixed)[0];
            newBonuses[ability] = (newBonuses[ability] || 0) + amount;
        }

        const newLanguages = [...prev.languages];
        if (backgroundData.language) {
            newLanguages.push('Idioma de Trasfondo');
        }

        return {
            ...prev,
            backgroundId: backgroundData.id,
            skillProficiencies: [], // Resetear para el nuevo trasfondo
            equipmentProficiencies: [...new Set([...prev.equipmentProficiencies, ...(backgroundData.equipmentProficiencies || [])])],
            equipment: { ...prev.equipment, iconic: [...prev.equipment.iconic, backgroundData.iconicEquipment].filter(Boolean) },
            specialFeatures: { ...prev.specialFeatures, background: backgroundData.specialFeature },
            abilityScores: { ...prev.abilityScores, bonuses: newBonuses },
            languages: newLanguages
        };
    });
  }, []);

  const setProfession = useCallback((professionData) => {
    setCharacter(prev => {
        const newBonuses = { ...prev.abilityScores.bonuses };
        if (professionData.abilityScoreIncrease.fixed) {
            Object.entries(professionData.abilityScoreIncrease.fixed).forEach(([ability, amount]) => {
                newBonuses[ability] = (newBonuses[ability] || 0) + amount;
            });
        }
        const newLanguages = [...prev.languages];
        if (professionData.language) {
            newLanguages.push('Idioma de Profesión');
        }
        return {
            ...prev,
            professionId: professionData.id,
            skillProficiencies: [], // Resetear para la nueva profesion
            equipmentProficiencies: [...new Set([...prev.equipmentProficiencies, ...(professionData.equipmentProficiencies || [])])],
            equipment: { ...prev.equipment, iconic: [...prev.equipment.iconic, professionData.iconicEquipment].filter(Boolean) },
            specialFeatures: { ...prev.specialFeatures, profession: professionData.specialFeature },
            abilityScores: { ...prev.abilityScores, bonuses: newBonuses },
            wealthLevel: professionData.wealthLevel,
            languages: newLanguages
        };
    });
  }, []);

  const setAbilityScores = useCallback((baseScores) => {
    setCharacter(prev => {
      const finalScores = {};
      Object.keys(baseScores).forEach(ability => {
        finalScores[ability] = baseScores[ability] + (prev.abilityScores.bonuses[ability] || 0);
      });
      return {
        ...prev,
        abilityScores: {
          ...prev.abilityScores,
          base: baseScores,
          final: finalScores
        }
      };
    });
  }, []);

   const updateSkillProficiencies = useCallback((skills) => {
        setCharacter(prev => ({
            ...prev,
            skillProficiencies: skills
        }));
    }, []);

  const resetCharacter = useCallback(() => {
    setCharacter(initialCharacterState);
  }, []);


  return { character, updateCharacter, setClass, setBackground, setProfession, setAbilityScores, updateSkillProficiencies, resetCharacter };
};