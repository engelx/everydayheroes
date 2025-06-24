// src/data/archetypes.js
export const archetypes = {
  fuerte: {
    name: "Héroe Fuerte",
    hitDie: 10,
    initialHp: 10,
    hpPerLevel: 6,
    defense: {
      name: "Escudo de Carne",
      formula: (strMod, dexMod, conMod, wisMod, intMod, chaMod, defenseBonus) => 10 + strMod + defenseBonus,
    },
    talents: {
      1: "Ataque Temerario",
      2: "Ataque Poderoso",
    }
  },
  agil: {
    name: "Héroe Ágil",
    hitDie: 8,
    initialHp: 8,
    hpPerLevel: 5,
    defense: {
      name: "Movimiento Ágil",
      formula: (strMod, dexMod, conMod, wisMod, intMod, chaMod, defenseBonus) => 10 + dexMod + defenseBonus,
    },
    talents: {
      1: "Reflejos Rápidos",
      2: "Rapidez",
    }
  },
  resistente: {
    name: "Héroe Resistente",
    hitDie: 12,
    initialHp: 12,
    hpPerLevel: 7,
    defense: {
      name: "Piel Dura",
      formula: (strMod, dexMod, conMod, wisMod, intMod, chaMod, defenseBonus) => 10 + Math.max(conMod, dexMod) + defenseBonus,
    },
    talents: {
      1: "Revancha",
      2: "Duro como un Clavo",
    }
  },
  inteligente: {
    name: "Héroe Inteligente",
    hitDie: 6,
    initialHp: 6,
    hpPerLevel: 4,
    defense: {
      name: "Tácticas Superiores",
      formula: (strMod, dexMod, conMod, wisMod, intMod, chaMod, defenseBonus) => 10 + intMod + defenseBonus,
    },
    talents: {
      1: "Planes, Genio",
      2: "Reactivación Mental",
    }
  },
  sabio: {
    name: "Héroe Sabio",
    hitDie: 10,
    initialHp: 10,
    hpPerLevel: 5,
    defense: {
      name: "Conoce a tu Enemigo",
      formula: (strMod, dexMod, conMod, wisMod, intMod, chaMod, defenseBonus) => 10 + Math.max(wisMod, dexMod) + defenseBonus,
    },
    talents: {
      1: "Enfoque, Concentración",
      2: "Un Paso por Delante",
    }
  },
  encantador: {
    name: "Héroe Encantador",
    hitDie: 8,
    initialHp: 8,
    hpPerLevel: 5,
    defense: {
      name: "¡No en la Cara!",
      formula: (strMod, dexMod, conMod, wisMod, intMod, chaMod, defenseBonus) => 10 + Math.max(chaMod, dexMod) + defenseBonus,
    },
    talents: {
      1: "Influencia, Trucos",
      2: "Encanto",
    }
  },
};