const capitulo10 = {
  id: "capitulo-10",
  titulo: "Capítulo 10: Reglas Varias",
  numero: 10,
  contenido: [
    {
      tipo: "parrafo",
      texto: "¡REGLAS QUE PUEDES USAR!"
    },
    {
      tipo: "introduccion",
      texto: "Este capítulo recopila reglas para una serie de facetas únicas del juego que no encajan perfectamente en las otras secciones, incluidos compañeros y monturas, entornos y situaciones inusuales, trampas y más."
    },
    {
      tipo: "h2",
      texto: "Compañeros"
    },
    {
      tipo: "parrafo",
      texto: "Un compañero es un aliado otorgado a ciertos héroes por su clase. Los compañeros siguen reglas especiales tanto dentro como fuera del combate. Pueden ser humanos, animales o incluso robóticos, y son leales solo al héroe con el que están asociados. Solo los PNJ otorgados específicamente como compañeros a través de la clase de un personaje siguen estas reglas."
    },
    {
      tipo: "parrafo",
      texto: "Los compañeros tienen Dados de Golpe como los héroes, y pueden usarlos mientras descansan de la misma manera que los héroes. Un compañero se estabiliza automáticamente cuando es reducido a 0 puntos de golpe, y no necesita realizar tiradas de salvación por muerte mientras su héroe esté vivo."
    },
    {
      tipo: "parrafo",
      texto: "Un héroe solo puede tener un compañero a la vez. Si un héroe tiene varios talentos que le otorgan un compañero, debe elegir con qué compañero se asociará."
    },
    {
      tipo: "parrafo",
      texto: "Los efectos de los talentos de clase que especifican \"compañero\" se aplican a cualquier compañero, mientras que los que especifican un tipo de compañero específico, como \"compañero animal\", se aplican solo a los compañeros de ese tipo."
    },
    {
      tipo: "h3",
      texto: "Estadísticas del Compañero"
    },
    {
      tipo: "parrafo",
      texto: "Las estadísticas de un compañero se definen con la clase a la que están asociados y son similares a las estadísticas de los PNJ. Una diferencia notable es que los compañeros tienen un número de Dados de Golpe igual a los Dados de Golpe de su héroe. Recalculan su máximo de puntos de golpe cada vez que su héroe sube de nivel."
    },
    {
      tipo: "parrafo",
      texto: "Los talentos de clase pueden modificar aún más las estadísticas de un compañero."
    },
    {
      tipo: "h3",
      texto: "Compañeros en Combate"
    },
    {
      tipo: "parrafo",
      texto: "Un compañero actúa en la iniciativa de su héroe, pero solo puede hacerlo cuando su héroe emite una orden (a veces requiere una acción propia) que el compañero pueda ver u oír. Como es normal, un compañero solo puede realizar un movimiento y una acción por turno."
    },
    {
      tipo: "parrafo",
      texto: "La siguiente tabla muestra las órdenes que un héroe puede dar a un compañero."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-acciones-compañero",
      titulo: "Acciones de Compañero",
      encabezados: ["Orden", "Acción del Héroe", "Acción del Compañero"],
      filas: [
        ["Asistir (solo durante una persecución)", "Acción", "El compañero usa la acción Ganar Terreno siempre que el GM esté de acuerdo en que tiene sentido para la situación. "],
        ["Evadir", "Acción bonus", "El compañero usa la acción Esquivar. "],
        ["Huir", "Acción bonus", "El compañero usa la acción Desengancharse. "],
        ["Matar", "Acción", "El compañero usa la acción de Ataque contra un objetivo válido de cualquier manera que sea capaz, incluyendo el uso de Multiataque si tiene esa acción. "],
        ["Mover", "Acción libre (una vez por turno)", "El compañero se mueve hasta su velocidad en cualquier momento durante el turno. "],
        ["Correr", "Acción bonus", "El compañero usa la acción Correr. "]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Un compañero puede usar la reacción Agacharse para Cubrirse sin que se le ordene, pero no usa otras reacciones a menos que se indique específicamente en la descripción de la clase que le otorga el compañero."
    },
    {
      tipo: "parrafo",
      texto: "Debido a la estrecha relación entre el héroe y el compañero, ninguno de los dos sufre desventaja en los ataques a distancia contra oponentes en combate cuerpo a cuerpo con el otro, y ninguno puede golpear al otro con un fallo crítico en esa situación."
    },
    {
      tipo: "h3",
      texto: "Compañeros Fuera de Combate"
    },
    {
      tipo: "parrafo",
      texto: "Fuera de combate, un compañero puede ser comandado para realizar tareas que serían normales para cualquier otra criatura de su tipo. Obedecen la orden automáticamente, siempre que hacerlo no ponga su vida en peligro inmediato. Durante una persecución, un compañero hace todo lo posible por seguir a su héroe y no necesita hacer pruebas de habilidad o tiradas de salvación para lidiar con las complicaciones. Cuando no se le da una orden, un compañero sigue a su héroe dondequiera que vaya lo mejor que puede."
    },
    {
      tipo: "h3",
      texto: "Compañeros Independientes"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un héroe está incapacitado o no está presente, su compañero actúa de acuerdo con sus propios instintos. El GM puede permitir que el jugador del personaje continúe controlando al compañero, o el GM puede controlar al compañero."
    },
    {
      tipo: "h2",
      texto: "Monturas en Combate"
    },
    {
      tipo: "parrafo",
      texto: "Luchar a caballo no es común en la era moderna, pero los caballos son impresionantes como vehículos todoterreno, y pueden proporcionar a los personajes una ventaja seria en una pelea cuando se necesita velocidad y movilidad adicionales."
    },
    {
      tipo: "parrafo",
      texto: "Solo una criatura específicamente entrenada para aceptar y ser dirigida por un jinete puede servir como montura. Los animales no entrenados de esta manera suelen atacar o huir si un personaje intenta montarlos."
    },
    {
      tipo: "parrafo",
      texto: "En combate, una montura se mueve y actúa en la iniciativa de su jinete. La montura se mueve según las indicaciones de su jinete, pero solo se le puede ordenar que realice la acción Correr, la acción Desengancharse o la acción Esquivar. Dirigir una montura de esta manera es una acción bonus para el jinete."
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente que realiza ataques a distancia desde una montura en movimiento (como desde un vehículo en movimiento) tiene desventaja en sus tiradas de ataque."
    },
    {
      tipo: "h2",
      texto: "Desafíos Ambientales"
    },
    {
      tipo: "parrafo",
      texto: "Caminar con dificultad por la nieve profunda y los vientos helados hacia la base secreta de un culto apocalíptico. Aguantar la respiración el tiempo suficiente para desactivar la bomba plantada bajo el muelle, y lidiar con los ataques del tiburón que te rodea. Caer de un tejado mientras buscas desesperadamente alguna forma de amortiguar tu caída. Los entornos peligrosos de todo tipo dan lugar a aventuras emocionantes, pero requieren reglas especiales."
    },
    {
      tipo: "h3",
      texto: "Caída"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un personaje cae una distancia superior a 10 pies, sufre 1d8 de daño contundente por cada 10 pies caídos al aterrizar. Si sufre algún daño por una caída, cae Prono. Dependiendo de las circunstancias, el GM podría permitir a un combatiente realizar una prueba de Fuerza (Atletismo) o Destreza (Acrobacias) para reducir el daño recibido por una caída, o para evitar todo el daño interactuando con el entorno para ralentizar o detener su descenso."
    },
    {
      tipo: "h3",
      texto: "Sofocación"
    },
    {
      tipo: "parrafo",
      texto: "Cualquier criatura que necesite respirar y se vea privada de aire está sujeta a la sofocación. Un héroe puede aguantar la respiración durante un número de minutos igual a su modificador de Constitución (mínimo 1 minuto). Una vez que se le acaba el aire, debe intentar una prueba de Constitución (Resistencia) de CD 15 al final de cada turno. Si falla la prueba, el personaje se reduce a 0 puntos de golpe, pero en lugar de realizar tiradas de salvación por muerte, debe intentar una tirada de salvación de Constitución de CD 15 al final de cada turno. Si falla tres tiradas de salvación antes de ser rescatado, muere inmediatamente."
    },
    {
      tipo: "h3",
      texto: "Visibilidad"
    },
    {
      tipo: "parrafo",
      texto: "El humo, la niebla y la falta de luz pueden afectar la visibilidad, al igual que cualquier efecto que cause una alteración suficiente en la visión de un personaje. En cualquier momento del juego, los personajes pueden experimentar buena visibilidad, poca visibilidad o ninguna visibilidad, con los efectos que se indican en la tabla siguiente."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-niveles-visibilidad",
      titulo: "Nivel de Visibilidad",
      encabezados: ["Nivel", "Descripción", "Efecto"],
      filas: [
        ["Buena visibilidad", "Buena iluminación y mínimas partículas", "Ninguno "],
        ["Poca visibilidad", "Niebla ligera, humo ligero, visión borrosa, iluminación tenue", "Desventaja en las pruebas de Sabiduría (Percepción) basadas en la vista; desventaja en los ataques a distancia más allá de 5 pies "],
        ["Sin visibilidad", "Niebla o humo denso, iluminación mínima o nula", "Los combatientes no pueden ver y están efectivamente Ciegos "]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Las gafas de visión nocturna y equipos similares permiten a los personajes superar la poca visibilidad debida a la iluminación tenue o la oscuridad, pero no a la niebla, el humo o efectos similares."
    },
    {
      tipo: "parrafo",
      texto: "El Capítulo 9 incluye información sobre atacar y ser atacado por oponentes no vistos."
    },
    {
      tipo: "h3",
      texto: "Deshidratación"
    },
    {
      tipo: "parrafo",
      texto: "Un ser humano necesita aproximadamente un galón de agua al día para mantenerse sano. Si un personaje bebe menos de medio galón de agua en 24 horas, debe superar una prueba de Constitución (Resistencia) de CD 15 o sufrir un nivel de Fatiga."
    },
    {
      tipo: "h3",
      texto: "Inanición"
    },
    {
      tipo: "parrafo",
      texto: "Un ser humano necesita aproximadamente una libra de comida al día para mantenerse sano. Un personaje puede pasar un número de días sin comida igual a 3 + su modificador de Constitución (mínimo 3 días). Al final de cada día subsiguiente, el personaje sufre un nivel de Fatiga hasta que pueda comer adecuadamente de nuevo."
    },
    {
      tipo: "h3",
      texto: "Combate Submarino"
    },
    {
      tipo: "parrafo",
      texto: "El combate submarino puede añadir un elemento de estrés y peligro a cualquier encuentro. Dicho esto, es difícil luchar mientras se nada para criaturas que no han nacido con aletas. Las criaturas que viven en el agua pueden luchar bajo el agua normalmente. Para todos los demás, se aplican las siguientes reglas:"
    },
    {
      tipo: "lista",
      items: [
        "Un atacante que use un arma cuerpo a cuerpo bajo el agua tiene desventaja en las tiradas de ataque a menos que el arma inflija daño perforante.",
        "Un combatiente tiene desventaja en las pruebas de Sabiduría (Percepción) realizadas bajo el agua.",
        "Las armas a distancia no se pueden usar bajo el agua a menos que tengan la propiedad acuática.",
        "Las armas y efectos que infligen daño de fuego no funcionan bajo el agua.",
        "Los combatientes tratan todo el movimiento en el agua o bajo el agua como movimiento difícil a menos que lleven aletas de natación o tengan un vehículo submarino."
      ]
    },
    {
      tipo: "h2",
      texto: "Esconderse y Buscar"
    },
    {
      tipo: "parrafo",
      texto: "Un combatiente puede intentar esconderse de otros realizando una prueba de Destreza (Sigilo). Hasta que un combatiente escondido sea revelado o decida dejar de esconderse, otra criatura que lo esté buscando activamente debe disputar la prueba del combatiente con una prueba de Sabiduría (Percepción). Una criatura que no esté buscando activamente, pero que el GM determine que podría detectar razonablemente al combatiente escondido dadas las circunstancias, tiene permitido una prueba de Percepción pasiva para descubrir al personaje escondido."
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
      tipo: "h2",
      texto: "Aplicando y Escapando de Sujeciones"
    },
    {
      tipo: "parrafo",
      texto: "Impedir que una criatura se mueva se puede lograr mediante el uso de ataduras. Un personaje que quiera aplicar ataduras a otro combatiente que no esté Incapacitado debe estar forcejeando con ese combatiente, o hacer que el combatiente se someta voluntariamente al proceso. Si una criatura está forcejeando, aplicar ataduras requiere una acción y una prueba de Fuerza (Atletismo) opuesta a la elección del objetivo de una prueba de Fuerza (Atletismo) o Destreza (Acrobacias). Un combatiente puede tener sus extremidades atadas, puede tener una extremidad unida a un objeto cercano, o ambas cosas, dependiendo del tipo de ataduras utilizadas."
    },
    {
      tipo: "parrafo",
      texto: "Una vez sujeto por las sujeciones, un personaje tiene la condición Restringido. El personaje puede intentar escapar usando una acción y una prueba de Fuerza (Atletismo) exitosa para romper las sujeciones, una prueba de Destreza (Juego de Manos) para deslizarse fuera de las sujeciones, o una prueba de Inteligencia (Seguridad) para superar las sujeciones mediante forzar la cerradura o algún otro medio ingenioso."
    },
    {
      tipo: "h2",
      texto: "Ocultando Objetos"
    },
    {
      tipo: "parrafo",
      texto: "Muchas situaciones pueden inspirar a un personaje a querer esconder algo en su persona. Esconder un arma a la vista del público es uno de esos escenarios, pero muchos otros objetos a veces necesitan ser escondidos de criminales o autoridades. Cuando se oculta un objeto, un personaje intenta dificultar su localización, ya sea mediante una observación casual o una búsqueda cuidadosa. Por ejemplo, dejar caer rápidamente una pistola en una mochila no la esconde realmente, ya que cualquiera que abra la mochila puede verla. Ocultar correctamente la pistola requiere asegurarla en la mochila para que alguien que la mire no encuentre el arma. Del mismo modo, un personaje que oculta un arma en su persona requiere que ni una persona que mire intensamente al personaje ni una que lo palpe casualmente la noten. "
    },
    {
      tipo: "parrafo",
      texto: "Un personaje puede realizar una prueba para ocultar un objeto cuando lo intenta activamente, o la primera vez que surge una situación en la que la ocultación importa. Este último caso asume que el personaje tuvo una oportunidad previa de ocultar el objeto."
    },
    {
      tipo: "parrafo",
      texto: "Solo los objetos con un bulto de 2 o menos pueden ocultarse razonablemente en un personaje. Los objetos más grandes se pueden esconder en una habitación o vehículo. La ropa que usa un personaje también influye en la determinación de lo que pueden ocultar."
    },
    {
      tipo: "h3",
      texto: "Ocultación de Equipo"
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-ocultacion-equipo",
      titulo: "Ocultación de Equipo",
      encabezados: ["Nivel de Bulto", "Ropa Necesaria"],
      filas: [
        ["0", "Cualquier ropa "],
        ["1", "Chaqueta, sudadera con capucha u otra ropa holgada. "],
        ["2", "Gabardina, abrigo de invierno, capa o ropa similar que oculte y sea voluminosa "]
      ]
    },
    {
      tipo: "h2",
      texto: "Rompiendo Cosas"
    },
    {
      tipo: "parrafo",
      texto: "Llega un momento en la vida de casi todo héroe en el que simplemente necesitan romper algo. Ya sea volando cosas con explosivos, abriendo una puerta de una patada o atravesando una puerta de seguridad en un SUV, a veces sienta bien resolver un problema usando la fuerza bruta."
    },
    {
      tipo: "h3",
      texto: "Valor de Armadura y Valor de Penetración"
    },
    {
      tipo: "parrafo",
      texto: "El Valor de Armadura (VA) y el Valor de Penetración (VP) se utilizan en Everyday Heroes para representar la dureza de los objetos y la capacidad de las armas para romperlos. Entran en juego durante el combate cuando hay armaduras o coberturas implicadas, y cuando los personajes necesitan destruir objetos de diversos tipos. El Valor de Armadura siempre se compara con el Valor de Penetración, con tres resultados generales:"
    },
    {
      tipo: "lista",
      items: [
        "Si el Valor de Armadura de un objeto es mayor que el Valor de Penetración del ataque o efecto que lo ataca, el objeto no sufre daños por el ataque y bloquea el paso de los ataques a través de él.",
        "Si el Valor de Armadura de un objeto es menor que el Valor de Penetración de un ataque o efecto, el objeto es destruido o penetrado por el ataque, y el ataque puede atravesar eficazmente el objeto.",
        "Si el Valor de Armadura y el Valor de Penetración son iguales, el ataque o efecto tarda 10 minutos o más en destruir el objeto, tiempo durante el cual el objeto bloquea el paso de los ataques a través de él."
      ]
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Valor de Armadura y Penetración",
      texto: "Katie Paige ha cerrado y bloqueado la puerta del baño de un hotel para escapar de Madsaw Max, pero Max decide usar su motosierra para destruir la puerta. La motosierra tiene un Valor de Penetración de 2, que es más que el Valor de Armadura de 1 de la puerta interior. Madsaw ataca la puerta y la hace pedazos. ¡Katie necesita un plan B! "
    },
    {
      tipo: "parrafo",
      texto: "En muchos casos, ciertos objetos están específicamente diseñados para destruir otros objetos. Por ejemplo, una motosierra está hecha para cortar árboles y un soplete para cortar acero. Dichas herramientas suelen ser demasiado lentas para el combate, pero pueden cortar los materiales para los que fueron diseñadas, independientemente de los Valores de Armadura y Penetración."
    },
    {
      tipo: "h3",
      texto: "Valores de Armadura de los Materiales"
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-valores-armadura-materiales-detallado",
      titulo: "Valores de Armadura de los Materiales",
      encabezados: ["Material", "Valor de Armadura"],
      filas: [
        ["Cristal, tela divisoria", "0 "],
        ["Paredes interiores ligeras, puerta de núcleo hueco, muebles tapizados, muebles de madera contrachapada, cristal reforzado", "1 "],
        ["Puerta de metal, pared exterior, mesa de madera gruesa, cristal antibalas, chapa metálica, puerta y exterior de coche", "2 "],
        ["Muro de ladrillo, sacos de arena, tronco de árbol, blindaje ligero", "3 "],
        ["Bloque de motor, muro de hormigón, blindaje pesado", "4 "],
        ["Búnker de tierra, blindaje de acorazado, muro de piedra macizo", "5 "]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Aunque no se consideran un material protector como tal, las personas tienen un Valor de Armadura de 2 al determinar qué tipo de cobertura proporcionan."
    },
    {
      tipo: "h3",
      texto: "Abriendo Puertas a Patadas"
    },
    {
      tipo: "parrafo",
      texto: "Abrir una puerta a patadas requiere una prueba de Fuerza (Atletismo). La CD de la prueba varía según la dureza de la puerta y la cerradura, según determine el GM. Romper una puerta interior con una patada puede ser una prueba fácil de CD 10, mientras que romper una puerta principal típica de una casa es probablemente una prueba difícil de CD 20."
    },
    {
      tipo: "h2",
      texto: "Trampas"
    },
    {
      tipo: "parrafo",
      texto: "Los personajes que saben que el enemigo viene a por ellos necesitan todas las ventajas defensivas posibles. Es entonces cuando colocar trampas y alarmas se convierte en una habilidad muy útil. Del mismo modo, para los personajes a la ofensiva que saben que sus enemigos han puesto trampas en cada centímetro de su posición, saber cómo detectar y desactivar trampas y alarmas se vuelve esencial para el éxito."
    },
    {
      tipo: "parrafo",
      texto: "Las trampas incluyen alarmas y dispositivos similares. Las reglas para las trampas son asimétricas, lo que significa que las trampas que los personajes colocan y las trampas con las que se encuentran los personajes son diferentes. Esto ayuda a mantener el foco del juego en lo que hacen los personajes, no en lo que hacen sus oponentes."
    },
    {
      tipo: "h3",
      texto: "Colocando Trampas"
    },
    {
      tipo: "parrafo",
      texto: "La prueba de habilidad más común utilizada para colocar trampas es Inteligencia (Seguridad). Los personajes pueden usar esa prueba para cualquier tipo de trampa o alarma que quieran montar. También se puede usar una prueba de Sabiduría (Supervivencia) para colocar trampas y alarmas, pero solo en un entorno salvaje. Un personaje no necesita ser competente en esas pruebas para colocar trampas, pero ciertamente ayuda."
    },
    {
      tipo: "parrafo",
      texto: "El proceso de un personaje colocando una trampa comienza con una descripción del tipo de trampa que quiere colocar. Los jugadores pueden usar las trampas de ejemplo de esta sección o describir una trampa única que quieran que su personaje fabrique, con el GM finalizando los efectos de la trampa y la CD para colocarla. Colocar una trampa con éxito requiere los materiales apropiados y el tiempo necesario."
    },
    {
      tipo: "parrafo",
      texto: "Un personaje que coloca una trampa realiza la prueba de habilidad que cubre esa colocación solo cuando la trampa tiene la oportunidad de ser activada por un objetivo, no cuando la trampa está colocada. El GM notifica al jugador cuando debe realizar la prueba de su personaje, con la prueba de Inteligencia (Seguridad) o Sabiduría (Supervivencia) realizada contra la CD para colocar la trampa. Si tiene éxito, la trampa funciona como se esperaba. Si falla, la trampa no funciona correctamente o la víctima prevista la evade y ya no representa una amenaza."
    },
    {
      tipo: "h3",
      texto: "Detectando Trampas"
    },
    {
      tipo: "parrafo",
      texto: "Los personajes pueden detectar trampas de dos maneras: pasiva o activamente. La detección pasiva utiliza la prueba de Percepción pasiva de un personaje contra la CD para detectar la trampa. El GM inicia las pruebas de habilidad pasivas, pero los jugadores pueden querer recordar al GM el modificador de Percepción pasiva de sus personajes si creen que podría haber trampas alrededor. Alternativamente, ciertos escenarios podrían permitir a los personajes simplemente interpretar la búsqueda de trampas diciéndole al GM exactamente dónde están buscando y qué están buscando. Basándose en la perspicacia del personaje y la ubicación de una posible trampa, el GM puede decidir si la búsqueda la encuentra o no."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Detección Pasiva de Trampas",
      texto: "Kat Whitlock está explorando un almacén abandonado en busca de pruebas de tráfico de personas. Siendo la brillante detective que es, su prueba de Percepción pasiva es 15. Una trampa para osos escondida en la oscuridad para atrapar a los fisgones no deseados como Kat tiene una CD de 13 para detectarla. El GM le dice a Kat que puede ver la peligrosa trampa para osos escondida en las sombras. "
    },
    {
      tipo: "parrafo",
      texto: "La detección activa se puede manejar de dos maneras. El GM puede pedir a un personaje que realice una prueba de Inteligencia (Seguridad) o Sabiduría (Percepción) (generalmente a elección del jugador) para buscar trampas en un área. La CD para detectar la trampa determina lo difícil que es encontrarla, y la prueba solo se puede realizar una vez. Si la trampa se detecta, el GM describe lo que ha encontrado el personaje."
    },
    {
      tipo: "parrafo",
      texto: "Alternativamente, ciertos escenarios pueden permitir a los personajes simplemente interpretar la búsqueda de trampas diciéndole al GM exactamente dónde están buscando y qué están buscando. Basándose en la perspicacia del personaje y la ubicación de una posible trampa, el GM puede decidir si la búsqueda la encuentra o no."
    },
    {
      tipo: "h3",
      texto: "Lidiando con Trampas"
    },
    {
      tipo: "parrafo",
      texto: "Una vez que un personaje encuentra una trampa, necesita decidir qué hacer al respecto, típicamente analizándola primero, luego evadiéndola o desactivándola de alguna manera. Todas estas actividades se pueden manejar mediante el juego de rol o pruebas de habilidad. Analizar una trampa implica típicamente realizar una prueba de Inteligencia (Seguridad) contra la CD para desactivar la trampa. Si tiene éxito, el GM describe la trampa en detalle, incluyendo cómo se activa y qué sucede cuando lo hace. Si falla, un personaje solo sabe lo que el GM ya ha revelado sobre la trampa."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Análisis de Trampa",
      texto: "Mel Stackhouse ha descubierto que una silla reclinable en su habitación de hotel tiene explosivos C-4 atados a la parte inferior. Observa de cerca y con cuidado, realizando una prueba de Inteligencia (Seguridad) de CD 15, que refleja la dificultad para desactivar la trampa. El resultado es 22, por lo que el GM explica que alguien ha manipulado el C-4 con un acelerómetro que detonará los explosivos si la silla se mueve de alguna manera. "
    },
    {
      tipo: "h4",
      texto: "Desactivando una Trampa"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje puede desactivar una trampa realizando una prueba de Inteligencia (Seguridad) contra la CD apropiada. Si tiene éxito, la trampa se desactiva de forma segura. Si falla, la trampa se activa. Un personaje que primero tiene éxito en analizar una trampa tiene ventaja en la prueba para desactivarla."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Desactivación de Trampa",
      texto: "Conociendo la configuración del explosivo en su habitación, Mel —una experta en dispositivos de seguridad— decide desarmarlo. Su cuidadoso examen le otorga ventaja en su prueba de Inteligencia (Seguridad) de CD 15, y el resultado de 15 es justo suficiente. Sudando después de la situación peligrosa, desactiva el mecanismo de activación del acelerómetro y recupera los explosivos. "
    },
    {
      tipo: "parrafo",
      texto: "Los héroes también pueden usar el juego de rol para ayudar a desactivar una trampa, pidiendo al jugador que le diga al GM exactamente qué plan tiene su personaje para hacerlo. Si el GM cree que la idea es buena, podría otorgar ventaja en la prueba para desactivar la trampa, o permitir que el intento tenga éxito automáticamente."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Desactivación de Trampa Mediante Roleplay",
      texto: "Daxx encontró un cable trampa en una puerta y ve una escopeta atornillada a la mesa de la cocina claramente visible al otro lado de la habitación. El jugador de Daxx le dice al GM que Daxx quiere cortar cuidadosamente el cable trampa, haciendo una suposición fundamentada sobre la configuración de la trampa. Después de una pausa dramática, el GM informa que no sucede nada, y la trampa ha sido desactivada. "
    },
    {
      tipo: "parrafo",
      texto: "Algunas trampas se pueden desactivar eficazmente activándolas de una manera que no ponga en peligro a nadie."
    },
    {
      tipo: "h4",
      texto: "Evitando Trampas"
    },
    {
      tipo: "parrafo",
      texto: "Especialmente para las trampas que no se pueden analizar correctamente, la mejor opción a veces es simplemente evitar la trampa. Hacerlo puede ser tan fácil como caminar alrededor de una placa de presión, pasar por encima de un cable trampa o llamar a profesionales para que se encarguen de una trampa."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Evitar Trampas",
      texto: "Si Mel hubiera decidido que lidiar con una silla reclinable que explota no era su estilo, podría haber llamado a la recepción y pedirles que llamaran al escuadrón antiexplosivos. Mientras nadie más moleste la trampa, Mel puede evitarla fácilmente mientras espera que alguien más se encargue. "
    },
    {
      tipo: "parrafo",
      texto: "Otras trampas pueden requerir que los personajes esquiven uno o más mecanismos de activación en el área alrededor de la trampa. Generalmente, los jugadores le dicen al GM lo que quieren que hagan sus personajes para evitar la trampa, y el GM les informa si es necesaria una prueba de habilidad y cuán difícil es esa prueba."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Evitar Trampas con Prueba de Habilidad",
      texto: "Daxx descubre que un pasillo está lleno de agujeros ocultos, cada uno con dardos listos para disparar a cualquiera que pase por ellos. Daxx decide que va a correr por el pasillo y esperar lo mejor. El GM solicita una prueba de Fuerza (Atletismo) de CD 15 para ver si esta estrategia funciona. "
    },
    {
      tipo: "h3",
      texto: "Trampas de Ejemplo"
    },
    {
      tipo: "parrafo",
      texto: "Esta sección resume una serie de trampas comunes con las que los héroes pueden encontrarse o utilizar."
    },
    {
      tipo: "h4",
      texto: "Caltrops"
    },
    {
      tipo: "parrafo",
      texto: "Los abrojos son pequeños objetos metálicos con tres o cuatro púas, una de las cuales siempre apunta hacia arriba. Se utilizan para herir pies o destrozar neumáticos cuando se lanzan al paso de los enemigos."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Abrojos (10 o más)."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "1 acción."
        },
        {
          termino: "Efecto",
          definicion: "1d4 de daño perforante a las criaturas. Los vehículos terrestres con neumáticos de Valor de Armadura 1 sufren un pinchazo, y el vehículo corre el riesgo de estrellarse."
        },
        {
          termino: "Dificultad",
          definicion: "CD 5 para colocar, CD 15 para detectar, CD 10 para desactivar*."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "*Durante una persecución, los personajes a pie pueden realizar pruebas de Destreza (Acrobacias), y los conductores pueden realizar pruebas de Destreza (Vehículos), para evitar los abrojos si son detectados."
    },
    {
      tipo: "h4",
      texto: "Sistema de Alarma de Puertas y Ventanas"
    },
    {
      tipo: "parrafo",
      texto: "Un sistema electrónico de alarma que consta de una serie de pequeños sensores remotos colocados en las puertas y ventanas de un edificio. Al abrir las puertas o ventanas mientras el sistema está activado, se activan los sensores y se dispara una alarma silenciosa central."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Sistema de alarma silencioso."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "10 minutos por entrada."
        },
        {
          termino: "Efecto",
          definicion: "La alarma se activa, alertando a cualquiera que la esté monitoreando."
        },
        {
          termino: "Dificultad",
          definicion: "CD 10 para colocar, CD 15 para detectar, CD 15 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Arma de Puerta"
    },
    {
      tipo: "parrafo",
      texto: "Una escopeta está preparada para apuntar a una puerta, a la que está conectada por un simple cable de tracción. Cuando la puerta se abre desde el otro lado, el arma invisible dispara."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Escopeta (u otra arma de fuego), cuerda, cinta o abrazadera."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "10 minutos."
        },
        {
          termino: "Efecto",
          definicion: "La escopeta dispara, infligiendo 2d6 de daño balístico con Valor de Penetración 3 a cualquiera en la entrada."
        },
        {
          termino: "Dificultad",
          definicion: "CD 13 para colocar, CD 20 para detectar,* CD 5 para desactivar."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "*Para detectar la trampa desde el otro lado de la puerta. Si se encuentra dentro de la puerta, la trampa se descubre automáticamente."
    },
    {
      tipo: "h4",
      texto: "Trampa Explosiva"
    },
    {
      tipo: "parrafo",
      texto: "Una trampa explosiva suele estar compuesta por una cantidad de explosivos con un mecanismo de activación eléctrico. Los activadores varían, pero pueden incluir acelerómetros, detectores de proximidad, sensores de sonido y temporizadores."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Explosivos, kit de electrónica."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "2 horas."
        },
        {
          termino: "Efecto",
          definicion: "Si se cumple la condición de activación, el explosivo detona. El daño depende del explosivo utilizado (consulta el Capítulo 6)."
        },
        {
          termino: "Dificultad",
          definicion: "CD 20 para colocar, CD 20 para detectar, CD 20 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Lazos de Caza"
    },
    {
      tipo: "parrafo",
      texto: "Los lazos de caza incluyen una variedad de trampas diseñadas para atrapar o matar animales pequeños. Son ineficaces contra personas, pero útiles para la supervivencia en la naturaleza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Cuerda, palos, alambre, herramienta de corte."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "10 minutos."
        },
        {
          termino: "Efecto",
          definicion: "Los animales pequeños son atrapados vivos o sufren 1d4 de daño contundente, dependiendo de la intención de la trampa."
        },
        {
          termino: "Dificultad",
          definicion: "CD 15 para colocar, CD 15 para detectar, CD 5 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Mina Terrestre"
    },
    {
      tipo: "parrafo",
      texto: "Las minas terrestres existen en diferentes variedades y están diseñadas para ser colocadas bajo una fina capa de tierra, arena u otros materiales sueltos. Se activan cuando alguien las pisa o se acerca a ellas, y son extremadamente peligrosas."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Mina terrestre."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "5 minutos."
        },
        {
          termino: "Efecto",
          definicion: "La mina explota, infligiendo daño según el tipo de mina (consulta el Capítulo 6)."
        },
        {
          termino: "Dificultad",
          definicion: "CD 5 para colocar, CD 20 para detectar, CD 15 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Trampa de Clavos"
    },
    {
      tipo: "parrafo",
      texto: "Una trampa de clavos es un tablero o similar con una serie de clavos clavados en él para que sobresalgan por el otro lado. La trampa se esconde en un lugar donde es probable que un objetivo la pise o se siente en ella."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Clavos, tabla, martillo."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "5 minutos."
        },
        {
          termino: "Efecto",
          definicion: "Un objetivo que pisa o se sienta en la trampa recibe 1d4 de daño perforante con Valor de Penetración 1."
        },
        {
          termino: "Dificultad",
          definicion: "CD 10 para colocar, CD 15 para detectar, CD 5 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Trampa de Cartucho"
    },
    {
      tipo: "parrafo",
      texto: "Las trampas de cartucho utilizan un cable trampa conectado a un pequeño gatillo de resorte que dispara un cartucho de escopeta. Se pueden usar con cartuchos de fogueo para crear una alarma ruidosa, o con un cartucho real para herir o matar intrusos. Si se dirigen a criaturas, la trampa debe estar cerca de los objetivos, ya que no es precisa. El cable trampa se puede tender a través de una abertura o atar a un objeto que pueda moverse."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Trampa de cartucho; o resorte, herramientas de mecánico, un trozo de cuerda, cinta, cartucho de escopeta."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "10 minutos."
        },
        {
          termino: "Efecto",
          definicion: "La trampa se activa, haciendo un ruido fuerte. Si se usa un cartucho real, cada objetivo a menos de 10 pies y en la línea de fuego recibe 2d6 de daño balístico con Valor de Penetración 3."
        },
        {
          termino: "Dificultad",
          definicion: "CD 15 para colocar, CD 15 para detectar, CD 10 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Foso con Estacas"
    },
    {
      tipo: "parrafo",
      texto: "Se excava un foso profundo en un entorno salvaje y se colocan estacas de madera afiladas en el fondo. Luego, la abertura se cubre con escombros del terreno circundante."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Pala, herramienta de corte, palos, maleza."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "6 horas."
        },
        {
          termino: "Efecto",
          definicion: "La primera víctima que encuentre el foso sin darse cuenta cae en él, sufriendo 2d6 de daño perforante por la caída sobre las estacas afiladas. La víctima sufre la mitad de daño con una tirada de salvación de Destreza de CD 15 exitosa."
        },
        {
          termino: "Dificultad",
          definicion: "CD 15 para colocar, CD 13 para detectar, CD 5 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Trampa de Mandíbula de Acero"
    },
    {
      tipo: "parrafo",
      texto: "Las trampas de mandíbula de acero, a menudo llamadas trampas para osos, consisten en dientes de acero accionados por resorte que se cierran cuando se presiona o tira del gatillo en el centro de la trampa. Las mandíbulas están destinadas a sujetar el brazo o la pierna de un animal en la trampa, así como a herirlo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Trampa de mandíbula de acero."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "5 minutos."
        },
        {
          termino: "Efecto",
          definicion: "La víctima sufre 1d8 de daño cortante de la trampa y queda Restringida. Se necesita una acción y una prueba de Fuerza (Atletismo) de CD 12 exitosa para abrir la trampa y permitir que un objetivo escape."
        },
        {
          termino: "Dificultad",
          definicion: "CD 13 para colocar, CD 13 para detectar, CD 5 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Alarma de Cable Trampa"
    },
    {
      tipo: "parrafo",
      texto: "Se tiende un cable trampa a través de una entrada o camino para que cualquiera que camine por la zona pueda activarlo. El cable trampa está conectado a uno o varios objetos que caen haciendo ruido para activar la alarma."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Cuerda o alambre, algo que haga ruido al caer."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "5 minutos."
        },
        {
          termino: "Efecto",
          definicion: "La alarma hace un ruido fuerte que se escucha fácilmente en las cercanías."
        },
        {
          termino: "Dificultad",
          definicion: "CD 13 para colocar, CD 13 para detectar, CD 5 para desactivar."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Trampa de Tropezón"
    },
    {
      tipo: "parrafo",
      texto: "Un cable o cuerda resistente se ata entre dos anclajes a lo largo de un camino probable, haciendo tropezar a los desprevenidos. Alternativamente, rodamientos de bolas u otros materiales resbaladizos podrían ocultarse a lo largo de un camino para lograr un efecto similar."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Materiales",
          definicion: "Una longitud de cable o cuerda, puntos de anclaje sólidos; o materiales resbaladizos."
        },
        {
          termino: "Tiempo de Preparación",
          definicion: "10 minutos."
        },
        {
          termino: "Efecto",
          definicion: "Cualquiera que corra por el área sin ser consciente de la trampa debe superar una tirada de salvación de Destreza de CD 15 o sufrir 1d4 de daño contundente y caer Prono."
        },
        {
          termino: "Dificultad",
          definicion: "CD 10 para colocar, CD 13 para detectar, CD 5 para desactivar."
        }
      ]
    }
  ]
};
export default capitulo10;