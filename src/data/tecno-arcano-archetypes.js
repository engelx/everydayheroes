// src/data/tecno-arcano-archetypes.js
/**
 * Contiene los detalles de los arquetipos de Tecno-Arcano (dados de golpe, talentos, etc.).
 * La clave de cada entrada corresponde a la `archetypeId` en tecno-arcano-classes.js.
 */
export const tecnoArcanoArchetypes = {
    'ta-arch-analista': {
        name: "Mente Maestra (Modificado)",
        hitDie: 8,
        defense: { name: "Astuto", value: "inteligencia" },
        talents: {
          1: ["Know-It-All", "You're Doing It Wrong"],
          3: ["Análisis de Campo (Reemplaza Plans)"],
        },
        specialAbility: {
          name: "Análisis de Campo",
          description: "Usas Cargas de Poder (CP). Pulso de Interferencia (1 CP): Fuerza a un lanzador a superar una salvación de Sabiduría o su conjuro falla. Análisis de Debilidad (1 CP): Ganas ventaja y +1d8 daño eléctrico en tu próximo ataque. Campo de Supresión (3 CP): Aumenta la CD de concentración enemiga en un área."
        }
    },
    'ta-arch-guardia': {
        name: "Comando (Modificado)",
        hitDie: 10,
        defense: { name: "Resistente", value: "constitucion" },
        talents: {
          1: ["Fighting Spirit", "Watch your Six"],
          3: ["Sobrecarga de Sistema (Reemplaza Extra Effort)", "Grenadier"],
          7: ["Aumento Avanzado (Reemplaza Maximum Effort)"]
        },
        specialAbility: {
          name: "Poder Tecnológico",
          description: "Usas Cargas de Poder (CP). Sobrecarga de Sistema (2 CP): Tus ataques ganan +1d4 de daño eléctrico por 1 min. Aumento Avanzado (Nivel 7): Elige Blindaje Subdérmico (resistencia a daño físico) o Miopía Táctica (visión en la oscuridad)."
        }
    },
    'ta-arch-tecnico': {
        name: "Ingeniero (Modificado)",
        hitDie: 8,
        defense: { name: "Astuto", value: "inteligencia" },
        talents: {
            1: ["Mechanical Companion", "Field Repairs"],
            3: ["Protocolos de Dron (Reemplaza Fine Tuning)"],
            7: ["Tecnomancia (Reemplaza Engineer Plans)"]
        },
        specialAbility: {
          name: "Control de Drones",
          description: "Usas Cargas de Poder (CP). Protocolos de Dron (1 CP): Tu dron puede usar Ayudar, Esquivar o Desarmar. Tecnomancia (2 CP): Otorga 10 PG temporales a tu dron."
        }
    },
    'ta-arch-agente': {
        name: "Pícaro (Modificado)",
        hitDie: 8,
        defense: { name: "Ágil", value: "destreza" },
        talents: {
            1: ["Vital Strike"],
            3: ["Generador de Ruido Blanco (Reemplaza Swift)", "Surprise Attack"],
            7: ["Generador de Silencio (Reemplaza Covert Expertise)"]
        },
        specialAbility: {
            name: "Tecnología de Sigilo",
            description: "Usas Cargas de Poder (CP). Generador de Ruido Blanco (2 CP): Crea una esfera de 60 pies de ruido. Generador de Silencio (3 CP): Crea una esfera de 20 pies de silencio absoluto."
        }
    },
    'ta-arch-paladin': {
        name: "Líder (Modificado)",
        hitDie: 8,
        defense: { name: "Carismático", value: "carisma" },
        talents: {
            1: ["Command"],
            3: ["Palabra de Convicción (Reemplaza Encouraging Banter)"],
            7: ["Égida Sagrada (Reemplaza Rousing Speech)"]
        },
        specialAbility: {
            name: "Poder Divino",
            description: "Usas Puntos Arcanos (PA). Palabra de Convicción (1 PA): Un aliado añade 1d4 a su próxima tirada. Égida Sagrada (3 PA): Creas un aura de resistencia elemental."
        }
    },
    'ta-arch-clerigo': {
        name: "Detective (Modificado)",
        hitDie: 8,
        defense: { name: "Sabio", value: "sabiduria" },
        talents: {
            1: ["Deduction", "Sixth Sense", "Toque Restaurador (Reemplaza Weak Spot)"],
            5: ["Santuario Menor (Reemplaza Roll With It)"]
        },
        specialAbility: {
            name: "Milagros de Fe",
            description: "Usas Puntos Arcanos (PA). Toque Restaurador (1 PA): Curas 1d8 + mod. SAB, o infliges ese daño radiante a no-muertos. Santuario Menor (2 PA): Un atacante debe superar una salvación de Sabiduría para poder atacarte."
        }
    },
    'ta-arch-inquisidor': {
        name: "Pícaro (Modificado)",
        hitDie: 8,
        defense: { name: "Ágil", value: "destreza" },
        talents: {
            1: ["Golpe Consagrado (Reemplaza Vital Strike)"],
            3: ["Sentir la Herejía (Reemplaza Swift)", "Surprise Attack"],
            7: ["Cadenas de Luz (Reemplaza Covert Expertise)"]
        },
        specialAbility: {
            name: "Poder Sagrado",
            description: "Usas Puntos Arcanos (PA). Golpe Consagrado: +1d6 de daño radiante si tienes ventaja. Sentir la Herejía (1 PA): Detectas demonios/no-muertos. Cadenas de Luz (3 PA): Inmovilizas un objetivo."
        }
    },
    'ta-arch-chaman': {
        name: "Maestro (Modificado)",
        hitDie: 8,
        defense: { name: "Sabio", value: "sabiduria" },
        talents: {
            1: ["Mystic Arts", "Ki"],
            3: ["Visión Espiritual (Reemplaza Dance in the Storm)"],
            5: ["Pactos Espirituales (Reemplaza Advanced Combat Training)"]
        },
        specialAbility: {
            name: "Conexión Espiritual",
            description: "Usas Puntos Arcanos (PA). Visión Espiritual (1 PA): Ganas visión en la oscuridad y ves invisibilidad. Pactos Espirituales: Aprendes conjuros adicionales de la lista de Druida."
        }
    },
    'ta-arch-hijo-waraira': {
        name: "Cazador (Modificado)",
        hitDie: 10,
        defense: { name: "Sabio", value: "sabiduria" },
        talents: {
            1: ["Hunting Companion", "Hunter's Mark"],
            3: ["Vínculo Espiritual (Reemplaza Companion Training)"],
            7: ["Piel de la Montaña (Reemplaza Learn Their Moves)"]
        },
        specialAbility: {
            name: "Vínculo Natural",
            description: "Usas Puntos Arcanos (PA). Vínculo Espiritual (2 PA): Ves y oyes a través de tu compañero animal. Piel de la Montaña (3 PA): Tú y tu compañero obtenéis resistencia a daño físico."
        }
    },
     'ta-arch-sicario': {
        name: "Francotirador (Modificado)",
        hitDie: 10,
        defense: { name: "Ágil", value: "destreza" },
        talents: {
            1: ["Marca del Malandro (Reemplaza Gunslinging/Sharpshooting)"],
            7: ["Bala Maldita (Reemplaza Headshot)"]
        },
        specialAbility: {
            name: "Magia de Pólvora",
            description: "Usas Puntos Arcanos (PA). Marca del Malandro (1 PA): Tus ataques a distancia ganan +1d6 de daño necrótico por 1 min. Bala Maldita (3 PA): Un ataque a distancia impacta automáticamente y puede Asustar al objetivo."
        }
    },
    'ta-arch-quimico': {
        name: "Científico (Modificado)",
        hitDie: 8,
        defense: { name: "Astuto", value: "inteligencia" },
        talents: {
            1: ["Químicos de la Calle (Reemplaza Dangerous Stuff)"],
            7: ["Nuevo Plan: Droga de Combate"]
        },
        specialAbility: {
            name: "Alquimia Callejera",
            description: "Usas Puntos Arcanos (PA) para tus planes. Droga de Combate (3 PA): Otorga 10 PG temporales, ventaja en ataques de Fuerza, inmunidad a Aturdido y +15 pies de velocidad a un aliado, a cambio de un nivel de Agotamiento."
        }
    },
    'ta-arch-teurgo': {
        name: "Luchador de MMA (Modificado)",
        hitDie: 12,
        defense: { name: "Fuerte", value: "fuerza" },
        talents: {
            1: ["Heavy Hands", "Pin"],
            3: ["Glifo de Enlace (Reemplaza Jab)"],
            9: ["Puño Rúnico (Reemplaza KO Punch)"]
        },
        specialAbility: {
            name: "Combate Rúnico",
            description: "Usas Puntos Arcanos (PA). Glifo de Enlace (1 PA): Un enemigo recibe 1d6 de daño de fuerza si se mueve. Puño Rúnico (3 PA): Un ataque sin armas inflige +4d8 de daño de fuerza y puede Aturdir."
        }
    },
    'ta-arch-contramago': {
        name: "Guardaespaldas (Modificado)",
        hitDie: 12,
        defense: { name: "Resistente", value: "constitucion" },
        talents: {
            1: ["Get Down", "Take a Bullet"],
            3: ["Disipar Magia (Reemplaza Come Get Some)"],
            7: ["Manto de Nulificación (Reemplaza Vigilance)"]
        },
        specialAbility: {
            name: "Anulación Arcana",
            description: "Usas Puntos Arcanos (PA). Disipar Magia (2 PA): Como reacción, intentas anular un conjuro enemigo. Manto de Nulificación: Ganas ventaja en salvaciones contra conjuros, y los aliados cercanos también."
        }
    },
    'ta-arch-guerrillero': {
        name: "Pícaro (Modificado)",
        hitDie: 8,
        defense: { name: "Ágil", value: "destreza" },
        talents: {
            1: ["Vital Strike"],
            3: ["Tácticas de Emboscada (Reemplaza Surprise Attack)"],
            5: ["Opcional: Don Mágico (Reemplaza Roll With It)"]
        },
        specialAbility: {
            name: "Guerra de Guerrillas",
            description: "Tácticas de Emboscada: Si actúas antes que un enemigo en el primer turno, tus ataques contra él infligen +1d8 de daño adicional. Don Mágico (Opcional): Puedes obtener una habilidad mágica elemental."
        }
    }
};