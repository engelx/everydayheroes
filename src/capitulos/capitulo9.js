const capitulo9 = {
  id: "capitulo-9",
  titulo: "Capítulo 9: Combate",
  numero: 9,
  contenido: [
    {
      tipo: "parrafo",
      texto: "¡QUE VUELEN LAS BALAS!"
    },
    {
      tipo: "introduccion",
      texto: "Balas volando. Cristales rompiéndose. Combatientes decididos arriesgando sus vidas para luchar por lo que creen que es correcto, por un gran pago, o quizás solo por diversión. En el corazón de cada película de acción reside la acción, y en el corazón de las reglas de Everyday Heroes está su sistema de combate. El combate no tiene por qué ser parte de cada aventura, pero en un juego orientado a la acción, a menudo lo será."
    },
    {
      tipo: "parrafo",
      texto: "Las reglas de combate de Everyday Heroes son sencillas en su esencia. En cada turno, los combatientes se mueven, se atacan entre sí e interactúan con su entorno. El juego intenta lograr un equilibrio para que el combate no tarde demasiado en desarrollarse, a la vez que ofrece una profundidad táctica y estratégica adecuada. También equilibra el deseo de realismo con las necesidades de contar una historia divertida."
    },
    {
      tipo: "parrafo",
      texto: "Debido a que las reglas del juego no pueden diseñarse para adaptarse a los gustos de cada jugador y a las necesidades de cada aventura, se anima a cada grupo a utilizar la cantidad de sistema de combate que tenga sentido para su juego. Con este fin, las reglas se presentan de forma modular, de modo que cualquier aspecto de esas reglas pueda cambiarse o ignorarse fácilmente. Asimismo, esta modularidad hace de Everyday Heroes un sistema fácil de construir y expandir."
    },
    {
      tipo: "h2",
      texto: "Iniciando el Combate"
    },
    {
      tipo: "parrafo",
      texto: "El combate comienza tan pronto como un héroe o PNJ decide atacar a alguien. Una situación común es que un equipo de villanos decida atacar a los héroes, pero no es raro que los héroes inicien la pelea."
    },
    {
      tipo: "parrafo",
      texto: "Esta sección establece el orden básico del combate, con detalles específicos sobre el movimiento, las acciones y otras reglas a lo largo del capítulo."
    },
    {
      tipo: "h3",
      texto: "Estructura y Tiempo de Combate"
    },
    {
      tipo: "parrafo",
      texto: "El combate en la vida real ocurre de una sola vez, pero en Everyday Heroes, las peleas se centran en un combatiente a la vez. Depende de la imaginación de los jugadores y del GM imaginar cómo se desarrollan las acciones individuales de los héroes y sus enemigos."
    },
    {
      tipo: "parrafo",
      texto: "La estructura general del combate en el juego funciona de la siguiente manera:"
    },
    {
      tipo: "lista",
      items: [
        "Durante el combate, el tiempo se mide en asaltos, cada uno de los cuales dura unos 6 segundos (de modo que 10 asaltos equivalen a aproximadamente 1 minuto de tiempo de juego).",
        "Durante un asalto, cada participante de combate toma un turno. Durante su turno, cada combatiente puede moverse y realizar ciertas acciones.",
        "Un asalto termina cuando todos los combatientes han tomado sus turnos.",
        "Entonces comienza otro asalto, y los asaltos subsiguientes continúan hasta que el combate termina."
      ]
    },
    {
      tipo: "h3",
      texto: "Paso 1: Sorpresa"
    },
    {
      tipo: "parrafo",
      texto: "Los personajes pueden ser tomados por sorpresa cuando comienza el combate. Para que esto suceda, los atacantes deben sorprender por completo a los defensores. El escenario más común ocurre cuando los atacantes están escondidos, pero la sorpresa también puede ocurrir cuando un ataque proviene de alguien que los defensores no veían como una amenaza potencial. De cualquier manera, los combatientes que son sorprendidos tiran iniciativa normalmente (ver más abajo), pero no pueden moverse ni realizar ninguna acción durante el primer asalto de combate."
    },
    {
      tipo: "parrafo",
      texto: "La sorpresa se determina de dos maneras, dependiendo de si los héroes son los defensores o los atacantes."
    },
    {
      tipo: "lista",
      items: [
        "**Si los héroes son los defensores:**",
        "El GM determina una CD para que los héroes detecten a los atacantes antes de que ataquen.",
        "El GM realiza una prueba de Percepción pasiva para todos los héroes. Aquellos que tienen éxito no son sorprendidos, aquellos que fallan son sorprendidos.",
        "**Si los héroes son los atacantes:**",
        "Los jugadores designan qué héroe lidera la emboscada, quien realiza una prueba de Destreza (Sigilo). El resultado establece una CD para los PNJ.",
        "El GM realiza una prueba de percepción pasiva para todos los PNJ contra la CD. Aquellos que tienen éxito no son sorprendidos, aquellos que fallan son sorprendidos."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Tipos alternativos de sorpresa. En el caso de que los atacantes pretendan ser inofensivos, usa Carisma (Engaño) para los atacantes y Sabiduría (Perspicacia) pasiva para los defensores. Puedes usar este mismo patrón, pero con las pruebas de habilidad adecuadas para otras situaciones que puedan iniciar el combate inesperadamente."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Sorpresa",
      texto: "Kat Whitlock y sus tres compañeros entran en un almacén abandonado donde miembros de la temida banda del Escorpión Negro les esperan. El GM establece la dificultad para que los héroes detecten a los miembros ocultos de la banda en CD 14. Kat, siempre perceptiva, tiene una prueba de Percepción pasiva de 19, por lo que no es sorprendida. Luis Garza tiene un 14, lo suficiente para evitar la sorpresa, pero Johnny Blaze y Mack Williams no son tan perceptivos. Johnny y Mack son sorprendidos e incapaces de responder en el primer asalto de combate."
    },
    {
      tipo: "h3",
      texto: "Paso 2: Posición"
    },
    {
      tipo: "parrafo",
      texto: "A medida que la lucha avanza, el GM establecerá dónde se encuentran todos los combatientes visibles con respecto a los demás. Esto incluye la distancia, la dirección y el entorno del campo de batalla."
    },
    {
      tipo: "h4",
      texto: "Mapas o Sin Mapas"
    },
    {
      tipo: "parrafo",
      texto: "El combate en Everyday Heroes está diseñado para que los jugadores puedan elegir si jugar con un mapa de batalla y miniaturas, un mapa digital o ningún mapa. Jugar con un mapa facilita que todos entiendan y controlen dónde se encuentran todos los combatientes, especialmente a medida que aumenta el número de participantes. Dicho esto, el combate en la era moderna puede tener lugar a una distancia considerable gracias a las armas de fuego modernas, dentro o sobre un vehículo en movimiento, o incluso entre combatientes en diferentes vehículos, todos escenarios que pueden hacer que los mapas sean poco prácticos. El Capítulo 12 contiene consejos para el GM sobre cómo manejar todo tipo de encuentros de combate."
    },
    {
      tipo: "parrafo",
      texto: "Ya sea que un juego use mapas o no, Everyday Heroes mide el movimiento y el alcance en incrementos de 5 pies. Los mapas con otras escalas funcionan igual de bien para los encuentros de combate, siempre que el GM aclare la escala de los mapas."
    },
    {
      tipo: "h3",
      texto: "Paso 3: Iniciativa"
    },
    {
      tipo: "parrafo",
      texto: "Cuando comienza el combate, cada combatiente realiza una tirada de iniciativa. Se trata de una prueba de Destreza sin bonificador de competencia ni otros modificadores, aunque los talentos de clase y otras características pueden otorgar ventaja en la iniciativa, un bonificador en las pruebas de iniciativa o permitir intercambiar el modificador de Destreza por otra habilidad. Los combatientes actúan en orden de iniciativa, del más alto al más bajo, en cada asalto."
    },
    {
      tipo: "parrafo",
      texto: "Si algún combatiente empata en sus tiradas de iniciativa, el GM decide en qué orden actúan los combatientes empatados. El GM también puede decidir hacer una tirada de iniciativa para varios enemigos como grupo, o para todos los enemigos como un solo grupo, para ayudar a acelerar el combate. La iniciativa se tira solo una vez durante el transcurso del combate."
    },
    {
      tipo: "parrafo",
      texto: "Iniciativa: d20 + modificador de Destreza "
    },
    {
      tipo: "parrafo",
      texto: "Cualquier jugador puede elegir reducir la iniciativa de su héroe después de que se haya tirado, pero antes de que comience el combate, lo que les permite actuar después de los oponentes o después de un aliado si así lo desean."
    },
    {
      tipo: "h3",
      texto: "Paso 4: Turnos de Combate"
    },
    {
      tipo: "parrafo",
      texto: "Cada personaje que participa en el encuentro de combate toma un turno de acuerdo con el orden de iniciativa. El turno de cada participante consiste en una amplia variedad de actividades potenciales, descritas a lo largo de este capítulo."
    },
    {
      tipo: "parrafo",
      texto: "Durante un turno, un combatiente puede hacer todas las siguientes cosas, en el orden que desee:"
    },
    {
      tipo: "lista",
      items: [
        "Moverse hasta su velocidad (ver \"Movimiento\" más abajo) ",
        "Realizar una acción, que puede incluir una acción de Ataque (ver \"Acciones\" y \"Ataques\" más abajo) ",
        "Realizar una acción bonus, si está disponible (ver \"Acciones Bonus\" más abajo) ",
        "Realizar acciones libres (ver \"Acciones Libres\" más abajo) ",
        "Usar su reacción bajo ciertas circunstancias (ver \"Reacciones\" más abajo) "
      ]
    },
    {
      tipo: "parrafo",
      texto: "Ninguna de estas actividades es obligatoria, y el turno de un combatiente ocurre incluso si elige no realizar acciones o no moverse."
    },
    {
      tipo: "parrafo",
      texto: "El asalto termina una vez que todos los combatientes han tomado un turno."
    },
    {
      tipo: "h3",
      texto: "Paso 5: Repetir hasta terminar"
    },
    {
      tipo: "parrafo",
      texto: "La lucha continúa en un nuevo asalto en la parte superior del orden de iniciativa y procede mientras dure la lucha. El combate termina cuando la lucha cesa, ya sea porque algunas o todas las fuerzas opuestas han sido noqueadas, muertas, han pedido una tregua, han escapado o ya no están luchando activamente entre sí."
    },
    {
      tipo: "h2",
      texto: "Movimiento"
    },
    {
      tipo: "parrafo",
      texto: "Durante el turno de un combatiente, pueden moverse una distancia igual a su velocidad, medida en pies. Pueden usar tanto o tan poco de este movimiento como deseen durante su turno. Además, pueden usar su asignación de movimiento en cualquier momento durante su turno, incluso dividiéndola en múltiples movimientos más cortos antes, entre o después de otras acciones o ataques."
    },
    {
      tipo: "h3",
      texto: "Modos de Movimiento"
    },
    {
      tipo: "parrafo",
      texto: "El movimiento incluye correr, saltar, escalar, nadar, volar, etc. Se llaman Modos de Movimiento. El modo predeterminado es correr, lo que significa que alguien se mueve por el suelo de una manera que le es normal. Los humanos tienen una velocidad predeterminada de 30 cuando corren."
    },
    {
      tipo: "parrafo",
      texto: "Otros modos de movimiento pueden incluir, entre otros, Gatear, Escalar, Volar y Nadar. Algunos combatientes pueden tener múltiples velocidades listadas, con diferentes valores para diferentes modos. Esto significa que estos tipos de movimiento son normales para ellos."
    },
    {
      tipo: "h4",
      texto: "Movimiento Normal y Difícil"
    },
    {
      tipo: "parrafo",
      texto: "El movimiento normal es cuando un personaje puede moverse a toda su velocidad. El movimiento difícil es cuando solo pueden moverse la mitad de la distancia. Cuando el movimiento es difícil, gastan el doble de su distancia permitida. El movimiento puede ser difícil por varias razones."
    },
    {
      tipo: "parrafo",
      texto: "La primera es cuando el terreno o las condiciones en las que te mueves lo dificultan. Esto se conoce como Terreno Difícil. Una playa arenosa, una ladera rocosa o un matorral enredado de maleza podrían considerarse terreno difícil. El GM tiene la última palabra sobre lo que constituye terreno difícil."
    },
    {
      tipo: "parrafo",
      texto: "La segunda razón del movimiento difícil es moverse en un modo que no es natural o normal para el combatiente. Los humanos son más lentos al gatear por el suelo, nadar en el agua o escalar una cuerda que al correr sobre terreno llano. Los pingüinos, aunque rápidos en el agua, son bastante lentos al caminar torpemente por una capa de hielo. Esto generalmente se denomina simplemente movimiento difícil."
    },
    {
      tipo: "parrafo",
      texto: "Al igual que con el terreno, el GM tiene la última palabra sobre lo que es difícil y lo que no lo es."
    },
    {
      tipo: "parrafo",
      texto: "Incluso si varias circunstancias dificultan el movimiento, no se suman. El movimiento es difícil o es normal. Los efectos que realmente reducen la velocidad de un combatiente en un número determinado de pies pueden combinarse eficazmente con el movimiento difícil."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Movimiento Difícil",
      texto: "Mack Williams quiere aplastar a un asesino del Escorpión Negro en la cara, pero el villano está parado en la cima de una roca de 10 pies de altura. Mack puede moverse 30 pies en un turno y la roca está a solo 10 pies de distancia, pero el terreno es difícil debido a que es rocoso e irregular. Mack se mueve hasta la roca, recorriendo 10 pies en terreno difícil, lo que utiliza 20 pies de su movimiento disponible. Mack entonces quiere escalar la roca de 10 pies de altura, pero como la escalada es un movimiento difícil, le costaría 20 pies de movimiento, y solo le quedan 10. El Escorpión Negro se ríe desde su posición elevada."
    },
    {
      tipo: "h4",
      texto: "Mezclando Movimiento"
    },
    {
      tipo: "parrafo",
      texto: "Algunos combatientes pueden tener múltiples velocidades en diferentes modos. Pueden mezclar libremente el uso de estos según las circunstancias lo permitan o exijan, pero existen algunas limitaciones. El movimiento total del combatiente no puede ser mayor que su velocidad más rápida. Además, no pueden moverse más lejos en un modo determinado que su velocidad en ese modo. Estos límites incluyen los costos adicionales por movimiento difícil."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Mezclando Movimiento",
      texto: "Katie Paige ha activado su mochila propulsora de emergencia, lo que le otorga una velocidad de vuelo de 60 pies junto con su velocidad normal de 30 pies. Corre 20 pies hasta una ventana abierta, luego vuela 30 pies hasta un tejado cercano. Después de aterrizar, puede caminar o volar otros 10 pies por el tejado antes de agotar todo su movimiento en el turno."
    },
    {
      tipo: "h4",
      texto: "Caer Prono"
    },
    {
      tipo: "parrafo",
      texto: "Los combatientes pueden terminar Prono (ver \"Condiciones\", más abajo) ya sea porque fueron derribados o porque se agacharon intencionalmente. Un personaje puede caer Prono como una acción libre sin usar nada de su movimiento. Levantarse después de ser derribado Prono cuesta la mitad del movimiento de un combatiente (redondeado hacia abajo al incremento de 5 pies más cercano)."
    },
    {
      tipo: "parrafo",
      texto: "Para moverse mientras está Prono, un personaje generalmente debe gatear, lo cual es movimiento difícil (ver arriba)."
    },
    {
      tipo: "h4",
      texto: "Saltar"
    },
    {
      tipo: "parrafo",
      texto: "Los personajes pueden saltar normalmente sin realizar pruebas de habilidad. Si un personaje puede tomar un impulso de al menos 10 pies, puede realizar automáticamente los siguientes saltos:"
    },
    {
      tipo: "lista",
      items: [
        "Un salto vertical que cubre un número de pies igual al modificador de Fuerza del personaje (mínimo 1 pie) ",
        "Un salto horizontal que cubre un número de pies igual a la puntuación de Fuerza del personaje (mínimo 1 pie) "
      ]
    },
    {
      tipo: "parrafo",
      texto: "Sin impulso, un personaje solo puede saltar distancias más cortas:"
    },
    {
      tipo: "lista",
      items: [
        "Un salto vertical de 1 pie ",
        "Un salto horizontal que cubre un número de pies igual al modificador de Fuerza del personaje "
      ]
    },
    {
      tipo: "parrafo",
      texto: "El GM puede permitir saltos más largos mediante una prueba de Fuerza (Atletismo) exitosa, con una CD basada en la dificultad del salto. Siempre que un personaje salta, la distancia que salta se cuenta para su movimiento total."
    },
    {
      tipo: "h4",
      texto: "Moverse a Través de Otros Combatientes"
    },
    {
      tipo: "parrafo",
      texto: "Los combatientes pueden moverse libremente a través de los espacios ocupados por sus aliados. No pueden moverse a través de los espacios ocupados por oponentes a menos que esos oponentes sean dos tamaños más pequeños (Diminuto para combatientes Medianos, ver Capítulo 15). En cualquier caso, los espacios ocupados por otro combatiente se consideran terreno difícil."
    },
    {
      tipo: "parrafo",
      texto: "Los personajes no pueden elegir terminar su movimiento en el mismo espacio que otro combatiente. Si un personaje es movido por otro personaje, y ese movimiento termina con ellos en el mismo cuadrado que otro combatiente, el personaje cae prono en el espacio de ese combatiente."
    },
    {
      tipo: "h4",
      texto: "Volar y Otros Movimientos Especiales"
    },
    {
      tipo: "parrafo",
      texto: "Los bloques de estadísticas de ciertas criaturas pueden listar un tipo especial de movimiento, como volar o nadar. Dicha criatura puede moverse hasta la distancia indicada utilizando ese tipo de movimiento, y normalmente no necesita realizar pruebas de habilidad para ese movimiento."
    },
    {
      tipo: "parrafo",
      texto: "Los combatientes voladores pueden terminar su movimiento en el aire y deben controlar su distancia del suelo para determinar el alcance y el área de los efectos. Los combatientes nadadores pueden terminar su movimiento a cualquier profundidad bajo la superficie."
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente volador puede caer del cielo si el GM determina que su condición ya no le permite volar. Por ejemplo, un águila que queda Paralizada cae al suelo, pero un personaje atado a un globo de helio que se duerme sigue flotando. Un combatiente que cae mientras vuela sufre daño por la caída normalmente cuando golpea el suelo (ver \"Caídas\" en el Capítulo 10)."
    },
    {
      tipo: "h2",
      texto: "Acciones"
    },
    {
      tipo: "parrafo",
      texto: "Realizar una acción suele ser lo más importante que hace un combatiente en cada asalto de combate. Hay una serie de acciones disponibles para casi todos los personajes, y ciertos talentos de clase o hazañas pueden permitir que un personaje realice acciones especiales o modifique las acciones indicadas a continuación."
    },
    {
      tipo: "h3",
      texto: "Ataque"
    },
    {
      tipo: "parrafo",
      texto: "Cubriendo las actividades más comunes en combate, la acción de Ataque permite a un personaje realizar un único ataque cuerpo a cuerpo, a distancia o especial contra un oponente. Algunos talentos de clase permiten a los combatientes realizar múltiples ataques utilizando la acción de Ataque. Consulta la sección \"La Acción de Ataque\" más abajo para obtener más detalles."
    },
    {
      tipo: "h3",
      texto: "Preparar (en Persecución)"
    },
    {
      tipo: "parrafo",
      texto: "Durante una persecución, un combatiente puede concentrarse en prepararse para la siguiente complicación que encuentre, lo que le otorga ventaja en su próxima prueba de habilidad o tirada de salvación para lidiar con un encuentro. Consulta el Capítulo 11 para obtener más detalles."
    },
    {
      tipo: "h3",
      texto: "Desatascar"
    },
    {
      tipo: "parrafo",
      texto: "Si el arma de un combatiente está atascada, puede usar una acción para desatascarla. Un combatiente debe tener una mano libre para usar la acción Desatascar."
    },
    {
      tipo: "h3",
      texto: "Correr (Dash)"
    },
    {
      tipo: "parrafo",
      texto: "Realizar la acción Correr (Dash) permite a un combatiente moverse una distancia igual a su velocidad actual. Esto se suma a su movimiento normal durante su turno."
    },
    {
      tipo: "h3",
      texto: "Desengancharse (Disengage)"
    },
    {
      tipo: "parrafo",
      texto: "La acción Desengancharse puede ser útil cuando un combatiente quiere escapar de un oponente cuerpo a cuerpo o correr más allá de otros enemigos. Si un combatiente usa la acción Desengancharse, su movimiento durante el resto de su turno no provoca ataques de oportunidad."
    },
    {
      tipo: "h3",
      texto: "Esquivar (Dodge)"
    },
    {
      tipo: "parrafo",
      texto: "Usar la acción Esquivar permite a un personaje concentrarse en evitar ser golpeado en combate. Cuando un personaje usa la acción Esquivar, cualquiera que lo ataque tiene desventaja en sus tiradas de ataque, y el personaje tiene ventaja en las tiradas de salvación de Destreza. Estos efectos duran hasta el comienzo del próximo turno del personaje."
    },
    {
      tipo: "h3",
      texto: "Primeros Auxilios"
    },
    {
      tipo: "parrafo",
      texto: "Al usar la acción Primeros Auxilios, un personaje puede realizar una prueba de Inteligencia (Medicina) para proporcionar primeros auxilios a un aliado o a sí mismo durante el combate. Algunas actividades asociadas con la acción Primeros Auxilios requieren un botiquín de primeros auxilios para los suministros esenciales (ver Capítulo 6)."
    },
    {
      tipo: "h4",
      texto: "Pruebas de Primeros Auxilios"
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-pruebas-primeros-auxilios",
      titulo: "Pruebas de Primeros Auxilios",
      encabezados: ["Prueba de Inteligencia (Medicina)", "CD", "Resultado", "Kit de Primeros Auxilios Requerido"],
      filas: [
        ["", "10", "Estabilizar a un aliado con 0 puntos de golpe.", "No "],
        ["", "10", "Estabilizar a un aliado con 0 puntos de golpe usando un botiquín de primeros auxilios. Si la prueba tiene éxito por 5 o más, el aliado recupera 1 punto de golpe.", "Sí "],
        ["", "10", "Terminar la condición Ciego o Sordo impuesta por un arma en un combatiente.", "No "],
        ["", "10", "Apagar las llamas de un combatiente que está Quemándose.", "No "],
        ["", "CD de Veneno", "Dar ventaja a un combatiente en su próxima tirada de salvación contra veneno.", "Sí "],
        ["", "CD de Veneno", "Permitir que un combatiente realice una tirada de salvación para terminar un efecto continuo impuesto por un veneno o droga.", "Sí "]
      ]
    },
    {
      tipo: "h3",
      texto: "Ganar Terreno"
    },
    {
      tipo: "parrafo",
      texto: "Durante una persecución, un combatiente puede intentar ganar terreno sobre sus oponentes dificultando las cosas para esos oponentes, o facilitando las cosas para el lado del personaje. Un personaje que realiza la acción Ganar Terreno participa en una contienda de habilidad entre ellos y un combatiente del otro lado, utilizando opciones específicas de ganar terreno que forman parte de la complicación actual. Si la intención es obstaculizar al otro lado, el personaje elige qué combatiente disputa su prueba. Si la intención es obtener una ventaja, el GM elige quién se opone al personaje en la contienda."
    },
    {
      tipo: "parrafo",
      texto: "Si el personaje que usa la acción Ganar Terreno gana la contienda de habilidad, su lado gana 1 punto de persecución. Si el personaje pierde el desafío por 5 o más, estropean su intento y el otro lado gana 1 punto de persecución en su lugar. En caso de empate, no se otorgan puntos de persecución."
    },
    {
      tipo: "parrafo",
      texto: "Cada complicación (presentada en la sección \"Encuentros de Persecución\" en el capítulo 15) tiene una lista de acciones sugeridas que pueden usarse para ganar terreno, y que tienen sentido para el entorno de una persecución en particular. El GM puede proporcionar esta lista a los jugadores para que sepan qué tipo de acciones son posibles, y los jugadores también pueden proponer sus propias ideas si el GM está de acuerdo en que tienen sentido para la situación subyacente a la persecución."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Ganar Terreno",
      texto: "Dexter LaFontaine está huyendo de un grupo de criminales y se mete en un mercado abarrotado en un intento de mezclarse con la multitud y despistar a sus perseguidores. Dexter realiza la acción Ganar Terreno, y el GM solicita una prueba de Carisma (Sigilo) en contienda con una prueba de Sabiduría (Percepción) del criminal más cercano. El resultado de Dexter es 15, mientras que el del criminal es solo 10, lo que permite a Dexter mezclarse con éxito entre la multitud, y su lado gana 1 punto de persecución."
    },
    {
      tipo: "h3",
      texto: "Ayudar"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje puede usar la acción Ayudar para asistir a un aliado a su alcance con algo que esté haciendo. El aliado obtiene ventaja en una prueba de habilidad o tirada de ataque realizada antes del comienzo del próximo turno del personaje que ayuda."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Ayudar",
      texto: "Katie Paige quiere ayudar a Mel Stackhouse a abrir una caja fuerte. Katie usa la acción Ayudar para distraer a un guardia cercano, dándole a Mel ventaja en su prueba de Inteligencia (Seguridad)."
    },
    {
      tipo: "h3",
      texto: "Esconderse"
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente puede intentar esconderse de otros realizando una prueba de Destreza (Sigilo). Hasta que un combatiente oculto sea revelado o decida dejar de esconderse, otra criatura que lo esté buscando activamente debe disputar la prueba del combatiente con una prueba de Sabiduría (Percepción). Una criatura que no esté buscando activamente, pero que el GM determine que podría detectar razonablemente al combatiente escondido dadas las circunstancias, tiene permitido una prueba de Percepción pasiva para descubrir al personaje escondido."
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente no puede esconderse normalmente de quien lo vea claramente intentándolo. Además, un combatiente escondido revela su posición si hace ruido significativo, si puede ser olfateado por una criatura o si realiza un ataque."
    },
    {
      tipo: "parrafo",
      texto: "El GM es el árbitro final de cuándo los héroes pueden esconderse y cuándo no, especialmente cuando otros combatientes están atentos al peligro. En otras circunstancias, el GM podría decidir que los héroes pueden acercarse sigilosamente a un enemigo sin esconderse si el enemigo está ocupado o preocupado."
    },
    {
      tipo: "h3",
      texto: "Interactuar con Objetos"
    },
    {
      tipo: "parrafo",
      texto: "La acción Interactuar con Objetos se utiliza para interactuar con el entorno de alguna manera que no sea un ataque. Los objetos también pueden ser manipulados usando una acción libre, pero solo si el personaje tiene una mano libre. El GM tiene la discreción de decidir si una interacción con un objeto requiere una acción o una acción libre."
    },
    {
      tipo: "parrafo",
      texto: "Ejemplos:"
    },
    {
      tipo: "lista",
      items: [
        "Desenfunda o guarda un arma",
        "Abre o cierra una puerta",
        "Saca una poción de tu mochila",
        "Recoge un arma caída",
        "Toma un objeto de una mesa",
        "Quítate un anillo del dedo",
        "Usa equipo",
        "Saca una antorcha de un aplique de pared",
        "Saca algunos objetos de una bolsa, paquete o mochila",
        "Mete algo en tu cinturón",
        "Apaga una pequeña llama",
        "Ponte o quítate una máscara"
      ]
    },
    {
      tipo: "h3",
      texto: "Preparar (Acción)"
    },
    {
      tipo: "parrafo",
      texto: "La acción Preparar permite a un personaje esperar una situación y luego actuar en consecuencia, usando su reacción. El personaje describe qué circunstancia desencadenará su reacción y luego elige una acción que realizará en respuesta a ese desencadenante. El personaje también puede optar por moverse hasta su velocidad en respuesta al desencadenante."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Preparar",
      texto: "Luis Garza ve a un miembro de una banda a punto de girar una esquina y decide preparar una acción de Ataque, declarando que disparará tan pronto como el matón aparezca. Cuando el matón gira la esquina, Luis usa su reacción para realizar su ataque preparado."
    },
    {
      tipo: "parrafo",
      texto: "El desencadenante debe ser observable, lo que significa que el personaje debe poder ver u oír que ocurre el evento desencadenante. Si el evento desencadenante ocurre antes del próximo turno del personaje, el personaje puede usar su reacción para completar su acción preparada. Si el desencadenante no ocurre, el personaje pierde su reacción para el asalto."
    },
    {
      tipo: "parrafo",
      texto: "Cuando un personaje prepara una acción, esa acción no puede ser una acción bonus."
    },
    {
      tipo: "h3",
      texto: "Buscar"
    },
    {
      tipo: "parrafo",
      texto: "La acción Buscar permite a un personaje realizar una prueba de Sabiduría (Percepción) para buscar algo en su entorno. Los personajes pueden estar buscando una puerta secreta, un objeto específico o un oponente oculto."
    },
    {
      tipo: "h3",
      texto: "Segundo Aliento"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un personaje realiza la acción Segundo Aliento, puede gastar un Dado de Golpe y recuperar un número de puntos de golpe igual al dado apropiado + su modificador de Constitución."
    },
    {
      tipo: "h3",
      texto: "Usar Dispositivo"
    },
    {
      tipo: "parrafo",
      texto: "Los héroes pueden usar una variedad de dispositivos para obtener una ventaja táctica, como usar la linterna de un teléfono para iluminar un área oscura. El GM decide cuándo un dispositivo requiere una acción, una acción bonus o una acción libre."
    },
    {
      tipo: "h3",
      texto: "Usar Habilidad"
    },
    {
      tipo: "parrafo",
      texto: "Muchos talentos de clase y otras características especiales del personaje requieren el uso de una acción. El GM también puede decidir que el uso de una habilidad determinada requiere una acción, si tiene sentido en el contexto del encuentro de combate."
    },
    {
      tipo: "h2",
      texto: "Acciones Bonus"
    },
    {
      tipo: "parrafo",
      texto: "Una acción bonus requiere menos tiempo y esfuerzo que una acción completa y solo puede usarse si una hazaña, talento de clase u otra característica especial permite al personaje realizar una."
    },
    {
      tipo: "parrafo",
      texto: "La regla más común para las acciones bonus es que solo puedes realizar una acción bonus durante tu turno, incluso si tienes acceso a múltiples acciones bonus de diferentes fuentes."
    },
    {
      tipo: "h3",
      texto: "Ataque con Arma Secundaria"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un combatiente realiza la acción de Ataque y está empuñando dos armas ligeras, puede usar una acción bonus para realizar un ataque con su arma secundaria."
    },
    {
      tipo: "parrafo",
      texto: "Al realizar un ataque con arma secundaria, un personaje no puede añadir su modificador de habilidad al daño del ataque a menos que ese modificador sea negativo."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Ataque con Arma Secundaria",
      texto: "Mel Stackhouse, una guardaespaldas dura, empuña una pistola de 9 mm en una mano y una pistola paralizante en la otra. Después de disparar con su pistola de 9 mm usando su acción, usa su acción bonus para realizar un ataque con la pistola paralizante. Tiene éxito en el ataque, pero no añade su modificador de Destreza de +3 al daño."
    },
    {
      tipo: "h3",
      texto: "Acciones Libres"
    },
    {
      tipo: "parrafo",
      texto: "Las acciones libres no requieren tiempo ni esfuerzo significativos. Un personaje puede realizar tantas acciones libres en su turno como el GM determine que son razonables. Las acciones libres no se pueden realizar fuera del turno de un combatiente."
    },
    {
      tipo: "parrafo",
      texto: "Ejemplos:"
    },
    {
      tipo: "lista",
      items: [
        "Hablar",
        "Dejar caer un objeto",
        "Caer Prono",
        "Recargar un arma (con la hazaña Manos Rápidas)"
      ]
    },
    {
      tipo: "h2",
      texto: "Reacciones"
    },
    {
      tipo: "parrafo",
      texto: "Las reacciones son acciones especiales que se pueden realizar en el turno de cualquier combatiente. Están destinadas a responder a eventos desencadenantes que suceden durante el combate."
    },
    {
      tipo: "parrafo",
      texto: "Un personaje solo puede realizar una reacción por asalto y recupera su reacción al comienzo de su turno. Cuando un personaje usa una reacción, interrumpe el turno de otro personaje, resolviendo su reacción antes de que el otro personaje continúe con su turno."
    },
    {
      tipo: "h3",
      texto: "Zambullirse para Cubrirse"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un combatiente está a punto de recibir daño o ser afectado por un efecto de área, como una explosión, fuego de supresión u otro personaje que realiza la acción de Fuego de Supresión, puede usar la reacción Zambullirse para Cubrirse para evitar el daño."
    },
    {
      tipo: "parrafo",
      texto: "Al zambullirse para cubrirse, un combatiente puede moverse hasta la mitad de su velocidad para tratar de alcanzar el espacio seguro o la ubicación más cercana. Típicamente, esto significa:"
    },
    {
      tipo: "lista",
      items: [
        "Ponerse detrás de una cobertura total capaz de bloquear el efecto (ver “Cobertura” más adelante en este capítulo).",
        "Salir del campo de fuego (ver la acción Fuego de Supresión más arriba).",
        "Salir fuera del área de efecto."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Las reglas de movimiento normales se aplican al movimiento otorgado por esta reacción, el cual no se deduce de tu movimiento normal en tu turno. Si un personaje alcanza un espacio seguro adecuado, evita todo el daño y los efectos, y cae Prono al final de su movimiento, si no estaba ya Prono."
    },
    {
      tipo: "parrafo",
      texto: "Si el personaje no alcanza un espacio seguro adecuado, sufre el daño y los efectos especificados, y luego cae Prono al final de su movimiento, si no estaba ya Prono."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Zambullirse para Cubrirse",
      texto: "Un guerrillero lanza una granada de fragmentación justo donde está Dexter LaFontaine, inspirando a Dexter a querer zambullirse para cubrirse. La granada tiene un radio de 20 pies, pero la mitad del movimiento de Dexter es solo 15 pies. Afortunadamente, una ventana abierta se encuentra a 10 pies de distancia. Usando la reacción Zambullirse para Cubrirse, Dexter salta a través de la ventana y aterriza Prono al otro lado. El GM determina que la pared del edificio contendrá la metralla de la granada, por lo que Dexter está a salvo."
    },
    {
      tipo: "parrafo",
      texto: "Incluso si un combatiente no puede escapar usando la reacción Zambullirse para Cubrirse, zambullirse puede al menos alejarlo del centro de un efecto si es ventajoso hacerlo."
    },
    {
      tipo: "parrafo",
      texto: "Si no estás usando un mapa de batalla para el combate, queda a discreción del GM si un personaje puede alcanzar un espacio seguro. Se recomienda que un GM permita el éxito con la reacción Zambullirse para Cubrirse a menos que no tenga absolutamente ningún sentido en la situación dada. Las limitaciones impuestas a Zambullirse para Cubrirse son para evitar que parezca demasiado irreal, no para dificultar su uso."
    },
    {
      tipo: "h3",
      texto: "Ataque de Oportunidad"
    },
    {
      tipo: "parrafo",
      texto: "Los ataques de oportunidad son el tipo más común de reacción. Ocurren cuando un oponente que está luchando en combate cuerpo a cuerpo se mueve fuera de tu alcance."
    },
    {
      tipo: "parrafo",
      texto: "Los ataques de oportunidad no pueden ser provocados por el movimiento de un combatiente si ese movimiento es el resultado de que el combatiente sea empujado o movido por otro combatiente."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Ataque de Oportunidad",
      texto: "Mack Williams está en combate cuerpo a cuerpo con un matón del Escorpión Negro. El matón decide huir. Tan pronto como el matón se mueve fuera del alcance de Mack, Mack usa su reacción para realizar un ataque de oportunidad. Tiene éxito en el ataque, y el matón cae con un gemido."
    },
    {
      tipo: "h2",
      texto: "Realizando un Ataque"
    },
    {
      tipo: "parrafo",
      texto: "La mayoría de las acciones de ataque se realizan con algún tipo de arma, pero algunas utilizan un movimiento especial o un poder del personaje. Sea cual sea el método, un ataque se realiza de la misma manera."
    },
    {
      tipo: "parrafo",
      texto: "Cuando un personaje realiza un ataque, declara su objetivo y realiza una tirada de ataque. Si la tirada es un éxito, tira el daño. El daño se resta de los puntos de golpe del objetivo. Si la tirada de ataque es un fallo, no se tira daño."
    },
    {
      tipo: "h3",
      texto: "Tiradas de Ataque"
    },
    {
      tipo: "parrafo",
      texto: "Tirada de Ataque: d20 + modificador de habilidad + bonificador de competencia (si es aplicable)"
    },
    {
      tipo: "parrafo",
      texto: "Un ataque es una prueba de habilidad y, como tal, puede beneficiarse de la ventaja y sufrir desventaja. Las tiradas de ataque se realizan contra la Defensa del objetivo, con la Defensa funcionando como la CD."
    },
    {
      tipo: "parrafo",
      texto: "La puntuación de habilidad utilizada para la tirada de ataque se basa en el tipo de ataque. Los ataques cuerpo a cuerpo suelen utilizar Fuerza, mientras que los ataques a distancia suelen utilizar Destreza. Las armas con la propiedad Finura pueden utilizar Fuerza o Destreza. El bonificador de competencia solo se aplica si el personaje es competente con el arma que se utiliza."
    },
    {
      tipo: "h4",
      texto: "Tiradas de Daño"
    },
    {
      tipo: "parrafo",
      texto: "Un ataque exitoso inflige daño, tirando los dados de daño indicados para el arma. Los modificadores de habilidad también se aplican a la tirada de daño, pero el bonificador de competencia nunca se aplica a las tiradas de daño."
    },
    {
      tipo: "parrafo",
      texto: "Tirada de Daño: dados de daño del arma + modificador de habilidad"
    },
    {
      tipo: "parrafo",
      texto: "Las armas con la propiedad ráfaga pueden gastar munición extra para infligir mayor daño (ver Capítulo 6)."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Tirada de Daño",
      texto: "Saoirse O'Connor usa su rifle de francotirador para disparar a un PNJ enemigo. Tira un 15, y con su bonificador de ataque de +7, el ataque impacta. Su rifle inflige 2d8 de daño balístico, y como es competente, puede añadir su modificador de Destreza de +5 al daño. Tira los dos d8 y obtiene un 4 y un 7, para un total de 11 puntos de daño. Sumando su modificador de Destreza, el daño total es de 16 puntos."
    },
    {
      tipo: "h4",
      texto: "Golpes Críticos"
    },
    {
      tipo: "parrafo",
      texto: "Si un personaje saca un 20 natural en una tirada de ataque con d20, el ataque es un golpe crítico. Un golpe crítico impacta automáticamente, independientemente de la Defensa del objetivo. Además, el atacante tira el doble de los dados de daño indicados y luego añade cualquier modificador aplicable."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Golpe Crítico",
      texto: "Saoirse O'Connor saca un 20 en su tirada de ataque, lo que resulta en un golpe crítico. Tira sus dados de daño dos veces, para un total de 4d8. Obtiene un 1, 3, 5 y 8, para un total de 17 puntos de daño. Añade su modificador de Destreza de +5 para un total de 22 puntos de daño."
    },
    {
      tipo: "h4",
      texto: "Fallos Críticos"
    },
    {
      tipo: "parrafo",
      texto: "Un 1 natural en una tirada de ataque siempre es un fallo, independientemente de la Defensa del objetivo. Además, si el ataque se realiza con un arma de fuego, el arma se atasca. Las armas con la propiedad no fiable también tienen un fallo crítico en un 2 natural. Un arma atascada no puede usarse para atacar hasta que se desatasque."
    },
    {
      tipo: "h4",
      texto: "Oponentes no Vistos"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un atacante no puede ver a su oponente, pero tiene una idea general de dónde se encuentra el oponente, sufre desventaja en su tirada de ataque. Cuando un atacante no puede ser visto por su oponente, tiene ventaja en su tirada de ataque."
    },
    {
      tipo: "h3",
      texto: "Combate Cuerpo a Cuerpo"
    },
    {
      tipo: "parrafo",
      texto: "Cualquier ataque que se realice contra un oponente adyacente se considera un ataque cuerpo a cuerpo. Esto incluye puñetazos, patadas y cualquier arma que no sea a distancia, así como ciertas armas que se pueden usar para ataques tanto cuerpo a cuerpo como a distancia."
    },
    {
      tipo: "h4",
      texto: "Alcance"
    },
    {
      tipo: "parrafo",
      texto: "Las armas cuerpo a cuerpo suelen tener un alcance de 5 pies. Las armas con la propiedad alcance tienen un alcance de 10 pies. El alcance de un combatiente puede ser aumentado por su tamaño (ver Capítulo 15)."
    },
    {
      tipo: "h4",
      texto: "Ataques Desarmados"
    },
    {
      tipo: "parrafo",
      texto: "Todos los personajes son competentes en el uso de sus puños, pies y cualquier otra parte del cuerpo para golpear a un oponente."
    },
    {
      tipo: "parrafo",
      texto: "Los ataques desarmados no requieren que un personaje use la acción de Ataque, pero pueden ser parte de una acción de Ataque si así lo desea. Un personaje puede realizar un ataque desarmado como acción bonus."
    },
    {
      tipo: "parrafo",
      texto: "El daño por un ataque desarmado es igual a 1d4 más el modificador de Fuerza del atacante."
    },
    {
      tipo: "h4",
      texto: "Lucha con Dos Armas"
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente puede empuñar un arma ligera en cada mano y usar ambas en combate. Cuando un combatiente realiza la acción de Ataque, puede realizar un ataque con su arma principal. Luego, usando su acción bonus, puede atacar con el arma en su mano secundaria."
    },
    {
      tipo: "h4",
      texto: "Ataques Especiales"
    },
    {
      tipo: "parrafo",
      texto: "Los combatientes pueden usar la acción de Ataque para realizar un ataque especial, incluyendo Desarmar, Agarrar, Empujar y Hacer Tropezar. Los ataques especiales son contiendas de habilidad. Un ataque especial se usa en lugar de uno de los ataques de un combatiente durante una acción de Ataque."
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente no puede usar un ataque especial como ataque de oportunidad."
    },
    {
      tipo: "h5",
      texto: "Desarmar"
    },
    {
      tipo: "parrafo",
      texto: "El ataque especial de desarmar permite a un combatiente forzar a un oponente a soltar su arma. El objetivo debe estar al alcance del atacante, y este debe tener al menos una mano libre o empuñar un arma cuerpo a cuerpo. Desarmar a un oponente es una contienda de habilidad: el atacante realiza una prueba de Fuerza (Atletismo) contra la prueba de Fuerza (Atletismo) o Destreza (Acrobacias) del objetivo (a elección del objetivo). Si el atacante gana, el defensor suelta el arma. Si el atacante tiene una mano libre, puede tomar el arma."
    },
    {
      tipo: "h5",
      texto: "Agarrar"
    },
    {
      tipo: "parrafo",
      texto: "Un atacante puede intentar agarrar a un oponente a su alcance, lo que resulta en una prueba de Fuerza (Atletismo) en contienda con una prueba de Fuerza (Atletismo) o Destreza (Acrobacias) del oponente. Si el atacante tiene éxito, el oponente queda Apresado."
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente puede intentar escapar de un agarre usando su acción y ganando una contienda de Fuerza (Atletismo) o Destreza (Acrobacias) contra una prueba de Fuerza (Atletismo) de su oponente."
    },
    {
      tipo: "h5",
      texto: "Empujar"
    },
    {
      tipo: "parrafo",
      texto: "Un atacante puede intentar empujar a un oponente a su alcance, haciendo una prueba de Fuerza (Atletismo) en contienda con una prueba de Fuerza (Atletismo) o Destreza (Acrobacias) del oponente. El oponente solo puede ser una categoría de tamaño más grande que el atacante. Si el atacante gana la contienda, el oponente es empujado 5 pies."
    },
    {
      tipo: "h5",
      texto: "Hacer Tropezar"
    },
    {
      tipo: "parrafo",
      texto: "Un atacante puede intentar hacer tropezar a un oponente a su alcance, haciendo una prueba de Fuerza (Atletismo) en contienda con una prueba de Fuerza (Atletismo) o Destreza (Acrobacias) del oponente. El oponente solo puede ser una categoría de tamaño más grande que el atacante. Si el atacante gana la contienda, el oponente cae Prono."
    },
    {
      tipo: "h3",
      texto: "Combate a Distancia"
    },
    {
      tipo: "parrafo",
      texto: "Un ataque a distancia ocurre cuando un atacante intenta golpear a un oponente que está más allá del alcance cuerpo a cuerpo del atacante. La mayoría de los ataques a distancia se realizan con armas de fuego o armas arrojadizas."
    },
    {
      tipo: "h4",
      texto: "Alcance"
    },
    {
      tipo: "parrafo",
      texto: "Las armas a distancia tienen dos alcances, el segundo de los cuales es su alcance largo. Los ataques realizados a una distancia mayor que su alcance pero dentro de su alcance largo tienen desventaja en la tirada de ataque."
    },
    {
      tipo: "h4",
      texto: "Disparando en Combate Cuerpo a Cuerpo"
    },
    {
      tipo: "parrafo",
      texto: "Cualquier combatiente que realice un ataque a distancia contra un oponente en combate cuerpo a cuerpo sufre desventaja en su tirada de ataque. Si el atacante saca un 1 natural en la tirada de ataque, en lugar de impactar al oponente previsto, golpea a un oponente aleatorio en la pelea cuerpo a cuerpo."
    },
    {
      tipo: "h4",
      texto: "Cobertura"
    },
    {
      tipo: "parrafo",
      texto: "La cobertura en combate hace que un objetivo sea más difícil de impactar. La cobertura puede ser cualquier cosa que proporcione ocultación o una barrera física, como estar detrás de una pared, agachado detrás de un coche o dentro de un vehículo. Hay tres grados de cobertura:"
    },
    {
      tipo: "lista",
      items: [
        "**Media Cobertura:** Un objetivo con media cobertura es parcialmente oscurecido o protegido. La Defensa de un objetivo con media cobertura se convierte en 16. Si su Defensa normal es mayor, no obtienen ningún beneficio.",
        "**Tres Cuartos de Cobertura:** Un objetivo con tres cuartos de cobertura está en su mayoría oscurecido o protegido. La Defensa de un objetivo con tres cuartos de cobertura se convierte en 20. Si su Defensa normal es mayor, no obtienen ningún beneficio.",
        "**Cobertura Total:** Un objetivo con cobertura total no puede ser atacado ni objetivo de ningún efecto."
      ]
    },
    {
      tipo: "parrafo",
      texto: "La cobertura puede ser negada por el ángulo del ataque. Por ejemplo, un personaje que dispara desde arriba a un oponente que se esconde detrás de un coche podría no darle a ese oponente ninguna cobertura. Del mismo modo, un personaje que dispara a un oponente detrás de una pared delgada puede disparar a través de la pared, y si el arma tiene un Valor de Penetración superior al Valor de Armadura de la pared, entonces la pared no proporciona cobertura."
    },
    {
      tipo: "parrafo",
      texto: "El GM puede decidir que la cobertura es irrelevante si el ataque se origina desde una dirección donde la cobertura no ofrece protección."
    },
    {
      tipo: "h3",
      texto: "Ataques Explosivos"
    },
    {
      tipo: "parrafo",
      texto: "Las granadas y otras armas explosivas tienen un conjunto único de reglas. Para realizar un ataque con un explosivo arrojadizo o lanzado, un personaje elige un objetivo y realiza una tirada de ataque a distancia. Si la tirada es un éxito, el explosivo cae donde se pretendía. Si falla, el GM elige dónde cae el explosivo, generalmente en algún lugar cercano que no sea ideal para el atacante. Luego, el explosivo detona y se aplican sus efectos."
    },
    {
      tipo: "parrafo",
      texto: "Las armas que lanzan explosivos, como los lanzagranadas y los lanzacohetes, utilizan esta misma mecánica. Los ataques con armas explosivas no añaden un modificador de habilidad al daño."
    },
    {
      tipo: "parrafo",
      texto: "El GM puede decidir no realizar una tirada de ataque si el objetivo es un vehículo o un edificio, y en su lugar asumir un impacto automático."
    },
    {
      tipo: "h3",
      texto: "Fuego de Supresión"
    },
    {
      tipo: "parrafo",
      texto: "Al realizar la acción de Fuego de Supresión, un combatiente rocía un área con balas, poniendo en peligro a todos en el campo de fuego. El fuego de supresión puede usarse para amenazar a un gran grupo de oponentes a la vez, o como fuego de cobertura que da a los compañeros de equipo la oportunidad de moverse o actuar al aire libre obligando a los enemigos a apartarse."
    },
    {
      tipo: "h4",
      texto: "Realizando Fuego de Supresión"
    },
    {
      tipo: "parrafo",
      texto: "El fuego de supresión se puede realizar con un arma semiautomática o automática (ver “Propiedades de las Armas” en el Capítulo 6). Para realizar la acción de Fuego de Supresión, un combatiente designa un área objetivo dentro del alcance normal del arma. El área objetivo es una línea o una serie de espacios contiguos hasta el tamaño del área objetivo permitida y se basa en el tipo de arma."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Con un arma semiautomática:",
          definicion: "• El área objetivo es de 10 pies de ancho.<br>• El atacante necesita tener 8 o más rondas restantes en el cargador de su arma.<br>• Realizar la acción de Fuego de Supresión consume 8 rondas de munición."
        },
        {
          termino: "Con un arma automática:",
          definicion: "• El área objetivo es de hasta 30 pies de ancho.<br>• El atacante necesita tener 20 o más rondas restantes en el cargador de su arma.<br>• Realizar la acción de Fuego de Supresión consume 20 rondas de munición."
        }
      ]
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Fuego de Supresión",
      texto: "Romeo Sinclair se enfrenta a un grupo de criminales que disparan a sus aliados desde detrás de una barrera de hormigón. Lleva una ametralladora ligera, que como arma automática puede cubrir un área objetivo de hasta 30 pies de ancho. Como la barrera mide 25 pies de largo, Romeo apunta a toda la longitud de la misma con la acción de Fuego de Supresión, amenazando a cada enemigo detrás de la barrera."
    },
    {
      tipo: "h4",
      texto: "Campo de Fuego"
    },
    {
      tipo: "parrafo",
      texto: "El campo de fuego para un ataque de supresión se define como el área objetivo más el área entre esa área objetivo y el tirador. Cualquier combatiente en el campo de fuego que no esté detrás de una cobertura total efectiva es impactado por el fuego de supresión, lo que no requiere tirada de ataque (y por lo tanto no puede ser un golpe crítico). Los combatientes en el campo de fuego pueden usar la reacción Zambullirse para Cubrirse para evitar el daño, pero deben decidir hacerlo antes de que se tire el daño. Un personaje que usa la acción de Fuego de Supresión tira el daño una vez para todos los objetivos."
    },
    {
      tipo: "parrafo",
      texto: "El campo de fuego permanece activo hasta el comienzo del siguiente turno del tirador, hasta que el tirador se mueva o sea movido por un efecto externo, o hasta que el tirador sufra una condición que le impida disparar. Mientras el campo de fuego esté activo, cualquiera que entre en esa área o salga de una cobertura total dentro de ella sufre daño automáticamente."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Campo de Fuego",
      texto: "Sue Fairfield y Mack Williams están inmovilizados por gánsteres violentos, tres de los cuales están arrodillados detrás de una barrera con las armas desenfundadas. Sue quiere proporcionar fuego de cobertura para Mack, permitiéndole cargar y saltar sobre la barricada. En su turno, se asoma por la esquina y usa la acción de Fuego de Supresión con su carabina M4 en modo automático. Coloca el área objetivo para cubrir el área de la barrera donde se encuentran los tres criminales, pero deja algo de espacio al final para que Mack no tenga que entrar en el campo de fuego en su turno.<br>Los tres criminales ahora tienen una opción: usar la reacción Zambullirse para Cubrirse para bajar detrás de la barrera, o quedarse donde están y ser impactados. Dos deciden cubrirse, pero el otro es alcanzado por parte de la lluvia de balas del arma de Sue. La M4 inflige 1d12 de daño balístico más el modificador de Destreza de +3 de Sue; una tirada de 7 inflige 10 de daño al gánster."
    },
    {
      tipo: "parrafo",
      texto: "Usar la acción de Fuego de Supresión no se considera un ataque por parte del tirador. Como tal, los talentos que añaden daño adicional a los ataques no pueden usarse con fuego de supresión, pero los talentos que modifican el daño del arma sí afectan al daño del fuego de supresión. El fuego de supresión puede considerarse un tipo de ataque por un defensor que usa talentos o reacciones desencadenadas al ser atacado con un ataque a distancia, pero los talentos que modifican la tirada de ataque de un oponente no tienen efecto."
    },
    {
      tipo: "h2",
      texto: "Heridas, Curación y Muerte"
    },
    {
      tipo: "parrafo",
      texto: "Los héroes de acción pueden recibir una paliza, pero siempre se levantan para luchar un día más. Las siguientes reglas detallan las consecuencias de recibir daño, cómo los personajes pueden recuperarse y qué sucede si un personaje es mortalmente herido."
    },
    {
      tipo: "h3",
      texto: "Puntos de Golpe"
    },
    {
      tipo: "parrafo",
      texto: "Los puntos de golpe miden la capacidad de un personaje para soportar castigos, y la mayoría de los ataques infligen daño que reduce los puntos de golpe de un personaje. Cuando los puntos de golpe de un personaje se reducen a 0, queda Inconsciente. En lugar de morir inmediatamente, deben realizar tiradas de salvación por muerte para ver si sobreviven (ver más abajo)."
    },
    {
      tipo: "parrafo",
      texto: "Un personaje que sufre daño masivo puede ser asesinado instantáneamente. Si un personaje sufre suficiente daño de un solo golpe como para reducir sus puntos de golpe a un número negativo igual o mayor que su máximo de puntos de golpe, muere inmediatamente."
    },
    {
      tipo: "h4",
      texto: "Recuperando Puntos de Golpe"
    },
    {
      tipo: "parrafo",
      texto: "Los personajes pueden recuperar puntos de golpe durante el combate mediante el uso de ciertas habilidades de clase. La forma más común de curación tiene lugar durante los descansos cortos y prolongados."
    },
    {
      tipo: "parrafo",
      texto: "Si un efecto de curación restaura los puntos de golpe de un personaje a su máximo o más, el personaje no puede ganar puntos de golpe adicionales. Sus puntos de golpe actuales se establecen en su máximo. Los puntos de golpe temporales son la excepción a esta regla (ver más abajo)."
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente puede recibir puntos de golpe temporales incluso si está Inconsciente, pero esto no lo devuelve a la conciencia. Solo recuperar un punto de golpe puede hacerlo."
    },
    {
      tipo: "h3",
      texto: "Puntos de Golpe Temporales"
    },
    {
      tipo: "parrafo",
      texto: "A diferencia de los puntos de golpe normales, los puntos de golpe temporales no se suman. Si un personaje tiene puntos de golpe temporales y gana más, puede decidir si quedarse con lo que tiene o reemplazarlo con el nuevo total."
    },
    {
      tipo: "h4",
      texto: "Tiradas de Salvación por Muerte"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un personaje tiene 0 puntos de golpe, debe comenzar a realizar tiradas de salvación por muerte al comienzo de su turno. Una tirada de salvación por muerte es una tirada de d20 sin modificadores. En una tirada de 10 o más, el personaje tiene éxito. En una tirada de menos de 10, falla. Si un personaje obtiene un 1 natural en la tirada, cuenta como dos fallos. Si obtiene un 20 natural en la tirada, recupera inmediatamente 1 punto de golpe y puede actuar en su turno. Si un personaje tiene éxito en tres tiradas de salvación, se estabiliza. Si un personaje falla tres tiradas de salvación, muere."
    },
    {
      tipo: "h4",
      texto: "Daño con 0 Puntos de Golpe"
    },
    {
      tipo: "parrafo",
      texto: "Cada vez que un héroe sufre daño mientras está a 0 puntos de golpe, permanece en 0 puntos de golpe pero sufre un fallo en la tirada de salvación por muerte. Si el daño proviene de un golpe crítico, el personaje sufre dos fallos."
    },
    {
      tipo: "h4",
      texto: "Estabilizar a un Personaje"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje estabilizado ya no necesita realizar tiradas de salvación por muerte, pero permanece a 0 puntos de golpe e Inconsciente. Un personaje que recupera algún punto de golpe recupera la conciencia y puede actuar normalmente."
    },
    {
      tipo: "parrafo",
      texto: "Un personaje que ha sido estabilizado y luego sufre daño debe comenzar a realizar tiradas de salvación por muerte de nuevo."
    },
    {
      tipo: "h4",
      texto: "Descansando"
    },
    {
      tipo: "parrafo",
      texto: "Los héroes pueden tomar descansos durante el día para recuperar su fuerza y recuperarse de las heridas. Un descanso puede ser un descanso corto o un descanso prolongado."
    },
    {
      tipo: "h5",
      texto: "Descanso Corto"
    },
    {
      tipo: "parrafo",
      texto: "Un descanso corto dura al menos 1 hora, durante la cual un personaje no puede participar en actividades extenuantes, como el combate o el movimiento forzado. Después de un descanso corto, un personaje puede gastar hasta su máximo de Dados de Golpe para recuperar puntos de golpe. Por cada Dado de Golpe gastado, un personaje tira el dado y añade su modificador de Constitución."
    },
    {
      tipo: "h5",
      texto: "Descanso Prolongado"
    },
    {
      tipo: "parrafo",
      texto: "Un descanso prolongado es un período de 8 horas de inactividad, que puede incluir hasta 6 horas de sueño. Un personaje no puede beneficiarse de un descanso prolongado más de una vez cada 24 horas. Al final de un descanso prolongado, un personaje recupera todos los puntos de golpe perdidos y recupera hasta la mitad de sus Dados de Golpe máximos (redondeado hacia abajo)."
    }
  ]
};
export default capitulo9;