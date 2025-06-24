// src/components/wizard/StepSkills.jsx
import React, { useState, useEffect, useMemo } from 'react';

const StepSkills = ({ character, updateSkillProficiencies, selectedClass, selectedBackground, nextStep, prevStep }) => {
    const [selectedSkills, setSelectedSkills] = useState(character.skillProficiencies);

    const availableClassSkills = selectedClass?.skillChoices || [];
    const classSkillCount = selectedClass?.skillChoicesCount || 0;
    
    const backgroundSkillsFixed = useMemo(() => selectedBackground?.skillProficiencies?.fixed || [], [selectedBackground]);
    const backgroundSkillChoices = useMemo(() => selectedBackground?.skillProficiencies?.choice || [], [selectedBackground]);
    const backgroundSkillCount = useMemo(() => selectedBackground?.skillProficiencies?.count || 0, [selectedBackground]);
    const anySkillCount = useMemo(() => (selectedBackground?.skillProficiencies?.any || 0), [selectedBackground]);
    
    const allAvailableSkills = Object.keys(allSkills);

    const totalRequired = classSkillCount + backgroundSkillCount + anySkillCount;
    const isSelectionComplete = selectedSkills.length === totalRequired;

    useEffect(() => {
        // Añadir automáticamente las competencias fijas
        setSelectedSkills(prev => [...new Set([...prev, ...backgroundSkillsFixed])]);
    }, [backgroundSkillsFixed]);

    const handleSkillToggle = (skill, sourceList, maxCount) => {
        const isSelected = selectedSkills.includes(skill);
        const currentSelectionsInList = selectedSkills.filter(s => sourceList.includes(s)).length;

        if (isSelected) {
            // No permitir deseleccionar habilidades fijas
            if (backgroundSkillsFixed.includes(skill)) return;
            setSelectedSkills(selectedSkills.filter(s => s !== skill));
        } else {
            if (currentSelectionsInList < maxCount) {
                setSelectedSkills([...selectedSkills, skill]);
            }
        }
    };

    const handleSave = () => {
        updateSkillProficiencies([...new Set([...selectedSkills, ...backgroundSkillsFixed])]);
        nextStep();
    };

    return (
        <div>
            <h2>Paso 5: Elige tus Competencias de Habilidad</h2>
            <p>Selecciona las competencias de habilidad que te otorgan tu clase y trasfondo. Debes elegir un total de <strong>{totalRequired}</strong> habilidades opcionales.</p>
            
            {classSkillCount > 0 && (
                <>
                    <h4>De tu Clase ({selectedClass.name}): Elige {classSkillCount}</h4>
                    <div className="options-grid">
                        {availableClassSkills.map(skill => (
                            <div key={skill} className={`option-card-small ${selectedSkills.includes(skill) ? 'selected' : ''}`} onClick={() => handleSkillToggle(skill, availableClassSkills, classSkillCount)}>
                                {skill.replace(/_/g, ' ')}
                            </div>
                        ))}
                    </div>
                </>
            )}

            <h4>De tu Trasfondo ({selectedBackground.name})</h4>
            {backgroundSkillsFixed.length > 0 && <p>Automáticas: {backgroundSkillsFixed.join(', ').replace(/_/g, ' ')}</p>}
            
            {backgroundSkillCount > 0 && (
                 <>
                    <p>Elige {backgroundSkillCount}:</p>
                    <div className="options-grid">
                        {backgroundSkillChoices.map(skill => (
                           <div key={skill} className={`option-card-small ${selectedSkills.includes(skill) ? 'selected' : ''}`} onClick={() => handleSkillToggle(skill, backgroundSkillChoices, backgroundSkillCount)}>
                                {skill.replace(/_/g, ' ')}
                            </div>
                        ))}
                    </div>
                 </>
            )}
             {anySkillCount > 0 && (
                 <>
                    <p>Elige {anySkillCount} de cualquier habilidad:</p>
                    {/* Esta parte podría necesitar un selector más complejo, pero se omite por brevedad */}
                 </>
            )}


            <div className="wizard-navigation">
                <button onClick={prevStep}>Anterior</button>
                <button onClick={handleSave} disabled={!isSelectionComplete}>Siguiente ({selectedSkills.length}/{totalRequired})</button>
            </div>
        </div>
    );
};

// Define allSkills fuera o impórtalo si lo mueves a otro archivo
const allSkills = {
    acrobacias: 'Destreza', atletismo: 'Fuerza', artes_y_oficios: 'Inteligencia',
    computadoras: 'Inteligencia', engaño: 'Carisma', resistencia: 'Constitución',
    perspicacia: 'Sabiduría', intimidacion: 'Carisma', investigacion: 'Inteligencia',
    mecanica: 'Inteligencia', medicina: 'Inteligencia', ciencias_naturales: 'Inteligencia',
    percepcion: 'Sabiduría', interpretacion: 'Carisma', persuasion: 'Carisma',
    seguridad: 'Inteligencia', juego_de_manos: 'Destreza', ciencias_sociales: 'Inteligencia',
    sigilo: 'Destreza', callejeo: 'Sabiduría', supervivencia: 'Sabiduría', vehiculos: 'Destreza'
};


export default StepSkills;