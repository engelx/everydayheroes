const capitulo8 = {
  id: "capitulo-8",
  titulo: "Capítulo 8: Reglas Básicas",
  numero: 8,
  contenido: [
    {
      tipo: "introduccion",
      texto: "Everyday Heroes se basa en la quinta edición de las reglas del Documento de Referencia del Sistema, cuyos orígenes se remontan al comienzo de los juegos de rol de mesa. En esencia, el DR presenta un conjunto sencillo de reglas sobre las que se pueden construir juegos detallados. Los fundamentos del juego son sencillos, pero las reglas de este libro añaden nuevas opciones y detalles diseñados para dar a Everyday Heroes una “sensación” que es a la vez realista y fiel al estilo del género de las películas de acción."
    },
    {
      tipo: "parrafo",
      texto: "Este capítulo detalla las reglas básicas de Everyday Heroes, útiles tanto para jugadores como para GM."
    },
    {
      tipo: "h2",
      texto: "Reglas de Dados"
    },
    {
      tipo: "parrafo",
      texto: "Si eres nuevo en los juegos de rol de mesa, asegúrate de revisar la sección de la Introducción sobre los dados poliédricos y cómo se presentan en estas reglas. Esta sección asume que sabes lo que significan 2d8 + 2 y anotaciones similares."
    },
    {
      tipo: "h3",
      texto: "Ventaja y Desventaja"
    },
    {
      tipo: "parrafo",
      texto: "La ventaja y la desventaja se aplican solo a las tiradas de d20. La ventaja significa que tiras el d20 dos veces y usas la tirada más alta. La desventaja significa que tiras el d20 dos veces y usas la tirada más baja."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Ventaja y Desventaja",
      texto: "Arjun Mehta quiere saltar una valla de seguridad. Tiene un palo largo que va a usar para ayudarse a saltar la valla. El GM decide que necesita superar una prueba de Fuerza (Atletismo) de CD 15, pero obtiene ventaja gracias al palo. Arjun tira dos d20 en lugar de uno. Saca un 6 y un 15. Como tiene ventaja, usa el 15. Si Arjun tuviera desventaja por alguna razón, tendría que usar el 6."
    },
    {
      tipo: "parrafo",
      texto: "Nunca puedes tirar más de dos dados debido a la ventaja o la desventaja. Si dos o más efectos diferentes te dieran individualmente ventaja o desventaja en una tirada, sigues tirando dos dados."
    },
    {
      tipo: "parrafo",
      texto: "Si diferentes efectos te otorgan ventaja y desventaja en la misma tirada, se anulan entre sí y realizas la tirada normalmente. Esto es cierto incluso si tienes varios efectos que proporcionan ventaja y solo un efecto que proporciona desventaja, o viceversa."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Anulación de Ventaja y Desventaja",
      texto: "Daxx se ha escabullido detrás de un jefe mafioso en un callejón oscuro y quiere dispararle al criminal con su escopeta. Como Daxx está escondido, obtiene ventaja. También obtiene ventaja de la propiedad de disparo de la escopeta. Pero como hay poca visibilidad debido a la oscuridad, Daxx también tiene desventaja en el ataque a distancia. Como Daxx tiene tanto ventaja como desventaja, se anulan, y la tirada de ataque es normal, tirando un solo d20."
    },
    {
      tipo: "parrafo",
      texto: "Si algún efecto te permite volver a tirar un d20 después de haber tirado con ventaja o desventaja, eliges cuál de los dos dados volver a tirar, luego tomas la tirada más alta o más baja de ambos dados, según corresponda."
    },
    {
      tipo: "h4",
      texto: "Asignando Ventaja y Desventaja"
    },
    {
      tipo: "parrafo",
      texto: "La ventaja y la desventaja están pensadas para ser bonificaciones situacionales. El GM puede asignar ventaja y desventaja en cualquier tirada realizada por héroes o PNJ antes de que se realice la tirada, y debe citar qué efecto está creando la ventaja o la desventaja."
    },
    {
      tipo: "parrafo",
      texto: "Algunos talentos de héroe otorgan automáticamente ventaja en situaciones específicas, y muchas reglas otorgan automáticamente desventaja en situaciones específicas."
    },
    {
      tipo: "parrafo",
      texto: "También se anima a los jugadores a pedir ventaja si consideran que la situación lo justifica, pero el GM siempre tiene la última palabra sobre cuándo se aplican la ventaja y la desventaja."
    },
    {
      tipo: "h3",
      texto: "Volver a Tirar"
    },
    {
      tipo: "parrafo",
      texto: "Si un efecto te permite volver a tirar un d20, puedes elegir volver a tirar el dado después de determinar si la tirada original es exitosa o no. Si vuelves a tirar, debes aceptar el resultado de la nueva tirada, incluso si es peor que tu tirada inicial. Si se te permite volver a tirar un d20 mientras tienes ventaja o desventaja, eliges cuál de los dos dados volver a tirar, luego tomas la tirada más alta o más baja de ambos dados, según corresponda."
    },
    {
      tipo: "h3",
      texto: "Pasos de Dado"
    },
    {
      tipo: "parrafo",
      texto: "Al realizar una tirada de daño, las reglas a veces te indican que aumentes o disminuyas un dado en uno o más pasos, lo que te permite usar un dado de mayor o menor número, respectivamente. Si se tiran varios dados y se indica que se aumente o disminuya un dado, todos los dados se aumentan o disminuyen. (Esto es poco común)."
    },
    {
      tipo: "parrafo",
      texto: "Pasos de Dado: d4, d6, d8, d10, d12"
    },
    {
      tipo: "parrafo",
      texto: "Los dados no pueden disminuir más allá de d4 ni aumentar más allá de d12."
    },
    {
      tipo: "h3",
      texto: "Añadir o Quitar Dados"
    },
    {
      tipo: "parrafo",
      texto: "Algunos efectos añaden o quitan dados de una tirada de daño. Los dados añadidos son del mismo tipo que se tira normalmente." 
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Añadir Dados de Daño",
      texto: "Si un arma inflige 2d6 + 4 de daño, añadir un dado de daño aumenta el daño a 3d6 + 4. Si quitas un dado, el arma inflige 1d6 + 4 de daño."
    },
    {
      tipo: "parrafo",
      texto: "Si un efecto requiere quitar tantos o más dados de los que se tirarían normalmente, no se tiran dados y la porción de dados inflige 1 punto de daño. Por ejemplo, si un arma normalmente inflige 1d6 + 2 de daño y un efecto quita uno o más dados, el resultado sería 1 + 2 de daño."
    },
    {
      tipo: "h2",
      texto: "Habilidades"
    },
    {
      tipo: "parrafo",
      texto: "Seis habilidades diferentes representan el potencial bruto de los héroes y sus enemigos, ayudando a definir a los personajes del juego tanto física como mentalmente:"
    },
    {
      tipo: "lista",
      items: [
        "Fuerza, que mide el poder y la fuerza física.",
        "Destreza, que mide la agilidad y la gracia de un personaje.",
        "Constitución, que representa la salud física y la resistencia.",
        "Inteligencia, que mide la capacidad de razonamiento y el ingenio de un personaje.",
        "Sabiduría, que representa la comprensión intuitiva y la fuerza de voluntad.",
        "Carisma, que mide el magnetismo personal y el ego."
      ]
    },
    {
      tipo: "parrafo",
      texto: "La mayoría de las tiradas de dados realizadas durante un juego son modificadas por una de estas habilidades."
    },
    {
      tipo: "h3",
      texto: "Puntuaciones de Habilidad"
    },
    {
      tipo: "parrafo",
      texto: "A cada puntuación de habilidad se le asigna un valor. Las puntuaciones de habilidad humanas oscilan entre 3 y 20, siendo 11 un promedio. Las criaturas no humanas pueden tener puntuaciones de habilidad tan bajas como 1 y tan altas como 30." 
    },
    {
      tipo: "parrafo",
      texto: "Las puntuaciones de habilidad de un personaje se utilizan para determinar sus modificadores de habilidad."
    },
    {
      tipo: "h3",
      texto: "Modificadores de Habilidad"
    },
    {
      tipo: "parrafo",
      texto: "Cada puntuación de habilidad tiene un modificador. Los modificadores son negativos para puntuaciones bajas y positivos para puntuaciones altas. Puedes calcular un modificador de habilidad tomando la puntuación de habilidad y restando 10, luego dividiendo por 2 y redondeando hacia abajo. La tabla Modificador de Habilidad muestra los modificadores para el rango de puntuaciones de habilidad humanas, desde -4 para una puntuación de 3, hasta +5 para una puntuación de 20." 
    },
    {
      tipo: "parrafo",
      texto: "Modificador de Habilidad: (Puntuación de Habilidad -10)/2, redondeado hacia abajo"
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-modificador-habilidad",
      titulo: "Modificador de Habilidad",
      encabezados: ["Puntuación", "Modificador"],
      filas: [
        ["3", "-4"],
        ["4-5", "-3"],
        ["6-7", "-2"],
        ["8-9", "-1"],
        ["10-11", "0"],
        ["12-13", "+1"],
        ["14-15", "+2"],
        ["16-17", "+3"],
        ["18-19", "+4"],
        ["20", "+5"]
      ]
    },
    {
      tipo: "h2",
      texto: "Competencia"
    },
    {
      tipo: "parrafo",
      texto: "La competencia representa el entrenamiento y la experiencia que permiten a un héroe realizar tareas y actividades desafiantes. Las competencias cubren una amplia categoría de actividades que los héroes modernos pueden intentar, y cada héroe tiene una lista de competencias y un bonificador de competencia."
    },
    {
      tipo: "h3",
      texto: "Bonificador de Competencia"
    },
    {
      tipo: "parrafo",
      texto: "El bonificador de competencia de tu héroe se basa en su nivel. No puedes añadir tu bonificador de competencia más de una vez a una tirada determinada, incluso si múltiples competencias o talentos otorgan un bonificador de competencia. Tampoco puedes multiplicar o dividir el bonificador más de una vez." 
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-bonificador-competencia-nivel",
      titulo: "Bonificador de Competencia por Nivel de Héroe",
      encabezados: ["Nivel de Héroe", "Bonificador de Competencia"],
      filas: [
        ["1-4", "+2"],
        ["5-8", "+3"],
        ["9-10", "+4"]
      ]
    },
    {
      tipo: "parrafo",
      texto: "El bonificador de competencia de tu héroe es un modificador que se puede añadir a la tirada de d20 cuando atacas, realizas una tirada de salvación o realizas una prueba de habilidad usando una habilidad, dependiendo de si tienes la competencia necesaria."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-usos-competencia",
      titulo: "Usos de Competencia",
      encabezados: ["Tipo de Competencia", "Tirada de d20 Aplicable"],
      filas: [
        ["Competencia con equipo (armas)", "Tirada de ataque"],
        ["Competencia con equipo (armadura)", "Tirada de salvación de armadura"],
        ["Competencia con habilidad", "Prueba de habilidad"],
        ["Competencia con tirada de salvación", "Tirada de salvación"]
      ]
    },
    {
      tipo: "h3",
      texto: "Competencias de Equipo"
    },
    {
      tipo: "parrafo",
      texto: "Una competencia de equipo representa un entrenamiento básico con una categoría específica de armas, armaduras, municiones o equipo de combate. Todas las armas, armaduras y explosivos pertenecen a una de las categorías de competencia de equipo."
    },
    {
      tipo: "parrafo",
      texto: "Las competencias de equipo se organizan por niveles, como se ve en el diagrama anterior. Los héroes obtienen competencia con el Equipo Básico antes que con el Equipo Avanzado, el Equipo Histórico o el Equipo Improvisado. Del mismo modo, obtienen competencia con el Equipo Avanzado antes de adquirir el Equipo Militar." 
    },
    {
      tipo: "diagrama",
      src: "assets/images/equipment-tree.png",
      alt: "Diagrama que muestra la progresión de las competencias de equipamiento: Basic, Advanced, Military, Improvised, Historical." 
    },
    {
      tipo: "h4",
      texto: "Armadura"
    },
    {
      tipo: "parrafo",
      texto: "Si tu personaje usa armadura con la que tiene competencia, aplicas tu bonificador de competencia a tus tiradas de salvación de armadura."
    },
    {
      tipo: "h4",
      texto: "Armas"
    },
    {
      tipo: "parrafo",
      texto: "Si tu personaje empuña un arma con la que tiene competencia, aplicas tu bonificador de competencia a tus tiradas de ataque realizadas con esa arma."
    },
    {
      tipo: "h5",
      texto: "Explosivos"
    },
    {
      tipo: "parrafo",
      texto: "Los ataques con explosivos se realizan utilizando un lanzador o un ataque de lanzamiento específico, ambos tratados como armas. No existe una competencia separada con explosivos, que solo detallan el efecto del ataque."
    },
    {
      tipo: "h5",
      texto: "Armas Improvisadas"
    },
    {
      tipo: "parrafo",
      texto: "Las armas improvisadas son objetos no diseñados para ser usados como armas. Los héroes no competentes con Equipo Improvisado tienen desventaja en las tiradas de ataque realizadas con cualquier cosa que no esté destinada a ser un arma o con un arma que se maneje de una manera para la que no fue diseñada." 
    },
    {
      tipo: "h3",
      texto: "Competencias en Tiradas de Salvación"
    },
    {
      tipo: "parrafo",
      texto: "Los personajes pueden tener competencia en tiradas de salvación utilizando cualquiera de las seis puntuaciones de habilidad. Si tu personaje tiene competencia en tiradas de salvación para una puntuación de habilidad determinada, añades tu bonificador de competencia al realizar dichas tiradas de salvación."
    },
    {
      tipo: "h3",
      texto: "Competencias de Habilidad"
    },
    {
      tipo: "parrafo",
      texto: "Las reglas básicas de Everyday Heroes presentan veintidós habilidades diferentes, diseñadas para cubrir una amplia gama de actividades que los héroes pueden realizar fuera del combate. Las competencias de habilidad te permiten añadir tu bonificador de competencia a las pruebas de habilidad que pueden usar la habilidad en la que tu personaje tiene competencia. Por ejemplo, un personaje con competencia en la habilidad Atletismo puede aplicar su bonificador de competencia a las pruebas de Fuerza (Atletismo)."
    },
    {
      tipo: "parrafo",
      texto: "Los héroes no necesitan ser competentes en una habilidad para realizar una prueba de habilidad cubierta por esa habilidad. El único beneficio de ser competente es el bonificador de competencia. El GM tiene la discreción de decir que ciertas pruebas de habilidad requieren competencia con una habilidad específica si así lo desea, pero esta es la excepción, no la norma."
    },
    {
      tipo: "parrafo",
      texto: "Diferentes habilidades pueden usarse para realizar tareas similares. Por ejemplo, los personajes que intenten evitar una cámara de seguridad podrían hacerlo usando pruebas de Inteligencia (Computadoras) para hackear el sistema que controla la cámara, pruebas de Inteligencia (Seguridad) para hacer que la cámara deje de funcionar, o pruebas de Destreza (Sigilo) para moverse a través de las sombras fuera de la vista de la cámara."
    },
    {
      tipo: "h4",
      texto: "Experiencia"
    },
    {
      tipo: "parrafo",
      texto: "La experiencia en una habilidad te permite duplicar tu bonificador de competencia al realizar pruebas de habilidad usando esa habilidad. Tu personaje debe ser competente en una habilidad para poder obtener experiencia en ella. No puedes duplicar tu bonificador de competencia más de una vez en una prueba de habilidad."
    },
    {
      tipo: "h4",
      texto: "Adquiriendo Competencias de Habilidad y Experiencia"
    },
    {
      tipo: "parrafo",
      texto: "Si adquieres una competencia de habilidad por segunda vez mientras creas tu personaje, puedes obtener en su lugar competencia en cualquier otra habilidad. Si adquieres experiencia en una habilidad en la que ya tienes experiencia, puedes seleccionar una habilidad diferente en la que ya seas competente y obtener experiencia en esa habilidad."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Duplicación de Competencia",
      texto: "Mac Williams elige el trasfondo de estudiante atleta y obtiene competencia en la habilidad Atletismo. Mac también obtiene competencia en la habilidad Atletismo cuando elige Atletismo como su profesión. Esto le permite, en cambio, obtener competencia en Acrobacias o cualquier otra habilidad en la que aún no sea competente."
    },
    {
      tipo: "h2",
      texto: "Pruebas de Habilidad"
    },
    {
      tipo: "parrafo",
      texto: "La mecánica más universal en Everyday Heroes es la prueba de habilidad. Los héroes realizan pruebas de habilidad para casi todo lo que intentan hacer, excepto atacar en combate. Las pruebas de habilidad pueden usarse para determinar el resultado de cualquier actividad donde exista alguna posibilidad de fracaso, o cualquier situación donde dos personajes compitan entre sí."
    },
    {
      tipo: "parrafo",
      texto: "No se necesitan pruebas de habilidad para realizar actividades mundanas como conducir un coche al trabajo, hacer tu trabajo, preparar la cena, etc. Más bien, el GM solicita pruebas de habilidad cuando el resultado de una acción está en duda y las consecuencias del éxito y el fracaso son eventos significativos en el transcurso del juego. Saltar un abismo, sobornar a un guardia, hackear un sistema informático o seducir a un espía enemigo son ejemplos de acciones en las que se usaría una prueba de habilidad."
    },
    {
      tipo: "h3",
      texto: "Realizando Pruebas de Habilidad"
    },
    {
      tipo: "parrafo",
      texto: "Una prueba de habilidad se realiza tirando un d20 y aplicando uno de los modificadores de característica de un personaje. Cuando realizas una prueba de Fuerza, tiras un d20 y añades tu modificador de Fuerza. Una prueba de Sabiduría es un d20 más tu modificador de Sabiduría, y así sucesivamente."
    },
    {
      tipo: "parrafo",
      texto: "Además, las pruebas de habilidad a menudo especifican una habilidad que se puede usar para añadir también tu bonificador de competencia a la prueba de habilidad. Si tienes experiencia en una habilidad, puedes duplicar tu bonificador de competencia en la prueba de habilidad."
    },
    {
      tipo: "parrafo",
      texto: "Prueba de Habilidad: d20 + modificador de puntuación de habilidad + bonificador de competencia (condicional)"
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Prueba de Habilidad",
      texto: "Miho Kato quiere convencer al camarero de una taberna local para que le diga si ha visto a un fugitivo buscado. El GM pide una prueba de Carisma (Persuasión). Miho no solo es competente en Persuasión, sino que tiene experiencia en esa habilidad. Tirando un 15 en el d20, Miho añade +3 por su Carisma de 17, luego añade su bonificador de competencia de +2 dos veces (un total de +4). ¡El resultado de su prueba es 22!" 
    },
    {
      tipo: "h3",
      texto: "Clase de Dificultad (CD)"
    },
    {
      tipo: "parrafo",
      texto: "La mayoría de las actividades que requieren una prueba de habilidad se realizan contra una Clase de Dificultad (CD) establecida por el GM. Si el resultado de tu prueba es igual o superior a la CD, tienes éxito en la tarea representada por la prueba. Por ejemplo, para diagnosticar los síntomas de un PNJ enfermo, el GM podría pedir una prueba de Inteligencia (Medicina) de CD 15. Al superar esa prueba, un personaje reconoce los síntomas de la escarlatina." 
    },
    {
      tipo: "parrafo",
      texto: "Algunas pruebas tienen valores de CD fijos, mientras que otras pueden tener CD variables expresadas como una fórmula."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-valores-clase-dificultad-tipicos",
      titulo: "Valores Típicos de Clase de Dificultad",
      encabezados: ["Dificultad", "CD"],
      filas: [
        ["Trivial", "5"],
        ["Fácil", "10"],
        ["Desafiante", "15"],
        ["Difícil", "20"],
        ["Abrumador", "25"],
        ["Casi imposible", "30"]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Cuando un héroe inicia un efecto que crea una CD para que un oponente se salve, existe una fórmula predeterminada para determinar la CD. La mayoría de las veces, se da una fórmula específica, pero si necesitas crear una CD sobre la marcha, puedes usar este valor predeterminado."
    },
    {
      tipo: "parrafo",
      texto: "CD predeterminada generada por el héroe = 8 + modificador de puntuación de habilidad + bonificador de competencia"
    },
    {
      tipo: "h3",
      texto: "Tipos de Pruebas de Habilidad"
    },
    {
      tipo: "parrafo",
      texto: "Cuando los personajes realizan actividades que requieren pruebas de habilidad, esas pruebas pueden hacerse de cuatro formas diferentes, según lo determine el GM."
    },
    {
      tipo: "h4",
      texto: "Desafío"
    },
    {
      tipo: "parrafo",
      texto: "Un desafío es el tipo de prueba de habilidad predeterminada. Cubre situaciones típicas en las que un personaje realiza una actividad específica y necesita determinar si tiene éxito o fracasa."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Desafío",
      texto: "El Dr. Wunderkind quiere saltar desde un balcón de un segundo piso y aterrizar en un coche que pasa por la calle. El GM decide que es una tarea difícil, que requiere una prueba de Destreza (Acrobacias) de CD 20. El Dr. Wunderkind es competente en la habilidad Acrobacias y tiene nivel 5, por lo que añade su modificador de Destreza de +4 y su bonificador de competencia de +3 a la prueba. Una tirada de 17 en la prueba da un resultado de 24. El Dr. Wunderkind aterriza valientemente y ahora está colgado de un coche en movimiento."
    },
    {
      tipo: "h4",
      texto: "Contiendas"
    },
    {
      tipo: "parrafo",
      texto: "Cuando dos oponentes intentan superarse mutuamente en una tarea específica, realizan pruebas de habilidad como una contienda. En lugar de que el GM asigne una CD a las pruebas, cada oponente realiza su prueba y el que tenga el resultado más alto es el ganador. Si las pruebas empatan, el GM podría determinar que nadie gana la contienda, o que la situación por la que los personajes competían permanece sin cambios. Las pruebas de habilidad realizadas como una contienda pueden realizarse usando el mismo tipo de prueba para cada lado o una prueba diferente para cada lado."
    },
    {
      tipo: "parrafo",
      texto: "Bajo algunas circunstancias, el GM podría pedir a un personaje que haga una prueba de habilidad mientras el otro personaje hace una tirada de salvación. Si se usa una tirada de salvación en una contienda, un empate debería interpretarse de tal manera que el participante que hace la tirada de salvación resiste cualquier efecto adverso que el otro participante esté tratando de imponerle."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Contienda",
      texto: "Jimmy el Bruto intenta abrir una puerta a la fuerza mientras Miho Kato intenta mantenerla cerrada. El GM pide una contienda de pruebas de Fuerza (Atletismo). Jimmy saca un 12 y añade su modificador de Fuerza y su bonificador de competencia para un resultado de 17. Miho saca un 15 pero no tiene competencia en Atletismo, y su Fuerza es lo suficientemente baja como para darle una penalización de -1 a la prueba, por lo que su resultado es solo 14. Jimmy gana la contienda y abre la puerta, obligando a Miho a alejarse de ella." 
    },
    {
      tipo: "h4",
      texto: "Desafíos Grupales"
    },
    {
      tipo: "parrafo",
      texto: "Cuando varios personajes intentan la misma tarea y podrían fallar colectivamente, el GM podría pedir un desafío grupal. Cada personaje realiza una prueba de habilidad individual contra una CD establecida por el GM, pero los personajes no tienen éxito individualmente. Más bien, si la mitad o más de los personajes tienen éxito, todos los personajes tienen éxito como equipo. De lo contrario, todos los personajes fallan."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Desafío Grupal",
      texto: "Cuatro héroes quieren acercarse sigilosamente a una casa segura criminal, por lo que el GM pide un desafío grupal de Destreza (Sigilo) de CD 15. Kat Whitlock, Luis Garza y Johnny Blaze tienen éxito en sus pruebas de Destreza (Sigilo), pero Mack Williams estropea su tirada con un resultado de 3. Sin embargo, aunque Mack sea un patoso, los otros personajes pueden mantenerlo fuera de problemas, permitiendo que el equipo se acerque sin ser detectado." 
    },
    {
      tipo: "h4",
      texto: "Contiendas Grupales"
    },
    {
      tipo: "parrafo",
      texto: "Cuando dos o más equipos de personajes se oponen colectivamente en una tarea donde tener más personas involucradas no da automáticamente una mayor probabilidad de éxito, el GM puede pedir una contienda grupal. En una contienda grupal, se registra el número de éxitos y fracasos contra una CD establecida para los personajes. Cada participante en la contienda realiza su propia prueba de habilidad, sumando un éxito al total de su equipo si tiene éxito, y restando un éxito si fracasa. El equipo con el mayor número total de éxitos gana la contienda."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Contienda Grupal",
      texto: "Cinco héroes se apresuran a cruzar un río a nado, perseguidos por cuatro cazadores furtivos. El GM hace que cada jugador realice una prueba de Fuerza (Atletismo) de CD 15 para sus héroes y realiza las mismas pruebas para los cuatro PNJ. Tres de los héroes tienen éxito mientras que dos fallan, lo que deja sus éxitos finales en uno. Dos de los cuatro cazadores furtivos también tienen éxito, pero dos fallos los dejan con un total de cero éxitos, lo que significa que los héroes llegan a salvo al otro lado del río como equipo."
    },
    {
      tipo: "h4",
      texto: "Pruebas Pasivas"
    },
    {
      tipo: "parrafo",
      texto: "Las pruebas de habilidad pasivas pueden usarse siempre que el GM quiera usar las habilidades y destrezas de un héroe sin alertar a los jugadores de lo que está sucediendo. Esto a menudo surge al determinar la sorpresa en combate, dando a los héroes la oportunidad de detectar trampas y otras veces cuando pedir pruebas de habilidad podría advertir a los jugadores del peligro, incluso si sus personajes no lo notan. En particular, el GM debe tener un registro de la prueba de Percepción pasiva de cada personaje a mano para tales ocasiones." 
    },
    {
      tipo: "parrafo",
      texto: "Una prueba pasiva se calcula asumiendo que el personaje obtuvo un 10 en su prueba (el promedio de una tirada de d20). En general, el GM solo les dice a los jugadores el resultado de una prueba de habilidad pasiva si uno o más personajes tienen éxito en la prueba."
    },
    {
      tipo: "parrafo",
      texto: "Prueba Pasiva: 10 + modificador de habilidad + bonificador de competencia (si corresponde);"
    },
    {
      tipo: "parrafo",
      texto: "Como no se realiza ninguna tirada, la ventaja en una prueba pasiva se convierte en un bonificador de +5 en su lugar. Del mismo modo, la desventaja en una prueba pasiva se convierte en una penalización de -5 en su lugar."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Prueba Pasiva",
      texto: "Cuatro héroes entran en una habitación de la base secreta del Dr. Crow, sin saber que se les ha tendido una trampa. El GM decide que una prueba de Sabiduría (Percepción) de CD 15 exitosa permite a un personaje notar la sangre seca de víctimas anteriores. El GM no quiere alertar a los jugadores pidiendo pruebas de Sabiduría (Percepción), pero quiere que tengan la oportunidad de evitar la trampa.\nEl GM ya tiene una lista de las pruebas de Percepción pasiva de los héroes, derivadas de añadir 10 a sus modificadores de Sabiduría (Percepción). Tanto Mel Stackhouse como Katie Paige tienen pruebas de Sabiduría (Percepción) pasivas de 15 o más, por lo que el GM les informa sobre la sangre en la alfombra al entrar en la habitación." 
    },
    {
      tipo: "h4",
      texto: "Ayudando"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un personaje realiza una prueba de habilidad, otro personaje puede ayudarle, otorgando ventaja al personaje que realiza la prueba. En combate, ayudar a otro personaje requiere una acción. Fuera de combate, un personaje que ayuda solo necesita declarar su intención de hacerlo. El ayudante debe tener algún medio razonable para prestar asistencia, y el GM tiene discreción sobre cuándo se puede prestar ayuda razonablemente." 
    },
    {
      tipo: "h2",
      texto: "Descripciones de Habilidades"
    },
    {
      tipo: "h3",
      texto: "Puntuación de Habilidad Predeterminada"
    },
    {
      tipo: "parrafo",
      texto: "Cada habilidad está vinculada a una puntuación de habilidad específica. Esta es la prueba de habilidad con la que la habilidad se asocia con mayor frecuencia, pero es posible usar una habilidad con una prueba de habilidad diferente cuando tenga sentido hacerlo."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Puntuación de Habilidad Predeterminada",
      texto: "Wesley Scott, el niño genio, intenta intimidar a un agente del FBI que amenaza a su equipo con un arresto, explicándole exactamente cómo su equipo de abogados enterrará a la agencia en burocracia si persisten en acosar a los héroes. El GM decide permitir que Wesley intente una prueba de Inteligencia (Intimidación) en lugar de usar Carisma, la habilidad normalmente asociada con la habilidad Intimidación." 
    },
    {
      tipo: "h3",
      texto: "Descripciones de Habilidades"
    },
    {
      tipo: "parrafo",
      texto: "Esta sección describe las habilidades predeterminadas disponibles para los personajes en el juego, con la puntuación de habilidad normalmente asociada con esa habilidad entre paréntesis. Cada habilidad tiene una serie de usos sugeridos, destinados a proporcionar a los jugadores y GM inspiración y guía. Estas sugerencias no pretenden ser absolutas ni exhaustivas."
    },
    {
      tipo: "parrafo",
      texto: "Los usos sugeridos a veces aparecen bajo múltiples habilidades. Esto representa la idea de que los héroes pueden intentar diferentes enfoques para los problemas en el juego y ayuda a garantizar que los personajes de diferentes tipos tengan la oportunidad de tener éxito en actividades específicas."
    },
    {
      tipo: "h4",
      texto: "Acrobacias (Destreza)"
    },
    {
      tipo: "parrafo",
      texto: "Las acrobacias cubren actividades físicas centradas en el movimiento rápido, el equilibrio, la coordinación ojo-mano y la gracia. Los héroes competentes en Acrobacias suelen ser entusiastas de los deportes o la salud, o incluso atletas profesionales."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Equilibrar objetos, equilibrarse en un saliente, atrapar objetos, hacer malabares, aterrizar correctamente después de una caída, realizar gimnasia, lanzar flechas en una situación que no sea de combate, patinar, balancearse con una cuerda, lanzar objetos en situaciones que no sean de combate, dar volteretas, caminar por la cuerda floja, caminar por superficies resbaladizas."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Artes y Oficios (Sabiduría)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Artes y Oficios abarca las actividades relacionadas con la creación de objetos finamente elaborados y hermosos, así como el conocimiento de las artes. Los héroes competentes en Artes y Oficios incluyen tanto a artistas profesionales como a aficionados dedicados."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Analizar arte, tasar objetos, construir cosas, cocinar, crear arte, crear falsificaciones artísticas, decorar objetos, disfrazar objetos, ilustrar, hacer películas, hacer muebles, hacer armas de atrezzo, realizar carpintería, esculpir, coser, reparar objetos cotidianos, escribir y editar, escribir caligrafía."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Atletismo (Fuerza)"
    },
    {
      tipo: "parrafo",
      texto: "Atletismo incluye una amplia gama de actividades físicas centradas en la fuerza física. Los héroes competentes en Atletismo suelen ser entusiastas de los deportes o la salud, o incluso atletas profesionales."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Transportar o levantar a alguien, escalar, mantener una puerta abierta o cerrada, saltar, abrir una puerta de una patada, levantar objetos pesados, abrir una ventana atascada, practicar deportes de campo, empujar un coche, correr, nadar, lanzar o patear algo (fuera de combate), luchar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Computadoras (Inteligencia)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Computadoras abarca todo lo relacionado con computadoras y electrónica. Puede usarse para superar una amplia variedad de desafíos técnicos y tecnológicos. Los héroes competentes en Computadoras pueden ser programadores profesionales, aficionados diligentes o hackers dedicados."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Analizar datos, construir una computadora, eludir la seguridad de inicio de sesión, cambiar datos, derrotar la seguridad electrónica, cifrar o descifrar información, hackear un sistema, operar una computadora, operar un robot, plantar un virus informático, plantar datos, jugar un juego de computadora, programar una computadora, leer código de computadora, reparar componentes electrónicos, usar conocimientos de computación, usar un smartphone."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Engaño (Carisma)"
    },
    {
      tipo: "parrafo",
      texto: "El engaño implica la creación de falsas creencias, pero esta habilidad es útil para algo más que simplemente mentir. Si bien la mayoría de la gente ocasionalmente recurre a la deshonestidad momentánea, los héroes competentes en Engaño son expertos practicantes en el campo, ya sean narradores naturales, vendedores profesionales o estafadores."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Bluffear, confundir a la gente, falsificar o forjar documentos, hablar rápido, forjar firmas, mentir o disimular, hacer promesas que no se pueden cumplir, desorientar o desviar a alguien, realizar magia escénica, estafar a alguien, vender o comercializar algo, suplantar la seguridad biométrica, usar un disfraz."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Resistencia (Constitución)"
    },
    {
      tipo: "parrafo",
      texto: "La resistencia representa la capacidad de soportar las dificultades y seguir funcionando a un alto nivel de rendimiento físico. Los héroes competentes en Resistencia suelen ser atletas aficionados o profesionales, supervivientes o personas que trabajan en condiciones extremas, entrenando sus cuerpos para resistir el esfuerzo vigoroso y rendir en condiciones muy adversas."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Mantener una competencia de miradas, aguantar la respiración, hacer una marcha forzada, practicar deportes de larga distancia, superar lesiones, resistir el dolor, sobrevivir con comida y agua mínimas, trabajar a grandes altitudes, trabajar en frío extremo, trabajar en calor extremo, trabajar bajo el agua."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Perspicacia (Sabiduría)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Perspicacia indica una comprensión intuitiva de otras personas —sus motivaciones, cómo piensan y cómo se comportan— y abarca una enorme variedad de usos personales y profesionales. Los héroes competentes en Perspicacia incluyen a aquellos con una habilidad natural para leer a las personas, así como a profesionales cuyos trabajos implican obtener la verdad de los pensamientos de otras personas."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Analizar arte y literatura, realizar una entrevista, crear materiales de marketing, diseñar un producto, detectar mentiras, determinar motivos ocultos, dar consejos, negociar, predicar, predecir las acciones de otros, perfilar criminales, perfilar clientes, psicoanalizar a una persona, ver a través de un disfraz, mostrar empatía, comprender textos religiosos."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Intimidación (Carisma)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Intimidación se utiliza para manipular a las personas a través del asombro o el miedo. Hacerlo puede ser tan sutil como adoptar una postura que le dé a un personaje un sentido de autoridad, o tan directo como amenazar a un prisionero que conoce información. Los héroes competentes en Intimidación incluyen a aquellos con un comportamiento naturalmente amenazante, así como a aquellos cuyas profesiones exigen un comportamiento amenazante de vez en cuando."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Evitar la violencia, despejar una habitación, exigir la rendición, extorsionar dinero o favores, dar órdenes, inspirar respeto, inspirar miedo, interrogar, negociar tratos."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Investigación (Inteligencia)"
    },
    {
      tipo: "parrafo",
      texto: "Investigación abarca actividades útiles para aprender detalles ocultos sobre personas, lugares y eventos. Los héroes competentes en Investigación son expertos en resolver misterios de todo tipo, ya sean detectives aficionados o profesionales, espías y periodistas de investigación."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Analizar una escena del crimen, analizar pruebas, analizar estados financieros, analizar fotografías, analizar grabaciones de sonido, recopilar pruebas, realizar vigilancia, encontrar registros gubernamentales, encontrar cámaras y micrófonos ocultos, leer contratos, rastrear llamadas telefónicas, usar conocimientos de derecho civil, usar conocimientos de derecho penal, usar procedimientos policiales, usar dispositivos de rastreo."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Mecánica (Inteligencia)"
    },
    {
      tipo: "parrafo",
      texto: "Mecánica abarca una amplia gama de disciplinas que involucran el diseño y la construcción de máquinas y mecanismos útiles. Los héroes competentes en Mecánica son más felices con un buen juego de herramientas y un problema que resolver, ya sean mecánicos aficionados o arquitectos, técnicos e ingenieros profesionales."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Construir vehículos, crear máquinas, demoler estructuras, diseñar planos, diseñar productos, arreglar sistemas eléctricos, arreglar fontanería, mantener maquinaria, fabricar trampas, fabricar armas, operar maquinaria, reparar máquinas rotas, sabotear maquinaria, poner a punto un vehículo, usar impresión 3D, usar conocimientos de física, soldar, trabajar con metal."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Medicina (Inteligencia)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Medicina abarca conocimientos de la medicina moderna, así como prácticas médicas menos conocidas, englobando una amplia gama de artes curativas y diagnósticas. Muchos héroes competentes en Medicina trabajan en el campo médico, pero otros han aprendido lo que saben en el curso de realizar actividades de alto riesgo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Administrar medicamentos o veneno, analizar sangre, cuidar pacientes, crear medicamentos o veneno, diseñar prótesis, diagnosticar dolencias, identificar veneno, realizar una autopsia, realizar cirugía, recetar medicamentos, proporcionar primeros auxilios, proporcionar masajes, reanimar a un personaje moribundo, entablillar huesos rotos, tratar envenenamientos y enfermedades, usar conocimientos de biología, usar conocimientos de química, usar conocimientos de drogas."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Ciencias Naturales (Inteligencia)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Ciencias Naturales abarca las diversas ciencias impulsadas por las matemáticas que buscan comprender el funcionamiento del mundo natural. Los héroes competentes en Ciencias Naturales pueden centrarse en el conocimiento y la investigación para sus propios fines o tener experiencia en el mundo académico."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Analizar materiales, crear ácidos, crear explosivos, crear gases, crear compuestos incendiarios, crear toxinas, identificar minerales, identificar plantas, navegar, realizar análisis genéticos, predecir el clima, resolver problemas de matemáticas, usar conocimientos de astronomía, usar conocimientos de biología, usar conocimientos botánicos, usar conocimientos de química, usar conocimientos de geología, usar conocimientos de física."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Percepción (Sabiduría)"
    },
    {
      tipo: "parrafo",
      texto: "La percepción implica todos los sentidos de un personaje, aunque la vista y el oído son las aplicaciones más comunes de esta habilidad. Los héroes competentes en Percepción se han entrenado para captar detalles minúsculos y mantener un alto nivel de conciencia, ya sea de forma instintiva o como parte de un entrenamiento formal."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Analizar alimentos o bebidas, evitar emboscadas, estimar la temperatura, sentir pequeños detalles, encontrar puertas secretas, escuchar sonidos débiles, localizar objetos o criaturas ocultas, navegar por lugares oscuros, notar pequeños detalles en el entorno, oler materiales peligrosos, leer los labios, detectar criaturas u objetos distantes."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Interpretación (Carisma)"
    },
    {
      tipo: "parrafo",
      texto: "La interpretación entretiene a la gente, ya sea a una multitud de espectadores o a una sola persona. Los héroes competentes en Interpretación pueden ganarse la vida como actores, músicos o escritores, o simplemente tener una habilidad especial para influir en la gente al despertar emociones e ideas específicas."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Actuar, aplicar maquillaje, actuar en la calle por dinero, dirigir una orquesta, crear empatía, bailar, llamar la atención, evocar emociones, imitar a alguien, liderar a otros artistas, tocar instrumentos musicales, seducir a otros, contar historias, escribir música."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Persuasión (Carisma)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Persuasión abarca los diversos métodos para convencer a otros, moldear sus impresiones o manipularlos directamente. Los héroes competentes en Persuasión pueden tener una habilidad natural para hacer que otros vean las cosas a su manera, o pueden dedicarse profesionalmente a las artes de la negociación o la manipulación."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Pedir favores, regatear, pedir caridad, hipnotizar a una persona, liderar personas, hacer tratos, hacer amigos, participar en política, negociar, ofrecer sobornos, seducir a otros, vender productos, ganar argumentos."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Seguridad (Inteligencia)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Seguridad abarca tanto la creación de sistemas de seguridad como su desactivación. Los héroes competentes en Seguridad pueden haber adquirido su experiencia a través de un interés general, como expertos en seguridad o como criminales profesionales."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Forzar una cerradura, eludir una valla, desactivar sistemas de alarma, desactivar cerraduras electrónicas, desactivar cámaras de seguridad, detectar trampas explosivas, desactivar trampas explosivas, encontrar objetos de valor ocultos, infiltrarse en un edificio o lugar, instalar y operar sistemas de seguridad, abrir una caja fuerte, forzar una cerradura, plantar pruebas falsas, abrir puertas a la fuerza, falsificar seguridad biométrica."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Juego de Manos (Destreza)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Juego de Manos abarca una amplia gama de actividades diestras utilizadas para el entretenimiento y pequeños delitos, como trucos de cartas, malabares y carterismo. Los héroes competentes en Juego de Manos pueden ser aficionados, artistas profesionales o estafadores experimentados y ladrones sigilosos." 
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Hacer trampas en juegos, hacer trucos de cartas, escapar de ataduras, esconder objetos pequeños, hacer malabares, crear sombras chinescas, realizar trucos de magia, robar bolsillos, plantar pruebas, robar objetos pequeños a plena vista."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Ciencias Sociales (Inteligencia)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Ciencias Sociales abarca las diversas ciencias impulsadas por la observación que tratan del estudio de las personas y la cultura. Los héroes competentes en Ciencias Sociales pueden ser amantes de las culturas extranjeras con muchos viajes, o profesionales dedicados a la academia o al servicio público."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Participar en debates académicos, realizar investigaciones bibliográficas, psicoanalizar a una persona, leer idiomas antiguos, usar conocimientos de culturas antiguas, usar conocimientos de autores, usar conocimientos de economía, usar conocimientos de etiqueta, usar conocimientos de culturas extranjeras, usar conocimientos de gobierno, usar conocimientos de historia, usar conocimientos de obras literarias, usar conocimientos de filosofía, usar conocimientos de psicología, usar conocimientos de religión."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Sigilo (Destreza)"
    },
    {
      tipo: "parrafo",
      texto: "El sigilo es la habilidad ideal para cualquiera que quiera evitar problemas, o para crearlos a quienes no los esperan. Los héroes competentes en Sigilo pueden ser cazadores (profesionales o ocasionales), soldados, ladrones o espías."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Mezclarse con una multitud, borrar tus huellas, crear una emboscada, crear y usar camuflaje, crear distracciones, esconder objetos, esconderte a ti mismo o a otros, moverse silenciosamente."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Callejeo (Sabiduría)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Callejeo se centra en entornos urbanos, lo que permite a los personajes comprender la naturaleza de la ciudad, dónde encontrar lo que necesitan y cómo llegar a donde necesitan ir. Los héroes competentes en Callejeo pueden haber vivido toda su vida en ciudades, o pueden tener experiencia en actividades y profesiones que se encuentran comúnmente en un entorno urbano."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Evitar a las autoridades, comprar y vender bienes y servicios ilegales, pedir favores, recopilar rumores, contactar y contratar criminales, vender propiedades robadas, encontrar comida y bebida, encontrar bienes y servicios, encontrar residentes locales, encontrar refugio, jugar, tener un conocimiento perfecto de un sistema de transporte público, conocer eventos actuales, conocer historia local, navegar por una ciudad, seguir a alguien, usar etiqueta criminal, usar conocimientos criminales."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Supervivencia (Sabiduría)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Supervivencia se centra en trabajar y explorar al aire libre y en la naturaleza, lo que permite a los personajes proveerse de lo que la naturaleza ofrece. Los héroes competentes en Supervivencia se sienten a gusto en entornos naturales, ya sea por haber vivido en la naturaleza toda su vida o por dedicarse a trabajos relacionados con ella."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Evitar depredadores, construir un fuego, construir un refugio, pescar, recolectar recursos naturales, cocinar con fuego abierto, encontrar agua potable, cultivar, cazar animales, identificar plantas y animales, fabricar herramientas simples, fabricar trampas y lazos, navegar al aire libre, predecir el clima y las mareas, criar animales, montar a caballo u otra montura, rastrear al aire libre, tratar lesiones simples, usar conocimientos botánicos."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Vehículos (Destreza)"
    },
    {
      tipo: "parrafo",
      texto: "La habilidad Vehículos permite a los personajes especializarse en operar y controlar una amplia gama de vehículos y transportes, y les permite manejar situaciones peligrosas que involucran a esos vehículos con aplomo. Los héroes competentes con Vehículos pueden ser pilotos profesionales o capitanes de barco, o simplemente tener una habilidad especial para operar todo tipo de transporte exótico."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Usos de Habilidad",
          definicion: "Evitar accidentes, diagnosticar problemas con vehículos, conducir un camión, volar un avión, mantener vehículos, navegar, operar maquinaria pesada, realizar acrobacias con vehículos, pilotar un barco, participar en carreras de vehículos, poner a punto un vehículo, usar conocimientos de vehículos."
        }
      ]
    },
    {
      tipo: "h2",
      texto: "Tiradas de Salvación"
    },
    {
      tipo: "parrafo",
      texto: "Una tirada de salvación es una tirada de d20 realizada para resistir o evitar algún tipo de peligro inminente. Cuando el Game Master te pida que hagas una tirada de salvación, te dirá qué puntuación de característica usar. Si eres competente con ese tipo de tirada de salvación, puedes añadir tu bonificador de competencia a tu tirada."
    },
    {
      tipo: "parrafo",
      texto: "Tirada de Salvación: d20 + modificador de habilidad + bonificador de competencia (condicional)"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación se realizan contra una Clase de Dificultad (CD) determinada. En caso de una contienda de habilidad entre dos personajes, un personaje podría realizar una prueba de habilidad mientras que el otro personaje realiza una tirada de salvación, utilizando eficazmente la prueba para establecer la CD para la salvación. En un resultado igual o superior a la CD, un personaje tiene éxito en la tirada de salvación y evita o disminuye el efecto de la amenaza que enfrenta."
    },
    {
      tipo: "parrafo",
      texto: "Los efectos que requieren una salvación describen las consecuencias del éxito y el fracaso. Si un ataque o amenaza tiene múltiples efectos resistidos por el mismo tipo de tirada de salvación, el objetivo realiza una única salvación para todos los efectos a menos que se indique lo contrario."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Tirada de Salvación",
      texto: "Sue Fairfield lanza una granada flashbang a una habitación abarrotada, sabiendo que puede cegar y aturdir a las personas cercanas cuando explote. Ambos efectos requieren una tirada de salvación de Constitución (CD = 8 + bonificador de competencia de Sue + modificador de Destreza de Sue). Cada personaje afectado por la granada realiza una única tirada de salvación de Constitución, evitando quedar Ciego y Aturdido si tienen éxito." 
    },
    {
      tipo: "h3",
      texto: "Tiradas de Salvación de Fuerza"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación de Fuerza se solicitan cuando un personaje es desafiado inesperadamente por un efecto que puede resistirse con pura fuerza física. Puedes realizar una salvación de Fuerza para resistir ser derribado, para protegerte de la caída de escombros, para evitar ser empujado de un acantilado o para reducir el daño recibido si caes."
    },
    {
      tipo: "h3",
      texto: "Tiradas de Salvación de Destreza"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación de Destreza se solicitan siempre que los rápidos reflejos de un personaje o su sentido innato del equilibrio y la estabilidad puedan evitar el peligro. Una salvación de Destreza exitosa puede ayudarte a rodar para evitar una explosión, reducir el daño recibido de una caída o esquivar un coche que se aproxima."
    },
    {
      tipo: "h3",
      texto: "Tiradas de Salvación de Constitución"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación de Constitución se solicitan cuando un personaje necesita resistir efectos que pueden enfermarlo, causarle fatiga o imponerle otras condiciones insalubres. Puedes realizar una salvación de Constitución para reducir el daño recibido por veneno, evitar enfermedades o resistir el aturdimiento."
    },
    {
      tipo: "h3",
      texto: "Tiradas de Salvación de Inteligencia"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación de Inteligencia se solicitan cuando un personaje debe pensar con claridad en circunstancias difíciles o intenta evitar ser engañado. Una salvación de Inteligencia exitosa te permite ver a través de una estafa, responder rápidamente a un insulto o evitar confundirte."
    },
    {
      tipo: "h3",
      texto: "Tiradas de Salvación de Sabiduría"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación de Sabiduría se solicitan cuando un personaje quiere resistir la compulsión emocional, o cuando un personaje debe confiar en su intuición para ayudar a superar el engaño. Puedes realizar una salvación de Sabiduría para ver a través de una mentira, superar la tentación o sacudirte el miedo."
    },
    {
      tipo: "h3",
      texto: "Tiradas de Salvación de Carisma"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación de Carisma se solicitan cuando la reputación, identidad o imagen de un personaje están siendo atacadas de alguna manera. Una tirada de salvación de Carisma exitosa te permite responder adecuadamente a ser acusado de un crimen, contrarrestar rápidamente las declaraciones difamatorias de alguien o seguir luciendo bien incluso cubierto de barro."
    },
    {
      tipo: "h3",
      texto: "Tiradas de Salvación Especiales"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación especiales se utilizan en diversas situaciones que no implican una de las seis puntuaciones de habilidad. Cada una tiene sus propios modificadores y resultados especificados."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Tiradas de Salvación de Armadura",
          definicion: "Se realizan para ver si la armadura personal es efectiva para evitar que alguien sea reducido a cero puntos de golpe. La tirada no utiliza modificadores de característica, pero puede incluir un bonificador de competencia si el usuario es competente con la armadura." 
        },
        {
          termino: "Tiradas de Salvación de Muerte",
          definicion: "Se realizan cuando un héroe es reducido a cero puntos de golpe. La tirada tiene una CD de 10 y no utiliza modificadores (consulta el Capítulo 9 para obtener más información)."
        },
        {
          termino: "Tiradas de Salvación de Suerte",
          definicion: "Los GM pueden solicitar una tirada de salvación de suerte cuando quieran dejar un evento completamente al azar. La tirada tiene una CD de 11 y no permite modificadores."
        },
        {
          termino: "Tiradas de Salvación de Daño de Vehículo",
          definicion: "Se realizan cuando un vehículo sufre daño que atraviesa su armadura. La CD se basa en el daño recibido y la tirada solo añade el modificador de Constitución del vehículo a la tirada."
        }
      ]
    },
    {
      tipo: "h2",
      texto: "Condiciones"
    },
    {
      tipo: "parrafo",
      texto: "Las condiciones son estados especiales que alteran las capacidades de un personaje. Pueden aplicarse tanto a héroes como a PNJ. Todas las condiciones imponen efectos adversos, que a veces incluyen otras condiciones." 
    },
    {
      tipo: "parrafo",
      texto: "Siempre que el GM o los jugadores no estén seguros de qué efecto podría tener una determinada situación en los personajes, pueden consultar esta sección para ver una condición que pueda encajar."
    },
    {
      tipo: "h3",
      texto: "Ciego"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Ciego no puede ver y falla cualquier prueba de habilidad que requiera vista.<br>• El personaje tiene desventaja en las tiradas de ataque.<br>• Las tiradas de ataque realizadas contra un personaje Ciego tienen ventaja."
    },
    {
      tipo: "h3",
      texto: "Quemándose"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje que está Quemándose sufre 1d4 de daño de fuego al comienzo de cada uno de sus turnos. Este daño ignora la armadura."
    },
    {
      tipo: "lista",
      items: [
        "Se puede realizar una prueba de Destreza, Sabiduría (Supervivencia) o Inteligencia (Medicina) de CD 10 como acción para extinguir el fuego."
      ]
    },
    {
      tipo: "parrafo",
      texto: "La inmersión en agua o el uso de un extintor de incendios extingue automáticamente el fuego."
    },
    {
      tipo: "h3",
      texto: "Sordo"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Sordo no puede oír y falla cualquier prueba de habilidad que requiera oído."
    },
    {
      tipo: "h3",
      texto: "Distraído"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Distraído no puede realizar acciones bonus ni reacciones."
    },
    {
      tipo: "lista",
      items: [
        "El personaje tiene desventaja en las pruebas de Inteligencia y Sabiduría a menos que esas pruebas se dirijan a la fuente de la distracción."
      ]
    },
    {
      tipo: "h3",
      texto: "Estorbado"
    },
    {
      tipo: "parrafo",
      texto: "La velocidad de un personaje Estorbado se reduce a la mitad, y no puede usar la acción Correr (Dash)."
    },
    {
      tipo: "lista",
      items: [
        "El personaje tiene desventaja en las tiradas de salvación de Destreza."
      ]
    },
    {
      tipo: "h3",
      texto: "Fatiga"
    },
    {
      tipo: "parrafo",
      texto: "Los peligros ambientales y otros efectos, incluida la inanición y los efectos a largo plazo de temperaturas gélidas o abrasadoras, pueden provocar una condición especial llamada Fatiga. La Fatiga se mide en seis niveles, cada uno de los cuales tiene un efecto acumulativo. Cada vez que un personaje se fatiga, gana un nivel de Fatiga. Terminar un descanso prolongado reduce la Fatiga en un nivel siempre que haya comida y bebida disponibles."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-niveles-fatiga",
      titulo: "Nivel de Fatiga",
      encabezados: ["Nivel de Fatiga", "Efecto"],
      filas: [
        ["1", "Desventaja en las pruebas de habilidad"],
        ["2", "Velocidad reducida a la mitad"],
        ["3", "Desventaja en las tiradas de ataque y tiradas de salvación"],
        ["4", "Máximo de puntos de golpe reducido a la mitad"],
        ["5", "Velocidad reducida a 0"],
        ["6", "Muerte"]
      ]
    },
    {
      tipo: "h3",
      texto: "Asustado"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Asustado tiene desventaja en las pruebas de habilidad y tiradas de ataque mientras la fuente de su miedo sea visible para él."
    },
    {
      tipo: "h3",
      texto: "Apresado"
    },
    {
      tipo: "parrafo",
      texto: "La velocidad de un personaje Apresado se reduce a 0, y no puede beneficiarse de ningún bonificador a su velocidad."
    },
    {
      tipo: "lista",
      items: [
        "La condición termina si el apresador queda Incapacitado."
      ]
    },
    {
      tipo: "parrafo",
      texto: "La condición termina si un efecto retira al personaje Apresado del alcance del apresador o del efecto de apresamiento."
    },
    {
      tipo: "h3",
      texto: "Incapacitado"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Incapacitado no puede realizar acciones, acciones bonus, acciones libres o reacciones."
    },
    {
      tipo: "h3",
      texto: "Intoxicación"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje intoxicado sufre los efectos de drogas y otras sustancias que deprimen la función del sistema nervioso central. La intoxicación se mide en cuatro niveles, cada uno de los cuales tiene un efecto acumulativo."
    },
    {
      tipo: "parrafo",
      texto: "Cada vez que un personaje se intoxica, gana el nivel de Intoxicación indicado. Si el personaje ya está intoxicado y se aplica otro efecto intoxicante, su nivel de Intoxicación no aumenta. Más bien, se aplica el nivel más alto. A menos que se indique lo contrario, por cada 2 horas que un personaje no esté expuesto a la fuente de su Intoxicación, reduce su Intoxicación en un nivel."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-niveles-intoxicacion",
      titulo: "Nivel de Intoxicación",
      encabezados: ["Nivel de Intoxicación", "Efecto"],
      filas: [
        ["1", "Desventaja en las pruebas de Destreza, Inteligencia y Sabiduría y tiradas de salvación"],
        ["2", "Velocidad reducida a la mitad y Enfermo"],
        ["3", "Inconsciente"],
        ["4", "Reducido a 0 puntos de golpe y debe realizar tiradas de salvación por muerte"]
      ]
    },
    {
      tipo: "h3",
      texto: "Paralizado"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Paralizado está Incapacitado y no puede moverse ni hablar. Falla automáticamente las tiradas de salvación de Fuerza y Destreza."
    },
    {
      tipo: "lista",
      items: [
        "Las tiradas de ataque contra el personaje tienen ventaja."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Cualquier ataque que golpee al personaje es un golpe crítico si el atacante está a menos de 5 pies."
    },
    {
      tipo: "h3",
      texto: "Prono"
    },
    {
      tipo: "parrafo",
      texto: "La única opción de movimiento de un personaje Prono es ponerse de pie o arrastrarse."
    },
    {
      tipo: "lista",
      items: [
        "El personaje tiene desventaja en las tiradas de ataque con armas cuerpo a cuerpo."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de ataque cuerpo a cuerpo contra un objetivo Prono tienen ventaja."
    },
    {
      tipo: "h3",
      texto: "Restringido"
    },
    {
      tipo: "parrafo",
      texto: "La velocidad de un personaje Restringido se reduce a 0, y el personaje no puede beneficiarse de ningún bonificador a su velocidad."
    },
    {
      tipo: "lista",
      items: [
        "Las tiradas de ataque contra ellos tienen ventaja, y sus tiradas de ataque tienen desventaja."
      ]
    },
    {
      tipo: "parrafo",
      texto: "El personaje tiene desventaja en las tiradas de salvación de Destreza."
    },
    {
      tipo: "h3",
      texto: "Enfermo"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Enfermo tiene desventaja en las tiradas de ataque y pruebas de habilidad."
    },
    {
      tipo: "h3",
      texto: "Aturdido"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Aturdido está Incapacitado, no puede moverse y solo puede hablar con dificultad."
    },
    {
      tipo: "lista",
      items: [
        "El personaje falla automáticamente las tiradas de salvación de Fuerza y Destreza."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de ataque contra ellos tienen ventaja."
    },
    {
      tipo: "h3",
      texto: "Inconsciente"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje Inconsciente está Incapacitado, no puede moverse ni hablar, y no es consciente de su entorno."
    },
    {
      tipo: "lista",
      items: [
        "El personaje suelta lo que esté sosteniendo y cae Prono."
      ]
    },
    {
      tipo: "parrafo",
      texto: "El personaje falla automáticamente las tiradas de salvación de Fuerza y Destreza."
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de ataque contra el personaje tienen ventaja."
    },
    {
      tipo: "parrafo",
      texto: "Cualquier ataque que golpee al personaje es un golpe crítico si el atacante está a menos de 5 pies."
    }
  ]
};
export default capitulo8;