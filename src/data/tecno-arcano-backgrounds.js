// src/data/tecno-arcano-backgrounds.js
/**
 * Contiene los trasfondos de facción de la expansión Tecno-Arcano.
 * La estructura está diseñada para ser compatible con el componente StepBackground.jsx.
 */
export const tecnoArcanoBackgrounds = [
  {
    id: 'ta-bg-eje',
    name: 'Operativo del Eje',
    source: 'Tecno-Arcano',
    description: 'Fuiste reclutado por la corporación que está construyendo el futuro. Crees que la tecnología es la única respuesta lógica al caos y ves la magia como una anomalía peligrosa.',
    abilityScoreIncrease: {
      fixed: { inteligencia: 1 },
      choice: ['fuerza', 'destreza'],
      amount: 1,
    },
    equipmentProficiencies: {
        fixed: ['equipo_basico', 'equipo_avanzado'],
    },
    skillProficiencies: {
      fixed: ['ciencias_naturales', 'tecnologia'],
    },
    specialFeature: {
      name: 'Red Táctica',
      description: 'Una vez por descanso corto, puedes usar tu acción adicional para recibir información táctica de la red del Eje. Obtienes ventaja en tu próxima tirada de ataque o prueba de habilidad.',
    },
  },
  {
    id: 'ta-bg-custodes',
    name: 'Guardián de los Custodes',
    source: 'Tecno-Arcano',
    description: 'Tu fe es tu escudo y tu espada. Ves la magia como un don divino y la tecnología desenfrenada como una profanación.',
    abilityScoreIncrease: {
      fixed: { sabiduria: 1 },
      choice: ['constitucion', 'carisma'],
      amount: 1,
    },
    equipmentProficiencies: {
        fixed: ['equipo_basico', 'equipo_historico'],
    },
    skillProficiencies: {
      fixed: ['persuasion', 'perspicacia'],
    },
    specialFeature: {
      name: 'Baluarte de Fe',
      description: 'Cuando un aliado a 5 pies de ti vaya a recibir daño, puedes usar tu reacción para reducir ese daño a la mitad.',
    },
  },
  {
    id: 'ta-bg-colectivo',
    name: 'Iniciado del Colectivo',
    source: 'Tecno-Arcano',
    description: 'La tierra y los espíritus te hablan. Escuchas la voz de la naturaleza ahogada por el ruido de la metrópolis.',
    abilityScoreIncrease: {
      fixed: { carisma: 1 },
      choice: ['sabiduria', 'constitucion'],
      amount: 1,
    },
    equipmentProficiencies: {
        fixed: ['equipo_basico', 'equipo_improvisado'],
    },
    skillProficiencies: {
      fixed: ['supervivencia', 'callejeo'],
    },
    specialFeature: {
      name: 'Susurro del Ávila',
      description: 'Tienes ventaja en pruebas de Carisma (Persuasión) y Trato con Animales para calmar a una criatura.',
    },
  },
  {
    id: 'ta-bg-pranes',
    name: 'Ejecutor de los Pranes',
    source: 'Tecno-Arcano',
    description: 'Naciste y te criaste en la calle, donde la única ley es la del más fuerte. La magia es simplemente otra herramienta para asegurar tu posición.',
    abilityScoreIncrease: {
      fixed: { carisma: 1 },
      choice: ['fuerza', 'destreza'],
      amount: 1,
    },
    equipmentProficiencies: {
        fixed: ['equipo_basico', 'equipo_avanzado'],
    },
    skillProficiencies: {
      fixed: ['intimidacion', 'callejeo'],
    },
    specialFeature: {
      name: 'Instinto Callejero',
      description: 'Tienes ventaja en las pruebas de iniciativa y no puedes ser sorprendido en entornos urbanos.',
    },
  },
  {
    id: 'ta-bg-catedra',
    name: 'Erudito Arcano',
    source: 'Tecno-Arcano',
    description: 'Para ti, la magia no es un misterio, sino una ciencia por descubrir. El conocimiento es poder, y tú lo buscas incansablemente. (Para Cátedra Arcana o Círculo de la Candelaria).',
    abilityScoreIncrease: {
      fixed: { inteligencia: 1 },
      choice: ['destreza', 'carisma'],
      amount: 1,
    },
    equipmentProficiencies: {
        fixed: ['equipo_basico'],
    },
    skillProficiencies: {
      fixed: ['ciencias_sociales'],
      choice: ['investigacion', 'engaño', 'persuasion'],
      count: 1,
    },
    specialFeature: {
      name: 'Saber Enciclopédico',
      description: 'Añades el doble de tu bonificador de competencia a las pruebas de Inteligencia para recordar información arcana o histórica.',
    },
  },
  {
    id: 'ta-bg-independiente',
    name: 'Superviviente de la Autopista',
    source: 'Tecno-Arcano',
    description: 'Has hecho de las ruinas de asfalto y concreto tu hogar. No confías en ninguna facción y dependes solo de tu ingenio y resistencia.',
    abilityScoreIncrease: {
      fixed: { constitucion: 1 },
      choice: ['destreza', 'sabiduria'],
      amount: 1,
    },
    skillProficiencies: {
      fixed: ['supervivencia', 'mecanica'],
    },
    specialFeature: {
      name: 'Nómada Urbano',
      description: 'Tienes ventaja en las salvaciones contra Agotamiento y en pruebas de Sigilo en ruinas urbanas.',
    },
  },
];