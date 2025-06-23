/**
 * =================================================================================
 * Archivo: estructura.js
 * Descripción: Documentación de la Estructura de Datos para "Everyday Heroes".
 *
 * Propósito:
 * Este archivo define el estándar para la estructuración de todo el contenido
 * del libro de reglas "Everyday Heroes" en librerías de JavaScript. El objetivo es
 * crear una base de datos de contenido consistente, predecible y fácil de
 * analizar (parsear) para una aplicación web.
 *
 * Uso:
 * Cada capítulo del libro se representará en su propio archivo (ej. `capitulo1.js`)
 * y exportará un objeto `const` que sigue esta especificación. La aplicación web
 * principal importará estos objetos para renderizar el contenido dinámicamente.
 * =================================================================================
 */

/**
 * ---------------------------------------------------------------------------------
 * Estructura General del Archivo de Capítulo
 * ---------------------------------------------------------------------------------
 * Cada archivo .js de capítulo exportará un único objeto constante.
 */
const estructuraDeCapitulo = {
  /**
   * @property {string} id - Un identificador único en formato "kebab-case"
   * para el capítulo. Se usará para anclajes HTML, IDs de CSS, etc.
   */
  id: "capitulo-x",

  /**
   * @property {string} titulo - El título completo del capítulo, tal como
   * aparece en el libro.
   */
  titulo: "Título del Capítulo",

  /**
   * @property {number} numero - El número del capítulo para ordenamiento y referencia.
   */
  numero: 0,

  /**
   * @property {Array<Object>} contenido - Un array ordenado de objetos, donde
   * cada objeto representa un bloque de contenido. El orden de los objetos en
   * este array determina el orden de renderizado en la página. Cada objeto
   * debe tener una propiedad `tipo` que define cómo debe ser interpretado.
   */
  contenido: [
    // ... Ver la especificación de tipos de contenido a continuación.
  ],
};


/**
 * =================================================================================
 * ESPECIFICACIÓN DE TIPOS DE CONTENIDO
 *
 * A continuación se documentan todos los posibles valores para la propiedad `tipo`
 * de los objetos que van dentro del array `contenido`.
 * =================================================================================
 */
const documentacionDeTipos = {

  // -------------------------------------------------------------------------------
  // Tipos Básicos de Texto: Para la jerarquía estándar de contenido.
  // -------------------------------------------------------------------------------

  introduccion: {
    descripcion: "Usado para el párrafo inicial o la sinopsis de un capítulo. Generalmente es el primer elemento del array `contenido`.",
    propiedades: "`tipo` (string), `texto` (string)",
    ejemplo: {
      tipo: "introduccion",
      texto: "La creación de personajes es una de las alegrías de cualquier juego de rol. Hemos hecho nuestro mejor esfuerzo para que las reglas sean lo suficientemente flexibles para jugar una amplia variedad de héroes de acción modernos."
    }
  },

  titulos: {
    descripcion: "Títulos de sección de diferentes niveles (h2, h3, h4) para estructurar el contenido del capítulo.",
    propiedades: "`tipo` (string: 'h2'|'h3'|'h4'), `texto` (string)",
    ejemplo: [
      { tipo: "h2", texto: "Tu Tipo de Héroe" },
      { tipo: "h3", texto: "Tres Enfoques" },
      { tipo: "h4", texto: "Enfoque Conceptual" },
    ]
  },

  parrafo: {
    descripcion: "Un bloque de texto estándar. El texto puede contener etiquetas HTML simples como `<strong>` para negritas o `<em>` para cursivas para mantener el formato original.",
    propiedades: "`tipo` (string), `texto` (string)",
    ejemplo: {
      tipo: "parrafo",
      texto: "Tu héroe es el protagonista de una historia de <strong>Everyday Heroes</strong>. Puedes interpretar a un héroe que nunca rompe la ley y siempre se esfuerza por hacer el bien, o puedes ser un héroe a regañadientes que principalmente se cuida a sí mismo pero termina involucrándose y salvando el día a pesar de sus convicciones."
    }
  },

  // -------------------------------------------------------------------------------
  // Tipos de Listas: Para viñetas y definiciones.
  // -------------------------------------------------------------------------------

  lista: {
    descripcion: "Una lista de viñetas simple (<ul>).",
    propiedades: "`tipo` (string), `items` (Array de strings)",
    ejemplo: {
      tipo: "lista",
      items: [
        "Algunos amigos o extraños amigables para jugar.",
        "Una copia del Libro de Reglas de Everyday Heroes.",
        "Un juego de dados poliédricos (reales o virtuales), incluyendo un d4, d6, d8, d10, d12 y d20."
      ]
    }
  },

  lista_definicion: {
    descripcion: "Usado para pares de término-definición (<dl>). Ideal para Trasfondos, Profesiones y Dotes.",
    propiedades: "`tipo` (string), `items` (Array de objetos con `termino` y `definicion`)",
    ejemplo: {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Aumento de Puntuación de Característica",
          definicion: "Incrementa tu puntuación de Sabiduría o Carisma en 1, hasta un máximo de 20."
        },
        {
          termino: "Rasgo Especial: Discurso Inspirador",
          definicion: "Tienes ventaja en las tiradas de Carisma (Persuasión) hechas para promover una causa o convencer a la gente de que la apoye."
        }
      ]
    }
  },

  // -------------------------------------------------------------------------------
  // Tipos de Tablas: Para datos tabulares.
  // -------------------------------------------------------------------------------

  tabla: {
    descripcion: "Para cualquier tabla de datos. La estructura con `encabezados` y `filas` separadas permite implementar fácilmente funcionalidades dinámicas como ordenar y filtrar con JavaScript.",
    propiedades: "`tipo` (string), `id_tabla` (string), `titulo` (string, opcional), `encabezados` (Array de strings), `filas` (Array de arrays de strings)",
    ejemplo: {
      tipo: "tabla",
      id_tabla: "tabla-arquetipos",
      titulo: "Resumen de Arquetipos y Clases",
      encabezados: ["Arquetipo", "Clase y Descripción", "Habilidades Clave", "Simplicidad"],
      filas: [
        ["Fuerte", "El BRAWLER es un guerrero directo que puede pelear con cualquier cosa.", "Fuerza, Constitución", "Media"],
        ["Ágil", "El ARTISTA MARCIAL ataca y se mueve rápidamente en una pelea.", "Destreza, Constitución", "Simple"],
        ["Inteligente", "El HACKER domina las computadoras y la era digital.", "Inteligencia", "Compleja"]
      ]
    }
  },

  tabla_destacada: {
    descripcion: "Una variante visual de la tabla, para recuadros especiales como la tabla de 'Bonificador de Competencia por Nivel'. Se renderizará con un estilo CSS diferente.",
    propiedades: "Las mismas que el tipo `tabla`.",
    ejemplo: {
      tipo: "tabla_destacada",
      id_tabla: "tabla-bono-competencia",
      titulo: "Bonificador de Competencia por Nivel",
      encabezados: ["Nivel de Héroe", "Bonificador de Competencia"],
      filas: [
        ["1-4", "+2"],
        ["5-8", "+3"],
        ["9-10", "+4"]
      ]
    }
  },

  // -------------------------------------------------------------------------------
  // Tipos de Contenido Especializado: Para componentes complejos y recurrentes.
  // -------------------------------------------------------------------------------

  nota_especial: {
    descripcion: "Para recuadros de texto, ejemplos de juego o notas que necesitan destacarse visualmente del flujo normal del texto.",
    propiedades: "`tipo` (string), `titulo` (string, opcional), `texto` (string)",
    ejemplo: {
      tipo: "nota_especial",
      titulo: "Ejemplo de Juego de Rol",
      texto: "Cinco amigos están reunidos alrededor de una mesa de comedor. Tienen algunos libros de juego, algunos dados, bocadillos, bebidas y otros elementos básicos de juego. Emma es la GM..."
    }
  },

  habilidad_progresiva: {
    descripcion: "Específicamente para talentos, planes o trucos que mejoran a diferentes niveles. Esto permite mostrar la progresión de la habilidad de forma clara.",
    propiedades: "`tipo` (string), `nombre` (string), `descripcion_base` (string), `mejoras` (Array de objetos con `nivel` y `descripcion`)",
    ejemplo: {
      tipo: "habilidad_progresiva",
      nombre: "Maniobras Coordinadas",
      descripcion_base: "Ya le dijiste a tu equipo exactamente a dónde ir en esta situación. Cuando activas este plan como una acción bonus, tú y cada aliado que pueda verte u oírte pueden moverse inmediatamente hasta su velocidad de movimiento.",
      mejoras: [
        { nivel: 5, descripcion: "Cada héroe afectado puede realizar la acción de Correr (Dash) como una acción bonus durante las próximas 10 rondas." },
        { nivel: 9, descripcion: "Durante el próximo minuto, la velocidad de movimiento de cada héroe afectado se incrementa en 10 pies." }
      ]
    }
  },

  complicacion_persecucion: {
    descripcion: "Para estructurar las complicaciones de las persecuciones detalladas en los capítulos 11 y 12. Cada una es un bloque autocontenido.",
    propiedades: "`tipo` (string), `nombre` (string), `descripcion` (string), `tipo_complicacion` (string), `sugerencias_ganar_terreno` (Array de strings)",
    ejemplo: {
      tipo: "complicacion_persecucion",
      nombre: "Carro de Frutas",
      descripcion: "Un mercader tirando de un carro cargado con productos se mueve hacia el camino de la persecución, amenazando con hacer volar frutas por todas partes.",
      tipo_complicacion: "Peligro (Hazard). Tirada de salvación de Fuerza o Destreza.",
      sugerencias_ganar_terreno: [
        "Culpa a un oponente para que el dueño del carro lo antagonice a él y no a ti. Carisma (Engaño) contra Carisma (Persuasión).",
        "Lanza la fruta derramada a un oponente. Fuerza (Atletismo) contra Constitución (Resistencia)."
      ]
    }
  },

  bloque_estadisticas_npc: {
    descripcion: "El tipo más complejo, diseñado para contener toda la información de un PNJ (Personaje No Jugador) del bestiario del Capítulo 15. Contiene múltiples sub-objetos.",
    propiedades: "Ver el ejemplo para un desglose completo de las propiedades anidadas.",
    ejemplo: {
      tipo: "bloque_estadisticas_npc",
      nombre: "Goon",
      cr: "½",
      tipo_criatura: "Persona (humano) de tamaño Medio",
      defensa: 11,
      puntos_golpe: "26 (4d8 + 8)",
      armadura: "Chaqueta de cuero (AV 1)",
      velocidad: "30 pies",
      estadisticas: {
        fuerza: "15 (+2)",
        destreza: "11 (+0)",
        constitucion: "14 (+2)",
        inteligencia: "8 (-1)",
        sabiduria: "9 (-1)",
        carisma: "10 (+0)"
      },
      habilidades_bonus: "Resistencia +4, Intimidación +2, Callejeo +3",
      sentidos: "Percepción pasiva 9",
      roles: ["Mole (Hulk)", "Cuerpo a cuerpo (Melee)"],
      equipo: "Objeto contundente mediano (bate de béisbol, silla), ropa de calle, cosas de bolsillo.",
      rasgos_especiales: [
        {
          nombre: "Dogpile",
          descripcion: "El goon tiene ventaja en una tirada de ataque contra un enemigo si al menos uno de los aliados del goon está a 5 pies de ese enemigo y el aliado no está Incapacitado."
        }
      ],
      acciones: [
        {
          nombre: "Multiataque",
          descripcion: "El goon realiza dos ataques: uno con su arma improvisada, y luego uno con su golpe sin armas como acción bonus."
        },
        {
          nombre: "Arma Improvisada",
          descripcion: "Ataque de Melé: +4 para impactar, PV 1, alcance 5 pies, un objetivo. Impacto: 6 (1d8 + 2) de daño contundente."
        }
      ]
    }
  },

  diagrama: {
    descripcion: "Para representar una imagen o un diagrama, como el 'Árbol de Equipamiento'.",
    propiedades: "`tipo` (string), `src` (string, ruta a la imagen), `alt` (string, texto alternativo para accesibilidad y SEO)",
    ejemplo: {
      tipo: "diagrama",
      src: "assets/images/arbol-equipamiento.png",
      alt: "Diagrama que muestra la progresión de las competencias de equipamiento, desde Básico hasta Militar, Improvisado e Histórico."
    }
  }
};
