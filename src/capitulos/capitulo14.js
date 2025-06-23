const capitulo14 = {
  id: "capitulo-14",
  titulo: "Capítulo 14: Creando Aventuras",
  numero: 14,
  contenido: [
    {
      tipo: "introduccion",
      texto: "Además de dirigir la partida, el GM también determina el tema y el contenido de la partida. Puedes usar aventuras publicadas y ahorrarte algo de trabajo, o puedes crear tus propias aventuras, o cualquier combinación de ambas. Y siempre puedes empezar con una aventura publicada y modificarla para que se adapte a tus necesidades."
    },
    {
      tipo: "h2",
      texto: "Duración"
    },
    {
      tipo: "parrafo",
      texto: "Al crear una aventura, es importante decidir el tipo de partida que quieres dirigir para poder ajustar el ritmo de la historia adecuadamente. La mayoría de las partidas se dividen en una de estas tres categorías: una partida única, una aventura única o una campaña."
    },
    {
      tipo: "h3",
      texto: "Partida Única"
    },
    {
      tipo: "parrafo",
      texto: "Una partida única suele requerir una sola sesión para jugarse. Este tipo de aventuras son rápidas y concisas, ofreciendo una experiencia de historia completa en una sola noche de juego. Son buenas para introducir el juego a nuevos jugadores y funcionan muy bien en convenciones."
    },
    {
      tipo: "lista",
      items: [
        "**Ritmo Rápido.** Cuando dirijas una partida única, mantén la acción en movimiento rápidamente y asegúrate de que cada encuentro sea importante. Ritmo como una película. No tendrás tiempo para profundizar demasiado en subtramas o contenido opcional. Dos o tres secuencias de acción intercaladas con algunas escenas menos intensas suelen ser suficientes para una sola sesión de juego.",
        "**Personajes Pre-generados.** A menos que tengas tiempo extra, normalmente es mejor tener los personajes listos antes de la partida. Puedes crear estos personajes tú mismo y entregárselos a los jugadores al principio si tienes personajes específicos en mente para la trama o si no podrás reunirte con los jugadores antes de la partida.",
        "**Descansos e Hitos.** Una partida única no incluirá ningún descanso prolongado, pero algunos personajes funcionan mejor si pueden tomar descansos cortos de vez en cuando, así que intenta incluir uno o dos puntos en los que los descansos cortos sean posibles. Las partidas únicas no requieren hitos."
      ]
    },
    {
      tipo: "h3",
      texto: "Aventura Única"
    },
    {
      tipo: "parrafo",
      texto: "Una única aventura larga que no se puede completar en una sola sesión debe desarrollarse a lo largo de varias sesiones de juego. Y, dado que tienen más espacio para que la historia se desarrolle, puedes intentar narrativas más complejas. Las aventuras únicas te permiten probar diferentes géneros y personajes, ya que, aunque son más largas que una partida única, siguen teniendo un punto final distinto y suelen ser auto-contenidas. Si más de una persona en tu grupo de juego quiere probar a ser GM, incluso podéis turnaros en el papel con cada nueva aventura."
    },
    {
      tipo: "lista",
      items: [
        "**Trama Concisa.** Una aventura única tiene tiempo para desarrollar subtramas y explorar contenido opcional, pero ten en cuenta que todo lo que introduzcas debe terminar bien al final.",
        "**Descansos e Hitos.** Una aventura única puede incluir o no descansos prolongados o hitos. Las aventuras más cortas no necesitan ninguno, mientras que las más largas pueden tener lugar a lo largo de varios días de juego e incluir uno o dos aumentos de nivel."
      ]
    },
    {
      tipo: "h3",
      texto: "Campaña"
    },
    {
      tipo: "parrafo",
      texto: "Una campaña consiste en una serie de aventuras conectadas, utilizando los mismos héroes a lo largo de toda la historia. Los personajes progresan a través de una gran historia conectada, o interpretan a sus personajes a través de una serie de tramas episódicas en el mismo escenario. Alcanzarán una serie de hitos y subirán de nivel varias veces a lo largo del camino. ¡Una campaña larga incluso podría ver a los personajes avanzar del nivel 1 al 10! Las campañas más cortas también funcionan bien. Todo es cuestión de cómo tú y tu grupo queráis jugar. Las campañas funcionan mejor cuando tienes un grupo de jugadores fiable con personajes que quieren jugar y avanzar a lo largo de varios niveles."
    },
    {
      tipo: "lista",
      items: [
        "**Trama Compleja.** Durante una campaña, tienes espacio para introducir más giros y conceptos. Puedes establecer tramas que solo se resolverán mucho más adelante y hay mucho espacio para explorar subtramas y profundizar en los objetivos personales de los personajes.",
        "**Reemplazo de Personajes.** Una campaña también tiene espacio para introducir nuevos personajes más fácilmente. Un jugador podría cambiar de personaje una vez que su arco actual esté completo, y hay más tiempo para conocer nuevos personajes si los antiguos mueren. Dicho esto, la muerte de un personaje en una historia más larga tiene un impacto mucho mayor, ya que se ha invertido mucho tiempo en cada uno de ellos. Considera alternativas a la muerte de personajes si morir fuera anticlimático.",
        "**Descansos e Hitos.** El número de descansos prolongados que los jugadores pueden tomar durante cada aventura en una campaña varía. Puedes incluir hitos dentro de aventuras más largas, pero el mejor momento para los hitos es entre aventuras."
      ]
    },
    {
      tipo: "h2",
      texto: "Nivel de Aventura"
    },
    {
      tipo: "parrafo",
      texto: "La mayoría de las aventuras están diseñadas con un nivel de héroe o un rango de niveles de héroe en mente. Los encuentros de combate y los encuentros no de combate presentan a los héroes un desafío, pero no uno abrumador. Si los héroes son de un nivel superior o inferior al diseñado para la aventura, puede que les resulte demasiado fácil o demasiado difícil. Normalmente, un héroe dentro de un nivel o el mismo nivel que una aventura debería funcionar bien. Cuanto más lejos esté la marca, más probable es que la aventura tal como está diseñada presente problemas."
    },
    {
      tipo: "parrafo",
      texto: "Asumimos que los héroes del mismo equipo tendrán el mismo nivel. Sin embargo, eso no es una regla fija. Héroes de cualquier nivel pueden formar equipo, pero esto presenta desafíos para el GM y la historia. Los héroes de nivel superior definitivamente eclipsarán a sus aliados de nivel inferior, y los héroes de nivel inferior podrían caer rápidamente en combate. Siempre que todos entiendan la situación y los riesgos y estén de acuerdo, inténtalo."
    },
    {
      tipo: "parrafo",
      texto: "Las reglas de hito limitan qué héroes pueden ganar un nivel en un hito. Esta regla fue diseñada para el juego organizado, pero tiene sentido que si una aventura no presenta mucho desafío para un héroe de alto nivel, completarla no ofrecería una oportunidad de avance. También sirve como un medio para que los héroes de nivel inferior en un equipo mixto se pongan al día rápidamente con sus compañeros más experimentados."
    },
    {
      tipo: "h2",
      texto: "Historia"
    },
    {
      tipo: "parrafo",
      texto: "Hay muchas maneras de crear historias para aventuras, pero aquí hay algunos consejos básicos. Primero, crea una historia que te entusiasme y que realmente te dé ganas de dirigirla para tus amigos. Segundo, recuerda que, aunque tú establezcas la trama de la historia, los héroes son los personajes más importantes de la historia, y sus jugadores participarán en cómo se desarrolla la historia. No importa cómo más abordes la creación de tu historia, si tienes en cuenta estas dos cosas, todos se divertirán con la aventura."
    },
    {
      tipo: "parrafo",
      texto: "Ahora profundicemos en algunos de los aspectos generales de la creación de una emocionante historia de aventura de juego de rol."
    },
    {
      tipo: "h3",
      texto: "Conflicto"
    },
    {
      tipo: "parrafo",
      texto: "Las historias necesitan conflicto. El arco de la historia es el arco del conflicto. Al principio, los personajes descubren cuál es el conflicto. En el medio, se involucran a medida que el conflicto se desarrolla. Al final, ayudan a resolver el conflicto."
    },
    {
      tipo: "parrafo",
      texto: "El conflicto puede adoptar muchas formas. Puede ser una lucha física como el combate, puede ser una lucha emocional como encontrarle sentido a la vida, puede ser una lucha moral entre lo que quieres y lo que es correcto, o puede ser una lucha metafísica sobre la naturaleza de la realidad. El conflicto central de una historia suele dar lugar a muchos conflictos más pequeños a lo largo del camino."
    },
    {
      tipo: "parrafo",
      texto: "Cada evento y personaje que planifiques debería, idealmente, tener algún lugar o significado en el conflicto. También es esencial que el conflicto llegue a una resolución y que esta resolución tenga significado para los héroes."
    },
    {
      tipo: "h4",
      texto: "Elementos del Conflicto"
    },
    {
      tipo: "parrafo",
      texto: "Tres elementos clásicos del conflicto dentro de una historia son los protagonistas, los antagonistas y el escenario. Al ser consciente de estos elementos esenciales, puedes crear historias sólidas y evitar escollos comunes."
    },
    {
      tipo: "lista",
      items: [
        "**Protagonista.** En un juego de rol, los héroes deben ser los protagonistas de la historia. Aunque los objetivos provengan de un PNJ o de la circunstancia de la aventura, los héroes participan en el conflicto en su nombre y lo impulsan hacia su resolución.",
        "**Antagonista.** Los antagonistas pueden ser variados. Los antagonistas pueden incluir personas, criaturas, sentimientos o incluso ideas. Todo lo que impide al protagonista alcanzar sus objetivos es un antagonista. En el caso de un villano clásico, tiene su propia agenda. En el caso de una historia de supervivencia, la naturaleza se convierte en el antagonista, amenazando a los héroes sin propósito, pero creando conflicto de todos modos.",
        "**Escenario.** Finalmente, el escenario presenta las circunstancias neutrales en las que se desarrolla la historia. Tanto el protagonista como el antagonista pueden usar el escenario a su favor en el conflicto. Si el escenario beneficia claramente a un lado o al otro, se convierte en una extensión de ese lado. Así, el arma brillante que posee el héroe es parte del héroe, y la fortaleza oculta del genio maligno se convierte en una extensión de la voluntad de su amo. En un juego de rol, incluso las reglas del juego son parte del escenario."
      ]
    },
    {
      tipo: "h4",
      texto: "Fuentes de Conflicto"
    },
    {
      tipo: "parrafo",
      texto: "El conflicto puede surgir de muchas circunstancias diferentes. Las historias a menudo resuenan con su audiencia al reflejar los tipos de conflictos que experimentan o que pueden imaginar fácilmente. Incluso si las circunstancias son muy diferentes, si el conflicto es relatable, dará lugar a una historia más atractiva."
    },
    {
      tipo: "parrafo",
      texto: "Los protagonistas deben..."
    },
    {
      tipo: "lista",
      items: [
        "detener las ambiciones de un antagonista codicioso.",
        "superar a un enemigo implacable empeñado en su destrucción.",
        "sobrevivir a la dureza de la naturaleza.",
        "lograr su objetivo antes de que sus rivales hagan lo mismo.",
        "evitar la corrupción a medida que su poder aumenta.",
        "cambiar las creencias de los demás para evitar el desastre.",
        "encontrar algo que se ha perdido con el tiempo.",
        "correr contra el reloj para lograr un objetivo.",
        "defender a alguien vulnerable de un atacante.",
        "resolver un misterio a pesar de quienes intentan ocultar la verdad.",
        "tomar decisiones morales en circunstancias difíciles."
      ]
    },
    {
      tipo: "h4",
      texto: "Historias Dirigidas por el GM vs. por el Jugador"
    },
    {
      tipo: "parrafo",
      texto: "En una historia dirigida por el GM, el Game Master dirige una aventura publicada o crea la suya propia. La aventura tiene un principio, un nudo y un desenlace planificados donde los héroes reciben un objetivo claro y lo resuelven a lo largo de la historia. Aunque la trama probablemente variará debido a las acciones de los héroes, la historia central probablemente no lo hará."
    },
    {
      tipo: "parrafo",
      texto: "En una historia impulsada por el jugador, el Game Master construye los eventos en torno a las motivaciones expresadas por los jugadores. Estos objetivos del jugador informan el conflicto central en el que se basa la historia, y es el GM quien proporciona resistencia a estos objetivos, así como oportunidades para lograrlos en última instancia. Este tipo de juego requiere flexibilidad por parte del Game Master, así como la capacidad de improvisar conflictos y tramas."
    },
    {
      tipo: "parrafo",
      texto: "Piensa en estas dos ideas como un espectro. Ninguna historia de juego de rol va a ser completamente de una manera u otra, pero inclinarse en una dirección sí influye en el papel que el GM y los jugadores asumen a medida que se desarrolla. Ambos estilos pueden ser divertidos. Los jugadores y los Game Masters tendrán sus propias preferencias sobre qué estilo prefieren y en qué medida lo prefieren. Descubrir tu mezcla óptima, tanto en preferencias como en habilidad, es parte del proceso de convertirte en un GM experimentado."
    },
    {
      tipo: "h3",
      texto: "La Historia en Tres Actos"
    },
    {
      tipo: "parrafo",
      texto: "Hay muchas estructuras que puedes usar para construir historias dramáticas, pero la historia en tres actos encapsula los elementos esenciales de un conflicto. Seguir esta estructura no es esencial, pero si eres nuevo en la narración, es un método probado y verdadero para construir."
    },
    {
      tipo: "h4",
      texto: "Acto Uno: Introduce el Conflicto"
    },
    {
      tipo: "parrafo",
      texto: "En el acto uno, la historia presenta a la audiencia los elementos clave de la historia. En una aventura de juego de rol, los protagonistas siempre se presentan muy al principio, ya que la historia se cuenta desde su perspectiva. Introduce el conflicto junto con al menos algún aspecto del antagonista. Su verdadera identidad puede guardarse para más adelante, pero al menos deberíamos sentir su presencia."
    },
    {
      tipo: "parrafo",
      texto: "El acto uno también incluye el primer caso de conflicto. Aquí es donde se empiezan a ver variaciones en los patrones de la historia. En algunas historias, el primer conflicto es una gran victoria para el antagonista; en otras, es una pequeña victoria para los protagonistas. De cualquier manera, el conflicto es principalmente unilateral, pero promete una acción mayor a medida que avanza la historia."
    },
    {
      tipo: "h4",
      texto: "Acto Dos: Aumenta la Acción"
    },
    {
      tipo: "parrafo",
      texto: "El acto dos presenta lo que podrías llamar la parte central de la historia. La mayor parte de la trama tiene lugar aquí, ya que los dos bandos entran en conflicto repetidamente, cada vez con apuestas y compromiso crecientes. Si bien el nivel general del conflicto aumenta, puede haber un flujo y reflujo en su intensidad. Las pausas en la acción resaltan el drama cuando el conflicto se reanuda."
    },
    {
      tipo: "parrafo",
      texto: "Algunas historias incluyen una serie de subconflictos y resoluciones. Otras descubren antagonistas nuevos y más desafiantes a medida que avanza la historia. El segundo acto a menudo contiene giros argumentales; el conflicto inicial se resuelve, pero surge un conflicto nuevo y más apremiante."
    },
    {
      tipo: "h4",
      texto: "Acto Tres: Resolución"
    },
    {
      tipo: "parrafo",
      texto: "En el último acto de la historia, el conflicto alcanza su punto más alto y se determina el resultado. Aquí, los protagonistas se enfrentan a su mayor desafío por parte del antagonista. El clímax suele ocurrir cerca del final de la historia, cuando los protagonistas y el antagonista se encuentran para un último encuentro. Después de eso, se reflexiona sobre las consecuencias últimas del conflicto."
    },
    {
      tipo: "parrafo",
      texto: "Es importante que haya alguna consecuencia, ya sea un cambio en el mundo, un cambio en los personajes o un cambio en cómo se sienten todos. En un juego de rol, esto suele significar que los héroes fueron victoriosos y los jugadores sienten una cierta sensación de logro. Este es también el momento en el que puedes preparar futuras aventuras insinuando conflictos que aún están por venir."
    },
    {
      tipo: "h2",
      texto: "Escenario"
    },
    {
      tipo: "parrafo",
      texto: "El escenario predeterminado de Everyday Heroes es el mundo moderno, visto a través de la lente de una película de acción. Tú decides lo que eso significa exactamente para ti y tu grupo. Los elementos del juego que diseñamos se centran en el mundo real y se extienden hasta los límites del cine de acción. En el capítulo 15, puedes encontrar criaturas de terror, ciencia ficción y fantasía para añadir variedad a tus aventuras y llevarlas a lugares inesperados. Nuestra serie Aventuras Cinematográficas utiliza y amplía las reglas de Everyday Heroes a los mundos de tus películas favoritas de Hollywood."
    },
    {
      tipo: "parrafo",
      texto: "Por supuesto, un escenario consiste en algo más que el “mundo” en el que tiene lugar. Eso es solo un punto de partida. Lugares y culturas interesantes llenan el mundo moderno y pueden añadir emoción a las aventuras que crees. Una de las ventajas que tienes como narrador al ambientar historias en el mundo moderno es que no hay un escenario mejor documentado. Las imágenes por satélite, las enciclopedias en línea y tus propias experiencias de primera mano pueden utilizarse para aportar riqueza y profundidad a los escenarios que utilices."
    },
    {
      tipo: "h3",
      texto: "Cambio Tecnológico"
    },
    {
      tipo: "parrafo",
      texto: "La tecnología cambia rápidamente en la era moderna y esto afecta a las historias que se desarrollan en el cine de acción. Si bien Everyday Heroes está escrito con el aquí y ahora de 2022 como su escenario predeterminado, se puede jugar en escenarios históricos, escenarios futuros e incluso escenarios fantásticos basados en el mundo real. Películas como Escape from New York alguna vez fueron consideradas ciencia ficción que representaban un posible futuro, y ahora parecen historias ficticias."
    },
    {
      tipo: "parrafo",
      texto: "Como ayuda para aquellos que buscan mantenerse fieles a la tecnología de varios períodos históricos, aquí hay una línea de tiempo de la adopción generalizada de algunas tecnologías clave que han dado forma a la vida moderna y un poco de especulación sobre posibles futuros."
    },
    {
      tipo: "h4",
      texto: "1945: Armas Nucleares"
    },
    {
      tipo: "parrafo",
      texto: "El mundo nunca volvió a ser el mismo después de Trinity, el nombre en clave de la primera detonación de un arma nuclear. Poco después, las primeras y últimas armas atómicas que se usarían en la guerra (hasta ahora) fueron desatadas por Estados Unidos sobre Japón, poniendo fin a la Segunda Guerra Mundial."
    },
    {
      tipo: "h4",
      texto: "1952: Aviones a Reacción"
    },
    {
      tipo: "parrafo",
      texto: "Los aviones a reacción reemplazaron a los aviones comerciales de hélice en la década de 1950, lo que redujo en gran medida el tiempo y la dificultad de los viajes intercontinentales. Esto, a su vez, provocó un crecimiento explosivo del turismo, especialmente para la creciente clase media."
    },
    {
      tipo: "h4",
      texto: "1957: Era Espacial"
    },
    {
      tipo: "parrafo",
      texto: "El primer satélite en órbita, el Sputnik, fue lanzado por la Unión Soviética en 1957 como parte de una carrera tecnológica entre Estados Unidos y la URSS. Los satélites cambiaron la forma en que veíamos nuestro mundo, tanto literal como figuradamente. Además, sentaron las bases para muchas tecnologías que le siguieron."
    },
    {
      tipo: "h4",
      texto: "1977: Secuenciación de ADN"
    },
    {
      tipo: "parrafo",
      texto: "La primera secuenciación completa de ADN de un organismo tuvo lugar en 1977. Desde entonces, la tecnología ha mejorado constantemente, al igual que nuestro conocimiento de la biología."
    },
    {
      tipo: "h4",
      texto: "1982: Computadoras Personales"
    },
    {
      tipo: "parrafo",
      texto: "Este fue el año en que se lanzó el Commodore 64, una máquina que se convertiría en el ordenador personal más vendido de todos los tiempos. Si bien Apple fue el primer innovador en PC, fueron el económico C64 e IBM, orientado a los negocios, los que hicieron que los ordenadores personales se convirtieran en una parte casi universal de la vida moderna. Los ordenadores reemplazaron a muchas herramientas de propósito especial anteriores y a una gran cantidad de trabajo humano."
    },
    {
      tipo: "h4",
      texto: "1990: Teléfonos Móviles"
    },
    {
      tipo: "parrafo",
      texto: "Aunque inventados en los años 70, los teléfonos celulares no se hicieron lo suficientemente pequeños para un uso generalizado hasta aproximadamente 1990, cuando los primeros teléfonos de bolsillo salieron al mercado. Para el año 2000, eran ubicuos. De repente, cualquiera podía hablar con casi cualquier otra persona en cualquier momento, no solo cuando estaban cerca de un teléfono."
    },
    {
      tipo: "h4",
      texto: "1994: World Wide Web"
    },
    {
      tipo: "parrafo",
      texto: "La World Wide Web hizo que el acceso a la información a través de Internet fuera accesible al público en general. Hizo que fuera más fácil encontrar información en línea, y también más fácil crearla. Sigue siendo el estándar más popular para las comunicaciones por Internet a partir de 2022, aunque ha experimentado muchos avances."
    },
    {
      tipo: "h4",
      texto: "2004: Web 2.0"
    },
    {
      tipo: "parrafo",
      texto: "Facebook, Wikipedia y YouTube, todas empezaron o alcanzaron su apogeo por esta época, dando inicio a un fenómeno descrito como Web 2.0. El aumento del ancho de banda y la amplia adopción de la accesibilidad a Internet abrieron una era en la que el mundo entero compartía sus pensamientos en línea. Al mismo tiempo, los archivistas buscaron hacer accesible todo el conocimiento humano a cualquiera con un navegador y una conexión a Internet."
    },
    {
      tipo: "h4",
      texto: "2005: Navegación GPS"
    },
    {
      tipo: "parrafo",
      texto: "En 1989 se colocaron en órbita los últimos satélites GPS del ejército estadounidense, y para el año 2000 el ejército puso el sistema a disposición del público. Para 2005, los navegadores Garmin y Google Maps facilitaban a cualquiera la navegación a cualquier lugar sin consultar mapas de papel ni pedir indicaciones."
    },
    {
      tipo: "h4",
      texto: "2007: Smartphones"
    },
    {
      tipo: "parrafo",
      texto: "Es difícil sobrestimar la utilidad de la innovación tecnológica más importante de principios del siglo XXI. La combinación de una computadora, un receptor de radio, un transmisor, una pantalla táctil, un micrófono, un altavoz, un acelerómetro y una cámara en un dispositivo de bolsillo creó una herramienta tan versátil que se volvió revolucionaria para los negocios, la política, las comunicaciones, la justicia social, el crimen y la cultura, por nombrar solo algunas áreas de la vida moderna. La mayoría de los usuarios ocasionales apenas rozan la superficie de lo que estas herramientas esenciales son capaces de hacer."
    },
    {
      tipo: "h4",
      texto: "2010: Ataque de los Drones"
    },
    {
      tipo: "parrafo",
      texto: "En 2010, el primer dron de consumo que podía controlarse con un teléfono móvil llegó al mercado. Pronto le siguió el uso de drones para fotografía y actividades de aficionados. No pasó mucho tiempo antes de que los drones se convirtieran en una herramienta de vigilancia de combate económica, una ayuda para la investigación científica y muchos otros usos que antes eran dominio exclusivo de las aeronaves caras."
    },
    {
      tipo: "h4",
      texto: "20XX: El Futuro Cercano"
    },
    {
      tipo: "parrafo",
      texto: "Especular sobre la tecnología del futuro y el impacto que tendrá en la sociedad constituye el núcleo de la ciencia ficción. Para el futuro cercano, tiene sentido observar las tendencias contemporáneas y luego imaginar llevarlas a sus conclusiones lógicas o a extremos absurdos. Luego, considerar cómo reaccionará la gente a estas innovaciones y cómo esas reacciones se convertirán en parte de la sociedad cotidiana. Típicamente, siempre habrá quienes abracen los cambios y quienes los rechacen, y el conflicto entre ambos genera un gran material para las historias de aventuras."
    },
    {
      tipo: "h3",
      texto: "Ajustes de Escenario"
    },
    {
      tipo: "parrafo",
      texto: "Si bien las reglas de Everyday Heroes se basan en el mundo moderno, las mecánicas centrales son lo suficientemente flexibles como para manejar casi cualquier cosa. Obtendrás la mayor utilidad del juego al usarlo para escenarios que tengan al menos un pie en nuestro propio mundo. Es posible que necesites crear componentes o mecánicas de juego adicionales para complementar tu escenario, pero eso es parte normal del proceso creativo."
    },
    {
      tipo: "h4",
      texto: "Post Apocalipsis"
    },
    {
      tipo: "parrafo",
      texto: "Puedes decidir ambientar tu partida en un mundo después de una guerra apocalíptica, una hambruna o un brote zombi, donde los héroes vagan por los páramos devastados o las calles infestadas de zombis, solo capaces de conseguir lo que alguna vez fue tecnología común. Dependiendo de cuán reciente fue el apocalipsis, las profesiones se vuelven algo sin sentido, al igual que una noción moderna de riqueza. Lo que puedes llevar a cuestas o acumular en un lugar seguro se convierte en todo lo que tienes. Cada conflicto es una batalla por la supervivencia."
    },
    {
      tipo: "h4",
      texto: "Fantasía Urbana"
    },
    {
      tipo: "parrafo",
      texto: "La fantasía urbana suele transcurrir en la actualidad, en un mundo como el nuestro, pero en el que se manifiesta alguna verdad sobrenatural o fantástica. Los elementos sobrenaturales pueden ser un hecho bien conocido de la vida o estar ocultos en las sombras y ser conocidos solo por los iniciados. Lo primero comparte mucho con la ciencia ficción, en el sentido de que hay que imaginar cómo estos elementos afectan y cambian la sociedad, mientras que lo segundo trata más de explorar el mundo oculto y sus subculturas. Este tipo de ambientación suele necesitar solo un conjunto de componentes de juego para simular los elementos sobrenaturales."
    },
    {
      tipo: "h4",
      texto: "El Futuro Distante"
    },
    {
      tipo: "parrafo",
      texto: "¡En el futuro distante, todo es posible! Puedes inventar la tecnología y la sociedad de ciencia ficción que quieras. Solo requiere un poco más de reflexión y planificación. Necesitarás decidir cómo funcionan los diversos equipos y armas en este nuevo mundo. Es probable que las profesiones y los trasfondos cambien, y también tendrán sentido nuevas especialidades de combate y, por lo tanto, clases. Lo que ahora consideramos armas modernas puede verse como reliquias arcaicas del pasado. Incluso la naturaleza de lo que significa ser humano bien podría haber cambiado."
    },
    {
      tipo: "h4",
      texto: "Líneas Temporales y Mundos Alternativos"
    },
    {
      tipo: "parrafo",
      texto: "Podrías desviar tu línea temporal de eventos de la vida real en algún momento, usar tecnología “futurista” tal como se concibió en el pasado, o crear un mundo completamente nuevo que use cierto grado de tecnología moderna. Considera qué tecnologías están disponibles en estos mundos, y quizás, lo que es más importante, qué falta. Añade viajes en el tiempo o dimensiones alternativas y no hay límites excepto lo que tú y tus jugadores puedan soñar."
    },
    {
      tipo: "h3",
      texto: "Género"
    },
    {
      tipo: "parrafo",
      texto: "No tienes que elegir un género específico para crear una aventura, pero puede dirigir tus esfuerzos y ayudar a comunicar la sensación del juego a tus jugadores. A continuación se presentan algunos géneros comunes en la ficción moderna, pero de ninguna manera son las únicas opciones. Puedes elegir cualquier género que desees e incluso combinarlos para crear exactamente la sensación que buscas."
    },
    {
      tipo: "h4",
      texto: "Inspiración Basada en Género"
    },
    {
      tipo: "parrafo",
      texto: "Cada uno de los siguientes géneros incluye una sugerencia sobre cuándo podrías dar inspiración en tu partida, además de otros consejos."
    },
    {
      tipo: "h4",
      texto: "Acción"
    },
    {
      tipo: "parrafo",
      texto: "La mayoría de los juegos incluyen una buena dosis de acción, pero este género está inspirado en la energía de alta octanaje de las películas de acción. ¡Grandes músculos, explosiones, gafas de sol y frases ingeniosas! Los juegos de acción atraen fuertemente a los jugadores que quieren participar en fantasías de poder o a aquellos que buscan un poco de escapismo."
    },
    {
      tipo: "h5",
      texto: "Realismo y Acción"
    },
    {
      tipo: "parrafo",
      texto: "El género de acción no se preocupa demasiado por el realismo. La “regla de lo genial” a menudo tiene prioridad. Si sería genial que sucediera algo improbable, entonces sucede. No obstante, las películas de acción requieren una tensión dramática, por lo que establecen sus propios límites sobre lo que es posible para que las situaciones peligrosas sigan pareciendo peligrosas."
    },
    {
      tipo: "h5",
      texto: "Tono y Acción"
    },
    {
      tipo: "parrafo",
      texto: "El tono en un juego de acción tiende a inclinarse hacia el lado más ligero, ya que se preocupa más por ser impresionante que dramático. El tema puede ser tan serio como quieras, pero incluso si los héroes se toman a sí mismos 100% en serio, los jugadores probablemente no lo hagan."
    },
    {
      tipo: "h5",
      texto: "Lleno de Acción"
    },
    {
      tipo: "parrafo",
      texto: "La acción no tiene por qué ser todo combate todo el tiempo, pero es probable que las peleas y las persecuciones aparezcan en las escenas más importantes de la aventura, y todo debería terminar con una explosión."
    },
    {
      tipo: "h5",
      texto: "Inspiración de Acción"
    },
    {
      tipo: "parrafo",
      texto: "En un juego de acción, puedes dar inspiración a un jugador cada vez que suelte una frase ingeniosa."
    },
    {
      tipo: "h4",
      texto: "Aventura"
    },
    {
      tipo: "parrafo",
      texto: "Aventura es el género predeterminado de la mayoría de los juegos de rol. Los héroes tienen un descanso de sus vidas normales, emprenden un viaje y descubren algo nuevo sobre el mundo y sobre sí mismos. Las historias de aventuras tienen un atractivo casi universal, pero crear una sensación de asombro y descubrimiento es una de las cosas más desafiantes para un GM."
    },
    {
      tipo: "h5",
      texto: "Realismo y Aventura"
    },
    {
      tipo: "parrafo",
      texto: "Las historias de aventuras funcionan tan bien en un mundo realista como en uno fantástico, pero la mayoría de las veces, el realismo se deja de lado en aras del drama y el espectáculo. Estas aventuras pueden tratar las computadoras de manera realista, pero pasan por alto detalles como la munición o dónde van los personajes al baño mientras exploran ruinas antiguas."
    },
    {
      tipo: "h5",
      texto: "Tono y Aventura"
    },
    {
      tipo: "parrafo",
      texto: "La aventura tiende a ser desenfadada y no se detiene en temas sombríos o deprimentes."
    },
    {
      tipo: "h5",
      texto: "Acción en la Aventura"
    },
    {
      tipo: "parrafo",
      texto: "Las historias de aventuras pueden incluir bastante combate, pero no tienen por qué. Las persecuciones son partes emocionantes de una aventura. Superar pruebas que ponen a prueba las virtudes del héroe es un elemento básico de las historias de aventuras."
    },
    {
      tipo: "h5",
      texto: "Inspiración para la Aventura"
    },
    {
      tipo: "parrafo",
      texto: "En un juego centrado en la aventura, puedes darle inspiración a un jugador cada vez que su personaje aprenda algo sobre sí mismo como resultado de su viaje."
    },
    {
      tipo: "h4",
      texto: "Comedia"
    },
    {
      tipo: "parrafo",
      texto: "En los juegos de rol, la comedia es casi ubicua. Incluso en la campaña más seria y dramática, los jugadores encontrarán la manera de soltar un chiste para romper la tensión y provocar una risa en sus amigos. Dicho esto, las aventuras puramente cómicas son algo raras. Los juegos de rol a menudo asumen tensión y conflicto dramáticos, por lo que los juegos de comedia suelen entretejer el humor en otro género popular, como la acción o la aventura."
    },
    {
      tipo: "h5",
      texto: "Realismo y Comedia"
    },
    {
      tipo: "parrafo",
      texto: "La comedia puede seguir una estricta adhesión al realismo o abandonarlo por completo. En última instancia, la comedia surge de desafiar las expectativas, por lo que doblar las reglas de la realidad a menudo funciona en su beneficio."
    },
    {
      tipo: "h5",
      texto: "Tono Cómico"
    },
    {
      tipo: "parrafo",
      texto: "El tono de la comedia tiende a ser desenfadado. Incluso la llamada “comedia negra” suele tomarse a la ligera situaciones sombrías. La yuxtaposición en el tono suele ser intrínsecamente divertida, ya que toma las expectativas y las pone de cabeza."
    },
    {
      tipo: "h5",
      texto: "Acción Cómica"
    },
    {
      tipo: "parrafo",
      texto: "La acción y la comedia van muy bien juntas, ya que el combate ofrece muchas circunstancias hilarantes. El tono que busques influye en si la acción es mortal o leve, pero siempre debe ser escandalosa de alguna manera."
    },
    {
      tipo: "h5",
      texto: "Inspiración para la Comedia"
    },
    {
      tipo: "parrafo",
      texto: "Obviamente, los jugadores que hacen reír a todo el mundo con sus ocurrencias deben ser recompensados con inspiración. Simplemente no olvides recompensar también a los jugadores que, aunque no tengan un don para la comedia, se esfuerzan sinceramente por seguir la broma."
    },
    {
      tipo: "h4",
      texto: "Drama"
    },
    {
      tipo: "parrafo",
      texto: "El drama, como género, se centra no solo en la historia general, sino específicamente en las historias personales de los héroes y los PNJ más destacados. ¡Los giros argumentales y las grandes emociones abundan! Las campañas dramáticas son excelentes para los jugadores a los que realmente les gusta profundizar en la interpretación de roles y les encanta crear trasfondos intrincados para sus personajes."
    },
    {
      tipo: "h5",
      texto: "Realismo y Drama"
    },
    {
      tipo: "parrafo",
      texto: "El avance de la historia suele ser más importante que mantener las cosas realistas, pero la mayoría de las licencias se toman con la narrativa y no con las leyes de la física."
    },
    {
      tipo: "h5",
      texto: "Tono Dramático"
    },
    {
      tipo: "parrafo",
      texto: "El tono del drama puede ir desde lo profundamente serio hasta una parodia irónica, pero el tema a menudo se inclina hacia lo pesado. Los personajes suelen lidiar con problemas profundamente personales. Temas como el abuso, la pérdida y los mecanismos de afrontamiento poco saludables son comunes en este tipo de historias."
    },
    {
      tipo: "h5",
      texto: "Acción Dramática"
    },
    {
      tipo: "parrafo",
      texto: "Que el foco esté en los personajes no significa que no puedan verse envueltos en situaciones de vida o muerte. El combate debería ser una lucha y los resultados deberían tener consecuencias dramáticas para los héroes o para la historia."
    },
    {
      tipo: "h5",
      texto: "Inspiración Dramática"
    },
    {
      tipo: "parrafo",
      texto: "En un juego centrado en el drama, puedes darle inspiración a un jugador cada vez que su personaje tome una decisión grande y dramática, especialmente si está motivada por la emoción."
    },
    {
      tipo: "h4",
      texto: "Terror"
    },
    {
      tipo: "parrafo",
      texto: "El terror trata sobre el miedo. Los personajes se enfrentan a fuerzas que los superan con creces, y el objetivo a menudo es simplemente sobrevivir. Incluso si la victoria real es posible, el camino será difícil. Los juegos de terror pueden ofrecer una fuerte sensación de emoción y escape para muchos jugadores. Solo ten cuidado con los temas delicados que a menudo se incluyen en el terror y advierte a los jugadores sobre los temas de la aventura."
    },
    {
      tipo: "h5",
      texto: "Realismo en el Terror"
    },
    {
      tipo: "parrafo",
      texto: "El terror a menudo es realista en su enfoque de lo que los personajes pueden hacer, pero puede tomarse libertades con lo que las cosas que los acechan son capaces de hacer, incluso si no son de naturaleza sobrenatural."
    },
    {
      tipo: "h5",
      texto: "Tono Horrificante"
    },
    {
      tipo: "parrafo",
      texto: "El tono de un juego de terror suele ser serio, pero a algunas mesas les puede gustar divertirse más con él. Independientemente de cómo lo trates fuera del juego, el terror suele ser violento y horripilante, por lo que los temas son tan pesados como se pueda. "
    },
    {
      tipo: "h5",
      texto: "Violencia Horrificante"
    },
    {
      tipo: "parrafo",
      texto: "Las peleas en una aventura de terror suelen ser extremadamente peligrosas, cobrando un precio a quienes las libran, incluso si sobreviven. Las persecuciones son un elemento básico de las películas de terror, ya que los héroes a menudo se enfrentan a enemigos que no tienen forma aparente de derrotar. Incluso cuando los héroes salen victoriosos en un conflicto, a menudo descubren que es solo una victoria fugaz."
    },
    {
      tipo: "h5",
      texto: "Inspiración de Terror"
    },
    {
      tipo: "parrafo",
      texto: "En un juego de terror, puedes darle inspiración a un jugador cada vez que intencionalmente ponga a su personaje en peligro mortal para lograr un objetivo."
    },
    {
      tipo: "h4",
      texto: "Misterio"
    },
    {
      tipo: "parrafo",
      texto: "En una aventura temática de misterio, el enfoque está en recopilar pistas y desentrañar la trama. ¿Quién es el asesino? ¿Dónde escondió el villano la bomba? ¿Qué está pasando en este pueblo? Un juego de misterio es ideal para jugadores que quieren pensar y sentirse inteligentes resolviendo problemas de lógica."
    },
    {
      tipo: "h5",
      texto: "Realismo en el Misterio"
    },
    {
      tipo: "parrafo",
      texto: "El misterio se nutre de la coherencia, por lo que, si bien puede ser poco realista, es importante que todos conozcan las reglas del mundo y que esas reglas no cambien. Esto se debe a que la deducción lógica suele ser un desafío esencial para los jugadores, y es imposible sin un escenario bien fundamentado."
    },
    {
      tipo: "h5",
      texto: "Tono Misterioso"
    },
    {
      tipo: "parrafo",
      texto: "Los misterios funcionan con una variedad de tonos. Puedes tener un divertido whodunit tan fácilmente como un intenso thriller de misterio y asesinato. Dicho esto, debe haber consecuencias reales en la resolución del misterio, por lo que siempre se necesita cierto nivel de tensión dramática."
    },
    {
      tipo: "h5",
      texto: "Acción Misteriosa"
    },
    {
      tipo: "parrafo",
      texto: "En un misterio, la tensión suele acumularse mucho antes de que estalle una pelea o comience una persecución a alta velocidad. Los misterios pueden estancarse y un poco de acción es útil para mantener a los jugadores alerta."
    },
    {
      tipo: "h5",
      texto: "Inspiración de Misterio"
    },
    {
      tipo: "parrafo",
      texto: "En un juego de misterio, puedes darle inspiración a cada jugador cada vez que una de sus deducciones resulte precisa, o su persistente investigación descubra una pista importante."
    },
    {
      tipo: "h4",
      texto: "Supervivencia"
    },
    {
      tipo: "parrafo",
      texto: "Las aventuras centradas en la supervivencia sitúan a los héroes en una situación difícil, a menudo con recursos limitados, y los desafían a superar las adversidades. La historia y la motivación individual del personaje pasan a un segundo plano frente a los constantes desafíos a los que se enfrentan los héroes. Las aventuras basadas en la supervivencia pueden ser muy absorbentes para los jugadores, pero dependen de que el GM mantenga la tensión y las apuestas altas para los héroes."
    },
    {
      tipo: "h5",
      texto: "Realismo en la Supervivencia"
    },
    {
      tipo: "parrafo",
      texto: "Este es el género que más depende del realismo. Los desafíos a menudo requieren una combinación de innovación creativa y deducción lógica para superarlos. El realismo crudo refuerza la idea de sobrevivir en un entorno hostil."
    },
    {
      tipo: "h5",
      texto: "Supervivencia y Tono"
    },
    {
      tipo: "parrafo",
      texto: "El género de supervivencia se adapta bien a tonos serios y pesados. La muerte y el fracaso deben ser una posibilidad constante para que el género funcione. Los momentos de comedia son una buena forma de romper ocasionalmente la tensión y evitar que la aventura resulte monótona, pero el núcleo del tono consiste en un desafío tras otro."
    },
    {
      tipo: "h5",
      texto: "Acción Seria"
    },
    {
      tipo: "parrafo",
      texto: "Las aventuras de supervivencia pueden implicar combate y persecuciones, o pueden carecer por completo de ellos. Depende totalmente de las fuentes de peligro y de las circunstancias en las que deban sobrevivir los héroes. Lo que importa es que los héroes estén siempre bajo amenaza, y cualquier victoria que logren es rápidamente reemplazada por una nueva amenaza."
    },
    {
      tipo: "h5",
      texto: "Inspiración para la Supervivencia"
    },
    {
      tipo: "parrafo",
      texto: "Trabajar en equipo para sobrevivir es algo que bien merece una recompensa, por lo que es posible que quieras ofrecer inspiración a los héroes que demuestran liderazgo o que se ponen en riesgo por la supervivencia de los demás."
    },
    {
      tipo: "h3",
      texto: "Combinando Géneros"
    },
    {
      tipo: "parrafo",
      texto: "Muchos escenarios y estilos comunes combinan dos o más géneros. Aquí hay algunos comunes que puedes crear combinando opciones de género."
    },
    {
      tipo: "lista",
      items: [
        "**Policías Compañeros.** Enfrentar a un grupo de policías muy discordante contra antagonistas malvados pero ligeramente ineptos puede crear una mezcla entretenida de comedia y acción.",
        "**Intriga.** Las historias sobre política, traiciones y posturas sociales presentan una combinación de drama y misterio.",
        "**Drama Militar.** Las películas militares pueden infundir al género de supervivencia elementos de drama, terror y acción.",
        "**Monstruo de la Semana.** Las historias episódicas sobre cómo lidiar con el monstruo de la semana combinan el drama y el terror.",
        "**Mitos.** Las investigaciones sobre pesadillas cósmicas implican una combinación de terror y misterio.",
        "**Thriller de Espías.** Las historias de espías internacionales suelen combinar el misterio con la acción."
      ]
    },
    {
      tipo: "h2",
      texto: "Estructura del Encuentro"
    },
    {
      tipo: "parrafo",
      texto: "Uno de los aspectos únicos de la historia de una aventura de rol es que el GM no impulsa la trama como lo haría un escritor en otros medios narrativos. La historia suele comenzar con el GM, pero la trama es impulsada tanto por los jugadores como por el GM."
    },
    {
      tipo: "parrafo",
      texto: "La mayoría de las aventuras dividen la historia en “encuentros”, que en otros medios podrías llamar escenas. Los encuentros comienzan con el GM describiendo lo que ven los héroes. Luego, los héroes deciden lo que harán. Crear encuentros es una gran parte de lo que hace un GM. Cómo se conectan los encuentros forma la estructura de una aventura. Aquí tienes algunas estructuras comunes de encuentros de aventuras."
    },
    {
      tipo: "h3",
      texto: "Cadena de Eventos"
    },
    {
      tipo: "parrafo",
      texto: "En la estructura de cadena de eventos, la aventura sigue una línea de tiempo preestablecida, muy parecida a una película o novela. El GM ha planificado una secuencia cronológica de encuentros que se supone que deben ocurrir en un orden establecido, cada uno conduciendo al siguiente de forma natural. Los encuentros pueden tener lugar en la misma ubicación o en ubicaciones dispares, pero el orden es parte del desarrollo de la historia."
    },
    {
      tipo: "h4",
      texto: "Las Oportunidades"
    },
    {
      tipo: "parrafo",
      texto: "Muchas aventuras publicadas, especialmente las más cortas, utilizan esta estructura de cadena de eventos porque ofrece una serie de ventajas narrativas. Para empezar, le da al GM control sobre la trama y cómo se desarrolla la historia, creando una narrativa compacta y coherente. Además, casi no se desperdicia ningún esfuerzo por parte del GM. Cada encuentro que diseñes probablemente se utilizará en el curso de la aventura. Dado el tiempo limitado, esto te permite dedicar más pensamiento y detalle a cada encuentro."
    },
    {
      tipo: "h4",
      texto: "Los Desafíos"
    },
    {
      tipo: "parrafo",
      texto: "El mayor desafío de esta estructura es cómo guiar a los jugadores a través de la cadena de eventos sin que sientan que no tienen control sobre lo que hacen sus personajes. Esto se llama “railroading” en los círculos de RPG. La clave es establecer metas para los héroes que los llevarán naturalmente a través de los eventos. Después de establecer el objetivo claro, creas un rastro de migas de pan que lleva a los héroes a elegir acciones que los llevan al siguiente encuentro. Debes tener cuidado de no dejar pistas falsas que los desvíen del camino, a menos que quieras que esa diversión sea parte de la historia. Otra técnica clave es planificar cómo organizar los encuentros para que tengan sentido incluso si los jugadores realizan acciones que no esperabas."
    },
    {
      tipo: "lista",
      items: [
        "**Ejemplo:** Tus héroes están investigando una red de juego ilegal. Esperas que vayan al casino local donde encontrarán resistencia de la seguridad. En cambio, deciden averiguar quién es el dueño del lugar y van a su casa, un encuentro que no tienes planeado. Simplemente podrías escenificar el mismo encuentro con seguridad, pero que tenga lugar en la casa del dueño. O podrías improvisar que no hay nada sospechoso en su casa excepto algunos documentos que los dirigen de nuevo al casino."
      ]
    },
    {
      tipo: "h3",
      texto: "Telaraña de Eventos"
    },
    {
      tipo: "parrafo",
      texto: "La telaraña de eventos se asemeja a la cadena de eventos, pero permite que los encuentros ocurran en un orden semiimpredecible e incluso que algunos encuentros no se lleven a cabo. Esta estructura es común en el género de misterio, donde los jugadores buscan pistas y tienen múltiples hilos que seguir. Típicamente, el primer encuentro es un punto de partida fijo, pero a partir de ahí los héroes eligen qué hilos seguir. Cada hilo puede llevarlos en una dirección muy diferente."
    },
    {
      tipo: "parrafo",
      texto: "A pesar de la variedad de opciones que los héroes pueden tomar, en última instancia hay un punto final fijo al que todas las diversas ramas conducen. Los encuentros en sí mismos pueden tener lugar en ubicaciones muy diferentes, o todos pueden estar en el mismo lugar pero involucrar a personas diferentes."
    },
    {
      tipo: "h4",
      texto: "Las Oportunidades"
    },
    {
      tipo: "parrafo",
      texto: "La telaraña de eventos puede ser muy divertida para el Game Master porque no saben exactamente qué sucederá a continuación. Han planificado una serie de posibilidades, pero lo que realmente hacen los jugadores es una sorpresa. El objetivo del jugador eventualmente los llevará a la conclusión de la historia, pero los caminos son allas atractivos. Es muy poco probable que los jugadores se sientan encarrilados en este tipo de estructura."
    },
    {
      tipo: "h4",
      texto: "Los Desafíos"
    },
    {
      tipo: "parrafo",
      texto: "En comparación con la cadena de eventos, la telaraña de eventos es simplemente más difícil de configurar para el GM. Hay más encuentros que preparar y más transiciones de encuentro a encuentro que debes considerar. Idealmente, todos los caminos conducen al final, pero cuando hay tantas opciones, los jugadores pueden terminar perdiendo el tiempo. Al igual que la cadena de eventos, hay algunas formas de guiar a los jugadores en secreto. Solo tú sabes exactamente quién o qué está planeado en cada encuentro. Si las cosas se están alargando y se necesita una pista clave para hacer avanzar la acción, puedes inventar una forma para que esa pista esté en un lugar diferente al que planeaste originalmente. Los jugadores no notarán la diferencia a menos que sea obviamente fuera de lugar."
    },
    {
      tipo: "h3",
      texto: "Sandbox"
    },
    {
      tipo: "parrafo",
      texto: "La estructura de sandbox es aquella en la que el GM planifica poco el arco de la historia. En cambio, detalla una serie de ubicaciones, personas y eventos en un lugar determinado, y luego anima a los jugadores a explorar el sandbox. La exploración suele comenzar con la ubicación más cercana al punto de partida, pero no hay garantía de ello."
    },
    {
      tipo: "parrafo",
      texto: "Si bien puede parecer que esto no es una estructura en absoluto, el tiempo y el espacio son factores que naturalmente crearán una historia. Además, el GM puede construir múltiples historias en el sandbox para que los jugadores las encuentren y sigan."
    },
    {
      tipo: "parrafo",
      texto: "Ten en cuenta que cada caja de arena tiene paredes en algún lugar, y no allas son del mismo tamaño. Podrías hacer que todo el planeta Tierra sea tu caja de arena, o la caja de arena podría ser una casa pequeña. Cuanto más pequeña sea la caja de arena, más detalles podrás proporcionar, pero menos sensación de libertad sentirán los jugadores."
    },
    {
      tipo: "h4",
      texto: "Las Oportunidades"
    },
    {
      tipo: "parrafo",
      texto: "El sandbox permite naturalmente a los jugadores establecer sus propios objetivos y participar activamente en la creación de la historia que se desarrolla. Esta estructura también crea un fuerte sentido de exploración, que es un elemento clave en muchas historias de aventuras. También es una forma para que el Game Master se centre en la construcción del mundo en lugar de la narración de historias. Quizás lo mejor de todo es que el GM no necesita manipular a los jugadores, ya que no hay un resultado fijo en mente. Eso no significa que no puedas; si quieres ajustar el mundo para crear una historia más fuerte, por allas medios hazlo."
    },
    {
      tipo: "h4",
      texto: "Los Desafíos"
    },
    {
      tipo: "parrafo",
      texto: "Hay muchos desafíos con el sandbox pero allas pueden superarse. El principal desafío es la gran cantidad de esfuerzo que el GM debe invertir en crearlo. Para adaptarse a la elección del jugador, el GM necesita estar preparado para casi cualquier cosa. El sandbox funciona mejor para los GM que tienen fuertes habilidades de improvisación narrativa. No importa a dónde vayan los personajes, el GM tendrá que construir la historia sobre la marcha hasta cierto punto."
    },
    {
      tipo: "parrafo",
      texto: "El segundo gran desafío es intentar convertir la exploración del jugador en una narrativa sólida. Solo porque los jugadores puedan hacer lo que quieran, los principios básicos de una buena narración no desaparecen. Todavía querrás tener conflicto, tensión creciente y resolución para esos conflictos. Hacer esto mientras los jugadores son los que deciden adónde ir y qué hacer requiere cierta habilidad y preparación."
    },
    {
      tipo: "h2",
      texto: "Manejando las Elecciones del Jugador"
    },
    {
      tipo: "parrafo",
      texto: "Un buen Game Master realiza un acto de equilibrio entre proporcionar a los jugadores muchas oportunidades para tomar decisiones significativas y manipularlos para que sigan el arco de la historia de la aventura. Esto se ha abordado en la discusión de la estructura anterior, pero veamos algunas técnicas específicas útiles para ambos lados de este acto de equilibrio."
    },
    {
      tipo: "h3",
      texto: "La Regla de Tres"
    },
    {
      tipo: "parrafo",
      texto: "En caso de duda, ofrece a los jugadores tres opciones diferentes en momentos clave de la historia. Tres cosas que necesitan para progresar, tres formas de obtener una información, tres lugares a los que ir, etc. Son suficientes opciones para mantener el interés, pero no tantas como para que se conviertan en una carga para ti o para los jugadores."
    },
    {
      tipo: "h3",
      texto: "Todos los Caminos Conducen a Roma"
    },
    {
      tipo: "parrafo",
      texto: "Puedes ofrecer múltiples caminos en tu aventura que, de forma natural, llevarán a la misma conclusión. Siempre que cada uno de ellos fluya de forma natural del principio al fin, los jugadores sentirán que han tomado una decisión significativa y que sus elecciones han tenido un resultado racional. Ten cuidado con las pistas falsas en una aventura de rol; los jugadores pueden y creerán en ellas hasta el final, a menos que hagas un esfuerzo claro por destacar que es una pista falsa más adelante en la historia."
    },
    {
      tipo: "h3",
      texto: "Anticipación (Foreshadowing)"
    },
    {
      tipo: "parrafo",
      texto: "Si tienes una idea importante que necesitas transmitir, especialmente si quieres que esté en la mente de los jugadores, anticípala. Esto significa incluir pistas en la historia sobre lo que vendrá después. Suelen ser pequeñas pistas que destacan en el momento, pero que no tienen mucho sentido. Harán que los jugadores piensen en ellas, y luego, cuando llegue el momento de unir las pistas, estarán preparados. Si una partida se extiende a lo largo de muchas sesiones, es posible que necesites anticipar varias veces para mantener la idea en la mente de los jugadores."
    },
    {
      tipo: "h3",
      texto: "Una Pregunta, Muchas Respuestas"
    },
    {
      tipo: "parrafo",
      texto: "Casi todos los desafíos que lances a los héroes deben tener múltiples respuestas. No solo debes pensar en muchas formas en que pueden resolverlo, sino que también debes estar preparado para que los jugadores tengan soluciones que nunca consideraste. Lo que importa es que tengan una respuesta, no que elijan las respuestas que tú imaginas. Esto no significa que todo lo que los jugadores intenten deba funcionar, solo que siempre debes tener una mente abierta y estar ansioso por verlos tener éxito."
    },
    {
      tipo: "h3",
      texto: "Las Motivaciones Son Supremas"
    },
    {
      tipo: "parrafo",
      texto: "Piensa siempre en las motivaciones de los héroes y en cómo pueden conducirlos naturalmente de un punto A a un punto B en la aventura. Si una decisión crítica depende de que una banda de mercenarios endurecidos corra por sus vidas, te frustrarás cuando insistan en luchar hasta la muerte. Cuando imagines cómo se desarrolla la historia, tienes que ponerte firmemente en la piel de los héroes y sus jugadores."
    },
    {
      tipo: "h3",
      texto: "Mueve la Historia Alrededor de los Jugadores"
    },
    {
      tipo: "parrafo",
      texto: "Solo tú como GM sabes lo que estaba planeado. Si necesitas barajar las cartas y mover personajes, ubicaciones, eventos u objetos en el tiempo o el espacio, puedes hacerlo. Los jugadores pensarán que siempre fue así. "
    },
    {
      tipo: "h3",
      texto: "Roba las Ideas de los Jugadores"
    },
    {
      tipo: "parrafo",
      texto: "Es normal que los jugadores discutan entre sí lo que creen que está pasando en la trama y lo que creen que sucederá a continuación. Si algunas de sus ideas son mejores que las que tenías en mente, o añadirían riqueza a la historia, ¡haz que sucedan! Hará que los jugadores se sientan bien por haberlo predicho y te ahorrará un poco de energía creativa. Esto está muy en el espíritu de la filosofía de “sí, y”."
    },
    {
      tipo: "h3",
      texto: "El Proxy del GM"
    },
    {
      tipo: "parrafo",
      texto: "Uno de los muchos usos de los PNJ amistosos en una partida es proporcionar al GM una voz en la historia sin romper la inmersión. Hay dos pautas importantes para hacer esto. La primera es mantener los comentarios de los PNJ en personaje. La segunda es solo recurrir a este truco cuando los jugadores están claramente en apuros y buscan activamente consejos o orientación."
    },
    {
      tipo: "h3",
      texto: "Detenerse en la Encrucijada"
    },
    {
      tipo: "parrafo",
      texto: "Cada aventura tiene momentos en los que los jugadores se enfrentan a decisiones especialmente importantes. Estos son buenos momentos para terminar la sesión de juego. Haz que los jugadores piensen en sus planes y te digan su elección. Luego, promete retomar la próxima sesión para ver qué sucede. Crea un buen 'cliffhanger' y significa que tienes tiempo hasta la próxima partida para asegurarte de estar preparado para que esa elección se desarrolle de una manera satisfactoria."
    },
    {
      tipo: "h3",
      texto: "Tipos de Adversarios"
    },
    {
      tipo: "parrafo",
      texto: "Los adversarios son los personajes con los que los héroes se oponen en una aventura. Pueden ser villanos, monstruos, rivales o cualquier otra cosa que se interponga en el camino de los héroes para lograr sus objetivos. Los adversarios se clasifican por su rol en la historia y en el combate."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-tipos-adversarios",
      titulo: "Tipos de Adversarios",
      encabezados: ["Rol", "Descripción"],
      filas: [
        ["Mano Derecha", "El segundo al mando del villano, a menudo tan peligroso como el villano principal."],
        ["Lugarteniente", "Un subordinado del villano principal, a menudo un líder de un grupo de esbirros."],
        ["Esbirro", "Un seguidor de bajo nivel del villano, a menudo un enemigo genérico y numeroso."],
        ["Saboteador", "Un adversario que se especializa en la interrupción y la subversión, a menudo evitando el combate directo."],
        ["Sombra", "Un adversario que opera desde las sombras, usando el sigilo y el engaño para lograr sus objetivos."],
        ["Fuerza Brutal", "Un adversario que confía en la fuerza física y el combate directo para dominar a sus oponentes."]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Puedes pedir a un jugador que se comprometa con un contrato cinematográfico. Si lo hace, es una recompensa al final de una aventura. El compromiso con un contrato cinematográfico podría ser un trabajo que el héroe acepta o una llamada que no puede ignorar. Una recompensa de contrato cinematográfico permite al héroe ganar un nivel en cualquier momento en el futuro, no inmediatamente después de obtener la recompensa. El héroe puede esperar y usarlo cuando sea más conveniente para ellos y para la historia que el GM esté contando."
    },
    {
      tipo: "parrafo",
      texto: "Las recompensas se otorgan cuando los héroes completan el motor principal. Se puede usar dinero para determinar el nivel de riqueza al final de una aventura."
    },
    {
      tipo: "h2",
      texto: "Los Cuatro Pilares del Juego"
    },
    {
      tipo: "parrafo",
      texto: "Everyday Heroes, como la mayoría de los juegos de rol, se basa en una combinación de cuatro pilares de juego. La forma en que cada pilar se incorpora en el juego depende del GM y los jugadores, así como del tono y género de la aventura. No todas las aventuras deben incluir todos los pilares, y una aventura podría centrarse casi por completo en uno o dos pilares, ignorando los demás."
    },
    {
      tipo: "h3",
      texto: "Combate"
    },
    {
      tipo: "parrafo",
      texto: "El combate es una parte central de la mayoría de las historias de acción. Incluye peleas a puñetazos, tiroteos de alto octanaje, persecuciones de vehículos a toda velocidad y cualquier otra situación en la que los personajes se enfrentan a sus enemigos directamente. El capítulo 9 tiene las reglas de combate, y el capítulo 11 tiene las reglas de persecución y vehículos."
    },
    {
      tipo: "h3",
      texto: "Exploración"
    },
    {
      tipo: "parrafo",
      texto: "La exploración implica que los personajes interactúen con su entorno, ya sea buscando pistas, descubriendo secretos o simplemente moviéndose por el mundo. La exploración es un pilar versátil que puede usarse para la creación de tensión, la resolución de problemas y la narración de historias. Puede incluir la búsqueda de tesoros, la navegación por entornos peligrosos o la infiltración en bases enemigas."
    },
    {
      tipo: "h3",
      texto: "Interacción Social"
    },
    {
      tipo: "parrafo",
      texto: "La interacción social implica que los personajes interactúen con otros personajes, ya sean PNJ o héroes. Incluye conversaciones, negociaciones, interrogatorios, seducción, intimidación y cualquier otra situación en la que los personajes usan sus habilidades sociales para lograr sus objetivos. Las interacciones sociales pueden ser tan simples como pedir direcciones o tan complejas como negociar un tratado de paz."
    },
    {
      tipo: "h3",
      texto: "Resolución de Problemas"
    },
    {
      tipo: "parrafo",
      texto: "La resolución de problemas implica que los personajes usen su ingenio y habilidades para superar desafíos que no se resuelven fácilmente con el combate o la interacción social. Puede incluir la resolución de acertijos, la desactivación de trampas, la planificación de atracos complejos, la piratería informática de sistemas de seguridad o la creación de inventos para superar obstáculos. Los desafíos de resolución de problemas pueden ser tan simples como abrir una cerradura o tan complejos como frustrar un plan maestro de un villano."
    },
    {
      tipo: "h2",
      texto: "La Escena de Acción"
    },
  ]
};
export default capitulo14;