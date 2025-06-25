/**
 * Archivo: tecno-arcano-completo.js
 * Descripción: Contiene la expansión completa "Tecno-Arcano" para Everyday Heroes,
 * estructurada según la especificación de 'estructura.js'.
 * Este archivo está 100% completo basado en el PDF "Tecno-Arcano_ Manual Compilado v3.0.pdf".
 */
const tecnoArcanoCompleto = {
  id: "tecno-arcano-expansion-completa",
  titulo: "Expansión: Tecno-Arcano",
  numero: 16, // Asumiendo que es el siguiente capítulo después de los 3 existentes
  contenido: [
    {
      tipo: "h2",
      texto: "Capítulo 1: Fundamentos y Sistemas de Poder"
    },
    {
      tipo: "introduccion",
      texto: "Bienvenidos a las reglas que rigen la caótica realidad de Caracas en 2025. Este capítulo establece las mecánicas centrales que definen la interacción entre la tecnología y la magia, así como los sistemas de poder que los personajes usarán para influir en el mundo."
    },
    {
      tipo: "h3",
      texto: "El Conflicto Tecno-Arcano"
    },
    {
      tipo: "parrafo",
      texto: "La regla fundamental de este universo es la Interferencia Tecno-Arcana. La magia, por su naturaleza, es una fuerza entrópica que reescribe las leyes de la física a pequeña escala. La tecnología, que depende de la consistencia de esas leyes para funcionar, es inherentemente vulnerable a esta fuerza. El uso activo de la magia causa que la tecnología en las cercanías falle de maneras impredecibles y, a menudo, catastróficas. La escala de este efecto disruptivo depende directamente del poder del hechizo lanzado. Visualmente, esta interferencia puede manifestarse como una distorsión en el aire, similar al calor que se eleva del asfalto, acompañada de un zumbido estático o un siseo apenas audible."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-interferencia-tecno-arcana",
      titulo: "Tabla de Interferencia Tecno-Arcana",
      encabezados: ["Nivel del Hechizo", "Radio de Efecto (aprox.)", "Consecuencias sobre la Tecnología"],
      filas: [
        ["0 (Truco)", "Personal (solo el mago)", "Una molestia menor. Reinicio de dispositivos personales (celulares, relojes inteligentes), pérdida de sincronización de auriculares."],
        ["1-3", "3 metros", "Interferencia notable. Luces parpadean violentamente, redes Wi-Fi caen, motores de coches se calan, las miras holográficas se apagan por un instante."],
        ["4-6", "9 metros", "Falla localizada. Apagones en una habitación, borrado de datos en discos duros no protegidos, dispositivos pequeños (como tablets o drones) quedan \"fritos\"."],
        ["7-9", "15 metros", "Falla de infraestructura. Los transformadores en los postes explotan en una lluvia de chispas, los vehículos autónomos pierden el control y se estrellan, los sistemas de seguridad de un edificio se desactivan."],
        ["10+", "30+ metros", "Pulso electromagnético localizado. Destrucción de toda la tecnología no blindada o endurecida en el área. Es un desastre tecno-arcano declarado."]
      ]
    },
    {
      tipo: "h4",
      texto: "Salvación de Sistema (System Save)"
    },
    {
      tipo: "parrafo",
      texto: "Cualquier dispositivo tecnológico atrapado en el radio de un hechizo debe hacer una tirada de salvación (1d20) para resistir la interferencia. La Clase de Dificultad (CD) de esta salvación es igual a 10 + el nivel del hechizo lanzado. El Nivel de Complejidad (NC) del dispositivo, que representa su sofisticación y vulnerabilidad, se suma a la tirada como un bonificador."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-salvacion-sistema",
      titulo: "Tabla de Salvación de Sistema",
      encabezados: ["NC", "Descripción", "Ejemplos", "Modificador a la Salvación", "Consecuencias del Fallo"],
      filas: [
        ["1", "Mecánica Simple", "Armas de fuego, herramientas, poleas", "Ventaja", "El dispositivo se atasca por 1 ronda."],
        ["2", "Mecánica Compleja", "Motor de combustión, generador", "Tirada Normal", "Queda Inoperativo por 1d6 rondas."],
        ["3", "Electrónica Básica", "Miras de punto rojo, radios, sensores", "Tirada normal", "Queda Inoperativo por 1d6 horas. Si falla por 5+, queda Frito."],
        ["4", "Electrónica Avanzada", "Smartphones, drones, PCs, vehículos Tesla", "Desventaja", "Si falla, queda Frito."]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Si el dispositivo falla la tirada de salvación, sufre las consecuencias descritas en la tabla. Si falla por 5 o más puntos, el efecto es peor (un dispositivo queda \"frito\" en lugar de \"inoperativo\", o un vehículo sufre una falla crítica en lugar de simplemente calarse). Un éxito significa que resiste el efecto... por esta vez."
    },
    {
      tipo: "h4",
      texto: "Consecuencias del Fallo"
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Inoperativo",
          definicion: "El dispositivo deja de funcionar temporalmente. Se reinicia, se apaga, se cala. Vuelve a funcionar tras 1d6 rondas o a discreción del DJ."
        },
        {
          termino: "Frito",
          definicion: "El dispositivo sufre un daño físico permanente en sus circuitos. Es inútil hasta que sea reparado por un experto."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Reparación de Equipo \"Frito\""
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Reparación Manual",
          definicion: "Requiere una prueba de Inteligencia (Herramientas de Electrónica). La CD es 15 para tecnología estándar (NC 3) o 20 para tecnología avanzada (NC 4 superior)."
        },
        {
          termino: "Reemplazo por Recursos",
          definicion: "Superar una Prueba de Riqueza con una CD apropiada al valor del objeto, como se detalla en el Capítulo 6."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Combate Asimétrico y Defensas"
    },
    {
      tipo: "parrafo",
      texto: "La lucha en Caracas no es un simple intercambio de disparos. Es una partida de ajedrez donde las piezas de un jugador pueden hacer que el tablero del otro se derrita."
    },
    {
      tipo: "h4",
      texto: "Magia vs. Pólvora: Tácticas Arcanas"
    },
    {
      tipo: "parrafo",
      texto: "¿Cómo sobrevive un mago a la tecnología militar moderna? La respuesta está en la táctica y la versatilidad. La magia no es solo lanzar bolas de fuego; es reescribir las reglas del enfrentamiento."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Contra un Francotirador:</strong> Un hechizo de Nube de Niebla o Muro de Viento bloquea la línea de visión, inutilizando al tirador. Un conjuro de Calentar Metal en el cañón del rifle lo vuelve inservible y obliga al soldado a soltarlo.",
        "<strong>Contra un Enjambre de Drones:</strong> Hechizos de área como Estallar o Atadura Terrenal son devastadores. Un simple Dardo de Fuego puede freír los circuitos de un dron individual, haciéndolo caer en picada.",
        "<strong>Contra Fuego de Supresión:</strong> Un Muro de Piedra o Moldear Tierra crean cobertura instantánea donde no la había. Mientras tanto, Inmovilizar Persona o Sugestión pueden neutralizar al operador del arma pesada sin necesidad de acercarse."
      ]
    },
    {
      tipo: "h4",
      texto: "Defensas Tecnológicas contra Magia"
    },
    {
      tipo: "parrafo",
      texto: "El Eje Metropolitano no se ha quedado de brazos cruzados. Han invertido billones en desarrollar contramedidas para nivelar el campo de juego."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Supresores de Área:</strong> Dispositivos pesados y costosos que generan un campo de \"ruido\" arcano. Dentro de su radio, la CD para todas las pruebas de concentración para mantener un hechizo aumenta en +5, y los hechizos con componentes verbales tienen un 25% de probabilidad de fallar, consumiendo los Puntos Arcanos pero sin producir efecto.",
        "<strong>Blindaje de Dispersión:</strong> Capas de cerámica y polímeros especiales integradas en vehículos y armaduras de élite. Este blindaje otorga resistencia a tipos de daño comúnmente mágicos, como fuego, rayo o frío."
      ]
    },
    {
      tipo: "h3",
      texto: "Sistemas de Poder"
    },
    {
      tipo: "parrafo",
      texto: "En Caracas 2025, el poder se manifiesta de dos formas principales que, aunque opuestas, operan con una simetría mecánica: el Don de la magia y la fría lógica de la tecnología."
    },
    {
      tipo: "h4",
      texto: "Sistema de Poder Arcano: Puntos Arcanos (PA)"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje con \"El Don\" no está simplemente recitando fórmulas; está imponiendo su voluntad sobre la realidad. Canaliza su poder a través de una reserva de energía interna llamada Puntos Arcanos (PA), una medida de su resistencia y conexión con las fuerzas primordiales."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Cálculo de Puntos Arcanos:</strong> Tu máximo de PA es igual a (Tu Nivel de Héroe / 2, redondeado hacia arriba) + tu Modificador de Aptitud Mágica.",
        "<strong>Coste de Lanzamiento:</strong> Lanzar un conjuro consume una cantidad de PA igual al nivel del conjuro (un conjuro de Nivel 1 cuesta 1 PA, etc.). Los trucos (Nivel 0) son gestos de poder tan internalizados que no consumen PA.",
        "<strong>Recuperación:</strong> Recuperas todos tus PA gastados después de completar un descanso largo. Este descanso representa un periodo de meditación, sueño o ritual para realinear tu espíritu con el flujo de poder."
      ]
    },
    {
      tipo: "h4",
      texto: "Sistema de Poder Tecnológico: Cargas de Poder (CP)"
    },
    {
      tipo: "parrafo",
      texto: "Los agentes de élite del Eje Metropolitano, aunque carecen del Don, no son indefensos. Están equipados con un núcleo de poder personal y una conexión directa a la red táctica del Eje, lo que les permite activar aumentos y desplegar dispositivos de vanguardia usando Cargas de Poder (CP)."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Cálculo de Cargas de Poder:</strong> Tu máximo de CP es igual a (Tu Nivel de Héroe / 2, redondeado hacia arriba) + tu Modificador de Inteligencia.",
        "<strong>Coste de Activación:</strong> Activar un poder tecnológico (como un pulso disruptor o un escudo de energía personal) consume la cantidad de CP especificada en la descripción de cada talento de arquetipo.",
        "<strong>Recuperación:</strong> Recuperas todas tus CP gastadas después de completar un descanso largo, durante el cual tu equipo se recarga y sincroniza. Un descanso corto, si tienes acceso a una fuente de poder del Eje, te permite recargar 1d4 CP."
      ]
    },
    {
      tipo: "h2",
      texto: "Capítulo 2: Facciones de Caracas"
    },
    {
      tipo: "parrafo",
      texto: "La ciudad está dividida en esferas de influencia, con facciones que luchan por el control de sus calles, su economía y su alma. Cada facción ofrece una visión única del mundo, con sus propias ideologías, objetivos y métodos. Pertenecer a una de ellas define en gran medida el lugar de un personaje en la sociedad caraqueña."
    },
    {
      tipo: "h3",
      texto: "Resumen de Facciones"
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-resumen-facciones",
      titulo: "Tabla Resumen de Facciones",
      encabezados: ["Facción", "Lider(es)", "Ubicación Principal", "Sede", "Unidades Principales", "Alineación Moral (Guía)"],
      filas: [
        ["Eje Metropolitano", "Director Ricardo Mendoza", "El Este (Chacao, Baruta)", "La Torre Eje Metropolitano", "Guardia de Élite, Analista, Técnico", "Legal Neutral"],
        ["Custodes Fidei", "Monseñor Ernesto Boulton", "El Centro (Catedral)", "Iglesias y Parroquias", "Paladín, Clérigo, Inquisidor", "Legal Bueno"],
        ["Colectivo Sorte-Luz", "\"Mamá\" Jacinta", "La Montaña (El Ávila)", "Santuario de la Montaña", "Hijo de Waraira, Chamán Urbano", "Caótico Bueno"],
        ["Cátedra Arcana", "Consejo de Académicos", "El Centro (UCV)", "Ciudad Universitaria", "Eruditos, Investigadores", "Legal Neutral"],
        ["Círculo de la Candelaria", "Elías Soublette", "El Centro (en secreto)", "Desconocida", "Magos eruditos, Hechiceros", "Verdadero Neutral"],
        ["Pranes Arcanos", "Varios líderes de bandas", "El Oeste (Catia, Petare)", "El Helicoide (bastión)", "Hechicero, Químico, Sicario", "Caótico Malvado"]
      ]
    },
    {
      tipo: "h3",
      texto: "Perfiles de Facción Detallados"
    },
    {
      tipo: "h4",
      texto: "1. El Eje Metropolitano"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Ideología:</strong> Elitistas tecnológicos y pragmáticos. Creen que el progreso, la estabilidad y la prosperidad solo pueden lograrse a través de la tecnología. Ven la magia como un factor caótico, una variable incontrolable que debe ser contenida, estudiada y, si es posible, neutralizada o replicada.",
        "<strong>Objetivos:</strong> Expandir las \"zonas francas\" tecnológicas libres de interferencia arcana. Liderar al mundo en innovación y crear una utopía ordenada y eficiente para quienes puedan pagarla. Su meta a largo plazo es desarrollar tecnología que pueda anular completamente los efectos mágicos a escala global.",
        "<strong>Percepción Pública:</strong> Son vistos como los arquitectos del futuro y los mayores empleadores de la ciudad, pero también como una élite desconectada que vive en torres de cristal, indiferente a los problemas del ciudadano común.",
        "<strong>Guía Visual:</strong> Estética corporativa, minimalista y pulcra. Superficies limpias, pulidas, ángulos agudos. Colores: blanco puro, negro mate, gris metálico y azul cian como acento. Su símbolo es un halcón geométrico y estilizado, que se asemeja a una traza de circuito impreso."
      ]
    },
    {
      tipo: "h4",
      texto: "2. Los Custodes Fidei"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Ideología:</strong> Ordenados, jerárquicos y devotos. La Iglesia Católica interpreta la magia como un don divino (milagros) que debe ser usado dentro de un marco moral estricto. Distinguen claramente entre su poder, que viene de la fe, y la magia \"profana\" del resto del mundo, a la que consideran una corrupción o una herejía.",
        "<strong>Objetivos:</strong> Proteger a los fieles, combatir la magia \"herética\" (especialmente la del Colectivo y los Pranes) y mantener la influencia de la Iglesia como una guía espiritual y moral en una era de cinismo tecnológico y caos arcano.",
        "<strong>Percepción Pública:</strong> Son una fuente de estabilidad y consuelo para muchos. Sin embargo, su dogmatismo y su desconfianza hacia toda magia no divina los hace parecer rígidos y anticuados para otros.",
        "<strong>Subgrupos:</strong> La Cofradía de José Gregorio, un grupo de clérigos y sanadores que operan clínicas de caridad y son amados por el pueblo.",
        "<strong>Guía Visual:</strong> Fusión de iconografía religiosa con equipamiento urbano práctico y desgastado. Texturas de madera, piedra y metal envejecido. Luz cálida y dorada. Símbolos: una cruz integrada con una espada o una llave. Colores: blanco hueso, dorado, rojo oscuro y marrones."
      ]
    },
    {
      tipo: "h4",
      texto: "3. El Colectivo Sorte-Luz"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Ideología:</strong> Sincréticos y espirituales. Veneran a las deidades de la corte de María Lionza y a los espíritus de la naturaleza como las verdaderas fuentes de la magia. Creen que la tecnología \"desconecta\" a la humanidad de la tierra y de su propia alma, creando un mundo estéril y sin espíritu.",
        "<strong>Objetivos:</strong> Proteger los lugares sagrados naturales (como El Ávila) y resistir el avance de las \"cicatrices de metal y asfalto\" del Eje. Buscan guiar a la gente de vuelta a una conexión espiritual con el mundo que los rodea.",
        "<strong>Percepción Pública:</strong> Para los marginales e integrados, son curanderos, guías y protectores. Para el Eje, son luditas peligrosos. Para los Custodes, son paganos heréticos.",
        "<strong>Subgrupos:</strong> Los Hijos de Waraira, un círculo de druidas y rangers que viven y protegen El Ávila y actúan como sus guardianes feroces contra la expansión del Eje.",
        "<strong>Guía Visual:</strong> Orgánico, natural, artesanal. Materiales tejidos, fibras naturales, madera sin tratar, plumas y piedras. Símbolos: la silueta del Waraira Repano, espirales. Colores: verde esmeralda, marrón tierra, ocre y azul cielo."
      ]
    },
    {
      tipo: "h4",
      texto: "4. La Cátedra Arcana de la UCV"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Ideología:</strong> Académicos, teóricos y elitistas intelectuales. Tratan la magia como una ciencia que puede y debe ser estudiada, catalogada, teorizada y enseñada en un entorno controlado. Son el rostro público y \"oficial\" del estudio de la magia. Desprecian la magia \"innata\" de los hechiceros como peligrosa y sin refinar.",
        "<strong>Objetivos:</strong> Sistematizar el conocimiento arcano, formar a la próxima generación de magos \"licenciados\" y mantener su estatus como la principal autoridad en teoría mágica, a menudo colaborando o compitiendo con el Eje por la comprensión de los fenómenos arcanos.",
        "<strong>Percepción Pública:</strong> Respetados en los círculos intelectuales, pero vistos como teóricos desconectados de la realidad de la calle, más preocupados por sus publicaciones que por los problemas reales de la ciudad."
      ]
    },
    {
      tipo: "h4",
      texto: "5. El Círculo de la Candelaria"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Ideología:</strong> Secretistas, elitistas y pragmáticos. Una facción disidente de la Cátedra, creen que el verdadero poder arcano no debe ser publicitado ni diluido en aulas, sino atesorado y pasado de maestro a aprendiz en secreto.",
        "<strong>Objetivos:</strong> Acumular conocimiento prohibido y artefactos poderosos. Preservar el equilibrio de poder en la ciudad desde las sombras, manipulando a otras facciones para que ninguna se vuelva demasiado dominante.",
        "<strong>Percepción Pública:</strong> Prácticamente desconocidos para el público general. Son un mito, un susurro entre los magos más poderosos y los teóricos de la conspiración."
      ]
    },
    {
      tipo: "h4",
      texto: "6. Los Pranes Arcanos"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Ideología:</strong> Criminales pragmáticos y brutales. Su única meta es el poder y el beneficio. Usan la violencia, la extorsión y una magia cruda e instintiva como herramientas para controlar sus territorios y sus negocios.",
        "<strong>Objetivos:</strong> Controlar el bajo mundo, expandir sus redes de narcotráfico (a menudo con drogas con componentes alquímicos que inducen efectos extraños) y eliminar a sus rivales, ya sean otras bandas, el Eje o los Custodes.",
        "<strong>Percepción Pública:</strong> Son el terror de los barrios, una plaga que ni la tecnología del Eje ni la fe de los Custodes ha podido erradicar. Para la gente bajo su \"protección\", son a la vez tiranos y la única ley que existe.",
        "<strong>Subgrupos:</strong> El Sindicato del Silbón, un cartel temido que usa magia de ilusión y miedo, inspirada en la leyenda del Silbón, para aterrorizar a sus víctimas y rivales.",
        "<strong>Guía Visual:</strong> Estética urbana, brutalista y ostentosa. Cadenas de oro sobre chalecos antibalas. Runas arcanas que parecen grafitis o tatuajes de prisión. Símbolos: una calavera estilizada, coronas hechas de balas. Colores: negro, rojo sangre, dorado llamativo y el gris del concreto."
      ]
    },
    {
      tipo: "h2",
      texto: "Capítulo 3: La Sociedad Caraqueña"
    },
    {
      tipo: "parrafo",
      texto: "El conflicto tecno-arcano no es una guerra librada en campos de batalla lejanos; se vive y se respira en cada esquina de Caracas. La gente común, atrapada entre el avance implacable del Eje Metropolitano y el resurgimiento caótico de la magia, se ha visto forzada a adaptarse, creando nuevos estratos sociales y subculturas para sobrevivir. Comprender estos grupos es clave para entender el pulso de la ciudad."
    },
    {
      tipo: "h3",
      texto: "Los Tecnólogos Puros"
    },
    {
      tipo: "parrafo",
      texto: "Viven y trabajan en las \"burbujas\" de alta tecnología del Este, principalmente en los municipios Chacao y Baruta. Son los ingenieros, ejecutivos, programadores y diseñadores que construyen el futuro del Eje Metropolitano. Para ellos, la tecnología no es solo una herramienta, es una ideología. Han abrazado un estilo de vida donde cada aspecto está optimizado y conectado, desde sus hogares inteligentes hasta sus aumentos cibernéticos."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Conflicto Principal:</strong> Su mayor temor es la corrupción. Un simple hechizo lanzado en la calle puede costarles millones en datos perdidos o equipos fritos. Esto ha generado una cultura de paranoia y aislamiento. Viven en una jaula de oro, protegidos por la tecnología que al mismo tiempo los hace vulnerables. Desconfían profundamente de cualquiera que muestre afinidad por lo arcano, viéndolos como agentes del caos."
      ]
    },
    {
      tipo: "h3",
      texto: "Los Integrados"
    },
    {
      tipo: "parrafo",
      texto: "La gran mayoría de los caraqueños. Son los oficinistas, los comerciantes, los estudiantes y los trabajadores que navegan diariamente entre los dos mundos. Usan un smartphone para pagar el metro, pero también visitan a una sanadora del Colectivo cuando su hijo enferma. Llevan un amuleto de protección en el bolsillo junto a su tarjeta de crédito."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Conflicto Principal:</strong> La incertidumbre y la presión constante. La vida de un integrado es un acto de equilibrio. Deben saber cuándo es seguro usar sus dispositivos y cuándo es mejor guardarlos. Sienten la tensión entre las facciones en su día a día: la promesa de prosperidad del Eje, la oferta de consuelo de los Custodes, las advertencias del Colectivo y el miedo a los Pranes. Son el verdadero campo de batalla por el alma de Caracas."
      ]
    },
    {
      tipo: "h3",
      texto: "Los Arcanos Discretos"
    },
    {
      tipo: "parrafo",
      texto: "Son magos, hechiceros y adeptos que intentan vivir una vida normal, ocultando su Don del mundo. Pueden ser un contador que lanza hechizos de buena suerte en sus libros, una maestra que usa una pizca de encantamiento para calmar a sus alumnos, o un mecánico que \"intuye\" qué le pasa a un motor. Temen la atención que su poder podría atraer, ya sea el escrutinio científico del Eje, el dogma de los Custodes o la codicia de los Pranes."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Conflicto Principal:</strong> La soledad y la represión. Vivir con un poder que no puedes compartir es una carga. Su mayor lucha es interna, el constante dilema entre usar su Don para ayudarse a sí mismos o a otros, y el riesgo de ser descubiertos. Muchos viven con el miedo de que un día su poder se descontrole y revele su verdadera naturaleza."
      ]
    },
    {
      tipo: "h3",
      texto: "Los Marginales"
    },
    {
      tipo: "parrafo",
      texto: "Los habitantes de los grandes barrios populares como Petare o Catia. Para ellos, el conflicto tecno-arcano es un lujo que no pueden permitirse. Su verdadera lucha es la supervivencia diaria: conseguir comida, agua y evitar la violencia. La tecnología del Eje rara vez llega a sus calles, y cuando lo hace, es en forma de drones de vigilancia o patrullas represivas. La magia, por otro lado, es una realidad palpable, ya sea a través de los curanderos del Colectivo que ofrecen ayuda o de los Pranes Arcanos que exigen tributo."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Conflicto Principal:</strong> La vulnerabilidad. Son los más expuestos y los menos protegidos. Todas las facciones los ven como peones, recursos o daños colaterales. Su lealtad es fluida y pragmática, aliándose con quien les ofrezca la mejor oportunidad de sobrevivir hasta el día siguiente."
      ]
    },
    {
      tipo: "h3",
      texto: "Los Chatarreros del Guaire"
    },
    {
      tipo: "parrafo",
      texto: "Una subcultura única de Caracas, nacida directamente de la Interferencia Tecno-Arcana. Son tecnólogos callejeros, ingenieros de guerrilla y recicladores que viven de los desechos del Eje y de los fallos causados por la magia. Rastrean las zonas de combate mágico en busca de aparatos \"fritos\" que puedan reparar, desmantelar o \"canibalizar\" para sus propias invenciones. Son expertos en hacer que la tecnología rota vuelva a funcionar, a menudo de formas no previstas por sus creadores."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Conflicto Principal:</strong> El desprecio y la oportunidad. Son despreciados tanto por el Eje, que los ve como carroñeros que roban su propiedad intelectual, como por las facciones arcanas, que los ven como traficantes de la misma tecnología que corrompe el mundo. Sin embargo, su conocimiento práctico los hace indispensables. Si necesitas un dispositivo modificado, una reparación discreta o una pieza de tecnología que no existe en el mercado legal, vas a ver a un Chatarrero."
      ]
    },
    {
      tipo: "h3",
      texto: "Los Libres de la Cota Mil"
    },
    {
      tipo: "parrafo",
      texto: "Las autopistas que atraviesan Caracas, especialmente la Cota Mil, se han vuelto peligrosas e intransitables en muchos tramos debido a la constante interferencia. Esto ha permitido que grupos de anarquistas, renegados y marginados las tomen como su territorio. Viven en una sociedad descentralizada en los túneles, puentes y estructuras abandonadas, defendiendo su autonomía con barricadas improvisadas y tácticas de guerrilla."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Conflicto Principal:</strong> La autonomía. Luchan por mantener su libertad contra todas las facciones que intentan reclamar el control de estas arterias vitales de la ciudad. El Eje quiere las autopistas para el transporte, los Pranes las quieren como rutas de contrabando y los Custodes las ven como nidos de anarquía. Los Libres no quieren nada más que ser dejados en paz."
      ]
    },
    {
      tipo: "h2",
      texto: "Capítulo 4: Arquetipos y Creación de Personajes"
    },
    {
      tipo: "parrafo",
      texto: "En el peligroso mundo de Caracas 2025, los héroes no se forjan en moldes convencionales. Este capítulo te guiará paso a paso para crear un personaje único, abandonando las clases genéricas de Everyday Heroes en favor de Arquetipos de Facción especializados que reflejan tu lugar en el conflicto tecno-arcano. Tu facción, tu entrenamiento y tu Don (o la falta de él) definirán quién eres."
    },
    {
      tipo: "h3",
      texto: "El Proceso de Creación en Seis Pasos"
    },
    {
      tipo: "parrafo",
      texto: "Sigue estos pasos para dar vida a tu personaje. Este proceso sustituye al que se encuentra en el manual básico de Everyday Heroes."
    },
    {
      tipo: "lista",
      items: [
        "<strong>1. Concepto y Facción:</strong> Decide la idea general de tu personaje y a qué facción pertenece (o si es independiente). Esto sentará las bases de tus lealtades e ideología.",
        "<strong>2. Elegir un Trasfondo de Facción:</strong> Selecciona el trasfondo que corresponde a tu facción. Esto te otorga aumentos de características, competencias y un rasgo especial.",
        "<strong>3. Determinar Puntuaciones de Habilidad:</strong> Genera tus seis puntuaciones de habilidad (Fuerza, Destreza, Constitución, Inteligencia, Sabiduría, Carisma) usando uno de los métodos descritos en el manual de Everyday Heroes (Set Estándar, Compra por Puntos, o Tirada de Dados), según lo que prefiera tu Director de Juego. Aplica los aumentos de tu trasfondo.",
        "<strong>4. Elegir un Arquetipo de Facción:</strong> Selecciona el arquetipo que define tu rol. Esto establece tu clase base, tus talentos iniciales y tu progresión de nivel.",
        "<strong>5. Calcular Valores Derivados:</strong> Determina tus Puntos de Golpe, Defensa, bonificador de iniciativa y otros valores basados en tus elecciones.",
        "<strong>6. Detalles Finales:</strong> Elige tu equipo, define la personalidad de tu héroe y dale los toques finales."
      ]
    },
    {
      tipo: "h3",
      texto: "Paso 1 y 2: Trasfondos de Facción"
    },
    {
      tipo: "parrafo",
      texto: "A continuación se detallan los trasfondos y los arquetipos disponibles para cada facción. Tu trasfondo es tu origen y tu arquetipo es tu especialización actual."
    },
    {
      tipo: "h4",
      texto: "El Eje Metropolitano"
    },
    {
      tipo: "parrafo",
      texto: "Crees en el orden y el progreso a través de la tecnología. La magia es una variable caótica que debe ser controlada."
    },
    {
      tipo: "parrafo",
      texto: "<strong>Trasfondo: Operativo del Eje</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Descripción:</strong> Fuiste reclutado por la corporación que está construyendo el futuro. Crees que la tecnología es la única respuesta lógica al caos y ves la magia como una anomalía peligrosa.",
        "<strong>Aumento de Puntuación de Característica:</strong> +1 a Inteligencia, +1 a elección entre Fuerza o Destreza.",
        "<strong>Competencias:</strong> Ciencias Naturales, Tecnología, Equipo Básico, Equipo Avanzado.",
        "<strong>Rasgo Especial (Red Táctica):</strong> Una vez por descanso corto, puedes usar tu acción adicional para recibir información táctica de la red del Eje. Obtienes ventaja en tu próxima tirada de ataque o prueba de habilidad."
      ]
    },
    {
      tipo: "h4",
      texto: "Los Custodes Fidei"
    },
    {
      tipo: "parrafo",
      texto: "Tu fe es tu armadura. La magia es un don divino y la tecnología desenfrenada, una herejía."
    },
    {
      tipo: "parrafo",
      texto: "<strong>Trasfondo: Guardián de los Custodes</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Descripción:</strong> Tu fe es tu escudo y tu espada. Ves la magia como un don divino y la tecnología desenfrenada como una profanación.",
        "<strong>Aumento de Puntuación de Característica:</strong> +1 a Sabiduría, +1 a elección entre Constitución o Carisma.",
        "<strong>Competencias:</strong> Persuasión, Introspección (Insight), Equipo Básico, Equipo Histórico.",
        "<strong>Rasgo Especial (Baluarte de Fe):</strong> Cuando un aliado a 5 pies de ti vaya a recibir daño, puedes usar tu reacción para reducir ese daño a la mitad."
      ]
    },
    {
      tipo: "h4",
      texto: "El Colectivo Sorte-Luz"
    },
    {
      tipo: "parrafo",
      texto: "Escuchas a la tierra y a los espíritus. Luchas para proteger el mundo natural del avance del metal y el asfalto."
    },
    {
      tipo: "parrafo",
      texto: "<strong>Trasfondo: Iniciado del Colectivo</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Descripción:</strong> La tierra y los espíritus te hablan. Escuchas la voz de la naturaleza ahogada por el ruido de la metrópolis.",
        "<strong>Aumento de Puntuación de Característica:</strong> +1 a Carisma, +1 a elección entre Sabiduría o Constitución.",
        "<strong>Competencias:</strong> Supervivencia, Sabiduría Callejera, Equipo Básico, Equipo Improvisado.",
        "<strong>Rasgo Especial (Susurro del Ávila):</strong> Tienes ventaja en pruebas de Carisma (Persuasión) y Trato con Animales para calmar a una criatura."
      ]
    },
    {
      tipo: "h4",
      texto: "Los Pranes Arcanos"
    },
    {
      tipo: "parrafo",
      texto: "La calle es tu reino y la magia tu cetro. La única ley que respetas es la del más fuerte."
    },
    {
      tipo: "parrafo",
      texto: "<strong>Trasfondo: Ejecutor de los Pranes</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Descripción:</strong> Naciste y te criaste en la calle, donde la única ley es la del más fuerte. La magia es simplemente otra herramienta para asegurar tu posición.",
        "<strong>Aumento de Puntuación de Característica:</strong> +1 a Carisma, +1 a elección entre Fuerza o Destreza.",
        "<strong>Competencias:</strong> Intimidación, Sabiduría Callejera, Equipo Básico, Equipo Avanzado.",
        "<strong>Rasgo Especial (Instinto Callejero):</strong> Tienes ventaja en las pruebas de iniciativa y no puedes ser sorprendido en entornos urbanos."
      ]
    },
    {
      tipo: "h4",
      texto: "La Cátedra Arcana y el Círculo de la Candelaria"
    },
    {
      tipo: "parrafo",
      texto: "La magia es una ciencia, no un truco. El conocimiento es el verdadero poder y tú eres uno de sus guardianes."
    },
    {
      tipo: "parrafo",
      texto: "<strong>Trasfondo: Erudito Arcano</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Descripción:</strong> Para ti, la magia no es un misterio, sino una ciencia por descubrir. El conocimiento es poder, y tú lo buscas incansablemente.",
        "<strong>Aumento de Puntuación de Característica:</strong> +1 a Inteligencia, +1 a elección entre Destreza o Carisma.",
        "<strong>Competencias:</strong> Ciencias Sociales, y elige una entre Investigación, Engaño o Persuasión. Competencia con Equipo Básico.",
        "<strong>Rasgo Especial (Saber Enciclopédico):</strong> Añades el doble de tu bonificador de competencia a las pruebas de Inteligencia para recordar información arcana o histórica."
      ]
    },
    {
      tipo: "h4",
      texto: "Independientes"
    },
    {
      tipo: "parrafo",
      texto: "No debes lealtad a nadie más que a ti mismo y a tu propia gente. Sobrevives en los márgenes de la sociedad."
    },
    {
      tipo: "parrafo",
      texto: "<strong>Trasfondo: Superviviente de la Autopista</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Descripción:</strong> Has hecho de las ruinas de asfalto y concreto tu hogar. No confías en ninguna facción y dependes solo de tu ingenio y resistencia.",
        "<strong>Aumento de Puntuación de Característica:</strong> +1 a Constitución, +1 a elección entre Destreza o Sabiduría.",
        "<strong>Competencias:</strong> Supervivencia, Mecánica.",
        "<strong>Rasgo Especial (Nómada Urbano):</strong> Tienes ventaja en las salvaciones contra Agotamiento y en pruebas de Sigilo en ruinas urbanas."
      ]
    },
    {
      tipo: "h3",
      texto: "Paso 3 y 4: Detalles de los Arquetipos de Facción"
    },
    {
      tipo: "parrafo",
      texto: "Aquí se detalla la progresión y los talentos únicos de cada arquetipo, así como su clase base de Everyday Heroes. Los personajes con \"El Don\" usan Puntos Arcanos (PA) y los tecnológicos, Cargas de Poder (CP)."
    },
    {
      tipo: "parrafo",
      texto: "<strong>Aptitudes Mágicas y Listas de Conjuros (Para Arquetipos con \"El Don\")</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Custodes Fidei:</strong> Aptitud: Sabiduría. Lista de Conjuros: Clérigo.",
        "<strong>Colectivo Sorte-Luz:</strong> Aptitud: Carisma. Lista de Conjuros: Druida.",
        "<strong>Pranes Arcanos:</strong> Aptitud: Carisma. Lista de Conjuros: Hechicero.",
        "<strong>Cátedra Arcana / Círculo:</strong> Aptitud: Inteligencia. Lista de Conjuros: Mago."
      ]
    },
    {
      tipo: "h3",
      texto: "Arquetipos del Eje Metropolitano (Tecnológicos)"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Analista de Contención</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Inteligente - Mente Maestra (Mastermind). Eres la primera y última línea de defensa intelectual contra las amenazas arcanas."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-analista-contencion",
      titulo: "Progresión del Analista de Contención",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Know-It-All, You're Doing It Wrong"],
        ["3", "(Reemplaza Plans) Análisis de Campo"],
        ["5", "Plans improve (mejora Análisis de Campo)"],
        ["7", "Plans improve (mejora Análisis de Campo)"],
        ["9", "Plans improve (mejora Análisis de Campo)"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Análisis de Campo (Nivel 3)",
          definicion: "Usas Cargas de Poder (CP) para activar protocolos. <strong>Pulso de Interferencia (1 CP):</strong> Como acción adicional, un lanzador de conjuros a 60 pies debe superar una salvación de Sabiduría o su próximo conjuro fallará. <strong>Análisis de Debilidad (1 CP):</strong> Como acción adicional, analizas a un objetivo, obteniendo ventaja en tu próximo ataque contra él e infligiendo 1d8 de daño eléctrico adicional si impactas. <strong>Campo de Supresión (3 CP, 1/descanso largo):</strong> Como acción, creas un campo de 15 pies donde la CD para pruebas de concentración enemigas aumenta en +5."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Guardia de Élite</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Duro - Comando (Commando). Eres un supersoldado corporativo, aumentado para ser más rápido, más fuerte y más resistente."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-guardia-elite",
      titulo: "Progresión de la Guardia de Élite",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Fighting Spirit, Watch your Six"],
        ["3", "(Reemplaza Extra Effort) Sobrecarga de Sistema, Grenadier"],
        ["5", "Advanced Combat Training"],
        ["7", "(Reemplaza Maximum Effort) Aumento Avanzado"],
        ["9", "Master of Arms"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sobrecarga de Sistema (Nivel 3)",
          definicion: "Cuesta 2 CP. Como acción adicional, tus ataques con armas infligen 1d4 de daño eléctrico adicional durante 1 minuto."
        },
        {
          termino: "Aumento Avanzado (Nivel 7)",
          definicion: "Elige uno: Blindaje Subdérmico (resistencia a daño no mágico contundente, perforante y cortante) o Miopía Táctica (visión en la oscuridad y ventaja en Percepción visual)."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Técnico de Campo</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Inteligente - Ingeniero (Engineer). Eres el apoyo tecnológico en el terreno. Despliegas drones y mantienes el equipo funcionando."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-tecnico-campo",
      titulo: "Progresión del Técnico de Campo",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Mechanical Companion, Field Repairs"],
        ["3", "(Reemplaza Fine Tuning) Protocolos de Dron"],
        ["5", "Plans Improve"],
        ["7", "(Reemplaza Engineer Plans) Tecnomancia"],
        ["9", "Plans Improve"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Protocolos de Dron (Nivel 3)",
          definicion: "Cuesta 1 CP. Como acción adicional, tu dron puede usar la acción de Ayudar, Esquivar o Desarmar."
        },
        {
          termino: "Tecnomancia (Nivel 7)",
          definicion: "Ganas acceso a los planes de Ingeniero: Customize y Cut the Power. Puedes gastar 2 CP para darle a tu dron 10 puntos de golpe temporales."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Agente Encubierto</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Ágil - Pícaro (Scoundrel). Eres un fantasma corporativo. Infiltras, extraes y eliminas objetivos."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-agente-encubierto",
      titulo: "Progresión del Agente Encubierto",
      encabezados: ["Nivel", "Talentos", "Daño de Vital Strike"],
      filas: [
        ["1", "Vital Strike", "1d6"],
        ["3", "(Reemplaza Swift) Generador de Ruido Blanco, Surprise Attack", "2d6"],
        ["5", "Roll With It", "3d6"],
        ["7", "(Reemplaza Covert Expertise) Generador de Silencio", "4d6"],
        ["9", "Master of Subterfuge", "5d6"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Generador de Ruido Blanco (Nivel 3)",
          definicion: "Cuesta 2 CP. Creas una esfera de 60 pies de ruido ensordecedor durante 1 minuto."
        },
        {
          termino: "Generador de Silencio (Nivel 7)",
          definicion: "Cuesta 3 CP. Creas una esfera de 20 pies de silencio absoluto durante 10 minutos."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Arquetipos de los Custodes Fidei"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Paladín de la Orden</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Carismático - Líder (Leader)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-paladin-orden",
      titulo: "Progresión del Paladín de la Orden",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Command"],
        ["3", "(Reemplaza Encouraging Banter) Palabra de Convicción"],
        ["5", "Improved Command"],
        ["7", "(Reemplaza Rousing Speech) Égida Sagrada"],
        ["9", "Aura of Leadership"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Palabra de Convicción (Nivel 3)",
          definicion: "Cuesta 1 PA. Como acción adicional, un aliado añade 1d4 a su próxima tirada de ataque o salvación."
        },
        {
          termino: "Égida Sagrada (Nivel 7)",
          definicion: "Cuesta 3 PA. Como acción, creas un aura de 10 pies que otorga resistencia a un tipo de daño elemental durante 1 minuto."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Clérigo de la Cofradía</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Sabio - Detective (Sleuth)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-clerigo-cofradia",
      titulo: "Progresión del Clérigo de la Cofradía",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Deduction, Sixth Sense, (Reemplaza Weak Spot) Toque Restaurador"],
        ["3", "Alert, Investigative Expertise"],
        ["5", "(Reemplaza Roll With It) Santuario Menor"],
        ["7", "Evasion"],
        ["9", "Elementary"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Toque Restaurador (Nivel 1)",
          definicion: "Cuesta 1 PA. Curas 1d8 + tu modificador de Sabiduría a un aliado que toques, o infliges ese mismo daño como radiante a no-muertos/demonios con un ataque de toque."
        },
        {
          termino: "Santuario Menor (Nivel 5)",
          definicion: "Cuesta 2 PA. Como acción, un atacante debe superar una salvación de Sabiduría para poder atacarte. El efecto dura hasta el inicio de tu siguiente turno."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Inquisidor de Campo</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Ágil - Pícaro (Scoundrel)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-inquisidor-campo",
      titulo: "Progresión del Inquisidor de Campo",
      encabezados: ["Nivel", "Talentos", "Daño de Golpe Consagrado"],
      filas: [
        ["1", "(Reemplaza Vital Strike) Golpe Consagrado", "1d6"],
        ["3", "(Reemplaza Swift) Sentir la Herejía, Surprise Attack", "2d6"],
        ["5", "Roll With It", "3d6"],
        ["7", "(Reemplaza Covert Expertise) Cadenas de Luz", "4d6"],
        ["9", "Master of Subterfuge", "5d6"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Golpe Consagrado (Nivel 1)",
          definicion: "Una vez por turno, si tienes ventaja en un ataque, infliges 1d6 de daño radiante adicional."
        },
        {
          termino: "Sentir la Herejía (Nivel 3)",
          definicion: "Cuesta 1 PA. Como acción, durante 10 minutos, sabes si hay demonios o no-muertos a 60 pies."
        },
        {
          termino: "Cadenas de Luz (Nivel 7)",
          definicion: "Cuesta 3 PA. Un objetivo a 60 pies debe superar una salvación de Destreza o quedará Inmovilizado."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Exorcista de la Guardia</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Fuerte - Luchador (Brawler)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-exorcista-guardia",
      titulo: "Progresión del Exorcista de la Guardia",
      encabezados: ["Nivel", "Talentos", "Daño de Smash"],
      filas: [
        ["1", "Crush, Hurl, Smash", "1d6/1d12"],
        ["3", "(Reemplaza Rampage) Resistir la Corrupción", "2d6/2d12"],
        ["5", "Bits and Pieces, Haymaker", "3d6/3d12"],
        ["7", "(Reemplaza Unstoppable) Golpe Exorcista", "4d6/4d12"],
        ["9", "Ultimate Brutality", "5d6/5d12"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Resistir la Corrupción (Nivel 3)",
          definicion: "Tienes ventaja en las salvaciones contra ser asustado o hechizado."
        },
        {
          termino: "Golpe Exorcista (Nivel 7)",
          definicion: "Cuesta 3 PA. Cuando usas Smash, el daño adicional se convierte en radiante y el objetivo debe superar una salvación de Sabiduría o quedará Asustado de ti."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Arquetipos del Colectivo Sorte-Luz"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Chamán Urbano</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Sabio - Maestro (Master)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-chaman-urbano",
      titulo: "Progresión del Chamán Urbano",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Mystic Arts, Ki"],
        ["3", "(Reemplaza Dance in the Storm) Visión Espiritual, Flow Like the River"],
        ["5", "(Reemplaza Advanced Combat Training) Pactos Espirituales"],
        ["7", "Balance Within, Evasion"],
        ["9", "Deep Focus, Like the Willow"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Visión Espiritual (Nivel 3)",
          definicion: "Cuesta 1 PA. Ganas visión en la oscuridad y puedes ver criaturas invisibles a 60 pies durante 1 minuto."
        },
        {
          termino: "Pactos Espirituales (Nivel 5)",
          definicion: "Aprendes conjuros adicionales de la lista de Druida que puedes lanzar gastando PA. A nivel 5, aprendes un número de conjuros (máx. nivel 2) igual a tu mod. de Carisma. A nivel 7, uno más (máx. nivel 3). A nivel 9, uno más (máx. nivel 4)."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Hijo de Waraira</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Sabio - Cazador (Hunter)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-hijo-waraira",
      titulo: "Progresión del Hijo de Waraira",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Hunting Companion, Hunter's Mark, Animal Husbandry"],
        ["3", "(Reemplaza Companion Training) Vínculo Espiritual, Marked as Prey"],
        ["5", "Advanced Combat Training"],
        ["7", "(Reemplaza Learn Their Moves) Piel de la Montaña"],
        ["9", "Marked for Death"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Vínculo Espiritual (Nivel 3)",
          definicion: "Tu compañero animal añade tu bonificador de competencia a su Defensa y salvaciones. Gastando 2 PA, puedes ver y oír a través de él."
        },
        {
          termino: "Piel de la Montaña (Nivel 7)",
          definicion: "Cuesta 3 PA. Como reacción, tú y tu compañero obtenéis resistencia al daño contundente, perforante y cortante no mágico por un turno."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Portador del Humo</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Carismático - Manipulador (Manipulator)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-portador-humo",
      titulo: "Progresión del Portador del Humo",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Demoralize"],
        ["3", "Copycat"],
        ["5", "Hypnotize, (Reemplaza Improved Demoralize) Lectura del Tabaco"],
        ["7", "False Identity, Social Expertise"],
        ["9", "Master of Manipulation"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Lectura del Tabaco (Nivel 5)",
          definicion: "Cuesta 2 PA. Puedes realizar una Adivinación (hacer una pregunta al DJ), una Bendición (añadir 1d6 a la tirada de un aliado) o una Maldición (restar 1d6 a la tirada de un enemigo)."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Danzante de la Montaña</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Ágil - Artista Marcial (Martial Artist)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-danzante-montana",
      titulo: "Progresión del Danzante de la Montaña",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Martial Arts"],
        ["3", "(Reemplaza Lightning Strikes) Golpe Elemental, Parkour"],
        ["5", "Advanced Combat Training"],
        ["7", "Evasion, Advanced Martial Arts"],
        ["9", "(Reemplaza Lightning Strikes Twice) Tormenta Elemental"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Golpe Elemental (Nivel 3)",
          definicion: "Al realizar un ataque sin armas como acción adicional, puedes gastar 1 PA para añadir un efecto elemental: Fuego (1d6 daño de fuego extra), Tierra (el objetivo debe superar una salvación de Fuerza o ser derribado), Viento/Agua (puedes retirarte 10 pies sin provocar ataques de oportunidad)."
        },
        {
          termino: "Tormenta Elemental (Nivel 9)",
          definicion: "Puedes aplicar el efecto de Golpe Elemental a ambos ataques de tu acción adicional sin coste de PA."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Arquetipos de los Pranes Arcanos"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Sicario Arcano</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Ágil - Francotirador (Sharpshooter)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-sicario-arcano",
      titulo: "Progresión del Sicario Arcano",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "(Reemplaza Gunslinging y Sharpshooting) Marca del Malandro"],
        ["3", "Improved Gunslinging, Improved Sharpshooting"],
        ["5", "Advanced Combat Training"],
        ["7", "(Reemplaza Headshot) Bala Maldita"],
        ["9", "Supreme Ranged Combat Training"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Marca del Malandro (Nivel 1)",
          definicion: "Cuesta 1 PA. Marcas un objetivo; tus ataques a distancia contra él infligen 1d6 de daño necrótico adicional durante 1 minuto."
        },
        {
          termino: "Bala Maldita (Nivel 7)",
          definicion: "Cuesta 3 PA. Como parte de un ataque a distancia, el ataque impacta automáticamente y el objetivo debe superar una salvación de Sabiduría o quedar Asustado."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Químico del Cartel</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Inteligente - Científico (Scientist)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-quimico-cartel",
      titulo: "Progresión del Químico del Cartel",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "(Reemplaza Dangerous Stuff) Químicos de la Calle"],
        ["3", "Plans improve"],
        ["5", "Hazardous Stuff (mejora Químicos), Plans Improve"],
        ["7", "(Nuevo Plan) Droga de Combate"],
        ["9", "Deadly Stuff (mejora Químicos), Plans Improve"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Químicos de la Calle (Nivel 1)",
          definicion: "Funciona como Dangerous Stuff, pero el daño es ácido, veneno o fuego."
        },
        {
          termino: "Droga de Combate (Talento de Plan, Nivel 7)",
          definicion: "Cuesta 3 Puntos Arcanos. Por 1 minuto, un objetivo voluntario gana 10 PG temporales, ventaja en ataques de Fuerza, inmunidad a Aturdido y +15 pies de velocidad. Al terminar, gana un nivel de Agotamiento."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Matón de Concreto</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Fuerte - Matón (Scrapper)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-maton-concreto",
      titulo: "Progresión del Matón de Concreto",
      encabezados: ["Nivel", "Talentos", "Daño de With Interest"],
      filas: [
        ["1", "Opportunist", ""],
        ["3", "(Reemplaza Frenzy) Ira Arcana, With Interest", "1d6"],
        ["5", "(Reemplaza Roll With It) Abrazo del Concreto", "2d6"],
        ["7", "Anger Issues, Indomitable", "3d6"],
        ["9", "Ultimate Brutality", "4d6"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Ira Arcana (Nivel 3)",
          definicion: "Cuesta 2 PA. Entras en furia arcana durante 1 minuto, tus ataques cuerpo a cuerpo infligen 1d4 de daño de fuerza (force) adicional."
        },
        {
          termino: "Abrazo del Concreto (Nivel 5)",
          definicion: "Cuesta 2 PA. El concreto o asfalto cercano intenta atrapar a un oponente, reduciendo su velocidad a 0 si falla una salvación de Fuerza."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Brujo Callejero</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Carismático - Icono (Icon)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-brujo-callejero",
      titulo: "Progresión del Brujo Callejero",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "(Reemplaza Banter) Mal de Ojo, Center of Attention"],
        ["3", "(Reemplaza Flinch) Mirada Aterradora"],
        ["5", "Advanced Combat Training O Magia del Asfalto (opcional)"],
        ["7", "(Reemplaza Not My Style) Pagar el Peaje"],
        ["9", "Star of the Show"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Mal de Ojo (Nivel 1)",
          definicion: "Como acción adicional, un oponente a 60 pies tiene desventaja en su próxima tirada de ataque."
        },
        {
          termino: "Mirada Aterradora (Nivel 3)",
          definicion: "Como reacción, cuando un oponente te ataca, debe superar una salvación de Sabiduría o el ataque falla."
        },
        {
          termino: "Magia del Asfalto (Opción Nivel 5)",
          definicion: "Aprendes conjuros adicionales de la lista de Hechicero que puedes lanzar gastando PA."
        },
        {
          termino: "Pagar el Peaje (Nivel 7)",
          definicion: "Cuesta 3 PA. Como reacción, cuando un enemigo se mueve, debe superar una salvación de Sabiduría o recibe 2d10 de daño psíquico y su movimiento termina."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Arquetipos de la Cátedra Arcana y el Círculo de la Candelaria"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Teurgo de Batalla</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Fuerte - Luchador de MMA (MMA Fighter)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-teurgo-batalla",
      titulo: "Progresión del Teurgo de Batalla",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Heavy Hands, Pin, Submission Move"],
        ["3", "(Reemplaza Jab) Glifo de Enlace, Takedown"],
        ["5", "Advanced Combat Training"],
        ["7", "Improved Heavy Hands, Master Grappler"],
        ["9", "(Reemplaza KO Punch) Puño Rúnico"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Glifo de Enlace (Nivel 3)",
          definicion: "Cuesta 1 PA. Un oponente a 30 pies recibe 1d6 de daño de fuerza cada vez que se mueve voluntariamente."
        },
        {
          termino: "Puño Rúnico (Nivel 9)",
          definicion: "Cuesta 3 PA. Al impactar con un ataque sin armas, el objetivo recibe 4d8 de daño de fuerza adicional y debe superar una salvación de Constitución o quedar Aturdido."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Geómetra Arcano</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Inteligente - Ingeniero (Engineer)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-geometra-arcano",
      titulo: "Progresión del Geómetra Arcano",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "(Reemplaza Mechanical Companion) Invocar Constructo, Field Repairs"],
        ["3", "Fine Tuning, Plans improve"],
        ["5", "(Reemplaza Engineer Plans) Fórmulas Esotéricas"],
        ["7", "Plans improve"],
        ["9", "Plans improve"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Invocar Constructo (Nivel 1)",
          definicion: "Tienes un constructo arcano. Usa la plantilla del Robot Andante (Walking Robot), pero su tipo es Constructo y todo su daño es de fuerza (force)."
        },
        {
          termino: "Fórmulas Esotéricas (Nivel 5)",
          definicion: "En lugar de planes de Ingeniero, eliges tus planes de la lista de conjuros de Mago."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Contramago</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Duro - Guardaespaldas (Bodyguard)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-contramago",
      titulo: "Progresión del Contramago",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Get Down, Take a Bullet"],
        ["3", "(Reemplaza Come Get Some) Disipar Magia, Friendly Fire"],
        ["5", "Advanced Combat Training"],
        ["7", "(Reemplaza Vigilance) Manto de Nulificación"],
        ["9", "Human Shield"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Disipar Magia (Nivel 3)",
          definicion: "Cuesta 2 PA. Como reacción, cuando un enemigo lanza un conjuro, puedes intentar anularlo con una prueba de Inteligencia (CD 10 + nivel del conjuro)."
        },
        {
          termino: "Manto de Nulificación (Nivel 7)",
          definicion: "Tienes ventaja en las tiradas de salvación contra conjuros. Los aliados a 5 pies también ganan esta ventaja."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Hechicero de las Sombras</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Ágil - Pícaro (Scoundrel)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-hechicero-sombras",
      titulo: "Progresión del Hechicero de las Sombras",
      encabezados: ["Nivel", "Talentos", "Daño de Golpe Fantasma"],
      filas: [
        ["1", "(Reemplaza Vital Strike) Golpe Fantasma", "1d6"],
        ["3", "Swift, (Reemplaza Surprise Attack) Invisibilidad Menor", "2d6"],
        ["5", "Roll With It", "3d6"],
        ["7", "Covert Expertise", "4d6"],
        ["9", "Master of Subterfuge", "5d6"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Golpe Fantasma (Nivel 1)",
          definicion: "Funciona como Vital Strike, pero el daño adicional es psíquico."
        },
        {
          termino: "Invisibilidad Menor (Nivel 3)",
          definicion: "Cuesta 2 PA. Como acción adicional, te vuelves invisible hasta el final de tu siguiente turno."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Cronomante</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Inteligente - Mente Maestra (Mastermind)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-cronomante",
      titulo: "Progresión del Cronomante",
      encabezados: ["Nivel", "Talentos"],
      filas: [
        ["1", "Know-It-All, You're Doing It Wrong"],
        ["3", "(Reemplaza Plans) Manipulación Temporal"],
        ["5", "Plans improve"],
        ["7", "Plans improve"],
        ["9", "Plans improve"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Manipulación Temporal (Nivel 3)",
          definicion: "Puedes gastar Puntos Arcanos para: Acelerar (un aliado usa la acción de Correr o Retirarse), Vislumbrar Futuro (otorgar desventaja a un ataque enemigo) o Rebobinar (forzar a un enemigo a repetir una tirada exitosa)."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Arquetipo Independiente"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Guerrillero de la Cota Mil</strong>"
    },
    {
      tipo: "parrafo",
      texto: "Clase Base: Héroe Ágil - Pícaro (Scoundrel)."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-guerrillero-cota-mil",
      titulo: "Progresión del Guerrillero de la Cota Mil",
      encabezados: ["Nivel", "Talentos", "Daño de Vital Strike"],
      filas: [
        ["1", "Vital Strike", "1d6"],
        ["3", "(Reemplaza Surprise Attack) Tácticas de Emboscada, Swift", "2d6"],
        ["5", "Roll With It", "3d6"],
        ["7", "Covert Expertise", "4d6"],
        ["9", "Master of Subterfuge", "5d6"]
      ]
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Tácticas de Emboscada (Nivel 3)",
          definicion: "Cuando actúas antes que un oponente en el primer turno de combate, tus ataques contra él infligen 1d8 de daño adicional."
        },
        {
          termino: "Don Mágico (Opcional)",
          definicion: "A discreción del DJ, puede reemplazar Roll With It (Nivel 5) por el talento Golpe Elemental del Danzante de la Montaña, reflejando una conexión inesperada con el Don."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Pasos 5 y 6: Toques Finales"
    },
    {
      tipo: "parrafo",
      texto: "Una vez que has elegido tu facción, trasfondo y arquetipo, y has asignado tus puntos de habilidad, es hora de completar tu hoja de personaje."
    },
    {
      tipo: "h4",
      texto: "Calcular Valores Derivados:"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Puntos de Golpe (PG):</strong> Tu clase base determina tu dado de golpe (d6, d8, d10, o d12). A nivel 1, tus PG máximos son el valor máximo de ese dado + tu modificador de Constitución.",
        "<strong>Defensa:</strong> Tu arquetipo determina tu bonificador de defensa. La fórmula es 10 + tu modificador de habilidad primaria (FUE, DES, etc.) + tu bonificador de defensa de arquetipo.",
        "<strong>Iniciativa:</strong> Tu modificador de iniciativa es igual a tu modificador de Destreza.",
        "<strong>Bonificador de Competencia:</strong> A nivel 1, es +2. Se aplica a todas las tiradas en las que eres competente."
      ]
    },
    {
      tipo: "h4",
      texto: "Elegir Equipo:"
    },
    {
      tipo: "lista",
      items: [
        "Basado en tu clase y trasfondo, tienes acceso a ciertas categorías de equipo (Básico, Avanzado, etc.).",
        "Consulta el Capítulo 6 para seleccionar tu armamento inicial, armadura y otros objetos útiles."
      ]
    },
    {
      tipo: "h4",
      texto: "Definir Personalidad:"
    },
    {
      tipo: "lista",
      items: [
        "Piensa en las motivaciones, ideales, defectos y la historia de tu personaje. ¿Qué lo impulsa? ¿A qué le teme? Esto enriquecerá enormemente la experiencia de juego."
      ]
    },
    {
      tipo: "h2",
      texto: "Capítulo 5: Geografía de Caracas"
    },
    {
      tipo: "parrafo",
      texto: "Caracas no es una ciudad monolítica. Es un mosaico de territorios, cada uno con su propia alma, sus propias reglas y sus propios peligros. El asfalto y el concreto son el tablero sobre el que las facciones mueven sus piezas, y conocer el terreno es tan vital como conocer a tu enemigo. Este capítulo detalla las principales zonas de influencia y los lugares clave donde se tejerán las historias de Tecno-Arcano."
    },
    {
      tipo: "h3",
      texto: "Zonas de Influencia"
    },
    {
      tipo: "parrafo",
      texto: "La ciudad se divide en cinco grandes territorios, definidos no solo por la geografía, sino por el poder que los gobierna."
    },
    {
      tipo: "h4",
      texto: "1. El Este: La Burbuja Tecnológica"
    },
    {
      tipo: "parrafo",
      texto: "(Municipios Chacao, Baruta, El Hatillo) Territorio del Eje Metropolitano. Visto desde la distancia, el Este de Caracas es un faro de progreso. Rascacielos de vidrio y acero se alzan hacia el cielo, conectados por autopistas elevadas y silenciosos trenes maglev. Aquí, la tecnología del Eje no es una opción, es la infraestructura. La red 5G es omnipresente, los drones de reparto y vigilancia son una vista común, y la publicidad holográfica ilumina las noches. Es una zona de orden, eficiencia y una limpieza casi estéril."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Atmósfera",
          definicion: "Corporativa y vigilada. Hay una sensación palpable de seguridad, pero también de control. Cámaras inteligentes en cada esquina, guardias privados del Eje patrullando las calles y una clara división entre las áreas públicas y las zonas de acceso restringido. Para los tecnólogos puros, es un paraíso. Para un Arcano, es una jaula dorada donde cada uno de sus movimientos es analizado."
        },
        {
          termino: "Peligros",
          definicion: "La principal amenaza aquí no es la violencia callejera, sino la vigilancia. Un hechizo, por pequeño que sea, puede activar una alerta en segundos, provocando una respuesta rápida y contundente de la Guardia del Eje. La propia infraestructura es un arma: puertas que se cierran, drones que acosan y sistemas que pueden rastrear a un individuo con precisión milimétrica."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "2. El Centro: El Campo de Batalla Ideológico"
    },
    {
      tipo: "parrafo",
      texto: "(Municipio Libertador - Zonas como La Candelaria, Catedral, Bellas Artes) Territorio Disputado por los Custodes Fidei y la Cátedra/Círculo. El Centro es el corazón histórico y cultural de Caracas. Edificios coloniales y brutalistas de mediados del siglo XX conviven en un caótico abrazo. Aquí, el pasado y el futuro chocan violentamente. Las paredes de una iglesia centenaria pueden estar cubiertas de grafitis de datos de la Cátedra, mientras que en los sótanos de la universidad, el Círculo de la Candelaria realiza sus rituales secretos."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Atmósfera",
          definicion: "Tensa y paranoica. La gente del Centro ha aprendido a vivir con la cabeza gacha, ignorando las miradas severas de los Paladines de los Custodes y los debates crípticos de los estudiantes de la Cátedra. Hay una energía palpable de secretos y conspiraciones. Las lealtades son complejas y cambiantes."
        },
        {
          termino: "Peligros",
          definicion: "La violencia aquí es más sutil. No son tiroteos a plena luz del día, sino emboscadas en callejones, sabotajes arcanos y desapariciones misteriosas. Es un lugar donde una palabra equivocada a la persona incorrecta puede ser una sentencia de muerte. Tanto los Custodes como el Círculo tienen ojos y oídos en todas partes."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "3. El Oeste: La Ley de la Calle"
    },
    {
      tipo: "parrafo",
      texto: "(Zonas como Catia, 23 de Enero, Petare) Territorio de los Pranes Arcanos. El Oeste es un mar de ladrillos rojos y techos de zinc que se extiende hasta donde alcanza la vista. Es el corazón vibrante y superpoblado de la clase trabajadora de Caracas. Aquí, el Eje apenas tiene presencia y la ley oficial es una sugerencia que pocos siguen. La verdadera autoridad son los Pranes, señores del crimen cuyo poder se ha magnificado con la llegada del Don."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Atmósfera",
          definicion: "Caótica, ruidosa y llena de vida, pero con una corriente subterránea de miedo. La música suena a todo volumen, los mercados callejeros nunca cierran y la gente vive con una resiliencia formidable. Sin embargo, todos saben a quién pagarle \"la vacuna\" (extorsión) y qué esquinas evitar después del anochecer. La magia aquí es cruda, directa y, a menudo, mortal."
        },
        {
          termino: "Peligros",
          definicion: "La violencia es explícita y territorial. Las guerras entre bandas por el control de una calle o un negocio son comunes. Los personajes que no muestren la debida \"respeto\" a los Pranes locales serán vistos como un objetivo. La Interferencia Tecno-Arcana es un problema constante, haciendo que la tecnología que no sea robusta y simple sea prácticamente inútil."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "4. La Montaña: El Dominio Sagrado"
    },
    {
      tipo: "parrafo",
      texto: "(Parque Nacional Waraira Repano / El Ávila) Dominio del Colectivo Sorte-Luz. El imponente cerro El Ávila es una muralla verde que separa Caracas del mar Caribe. Para la mayoría de los caraqueños, es un lugar de esparcimiento. Pero para el Colectivo, es su catedral. En sus profundidades, lejos de los senderos turísticos, se encuentran arroyos sagrados, claros de poder y santuarios ocultos donde la magia fluye con una pureza imposible de encontrar en la ciudad."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Atmósfera",
          definicion: "Serena y primordial. El ruido de la ciudad se desvanece, reemplazado por los sonidos de la naturaleza. Sin embargo, para aquellos que no son bienvenidos, la montaña puede ser un lugar hostil. Los senderos pueden cambiar, los animales pueden volverse agresivos y una niebla densa puede aparecer de la nada."
        },
        {
          termino: "Peligros",
          definicion: "El principal peligro es la propia montaña, controlada por el Colectivo. Los Hijos de Waraira son maestros del sigilo y la emboscada en su territorio. Las trampas naturales y arcanas protegen sus lugares sagrados. La tecnología, especialmente la del Eje, es particularmente vulnerable aquí, donde la magia natural es más fuerte."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "5. Las Fronteras: Territorios Sin Ley"
    },
    {
      tipo: "parrafo",
      texto: "(Autopistas, Zonas Industriales, el río Guaire) Hogar de los Chatarreros del Guaire, los Libres de la Cota Mil y renegados. Estos son los espacios intermedios, las venas olvidadas y los órganos en descomposición de la ciudad. Autopistas abandonadas convertidas en fortalezas, zonas industriales donde solo operan negocios ilícitos y las orillas contaminadas del río Guaire."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Atmósfera",
          definicion: "Desoladora y pragmática. Aquí no hay ideologías, solo la necesidad de sobrevivir. Es un lugar de tratos, traiciones y una libertad peligrosa. El olor a metal oxidado, químicos y agua estancada es omnipresente."
        },
        {
          termino: "Peligros",
          definicion: "Todo y todos. No hay ley que te proteja. Las bandas de Chatarreros pueden desmantelar tu vehículo (contigo dentro) si les parece que tiene piezas valiosas. Los Libres de la Cota Mil defenderán sus barricadas con una ferocidad desesperada. Es el lugar perfecto para una emboscada o para desaparecer... permanentemente."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Lugares de Interés Clave"
    },
    {
      tipo: "lista",
      items: [
        "<strong>La Torre Eje Metropolitano:</strong> El monolito de vidrio y acero en el corazón de Chacao. Sus pisos inferiores son un centro comercial de lujo y oficinas corporativas, pero los niveles superiores albergan los laboratorios de I+D, los centros de datos y el infame \"Nivel Cero\", una instalación de contención de máxima seguridad para anomalías arcanas.",
        "<strong>La Ciudad Universitaria (UCV):</strong> Patrimonio de la Humanidad y sede de la Cátedra Arcana. Sus pasillos, aulas y bibliotecas son un hervidero de debate teórico sobre la magia. Se rumorea que en sus túneles subterráneos, el Círculo de la Candelaria realiza experimentos que la Cátedra consideraría poco éticos.",
        "<strong>Santuario de la Montaña:</strong> Un lugar mítico en lo profundo de El Ávila, cuya ubicación exacta solo conocen los miembros de más alto rango del Colectivo. Se dice que es un nexo de líneas ley tan potente que la tecnología simplemente deja de existir en su presencia.",
        "<strong>El Helicoide:</strong> Antiguo centro comercial y posterior sede de la policía política, esta icónica estructura de rampas en espiral es ahora el \"dungeon\" vertical más notorio de Caracas. Cada nivel está controlado por un Pran o sub-facción diferente, con los niveles más profundos y peligrosos guardando secretos y horrores de la vieja y la nueva Caracas.",
        "<strong>Mercado de Quinta Crespo:</strong> El punto de encuentro no oficial de la ciudad. Bajo sus techos laberínticos, un agente del Eje puede estar comprando frutas exóticas a un vendedor que es informante de los Custodes, mientras un Pran negocia un cargamento de químicos con un Chatarrero. Es un lugar donde se puede encontrar cualquier cosa, si sabes a quién preguntar y estás dispuesto a pagar el precio.",
        "<strong>Los Talleres del Guaire:</strong> A orillas del contaminado río, entre montañas de chatarra, se encuentran los talleres de los Chatarreros. Es un mercado negro de tecnología, el único lugar donde puedes conseguir un rifle de pulso modificado para que no lo fría un hechizo de nivel 2, o donde puedes instalar un motor de combustión en un Tesla para hacerlo inmune a la interferencia. El trabajo es bueno, pero la garantía es inexistente."
      ]
    },
    {
      tipo: "h2",
      texto: "Capítulo 6: Equipamiento, Riqueza y Vehículos"
    },
    {
      tipo: "parrafo",
      texto: "En las calles de Caracas, lo que llevas en los bolsillos puede ser tan importante como el poder que fluye por tus venas o los aumentos bajo tu piel. Este capítulo detalla el sistema de riqueza, el equipamiento especializado que cada facción puede ofrecer y los vehículos que dominan las autopistas y callejones de la ciudad."
    },
    {
      tipo: "h3",
      texto: "Sistema de Riqueza y Nivel de Precio"
    },
    {
      tipo: "parrafo",
      texto: "Tu poder adquisitivo se representa con un Nivel de Riqueza (determinado por tu Profesión, de 1 a 5). Cada objeto, a su vez, tiene un Nivel de Precio. La regla es simple: puedes adquirir libremente cualquier objeto cuyo Nivel de Precio sea igual o inferior a tu Nivel de Riqueza. Esto asume que la compra está dentro de tus medios habituales y no afecta tu estatus financiero general. Para objetos con un Nivel de Precio superior a tu Nivel de Riqueza, la adquisición no es posible a través de medios normales. Conseguirlos requeriría acciones extraordinarias dentro de la historia (como obtener un gran botín, recibir un pago importante por un trabajo peligroso, etc.), quedando a discreción del Director de Juego."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Nivel de Riqueza 1:</strong> Pobre.",
        "<strong>Nivel de Riqueza 2:</strong> Clase media-baja.",
        "<strong>Nivel de Riqueza 3:</strong> Clase media-alta.",
        "<strong>Nivel de Riqueza 4:</strong> Adinerado.",
        "<strong>Nivel de Riqueza 5:</strong> Millonario."
      ]
    },
    {
      tipo: "h3",
      texto: "Equipamiento General y de Facción"
    },
    {
      tipo: "parrafo",
      texto: "Además del equipo disponible en el manual de Everyday Heroes, las facciones de Caracas y los ingeniosos habitantes de sus márgenes han desarrollado sus propios pertrechos."
    },
    {
      tipo: "h4",
      texto: "Objetos de Facción y del Mercado Negro"
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-objetos-faccion",
      titulo: "Objetos de Facción y Mercado Negro",
      encabezados: ["Facción/Origen", "Objeto", "Nivel de Precio", "Descripción y Mecánica"],
      filas: [
        ["Eje Metropolitano", "Dron \"Avispa\" de Choque", "2 (Restringido)", "Objeto de un solo uso. Como acción, puedes desplegarlo contra un objetivo a 60 pies. El objetivo debe superar una salvación de Constitución (CD 14) o quedará Aturdido (Stunned) hasta el final de tu siguiente turno."],
        ["Custodes Fidei", "Incensario de Batalla", "2", "Un pesado incensario de bronce que funciona como un mayal (mace, 1d8 contundente). Como acción, puedes gastar 1 PA para que libere un humo consagrado en un radio de 10 pies. Las criaturas no muertas o demoníacas dentro del área tienen desventaja en sus tiradas de ataque mientras permanezcan en ella."],
        ["Colectivo Sorte-Luz", "Semillas del Ávila Silenciosas", "2", "Objeto de un solo uso. Como acción, puedes arrojarlas al suelo para crear un área de 15 pies de diámetro de silencio mágico durante 1 minuto. Son ideales para aproximaciones sigilosas o para silenciar a un lanzador de conjuros enemigo."],
        ["Colectivo Sorte-Luz", "Ungüento de Moriche", "2", "Una pasta anaranjada hecha con aceite de palma. Tarda 1 minuto en aplicarse y otorga resistencia al daño por fuego durante 1 hora."],
        ["Pranes Arcanos", "Chip \"El Soplón\"", "2 (Ilegal)", "Un microchip de rastreo del Eje, modificado por los Chatarreros. Es un objeto puramente tecnológico (NC 3) y vulnerable a la Interferencia. Requiere una prueba de Destreza (Sleight of Hand) para colocarlo en un objetivo. Transmite la ubicación del objetivo a tu smartphone durante 1 hora."],
        ["Chatarreros", "Lanzador de Cabillas", "2 (Ilegal)", "Un arma neumática improvisada que dispara varillas de acero. Ver estadísticas de armas más abajo."]
      ]
    },
    {
      tipo: "h4",
      texto: "Estadísticas de Armas Nuevas"
    },
    {
      tipo: "parrafo",
      texto: "Esta tabla detalla las propiedades del nuevo armamento improvisado que se puede encontrar en Caracas."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-armas-improvisadas",
      titulo: "Armas a Distancia Avanzadas/Improvisadas",
      encabezados: ["Arma", "Daño", "Alcance", "PV", "Propiedades", "Nivel de Precio", "Bulk"],
      filas: [
        ["Lanzador de Cabillas", "1d10 perforante", "60/120 pies", "4", "Pesada, Dos Manos, Improvisada, Recarga (Acción)", "2 (Ilegal)", "3"]
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Propiedad - Improvisada:</strong> Un personaje sin competencia en Equipo Improvisado tiene desventaja en las tiradas de ataque con esta arma."
    },
    {
      tipo: "h3",
      texto: "Vehículos de Caracas"
    },
    {
      tipo: "parrafo",
      texto: "En una ciudad definida por sus autopistas, tener el vehículo adecuado es una cuestión de estatus y supervivencia."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-vehiculos-caracas",
      titulo: "Vehículos de Caracas",
      encabezados: ["Vehículo", "Facción/Uso Común", "Pax", "FUE", "DES", "CON", "AV", "Vel. Máx.", "Propiedades", "Nivel de Precio"],
      filas: [
        ["Moto de Alta Cilindrada", "Pranes Arcanos", "2", "+5", "+6", "+0", "2", "200 mph", "Accidente Fácil, Expuesto", "3"],
        ["Toyota Hilux '90s", "Custodes Fidei / Civil", "3-5", "+2", "+0", "+4", "2", "150 mph", "Todoterreno, Enorme", "2"],
        ["Ford Bronco '80s", "Colectivo Sorte-Luz", "5", "+2", "+1", "+4", "2", "130 mph", "Todoterreno, Enorme", "2"],
        ["Tesla Model S (Eje)", "Eje Metropolitano", "5", "+4", "+3", "+2", "2", "160 mph", "Enorme, Vulnerabilidad EMP*", "4"],
        ["Rezvani Vengeance", "Eje Metropolitano", "7", "+1", "-1", "+8", "4", "110 mph", "Todoterreno, Blindado, Enorme", "5"]
      ]
    },
    {
      tipo: "parrafo",
      texto: "<strong>Propiedad Especial - Vulnerabilidad EMP:</strong> Los vehículos del Eje, al ser altamente electrónicos, tienen desventaja en las Salvaciones de Sistema contra la Interferencia Tecno-Arcana (Ver Capítulo 1)."
    },
    {
      tipo: "h2",
      texto: "Capítulo 7: Habitantes y Amenazas"
    },
    {
      tipo: "parrafo",
      texto: "Caracas es una ciudad de más de tres millones de almas, pero no todas son iguales. Desde los disciplinados agentes corporativos hasta los brutales sicarios de los barrios, pasando por las abominaciones que acechan en las sombras, este capítulo proporciona al Director de Juego una galería de adversarios y aliados para poblar el mundo de Tecno-Arcano. Las estadísticas aquí presentadas utilizan plantillas del manual Everyday Heroes como base, adaptadas con nombres, equipo y habilidades que reflejan la realidad única de Caracas 2025."
    },
    {
      tipo: "h3",
      texto: "PNJ de las Facciones"
    },
    {
      tipo: "parrafo",
      texto: "Estos son los individuos típicos que los jugadores encontrarán al interactuar o enfrentarse con las principales facciones de la ciudad."
    },
    {
      tipo: "h4",
      texto: "Eje Metropolitano"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Guardia del Eje (Usa la plantilla de \"Soldier\", CR 1)</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Estadísticas:</strong> Medium person (human), Defensa 14 (Modern Combat Armor), Puntos de Golpe 13 (2d8+4), Velocidad 20 ft. (30 ft. sin armadura), FUE 14 (+2) DES 15 (+2) CON 14 (+2) INT 12 (+1) SAB 11 (+0) CAR 11 (+0), Habilidades Atletismo +4, Percepción +2, Vehículos +4, Sentidos Percepción Pasiva 12",
        "<strong>Equipo:</strong> Rifle de asalto (Assault Carbine), Pistola 9mm, Cuchillo, Kit de policía, Comunicador.",
        "<strong>Red Táctica:</strong> Como acción adicional, el guardia puede solicitar datos de combate, otorgándose ventaja en su siguiente tirada de ataque.",
        "<strong>Acciones:</strong> Multiataque. El guardia hace dos ataques con su rifle de asalto. Rifle de Asalto. Ataque de Arma a Distancia: +4 a impactar, alcance 800/1600 ft., un objetivo. Impacto: 8 (1d12+2) daño balístico."
      ]
    },
    {
      tipo: "h4",
      texto: "Custodes Fidei"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Inquisidor de Campo (Usa la plantilla de \"Spy\", CR 2)</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Estadísticas:</strong> Medium person (human), Defensa 16, Puntos de Golpe 27 (5d8+5), Velocidad 30 ft., FUE 11 (+0) DES 15 (+2) CON 12 (+1) INT 14 (+2) SAB 16 (+3) CAR 16 (+3), Salvaciones INT +4, SAB +5, Habilidades Engaño +5, Perspicacia +7, Investigación +6, Percepción +7, Persuasión +5, Sentidos Percepción Pasiva 17",
        "<strong>Equipo:</strong> Pistola pesada (heavy revolver), Ropas de civil, Símbolo sagrado.",
        "<strong>Sentir la Herejía (Cuesta 1 PA):</strong> Como acción, el inquisidor puede sentir la presencia de no-muertos o demonios a 60 pies durante 1 minuto. Tiene 3 PA.",
        "<strong>Acciones:</strong> Multiataque. El inquisidor hace dos ataques. Ataque sin armas. Ataque de Arma Cuerpo a Cuerpo: +4 a impactar, alcance 5 ft., un objetivo. Impacto: 4 (1d4+2) daño contundente. Pistola Pesada. Ataque de Arma a Distancia: +4 a impactar, alcance 100/200 ft., un objetivo. Impacto: 7 (1d10+2) daño balístico."
      ]
    },
    {
      tipo: "h4",
      texto: "Colectivo Sorte-Luz"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Hijo de Waraira (Usa la plantilla de \"Hunter\", CR 1/2)</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Estadísticas:</strong> Medium person (human), Defensa 13, Puntos de Golpe 16 (3d8+3), Velocidad 30 ft., FUE 15 (+2) DES 14 (+2) CON 12 (+1) INT 10 (+0) SAB 14 (+2) CAR 11 (+0), Habilidades Percepción +4, Sigilo +4, Supervivencia +4, Sentidos Percepción Pasiva 14",
        "<strong>Equipo:</strong> Arco largo, Machete, Amuletos de protección.",
        "<strong>Piel de la Montaña (Cuesta 1 PA):</strong> Como reacción cuando es impactado por un ataque, puede ganar resistencia a daño contundente, perforante y cortante no mágico hasta el inicio de su próximo turno. Tiene 2 PA.",
        "<strong>Acciones:</strong> Machete. Ataque de Arma Cuerpo a Cuerpo: +4 a impactar, alcance 5 ft., un objetivo. Impacto: 5 (1d6+2) daño cortante. Arco Largo. Ataque de Arma a Distancia: +4 a impactar, alcance 250/750 ft., un objetivo. Impacto: 6 (1d8+2) daño perforante."
      ]
    },
    {
      tipo: "h4",
      texto: "Pranes Arcanos"
    },
    {
      tipo: "parrafo",
      texto: "<strong>Sicario Arcano \"Chispita\" (Usa la plantilla de \"Gangster\", CR 1)</strong>"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Estadísticas:</strong> Medium person (human), Defensa 14 (Chaqueta de cuero), Puntos de Golpe 27 (5d8+5), Velocidad 30 ft., FUE 14 (+2) DES 16 (+3) CON 12 (+1) INT 10 (+0) SAB 9 (-1) CAR 14 (+2), Habilidades Intimidación +4, Sigilo +5, Sabiduría Callejera +1, Sentidos Percepción Pasiva 9",
        "<strong>Equipo:</strong> Pistola 9mm, Cuchillo, Chaqueta de cuero.",
        "<strong>Aptitud Mágica:</strong> El Carisma es su aptitud para conjuros. CD Salvación 12, Ataque +4. Tiene 3 PA. Conjuros Conocidos: Trucos - Fire Bolt, Prestidigitation; Nivel 1 - Burning Hands, Magic Missile.",
        "<strong>Acciones:</strong> Multiataque. El sicario hace dos ataques. Cuchillo. Ataque de Arma Cuerpo a Cuerpo o a Distancia: +5 a impactar, alcance 5 ft. o rango 20/60, un objetivo. Impacto: 5 (1d4+3) daño perforante. Pistola 9mm. Ataque de Arma a Distancia: +5 a impactar, alcance 100/200 ft., un objetivo. Impacto: 8 (1d10+3) daño balístico."
      ]
    },
    {
      tipo: "h3",
      texto: "Amenazas Sobrenaturales y Arcanas"
    },
    {
      tipo: "parrafo",
      texto: "El resurgimiento de la magia ha despertado o creado entidades que desafían la comprensión."
    },
    {
      tipo: "h4",
      texto: "Constructo de Enredaderas (CR 3)"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Estadísticas:</strong> Large construct, Defensa 13 (Armadura natural), Puntos de Golpe 59 (7d10+21), Velocidad 20 ft., trepar 20 ft., FUE 18 (+4) DES 8 (-1) CON 16 (+3) INT 5 (-3) SAB 10 (+0) CAR 5 (-3), Resistencias al Daño Contundente, Perforante, Vulnerabilidades al Daño Fuego, Inmunidades a Condición Cegado, Ensordecido, Asustado, Envenenado, Sentidos Visión ciega 60 ft., Percepción Pasiva 10",
        "<strong>Apariencia Falsa:</strong> Mientras el constructo permanece inmóvil, es indistinguible de un montón de basura y enredaderas.",
        "<strong>Acciones:</strong> Multiataque. El constructo hace dos ataques de Golpetazo. Golpetazo. Ataque de Arma Cuerpo a Cuerpo: +6 a impactar, alcance 10 ft., un objetivo. Impacto: 13 (2d8+4) daño contundente. Si el objetivo es una criatura, es apresado (escapar CD 14). Apresar y Aplastar. El constructo puede aplastar a una criatura que ya esté apresando. La criatura debe superar una salvación de Fuerza (CD 14) o recibirá 13 (2d8+4) de daño contundente."
      ]
    },
    {
      tipo: "h4",
      texto: "Bestia Urbana Corrupta (CR 1)"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Estadísticas:</strong> Medium monstrosity, Defensa 13 (Armadura natural), Puntos de Golpe 22 (4d8+4), Velocidad 50 ft., FUE 16 (+3) DES 15 (+2) CON 13 (+1) INT 3 (-4) SAB 12 (+1) CAR 7 (-2), Habilidades Percepción +5, Sigilo +4, Sentidos Visión en la oscuridad 60 ft., Percepción Pasiva 15",
        "<strong>Tácticas de Manada:</strong> La bestia tiene ventaja en las tiradas de ataque contra una criatura si al menos uno de los aliados de la bestia está a 5 pies de la criatura y el aliado no está incapacitado.",
        "<strong>Acciones:</strong> Mordisco. Ataque de Arma Cuerpo a Cuerpo: +5 a impactar, alcance 5 ft., un objetivo. Impacto: 7 (1d8+3) daño perforante. Si el objetivo es una criatura, debe superar una salvación de Constitución CD 11 o contraerá la enfermedad Rabia Mágica.",
        "<strong>Rabia Mágica:</strong> Al final de cada descanso largo, el objetivo infectado debe realizar una salvación de Constitución CD 11. Tras tres fallos, la enfermedad se afianza y el personaje gana un nivel de locura (a discreción del DJ) hasta que sea curado."
      ]
    },
    {
      tipo: "h4",
      texto: "Peligro Ambiental: Susurro Etéreo"
    },
    {
      tipo: "parrafo",
      texto: "Algunas zonas de Caracas están \"encantadas\" por ecos de eventos traumáticos o una alta concentración de energía arcana residual. Estos lugares emiten un \"susurro\" psíquico que desgasta la cordura."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Efecto:</strong> Al entrar en el área afectada por primera vez o al comenzar su turno allí, una criatura debe hacer una tirada de salvación de Sabiduría CD 13. Si falla, recibe 7 (2d6) de daño psíquico y queda Asustada hasta el comienzo de su próximo turno. Si tiene éxito, recibe la mitad del daño y no queda asustada.",
        "<strong>Detección:</strong> El área no tiene ninguna manifestación visible o auditiva. Un personaje con \"El Don\" que se concentre puede realizar una prueba de Sabiduría (Perspicacia) CD 15 para sentir una \"fría opresión\" en el aire antes de entrar."
      ]
    },
    {
      tipo: "h2",
      texto: "Capítulo 8: Guía del Director de Juego"
    },
    {
      tipo: "parrafo",
      texto: "Este capítulo final es tu caja de herramientas. Contiene sistemas y guías para ayudarte a gestionar la compleja red de alianzas y enemistades en Caracas, así como para sembrar semillas de aventura y dar vida al submundo de la información. Usa estas guías para improvisar, añadir profundidad a tus PNJ y hacer que las decisiones de los jugadores tengan un peso real en la narrativa."
    },
    {
      tipo: "h3",
      texto: "Sistema de Reputación"
    },
    {
      tipo: "parrafo",
      texto: "Las acciones hablan más que las palabras. En Caracas, la reputación lo es todo. La forma en que los jugadores actúan con una facción resonará en toda la ciudad, abriendo o cerrando puertas de formas inesperadas. La reputación de los jugadores con cada facción se mide en una escala de -10 (Enemigo Odiado) a +10 (Aliado de Confianza). Este sistema no es solo narrativo; tiene un impacto mecánico directo en las interacciones sociales."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-reputacion-faccion",
      titulo: "Tabla de Reputación por Facción",
      encabezados: ["Puntuación", "Estado", "Efecto Narrativo", "Modificador a Pruebas Sociales"],
      filas: [
        ["+8 a +10", "Aliado de Confianza", "Te consideran uno de los suyos. Te confían misiones críticas, secretos y recursos valiosos.", "Ventaja en pruebas de Persuasión e Intimidación. Las pruebas de Engaño contra ellos tienen Desventaja."],
        ["+4 a +7", "Amigo Respetado", "Te valoran y te ofrecen trabajo antes que a otros. Te dan acceso a su equipo de facción y te ofrecen descuentos.", "+2 a las pruebas de Persuasión."],
        ["-3 a +3", "Neutral / Conocido", "Eres un rostro familiar o un completo desconocido. Te tratan con profesionalismo, indiferencia o una leve sospecha.", "Sin modificador."],
        ["-4 a -7", "Enemigo", "Has actuado activamente en su contra. No negociarán contigo, te negarán la entrada a sus territorios y pueden atacarte si te ven como un objetivo fácil.", "Desventaja en pruebas de Persuasión. +2 a las pruebas de Intimidación."],
        ["-8 a -10", "Buscado / Enemigo Odiado", "Eres un objetivo prioritario. Te atacarán al verte sin mediar palabra. La diplomacia es imposible, pero tu infamia te precede.", "La diplomacia es imposible. Ventaja en pruebas de Intimidación."]
      ]
    },
    {
      tipo: "h3",
      texto: "Juego Social y Conocimiento"
    },
    {
      tipo: "parrafo",
      texto: "Navegar las conversaciones es clave para la supervivencia y el éxito. Cada facción tiene su propia \"moneda\" social, su forma de hacer negocios y sus secretos. Usa estas tablas para determinar qué saben los personajes o qué rumores pueden descubrir al interactuar con el submundo de Caracas."
    },
    {
      tipo: "h4",
      texto: "El Eje Metropolitano"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Acercamiento:</strong> A través de canales oficiales, con burocracia y mostrando una utilidad clara. Valoran la eficiencia y los datos duros.",
        "<strong>Moneda:</strong> Dinero, datos de inteligencia, prototipos tecnológicos, favores corporativos.",
        "<strong>Pruebas de Habilidad:</strong> Persuasión (CD 18), Engaño (CD 20), Intimidación (CD 22)."
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-conocimiento-eje",
      titulo: "Conocimiento del Eje Metropolitano (Tirada de Sabiduría Callejera o Investigación)",
      encabezados: ["d20", "Rumor o Información Descubierta"],
      filas: [
        ["1-5", "\"Los nuevos drones 'Halcón' tienen un problema de sobrecalentamiento. Un buen pulso electromagnético y caen como moscas.\""],
        ["6-10", "\"Hay una lucha de poder interna entre el departamento de I+D y el de Seguridad. Están saboteándose mutuamente.\""],
        ["11-15", "\"El Eje está mapeando en secreto las líneas ley de la ciudad. Dicen que es para 'prevenir desastres', pero buscan una fuente de poder.\""],
        ["16-19", "\"El Director Mendoza no confía plenamente en su propia tecnología. Tiene un consultor arcano personal, un renegado de la Cátedra.\""],
        ["20+", "\"El 'Nivel Cero' de la Torre no es una prisión, es un laboratorio. Contiene una IA inestable que intenta aprender a replicar la magia.\""]
      ]
    },
    {
      tipo: "h4",
      texto: "Los Custodes Fidei"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Acercamiento:</strong> Con respeto, a través de parroquias locales, mostrando piedad o un odio compartido por la magia profana.",
        "<strong>Moneda:</strong> Fe, servicio a la comunidad, juramentos, reliquias sagradas.",
        "<strong>Pruebas de Habilidad:</strong> Persuasión (CD 14), Engaño (CD 16), Intimidación (CD 19)."
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-conocimiento-custodes",
      titulo: "Conocimiento de los Custodes Fidei (Tirada de Sabiduría Callejera o Ciencias Sociales)",
      encabezados: ["d20", "Rumor o Información Descubierta"],
      filas: [
        ["1-5", "\"Un nuevo Paladin en La Candelaria es demasiado celoso. Está causando problemas, incluso con gente inocente.\""],
        ["6-10", "\"La Cofradía de José Gregorio está curando gente en Petare, y eso está enfadando a los Pranes que controlan el negocio de las drogas.\""],
        ["11-15", "\"Monseñor Boulton está más preocupado por la influencia del Colectivo en los barrios que por el propio Eje.\""],
        ["16-19", "\"Los Custodes poseen reliquias antiguas que pueden crear zonas de 'silencio mágico', anulando completamente el Don en un área pequeña.\""],
        ["20+", "\"Existe una facción secreta dentro de los Custodes, los 'Ojos de la Fe', un servicio de inteligencia que opera sin el conocimiento del Monseñor.\""]
      ]
    },
    {
      tipo: "h4",
      texto: "El Colectivo Sorte-Luz"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Acercamiento:</strong> Con humildad, respetando sus tradiciones, a través de ofrendas a los espíritus.",
        "<strong>Moneda:</strong> Respeto, reciprocidad, objetos naturales, ayuda a su comunidad.",
        "<strong>Pruebas de Habilidad:</strong> Persuasión (CD 13), Engaño (CD 15), Intimidación (CD 17)."
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-conocimiento-colectivo",
      titulo: "Conocimiento del Colectivo Sorte-Luz (Tirada de Supervivencia o Sabiduría Callejera)",
      encabezados: ["d20", "Rumor o Información Descubierta"],
      filas: [
        ["1-5", "\"El espíritu del río Guaire está enfermo por la contaminación. Algunos chamanes dicen que está 'gritando'.\""],
        ["6-10", "\"Los Hijos de Waraira se han vuelto más agresivos, saboteando activamente las antenas de comunicación del Eje en las faldas del Ávila.\""],
        ["11-15", "\"Mamá Jacinta, la líder del Colectivo, está envejeciendo y busca un sucesor digno. Hay varias facciones internas compitiendo por su favor.\""],
        ["16-19", "\"Hay un 'lugar de silencio mágico' en el Cementerio del Este, un punto muerto donde la magia no funciona. Nadie sabe por qué.\""],
        ["20+", "\"Temen que un chamán renegado conocido como 'El Ungido' haya hecho un pacto con algo oscuro y antiguo en las profundidades de la montaña.\""]
      ]
    },
    {
      tipo: "h4",
      texto: "Los Pranes Arcanos"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Acercamiento:</strong> Con cuidado, a través de intermediarios, mostrando que no eres ni un policía ni un blando.",
        "<strong>Moneda:</strong> Poder, dinero, miedo, drogas, armas.",
        "<strong>Pruebas de Habilidad:</strong> Persuasión (CD 16), Engaño (CD 14), Intimidación (CD 15)."
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-conocimiento-pranes",
      titulo: "Conocimiento de los Pranes Arcanos (Tirada de Sabiduría Callejera o Engaño)",
      encabezados: ["d20", "Rumor o Información Descubierta"],
      filas: [
        ["1-5", "\"Un 'Chispita' nuevo está en problemas. Perdió un cargamento importante y su jefe le ha puesto precio a su cabeza.\""],
        ["6-10", "\"Está corriendo una nueva droga de diseño llamada 'El Viaje'. Dicen que te da visiones, pero que te frie el cerebro.\""],
        ["11-15", "\"El Sindicato del Silbón se está expandiendo desde Catia hacia el centro, buscando controlar las rutas de contrabando.\""],
        ["16-19", "\"Hay una ruta secreta de contrabando que pasa por los viejos túneles de servicio bajo El Helicoide.\""],
        ["20+", "\"Uno de los Pranes más viejos tiene un artefacto arcano robado de la Cátedra y lo usa como un vulgar pisapapeles en su oficina.\""]
      ]
    },
    {
      tipo: "h4",
      texto: "Grupos No Alineados (Chatarreros, Libres, etc.)"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Acercamiento:</strong> Directo, sin pretensiones. Se valora la habilidad y el intercambio justo.",
        "<strong>Moneda:</strong> Trueque, favores, piezas raras de tecnología, información útil.",
        "<strong>Pruebas de Habilidad:</strong> Persuasión (CD 14), Engaño (CD 16), Intimidación (CD 18)."
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-conocimiento-no-alineados",
      titulo: "Conocimiento de Grupos No Alineados (Tirada de Mecánica o Investigación)",
      encabezados: ["d20", "Rumor o Información Descubierta"],
      filas: [
        ["1-5", "(Chatarreros) \"El Eje desechó un lote de supresores de campo 'defectuosos'. No estaban defectuosos, eran demasiado potentes e inestables.\""],
        ["6-10", "(Libres de la Cota Mil) \"Una patrulla de Custodes usa un túnel de servicio secreto en la autopista para moverse sin ser vistos.\""],
        ["11-15", "(Investigador Privado) \"Un alto ejecutivo del Eje ha estado visitando a una sanadora del Colectivo. Su hija está enferma y la tecnología no la puede curar.\""],
        ["16-19", "(Chatarreros) \"Saben cómo blindar aparatos contra la Interferencia. Usan piezas de satélites viejos que caen en el Caribe.\""],
        ["20+", "(Libres de la Cota Mil) \"Existe un mapa de la red de túneles de servicio de la vieja Caracas, anterior al Eje. Dicen que está custodiado por algo... o alguien.\""]
      ]
    }
  ]
};

export default tecnoArcanoCompleto;
