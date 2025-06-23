const capitulo12 = {
  id: "capitulo-12",
  titulo: "Capítulo 12: La Caja de Herramientas del GM",
  numero: 12,
  contenido: [
    {
      tipo: "introduccion",
      texto: "Ser un Game Master es un desafío, pero también inmensamente gratificante. Puede ser mucho trabajo, pero viene con una increíble sensación de alegría y satisfacción. La gente ha estado desempeñando este rol durante más de 50 años y se han escrito bibliotecas enteras de consejos sobre el tema. Ya seas un GM experimentado o te estés preparando para dirigir tu primera partida, eres el corazón y el alma de este pasatiempo que todos compartimos. La Parte III de Everyday Heroes existe para ayudarte a prepararte para el juego y a construir aventuras fantásticas en el mundo moderno."
    },
    {
      tipo: "parrafo",
      texto: "Este capítulo se centra en reglas y consejos para construir y dirigir diferentes tipos de encuentros, aplicar las reglas del juego, crear escenas de persecución emocionantes y más."
    },
    {
      tipo: "h2",
      texto: "CDs por Nivel"
    },
    {
      tipo: "parrafo",
      texto: "Un GM establece los números de Clase de Dificultad (CD), ya sea al planificar un encuentro o al responder a las acciones de un personaje en medio de una escena de acción tensa. Debido a que Everyday Heroes utiliza mecánicas sencillas, no se tarda mucho en tener una idea de lo que hace una CD fácil o difícil."
    },
    {
      tipo: "parrafo",
      texto: "Al establecer una CD, se busca que los personajes de un nivel determinado tengan éxito aproximadamente el 55 por ciento de las veces. En general, las CDs de combate deberían ser más difíciles de superar para los personajes que las CDs de las pruebas de habilidad o de destreza. ¿Por qué? Para reflejar la experiencia, y porque las pruebas de destreza suelen ser realizadas por el miembro más hábil del equipo, a diferencia de todos los que participan en el combate."
    },
    {
      tipo: "parrafo",
      texto: "La tabla de CDs por Nivel muestra el rango de bonificaciones que los héroes pueden obtener por nivel, así como las CDs medianas para diferentes tipos de tiradas. En cualquier banda de nivel dada, la primera CD en cada entrada representa el objetivo para un desafío promedio para un personaje promedio (que dicho personaje debería superar el 55 por ciento de las veces), mientras que la CD entre paréntesis representa el objetivo para un desafío promedio para los héroes más talentosos. A medida que los personajes suben de nivel, la brecha entre el héroe más talentoso y un personaje promedio se hace más grande. La columna \"CD de Prueba de Habilidad\" representa las pruebas de habilidad realizadas utilizando una competencia o experiencia. La columna \"CD de Prueba de Característica\" es para pruebas de característica realizadas sin competencia. La columna \"CD de Combate\" cubre las tiradas de ataque y las tiradas de salvación realizadas en combate."
    },
    {
      tipo: "parrafo",
      texto: "En general, para establecer una CD difícil, añade hasta 5 a cualquiera de los números de la tabla. Para establecer una CD fácil, resta hasta 5. Esto crea un rango de tasa de éxito del 30 por ciento al 80 por ciento para personajes del nivel indicado. La posibilidad de que los personajes obtengan ventaja es común, por lo que los GM deben inclinarse por el lado alto al establecer tareas realmente desafiantes."
    },
    {
      tipo: "parrafo",
      texto: "También cabe destacar que los valores de Defensa tanto para héroes como para PNJ suelen ser más altos que los rangos de CD de combate, especialmente si se tiene en cuenta que tres cuartos de cobertura proporcionan Defensa 20. Esto se debe a que la mayoría de los héroes centrados en el combate se encuentran en el extremo superior del rango de héroes para su estilo de combate elegido, y a que en los niveles inferiores, los valores de daño pueden ser altos en comparación con los puntos de golpe. Pero esta ventaja defensiva se erosiona lentamente a medida que los héroes suben de nivel y obtienen un colchón de puntos de golpe mayor."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-cds-por-nivel",
      titulo: "CDs por Nivel",
      encabezados: ["Nivel de Héroe", "Rango de Bonificación del Héroe", "CD de Prueba de Habilidad", "CD de Prueba de Característica", "CD de Combate"],
      filas: [
        ["1", "-1 a +7", "13 (17)", "11 (13)", "12 (15)"],
        ["2-4", "-1 a +8", "13 (18)", "11 (14)", "13 (16)"],
        ["5", "-1 a +10", "14 (20)", "11 (14)", "13 (17)"],
        ["6-8", "-1 a +11", "15 (21)", "12 (15)", "14 (18)"],
        ["9-10", "-1 a +13", "16 (23)", "12 (15)", "14 (19)"]
      ]
    },
    {
      tipo: "h2",
      texto: "Área de Efecto"
    },
    {
      tipo: "parrafo",
      texto: "Ciertos efectos en Everyday Heroes cubren un área, lo que les permite afectar a múltiples objetivos a la vez. La mayoría de las áreas de efecto se describen como con un radio, lo que significa que desde un punto central, se dibuja un círculo utilizando una línea de esa longitud que se extiende en todas direcciones desde el punto central. Otra forma de pensarlo es que cualquier cosa a la distancia especificada o menos del punto central se ve potencialmente afectada."
    },
    {
      tipo: "parrafo",
      texto: "En juegos que usan un mapa de batalla para el combate y quieren ser precisos sobre el área, se puede extender una línea de la distancia dada desde el centro de un cuadrado objetivo. Si esa línea toca o atraviesa el centro de cualquier otro cuadrado, ese otro cuadrado cae en el área de efecto. Para hacer un juicio más aproximado, divide el radio por el tamaño de un cuadrado, y luego cuenta desde el cuadrado central como cuadrado 0. Por ejemplo, una granada de fragmentación tiene un área de efecto de 20 pies de radio. En un mapa con cuadrados de 5 pies, esa área de efecto se extiende 4 cuadrados en cada dirección, sin contar el cuadrado inicial."
    },
    {
      tipo: "parrafo",
      texto: "El área de efecto del fuego de supresión es efectivamente un triángulo y se describe bajo la acción Fuego de Supresión en el Capítulo 9."
    },
    {
      tipo: "parrafo",
      texto: "Al jugar sin un mapa en juegos estilo \"teatro de la mente\", los GM y los jugadores deben juzgar la relación entre las personas durante el combate. En el combate moderno, la mayoría de los combatientes permanecen a la vista unos de otros, pero no se sitúan directamente junto a otros combatientes para evitar el riesgo de disparos perdidos. En general, los enemigos agrupados son mucho más fáciles de atacar que los que están dispersos."
    },
    {
      tipo: "parrafo",
      texto: "Si la ubicación de un héroe no está clara al determinar el área de efecto, el mejor enfoque es preguntar a los jugadores dónde imaginan que están sus héroes, luego apuntar el ataque y declarar quiénes se ven afectados. Del mismo modo, un jugador cuyo personaje realiza un ataque de área o efectúa fuego de supresión puede preguntar cuántos objetivos puede alcanzar. La respuesta depende de ti, quien debe intentar ser justo con la situación y dejar que los jugadores sientan que están teniendo un impacto significativo en la lucha."
    },
    {
      tipo: "h2",
      texto: "Diseñando Encuentros"
    },
    {
      tipo: "parrafo",
      texto: "Al planificar aventuras, un GM puede dividir los desafíos que los personajes enfrentarán en encuentros individuales. Típicamente, un encuentro tiene lugar en un solo lugar e involucra un desafío principal o un conjunto de desafíos interconectados. Combate, desafíos sociales e investigación de un área son todos ejemplos de encuentros. Los encuentros pueden fusionarse entre sí, pero los personajes suelen lidiar con ellos uno a la vez a medida que avanzan en la historia."
    },
    {
      tipo: "parrafo",
      texto: "La mayor parte del contenido de una aventura se encuentra dentro de los encuentros. El tiempo entre encuentros suele ser un tiempo de \"avance rápido\", como viajar o descansar, o tiempo de inactividad, ninguno de los cuales requiere mucha planificación por tu parte. Simplemente necesitan ser conscientes de cuándo es probable que los personajes tengan tiempo para descansar o comprar entre encuentros."
    },
    {
      tipo: "h3",
      texto: "Encuentros de Combate"
    },
    {
      tipo: "parrafo",
      texto: "La acción moderna a menudo implica que los personajes se metan en peleas durante una aventura. Los encuentros de combate están muy estructurados, utilizando las reglas documentadas en el capítulo 9. Tanto los GM como los jugadores deben consultar ese capítulo para familiarizarse con los conceptos básicos del combate."
    },
    {
      tipo: "parrafo",
      texto: "Al crear un encuentro de combate, primero el GM decide quién se opone a los personajes. Temáticamente, esto puede ser cualquiera o cualquier cosa que tenga sentido para la historia. En el aspecto mecánico, el GM también determina la dificultad del encuentro y selecciona enemigos que puedan representar un nivel de amenaza apropiado."
    },
    {
      tipo: "h4",
      texto: "Presupuesto de Oponentes"
    },
    {
      tipo: "parrafo",
      texto: "Al construir un encuentro de dificultad promedio, todo lo que el GM necesita hacer es contar el número de héroes, luego elegir un número de PNJ cuyo índice de desafío en combate sume aproximadamente ese número."
    },
    {
      tipo: "parrafo",
      texto: "Para encontrar cuántos héroes vale un PNJ, busca el nivel de los personajes en la tabla de Valores de Oponente por Nivel y CR, luego busca el número en la columna que coincide con el CR del PNJ."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-valores-oponente-por-nivel-y-cr",
      titulo: "Valores de Oponente por Nivel y CR",
      encabezados: ["Nivel de Equipo", "0", "⅛", "¼", "½", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
      filas: [
        ["1", "⅛", "⅓", "1", "2", "3", "5", "8", "10", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["2", "⅒", "⅕", "½", "1", "2", "3", "5", "8", "10", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["3", "¹/₁₅", "⅛", "⅓", "¾", "1½", "3", "5", "8", "9", "10", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["4", "¹/₂₀", "⅒", "⅕", "½", "1", "2", "4", "5", "6", "8", "9", "10", "-", "-", "-", "-", "-", "-", "-"],
        ["5", "-", "¹/₁₅", "⅛", "⅓", "½", "1½", "2½", "3½", "5", "6", "8", "9", "10", "-", "-", "-", "-", "-", "-"],
        ["6", "-", "¹/₂₀", "⅒", "¼", "⅓", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "-", "-", "-", "-"],
        ["7", "-", "-", "¹/₁₅", "⅕", "¼", "¾", "1½", "2", "3", "4", "5", "6", "7", "8", "9", "10", "-", "-", "-"],
        ["8", "-", "-", "¹/₂₀", "⅙", "⅕", "½", "1", "1½", "2", "3", "4", "5", "6", "7", "8", "9", "10", "-", "-"],
        ["9", "-", "-", "-", "⅛", "⅙", "⅓", "¾", "1", "1½", "2½", "3", "4", "5", "6", "7", "8", "9", "10", "-"],
        ["10", "-", "-", "-", "⅒", "⅛", "¼", "½", "¾", "1", "1½", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Por ejemplo, para un equipo de nivel 2, un PNJ de CR ¼ vale ½ de un héroe. Contra un equipo de cinco héroes de nivel 2, diez oponentes de CR ¼ harían un encuentro promedio. Mientras tanto, un PNJ de CR 1 vale tres personajes de nivel 2, lo que permite a un GM construir un encuentro promedio con un oponente de CR 1 más cuatro oponentes de CR ¼."
    },
    {
      tipo: "parrafo",
      texto: "Un encuentro promedio requerirá cierto esfuerzo por parte del equipo para superarlo, pero a menos que estén agotados, hay pocas posibilidades de que pierdan dicha pelea. Para un encuentro cuya dificultad sea mayor o menor que el promedio, el GM simplemente selecciona PNJ cuyo valor total sea mayor o menor de lo normal:"
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Encuentro Trivial",
          definicion: "Un encuentro con un valor inferior a dos tercios del presupuesto de oponentes del equipo es trivial, lo que representa un pequeño desafío para los personajes o jugadores. Utiliza estos encuentros con moderación, ya que pueden estancar fácilmente el juego con combates innecesarios."
        },
        {
          termino: "Encuentro Fácil",
          definicion: "Un encuentro con un valor tan bajo como dos tercios del presupuesto de oponentes del equipo es fácil. Estos encuentros permiten que los jugadores y personajes se sientan geniales y poderosos, pero pueden costarles una pequeña cantidad de recursos."
        },
        {
          termino: "Encuentro Difícil",
          definicion: "Un encuentro con un valor hasta un 50 por ciento superior al presupuesto de oponentes del equipo es difícil. Dichos encuentros pueden ser difíciles pero no abrumadores, y es probable que cuesten más recursos que un encuentro promedio."
        },
        {
          termino: "Encuentro Muy Difícil",
          definicion: "Un encuentro con un valor de hasta el doble del presupuesto de oponentes del equipo es muy difícil. Los encuentros muy difíciles pueden ser peligrosos. Es probable que los personajes sigan saliendo victoriosos, pero una racha de mala suerte podría hacer que pierdan la pelea si ya están agotados de recursos."
        },
        {
          termino: "Encuentro Mortal",
          definicion: "Los encuentros con un valor superior al doble del presupuesto de oponentes del equipo son mortales. Como su nombre indica, los personajes pueden morir en un encuentro mortal si tienen mala suerte o si tienen pocos recursos. Los personajes pueden perder una pelea en esta dificultad, pero con suficiente gasto de recursos, probablemente al menos saldrán cojeando, a menos que el valor del encuentro alcance el triple del nivel del equipo o más."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Roles de PNJ"
    },
    {
      tipo: "parrafo",
      texto: "Los PNJ cumplen una serie de funciones en combate, que un GM puede utilizar para decidir qué tipo de encuentro crear. Estas funciones solo sirven como guía general sobre cómo se pueden utilizar los oponentes en la construcción de encuentros, qué tipos de personajes les van bien o mal, y qué tácticas pueden emplear. Por lo demás, no tienen efectos mecánicos. Un PNJ puede tener cualquier número de funciones siempre que todas sean aplicables."
    },
    {
      tipo: "h5",
      texto: "Roles Básicos"
    },
    {
      tipo: "parrafo",
      texto: "Los roles básicos de combate definen lo que un PNJ hace en una pelea en el sentido más amplio."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Mole (Hulk)",
          definicion: "Las Moles tienen muchos puntos de golpe y una Defensa baja. Son divertidas para que los personajes las golpeen con sus ataques de mayor daño, pero pueden ser efectivas contra héroes que ya golpean la mayoría de las veces o que tienen dificultades para infligir mucho daño."
        },
        {
          termino: "Asesino (Killer)",
          definicion: "Los Asesinos infligen mucho daño, pero son relativamente fáciles de eliminar. Un Asesino no dura tanto como otros enemigos, por lo que los personajes con un alto bonificador de iniciativa que puedan eliminarlos rápidamente disfrutarán luchando contra ellos, al igual que los personajes resistentes que puedan proteger a sus aliados. Los personajes con Defensa y puntos de golpe más bajos a veces pueden tener dificultades contra un Asesino."
        },
        {
          termino: "Líder (Leader)",
          definicion: "Los Líderes son PNJ que otorgan a sus aliados algún tipo de beneficio o mejora. Los personajes que pueden concentrar los ataques pueden eliminar fácilmente a los líderes primero, mientras que aquellos con movilidad y alcance limitados pueden tener dificultades contra ellos. Los líderes son buenos enemigos finales cuando están apoyados por aliados."
        },
        {
          termino: "Sombra (Shadow)",
          definicion: "Las Sombras confían en el sigilo y la emboscada, junto con una movilidad superior que les permite esconderse o encontrar cobertura después de un ataque. Los héroes perceptivos brillan contra las sombras, al igual que los personajes que pueden impedir que se muevan. Los personajes directos pueden tener más problemas contra los PNJ de Sombra."
        },
        {
          termino: "Apoyo (Support)",
          definicion: "Los PNJ de Apoyo desempeñan algún papel en combate distinto de infligir daño, recibir daño o mejorar a sus aliados. Esto suele significar que debilitan, inmovilizan o acosan de alguna manera a los héroes, o proporcionan curación o defensa a sus aliados. Los personajes con buenas tiradas de salvación son más efectivos contra los PNJ de Apoyo, al igual que aquellos que pueden desempeñarse bien incluso cuando están obstaculizados en combate. Los personajes con malas tiradas de salvación o que dependen de una sola táctica pueden tener dificultades."
        },
        {
          termino: "Tanque (Tank)",
          definicion: "Los Tanques se centran en proteger a sus aliados, ya sea explícitamente con características y habilidades específicas, o interponiéndose delante de ellos y absorbiendo el daño. Suelen tener una Defensa alta, buenos bonificadores de tirada de salvación y puntos de golpe decentes, pero infligen menos daño que otros PNJ. Un Tanque permite que los personajes con alta precisión y movilidad brillen, y castigan a los héroes con malas tácticas."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Roles de Alcance"
    },
    {
      tipo: "parrafo",
      texto: "Dos roles de combate determinan si un PNJ lucha mejor de cerca o a distancia:"
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Cuerpo a Cuerpo (Melee)",
          definicion: "Los oponentes cuerpo a cuerpo prosperan en el combate cercano. Pueden tener ataques a distancia, pero esos ataques suelen tener menos impacto que sus opciones cuerpo a cuerpo. Los héroes que golpean fuerte en combate cuerpo a cuerpo suelen lidiar mejor con los oponentes cuerpo a cuerpo, pero los personajes centrados en el combate a distancia a menudo pueden eliminar a los PNJ cuerpo a cuerpo a distancia antes de que se acerquen lo suficiente como para suponer un peligro."
        },
        {
          termino: "A Distancia (Ranged)",
          definicion: "Los enemigos a distancia son más peligrosos a distancia, ya que sus ataques cuerpo a cuerpo infligen menos daño que sus opciones a distancia. Los héroes que pueden luchar a distancia suelen concentrarse en los oponentes a distancia, pero son más efectivos contra los personajes cuerpo a cuerpo antes de que puedan acercarse lo suficiente como para desplegar sus opciones de ataque."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Roles de Agrupación"
    },
    {
      tipo: "parrafo",
      texto: "Los roles de agrupación determinan si un PNJ funciona mejor solo o como parte de un ataque masivo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Carne de Cañón (Fodder)",
          definicion: "Los PNJ de Carne de Cañón son fáciles de usar. Se pueden usar en grandes grupos contra héroes de nivel superior, ya que suelen realizar ataques simples y no tienen habilidades que se recarguen ni recursos que rastrear. Los personajes que pueden golpear a varios enemigos a la vez brillarán contra los PNJ de Carne de Cañón, mientras que aquellos que se especializan en infligir grandes cantidades de daño a objetivos individuales pueden tener dificultades y podrían verse abrumados."
        },
        {
          termino: "Solitario (Loner)",
          definicion: "Los Solitarios sobresalen en la lucha por su cuenta o con poco apoyo. Suelen ser complejos en su configuración mecánica, realizan múltiples ataques o poseen habilidades que se recargan o tienen un uso limitado. A los héroes que infligen mucho daño a un solo enemigo les gustará luchar contra los Solitarios, mientras que los personajes que se centran en dañar a varios enemigos pueden tener más dificultades. Los Solitarios son buenos enemigos finales, ya sea solos o con aliados."
        }
      ]
    },
    {
      tipo: "parrafo",
      texto: "Los PNJ que no tienen roles pueden funcionar en cualquier rol, pero suelen ser menos efectivos."
    },
    {
      tipo: "h4",
      texto: "Ajustando la Dificultad del Combate"
    },
    {
      tipo: "parrafo",
      texto: "Cuando estalla una pelea, no son solo las fuerzas del lado enemigo las que determinan lo difícil que se ponen las cosas. Esta sección cubre otros factores que pueden afectar el desafío de un encuentro de combate."
    },
    {
      tipo: "h5",
      texto: "Aliados"
    },
    {
      tipo: "parrafo",
      texto: "Si los personajes tienen PNJ aliados en una pelea, no los cuentes como personajes adicionales al determinar la dificultad de un encuentro. En su lugar, busca su valor en la tabla de CR de Oponentes como con los PNJ enemigos, pero resta ese valor del valor del encuentro en lugar de sumarlo."
    },
    {
      tipo: "h5",
      texto: "Entorno y Terreno"
    },
    {
      tipo: "parrafo",
      texto: "La ubicación de un encuentro puede afectar fácilmente su dificultad. El terreno no proporciona matemáticas exactas como lo hacen los PNJ, pero el GM y los jugadores deben tener en cuenta lo siguiente:"
    },
    {
      tipo: "lista",
      items: [
        "Mejor cobertura para los personajes hace que un encuentro sea más fácil, mientras que mejor cobertura para sus enemigos hace que un encuentro sea más difícil."
        , "Los enemigos que tienen ataques de largo alcance y comienzan a distancia hacen que un encuentro sea más difícil, especialmente si el espacio entre los personajes y sus enemigos presenta poca o ninguna cobertura."
        , "Los enemigos que se centran en ataques a distancia y se encuentran en espacios cerrados hacen que un encuentro sea más fácil, mientras que los enemigos centrados en el cuerpo a cuerpo en el mismo entorno crean un encuentro más difícil."
        , "Un punto de estrangulamiento, una única ubicación por la que todos los combatientes deben pasar para moverse por el campo de batalla, facilita un encuentro si los personajes están en inferioridad numérica y en posición, pero lo dificulta si intentan avanzar."
      ]
    },
    {
      tipo: "h5",
      texto: "Tácticas"
    },
    {
      tipo: "parrafo",
      texto: "Los enemigos inteligentes pueden ajustar la dificultad de un encuentro buscando cobertura, concentrando el fuego en un héroe a la vez, manteniéndose fuera del alcance de los personajes cuerpo a cuerpo, o cualquier otra táctica que los haga individualmente más peligrosos. En el otro extremo, si los enemigos se lanzan a ciegas, ignoran la posible cobertura, atacan a quien esté delante en un momento dado, se enfrentan cara a cara con especialistas en cuerpo a cuerpo, o de lo contrario toman malas decisiones tácticas, serán más fáciles de manejar."
    },
    {
      tipo: "parrafo",
      texto: "Es difícil asignar números a la superioridad táctica, pero las tácticas son extremadamente fáciles de ajustar durante una pelea. Si las cosas empiezan a ir mal para los personajes, el GM podría hacer que un enemigo cometa un error. Del mismo modo, para un equipo que constantemente elimina amenazas con facilidad, un GM podría querer aumentar el desafío planificando los movimientos y tácticas de los enemigos con más cuidado."
    },
    {
      tipo: "h5",
      texto: "Equipo"
    },
    {
      tipo: "parrafo",
      texto: "El mundo moderno presenta armas poderosas y de alta tecnología que no requieren un entrenamiento o habilidad significativos para su uso. Un GM debe tener en cuenta los siguientes problemas de equilibrio al decidir qué limitaciones de armas imponer a los héroes, si las hay, y cómo organizar los combates para que todos se diviertan."
    },
    {
      tipo: "parrafo",
      texto: "En general, las armas en Everyday Heroes son más peligrosas que las opciones sin armas de fuego del juego, tanto por su sólido daño como porque los personajes pueden emplearlas a gran distancia. Un héroe armado con un cuchillo de cocina simplemente no presentará el mismo nivel de peligro que uno armado con un rifle de asalto militar y granadas de mano. Los héroes basados en el cuerpo a cuerpo pueden elegir habilidades fuertes para ayudarlos a competir, pero no hay muchas formas de usar sus puños a cien metros de distancia. Las armas siempre proporcionan una ventaja en el combate moderno."
    },
    {
      tipo: "parrafo",
      texto: "Dicho esto, el GM siempre puede intentar organizar peleas en entornos donde los personajes cuerpo a cuerpo tengan oportunidades razonables para acortar distancias y entrar en la refriega. Por ejemplo, asegúrate de que el entorno cuente con suficiente cobertura. Esto permite a los personajes cuerpo a cuerpo cargar en su turno y luego agacharse al final del movimiento. Por otro lado, los enemigos con armas automáticas o granadas pueden causar mucho daño a los héroes que no tienen ninguna cobertura para esconderse. También puedes organizar peleas en espacios cerrados, como un almacén o un garaje, aunque el GM debe tener cuidado de no obstaculizar a los personajes que se especializan en armas de largo alcance."
    },
    {
      tipo: "parrafo",
      texto: "Otra estrategia de equipo que el GM puede emplear es hacer coincidir los tipos de armas enemigas con los tipos de armas que portan los héroes. Si el equipo tiene una mezcla equitativa de combatientes cuerpo a cuerpo y a distancia, armar a los enemigos de manera similar puede ayudar a garantizar que todos tengan un oponente con el que enfrentarse."
    },
    {
      tipo: "h4",
      texto: "Combate y Alcance"
    },
    {
      tipo: "parrafo",
      texto: "El combate moderno puede sentirse bastante diferente del combate de fantasía. La mayoría de las batallas de fantasía tienen lugar cara a cara, con atacantes a distancia relativamente cerca del campo de batalla, excepto en casos raros. En un entorno moderno, un personaje puede ser atacado desde más de una milla de distancia por un enemigo del que no es consciente. Esta sección detalla algunas de las consideraciones que entran en juego al organizar peleas en un entorno moderno."
    },
    {
      tipo: "h5",
      texto: "Mapas"
    },
    {
      tipo: "parrafo",
      texto: "Al igual que los juegos de fantasía 5e, Everyday Heroes está diseñado para funcionar con o sin mapas de batalla. Todo se reduce al estilo que prefiera tu grupo. Los mapas permiten mediciones precisas y permiten a todos ver cómo se desarrolla la batalla. Usar el combate descriptivo al estilo \"teatro de la mente\" tiene más flexibilidad, pero puede volverse confuso y requiere que el GM no solo describa eficazmente la situación, sino que también juzgue las acciones de los personajes de una manera que parezca justa para todos."
    },
    {
      tipo: "parrafo",
      texto: "Uno de los desafíos de un juego que usa mapas es que ningún mapa puede cubrir las distancias potencialmente involucradas en un tiroteo al mismo tiempo que maneja el combate cuerpo a cuerpo. La mayoría de los mapas de batalla se hacen con una escala de primer plano de 5 pies por cuadrado en mente. Los combatientes que disparan a objetivos desde un rango de 100 yardas, sin mencionar los verdaderos francotiradores que disparan desde aún más lejos, no cabrán en un mapa así. Muchos GM mezclan mapas con el teatro de la mente para unir esas batallas."
    },
    {
      tipo: "parrafo",
      texto: "Para los GM que no usan mapas, puede ser un desafío determinar si un combatiente que usa la reacción Agacharse para Cubrirse puede encontrar y alcanzar cobertura, o exactamente qué tan lejos está un héroe cuerpo a cuerpo del asesino que le dispara. Incluso para los grupos que no juegan con un mapa de batalla, puede ser útil tener un mapa a pequeña escala para mostrar las posiciones relativas o una descripción sólida del GM que cree una imagen mental de la situación."
    },
    {
      tipo: "parrafo",
      texto: "Un mapa de posicionamiento sin una escala particular que muestre las posiciones de los combatientes entre sí puede resolver este problema para los grupos de teatro de la mente. Dicho mapa funciona a casi cualquier escala, e incluso puedes usar un mapa de posicionamiento a gran escala junto con un mapa de encuentro a pequeña escala para mostrar a los combatientes en combate cuerpo a cuerpo."
    },
    {
      tipo: "h5",
      texto: "Preparando el Escenario"
    },
    {
      tipo: "parrafo",
      texto: "Los GM crean y preparan las escenas en las que tiene lugar el combate. La mayoría de las aventuras escritas detallan ubicaciones específicas para sus encuentros de combate, ya sea que los héroes estén en una ubicación determinada cuando los enemigos atacan, o los enemigos estén en una ubicación determinada cuando los héroes llegan. De cualquier manera, el GM generalmente controla si un encuentro tiene lugar a largo o corto alcance."
    },
    {
      tipo: "parrafo",
      texto: "El GM siempre debe tener en cuenta las capacidades de sus héroes al planificar los encuentros. Los personajes deben ser desafiados, pero no abrumados durante la mayoría de los combates. Una emboscada en un acantilado lanzada sobre un grupo de personajes centrados en el combate cuerpo a cuerpo probablemente los dejará en serios problemas, sin importar su experiencia y capacidades. Del mismo modo, una pelea de bar con un equipo de héroes que tienen una habilidad cuerpo a cuerpo mínima puede salir muy mal. A veces, es posible que quieras explotar las debilidades de los héroes para desafiarlos, pero es importante evitar que esos escenarios frustren a tus jugadores. Los héroes siempre deben tener la oportunidad de superar el desafío al final."
    },
    {
      tipo: "parrafo",
      texto: "La misma idea funciona a la inversa. Si un GM lanza constantemente grupos de artistas marciales contra héroes que son todos especialistas en armas, es probable que esos héroes terminen disparando a sus enemigos como peces en un barril. Debes recompensar a los personajes con combates fáciles de vez en cuando, pero los enemigos deben adaptarse rápidamente e intentar diferentes tácticas."
    },
    {
      tipo: "h4",
      texto: "Encuentros de Persecución"
    },
    {
      tipo: "parrafo",
      texto: "Las persecuciones son una parte tan importante de las películas de acción como el combate. Crear grandes escenas de persecución es increíblemente divertido y gratificante para un GM, ya que una buena persecución eleva el nivel de emoción de todos."
    },
    {
      tipo: "parrafo",
      texto: "El primer paso para diseñar un encuentro de persecución es comprender cómo funcionan las persecuciones en las reglas. Un GM debería eventualmente familiarizarse lo suficiente con las reglas de persecución como para sentirse capaz de improvisar libremente mientras dirige una para mantener la acción en movimiento. Las reglas para las persecuciones se describen en el capítulo 11 y describen todo lo que pueden hacer los participantes en una persecución. Esta sección trata más sobre cómo configurar las persecuciones, centrándose en hacer que el GM se sienta seguro al dirigirlas. Al igual que con las reglas de persecución, esta sección usa \"persecución\" para referirse tanto a persecuciones como a carreras, ya que las reglas para ambas son casi idénticas."
    },
    {
      tipo: "h5",
      texto: "Cuándo No Usar una Persecución"
    },
    {
      tipo: "parrafo",
      texto: "Una persecución casi siempre da lugar a una escena emocionante. Pero no todas las situaciones necesitan que se desarrolle una escena completa para mostrar a los personajes atrapando a alguien o huyendo de una persecución. Una escena de persecución completa podría no ser necesaria en ninguna de las siguientes circunstancias:"
    },
    {
      tipo: "lista",
      items: [
        "Las consecuencias de la persecución no son importantes. En un combate, los personajes suelen luchar por sus vidas, y aunque una persecución no es tan compleja como una pelea, sigue siendo una gran inversión de tiempo de juego. Por lo tanto, no dirijas una persecución si los jugadores no están interesados en el resultado."
        , "El lugar no es dinámico. Una escena de persecución requiere un paisaje en constante cambio lleno de complicaciones y oportunidades para la acción. No uses una escena de persecución para una simple carrera destinada a ver quién es más rápido."
        , "La persecución es en realidad solo una pelea. En algunos escenarios, un GM podría preparar un combate de alta velocidad sobre vehículos en movimiento o algún otro entorno similar a una persecución. Pero si nadie intenta escapar, no es una persecución. Dicha escena se puede resolver como cualquier combate, ¡solo que con caídas mucho más mortales!"
      ]
    },
    {
      tipo: "parrafo",
      texto: "Cuando no hay necesidad de usar una persecución completa, un GM puede resolver una carrera a pie rápida con una simple contienda de habilidad, como una contienda de Fuerza (Atletismo), o una prueba de Fuerza (Atletismo) grupal realizada contra una CD igual a la prueba de Fuerza (Atletismo) pasiva de los oponentes. Esta configuración es más útil cuando el resultado es incierto, pero tampoco es tan crítico. Y si el resultado de una persecución no importa en absoluto, el GM puede omitir las tiradas de dados por completo y simplemente narrar el resultado."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Cuándo No Usar una Persecución",
      texto: "Un grupo de enemigos está casi derrotado, pero uno de ellos huye. Podría importar si escapan para contarle a su jefe lo sucedido, pero los héroes acaban de tener una pelea, este único enemigo no es importante y las consecuencias de su escape son menores. Por lo tanto, el GM podría decidir solicitar una prueba de Fuerza (Atletismo) a cualquier personaje que diga querer perseguir al villano que huye, o simplemente podría decidir que el villano escapa con éxito o es capturado automáticamente por cualquiera que lo persiga."
    },
    {
      tipo: "h5",
      texto: "Configurando una Persecución"
    },
    {
      tipo: "parrafo",
      texto: "Las persecuciones pueden convertirse en parte de un juego cuando el GM las planifica como una escena importante, o cuando suceden espontáneamente. Las reglas de persecución de Everyday Heroes están diseñadas para facilitar el manejo de ambas situaciones. Lo primero que un GM considera al configurar una persecución es cómo quiere que termine. Al igual que el inicio de una persecución, el final de una persecución puede ser planificado o no planificado."
    },
    {
      tipo: "h5",
      texto: "Límite de Asaltos y Límite de Diferencia"
    },
    {
      tipo: "parrafo",
      texto: "Todas las persecuciones tienen un límite de asaltos que determina cuándo la persecución termina automáticamente. Por ejemplo, un GM podría decidir que una persecución de coches va a durar 4 asaltos. Esto le permite planificar cuatro complicaciones geniales para que los personajes las afronten antes de que la persecución termine. Al final del límite de asaltos, el ganador de la persecución es el bando que tenga más puntos de persecución obtenidos por superar desafíos, o cuando el bando contrario falla un desafío gravemente. En caso de empate, los personajes que intentan huir (el bando de la presa) son capturados por los personajes que los persiguen (el bando del depredador)."
    },
    {
      tipo: "parrafo",
      texto: "Las persecuciones pueden ser de cualquier duración, pero un límite de tiempo de 3 a 4 asaltos es suficiente para la mayoría de las persecuciones. Un límite de tiempo de 5 a 8 asaltos funciona para una persecución más compleja, pero en tal caso debería incluir también un límite de diferencia, en caso de que un bando se adelante lo suficiente como para que el tiempo adicional en la escena de persecución no sea emocionante. Al final de cualquier asalto, si la diferencia entre los puntos de persecución obtenidos por ambos bandos en una persecución es igual o superior al límite de diferencia, la persecución termina automáticamente y el bando con más puntos de persecución gana. Por ejemplo, un GM ha establecido el límite de asaltos de una persecución complicada en 6 y el límite de diferencia en 5. Al final del asalto 3, el bando de la presa tiene 3 puntos de persecución y el bando del depredador tiene 8 puntos de persecución, lo que iguala el límite de diferencia y establece que el bando del depredador ha alcanzado al bando de la presa mucho antes del límite de tiempo de la persecución."
    },
    {
      tipo: "parrafo",
      texto: "Al decidir un límite de diferencia apropiado para una persecución, un GM debe pensar en el número de héroes en la persecución, lo que influye en gran medida en cuántos puntos de persecución puede ganar cada bando durante cada asalto. Por defecto, una persecución debería usar un límite de diferencia igual a 1.5 por héroe, redondeado hacia arriba. Un límite de diferencia de alrededor de 1 por héroe crea una persecución ajustada donde un asalto excepcional podría terminarla, adecuado para persecuciones de duración corta a media o escenas tensas donde alguien podría escapar o ser atrapado en cualquier momento. Un límite de diferencia más cercano a 2 por personaje requiere que un bando tenga una ventaja sólida antes de ganar automáticamente, y es más adecuado para persecuciones más largas cuyas complicaciones pueden hacer las cosas interesantes incluso después de que quede claro hacia dónde se dirige la persecución."
    },
    {
      tipo: "h5",
      texto: "Finales de Persecución no Planificados"
    },
    {
      tipo: "parrafo",
      texto: "Las persecuciones también pueden terminar cuando ocurren eventos que naturalmente detendrían la persecución. Lo más común es que, si todos los participantes de un bando abandonan, la persecución termina. Si una persecución parece haberse prolongado demasiado, el GM puede simplemente hacer que los PNJ se retiren por frustración."
    },
    {
      tipo: "h5",
      texto: "CD de Persecución"
    },
    {
      tipo: "parrafo",
      texto: "Una persecución debe tener una CD predeterminada utilizada para la mayoría o todas sus complicaciones. Como línea base, CD 13 funciona bien para una persecución de bajo nivel (niveles 1-4), CD 15 funciona para una persecución de nivel medio (niveles 5-8), y CD 16 funciona para una persecución de alto nivel (nivel 9-10). Las CDs más bajas en una persecución favorecen a los héroes y las CDs más altas favorecen a sus oponentes, ya que solo los héroes tiran contra las complicaciones para determinar qué lado gana puntos de persecución."
    },
    {
      tipo: "parrafo",
      texto: "Aunque un héroe que usa la acción Ganar Terreno normalmente participa en una contienda de habilidad con un personaje del otro lado en una persecución, un GM también puede usar la CD de persecución predeterminada para tales acciones."
    },
    {
      tipo: "parrafo",
      texto: "Consulta la sección \"CDs por Nivel\" en el capítulo 12 para obtener más información sobre cómo establecer las CDs."
    },
    {
      tipo: "h5",
      texto: "Simplificando las Acciones Enemigas"
    },
    {
      tipo: "parrafo",
      texto: "Por defecto, los enemigos realizan acciones durante una persecución al igual que los héroes, pero un GM puede aprovechar algunas diferencias y opciones en el entorno más narrativo y fluido de una escena de persecución."
    },
    {
      tipo: "h6",
      texto: "No-acciones"
    },
    {
      tipo: "parrafo",
      texto: "Durante una persecución donde hay un gran número de PNJ involucrados, puedes simplemente narrar lo que algunos o todos los PNJ están haciendo en el entorno en lugar de hacer que todos realicen acciones específicas."
    },
    {
      tipo: "h6",
      texto: "Combinando Acciones"
    },
    {
      tipo: "parrafo",
      texto: "Cuando una persecución involucra a muchos PNJ, el GM siempre puede combinar algunas o todas sus acciones en una sola acción de Ganar Terreno. Esto es funcionalmente similar a hacer que algunos PNJ usen la acción Preparar, pero el GM puede entonces otorgar a los PNJ un bonificador a la prueba de ganar terreno o dar a la prueba ventaja debido a su número. Esto da a los PNJ una ventaja como unidad, en lugar de que los intentos individuales de ganar terreno contra un héroe hábil entreguen puntos de persecución gratuitos al bando del héroe."
    },
    {
      tipo: "h6",
      texto: "Más Objetivos"
    },
    {
      tipo: "parrafo",
      texto: "Cuando los héroes están en una persecución contra un solo oponente o un grupo mucho más pequeño, poder realizar múltiples acciones de Ganar Terreno puede ser un beneficio serio. Un PNJ con bonificaciones extremadamente altas en los tipos de pruebas de habilidad utilizadas en la persecución anula este beneficio, pero es probable que haga que la persecución sea extremadamente difícil. Para un aumento menor en la dificultad, puedes hacer que un PNJ que usa la acción Ganar Terreno realice una sola prueba disputada por las pruebas de múltiples héroes, en lugar de realizar una prueba separada para cada contienda."
    },
    {
      tipo: "h6",
      texto: "Pura Simplicidad"
    },
    {
      tipo: "parrafo",
      texto: "Un GM también podría usar todas las opciones anteriores juntas, haciendo una sola tirada para todos los oponentes contra algunos o todos los héroes."
    },
    {
      tipo: "h5",
      texto: "Alcance"
    },
    {
      tipo: "parrafo",
      texto: "Durante una persecución, no se registra la distancia exacta entre los participantes. En su lugar, el GM decide qué tan separados están todos, y si un personaje determinado está al alcance de los ataques de otro combatiente. En la mayoría de las persecuciones, generalmente se puede asumir que cualquier ataque o habilidad a distancia tiene suficiente alcance para apuntar a cualquier enemigo, pero el GM considerará la narrativa de la escena al decidir qué está o no está al alcance."
    },
    {
      tipo: "h5",
      texto: "Cobertura"
    },
    {
      tipo: "parrafo",
      texto: "El tipo de cobertura que tiene cualquier participante en una persecución depende del entorno, que puede estar influenciado por la complicación del asalto, así como por las descripciones del GM. Los personajes pueden tener media cobertura mientras corren entre una multitud, tres cuartos de cobertura en un desguace o una obra, o cobertura total en un edificio con pasillos cortos que mantienen a los enemigos justo fuera de la vista."
    },
    {
      tipo: "h5",
      texto: "División"
    },
    {
      tipo: "parrafo",
      texto: "A veces, los personajes del bando de la presa en una persecución pueden separarse. Si toda la presa toma rutas ligeramente diferentes mientras intenta huir, pero todavía se dirige aproximadamente en la misma dirección, la persecución continúa normalmente. Una persecución naturalmente implica que los personajes se separen temporalmente mientras evitan obstáculos de todos modos, por lo que no es necesario hacer nada especial en este caso."
    },
    {
      tipo: "parrafo",
      texto: "En un caso en el que los personajes que huyen deciden ir en direcciones drásticamente diferentes, cada personaje del bando del depredador debe elegir a quién seguir. Si todos los depredadores eligen perseguir a un solo grupo de presas, entonces cualquier otra presa que huya y se haya separado escapará, y todos los demás continuarán la persecución normalmente. Si los depredadores también se separan para seguir persiguiendo a diferentes grupos del bando de la presa, entonces se producirán varias persecuciones simultáneamente. Cada persecución comienza con el mismo número de puntos de persecución que la persecución original, pero los puntos recién obtenidos solo se aplican a la nueva persecución en la que se obtienen."
    },
    {
      tipo: "h4",
      texto: "Encuentros de Persecución"
    },
    {
      tipo: "parrafo",
      texto: "Esta sección proporciona varios conjuntos de complicaciones para diferentes tipos de persecuciones en diferentes entornos. Un GM puede elegir las complicaciones que le parezcan divertidas, o puede tirar aleatoriamente en las tablas de esta sección y dejar que la suerte determine parte de la historia. Cualquiera de estas complicaciones puede cambiar de tono para adaptarse al entorno exacto de una persecución. El siempre popular carrito de frutas no es tan diferente de cualquier otro obstáculo, excepto en cómo se describe."
    },
    {
      tipo: "parrafo",
      texto: "Los GM también pueden crear sus propias complicaciones, lo más fácil es pensando en películas de acción que presenten persecuciones y adaptando esas situaciones a su juego. Y muchas aventuras cinematográficas proporcionarán complicaciones que pueden reutilizarse en otras aventuras. Una biblioteca de complicaciones geniales es muy parecida a tener un libro de enemigos, proporcionando acceso rápido a cosas geniales que pueden desafiar a los jugadores y personajes."
    },
    {
      tipo: "h5",
      texto: "Peligros y Desafíos"
    },
    {
      tipo: "parrafo",
      texto: "Los héroes tienen una ventaja en las complicaciones de desafío, ya que deben fallar por 5 o más para ceder un punto al otro bando. Las complicaciones de peligro son más difíciles, ya que un héroe debe tener éxito por 5 o más para ganar un punto. Como resultado, una persecución con más peligros es más difícil, mientras que una con más desafíos es más fácil."
    },
    {
      tipo: "parrafo",
      texto: "Cuando un GM planifica una persecución o construye su propia tabla de complicaciones, el valor predeterminado debería ser un número igual de peligros y desafíos. Aumentar el número de peligros aumenta la dificultad, mientras que aumentar el número de desafíos la reduce. Esto también se puede hacer sobre la marcha, con el GM eligiendo centrarse en desafíos o peligros dependiendo de cómo progresa una persecución."
    },
    {
      tipo: "h5",
      texto: "Regla Opcional: Dejar que la Presa Elija las Complicaciones"
    },
    {
      tipo: "parrafo",
      texto: "Cuando los héroes están del lado de la presa en una persecución, tiene sentido que elijan qué tipo de situaciones quieren conducir a sus perseguidores. Esta no es la opción predeterminada para las escenas de persecución, porque requiere que el GM esté extremadamente familiarizado con el sistema y piense rápidamente. Además, aunque a algunos jugadores les encanta este tipo de control creativo sobre una escena, otros no quieren esforzar tanto sus músculos creativos, prefiriendo dejarlo en manos del GM."
    },
    {
      tipo: "parrafo",
      texto: "Si esta regla opcional tiene sentido, el GM se lo hará saber a los jugadores. Luego, al comienzo de cada ronda, se les pregunta a los jugadores a dónde quieren que los personajes lleven a sus perseguidores o se les pueden dar opciones sobre a dónde podrían ir. El GM luego elige una complicación que se ajuste bien a las intenciones de los jugadores o inventa pruebas para esa complicación en el momento basándose en lo que los jugadores describieron."
    },
    {
      tipo: "h5",
      texto: "Persecución a Pie, Calles Urbanas"
    },
    {
      tipo: "parrafo",
      texto: "Estas complicaciones pueden usarse para encuentros exteriores en cualquier ciudad o adaptarse a lugares suburbanos."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-complicaciones-persecucion-urbana-d10",
      encabezados: ["d10", "Complicación"],
      filas: [
        ["1", "Carrito de Frutas"],
        ["2", "Calle Concurrida"],
        ["3", "En Construcción"],
        ["4", "Tren Retumbante"],
        ["5", "Policía Sospechoso"],
        ["6", "Callejones Laberínticos"],
        ["7", "Multitud"],
        ["8", "Contenedor de Basura"],
        ["9-10", "Recta"]
      ]
    },
    {
      tipo: "h6",
      texto: "Carrito de Frutas"
    },
    {
      tipo: "parrafo",
      texto: "Un mercader tirando de un carrito cargado con productos se mueve hacia el camino de la persecución, amenazando con hacer volar frutas por todas partes."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Fuerza o Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Culpa a un oponente para que el dueño del carrito lo antagonice a él y no a ti. Carisma (Engaño) contra Carisma (Persuasión). Lanza la fruta derramada a un oponente. Fuerza (Atletismo) contra Constitución (Resistencia), o en contienda con una tirada de salvación de Destreza. Esparce la fruta derramada por el suelo detrás de ti para que tu oponente resbale (solo la presa). Destreza (Juego de Manos) contra Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Calle Concurrida"
    },
    {
      tipo: "parrafo",
      texto: "La persecución se adentra en una calle concurrida llena de vehículos en movimiento."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Distraer a los conductores para que no puedan evitar chocar con tu oponente. Carisma (Interpretación) contra Carisma (Interpretación). Saltar por encima de coches en movimiento, dificultando el avance de los oponentes que no puedan seguir el ritmo. Fuerza (Atletismo) contra Fuerza (Atletismo). Moverse con el tráfico prediciendo su flujo con mayor precisión que tu oponente. Inteligencia (Ciencias Sociales) o Sabiduría (Vehículos) contra Inteligencia (Ciencias Sociales) o Sabiduría (Vehículos)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "En Construcción"
    },
    {
      tipo: "parrafo",
      texto: "Equipos de construcción han levantado la calle directamente en el camino de la persecución, que está lleno de suministros y equipo."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Inteligencia."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Tirar una palanca que mueve un equipo al camino de tu oponente. Inteligencia (Mecánica) contra Sabiduría (Percepción). Correr directamente por la zona de construcción, saltando sobre tuberías, equipos e incluso trabajadores. Destreza (Acrobacias) contra Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Tren Retumbante"
    },
    {
      tipo: "parrafo",
      texto: "A medida que la persecución se acerca a un paso a nivel, un tren retumba, creando un estruendo increíble que dificulta la concentración."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Sabiduría."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Saltar al lado del tren que va en la dirección correcta. Fuerza (Atletismo) contra Fuerza (Atletismo). Calcular el momento de tu movimiento a través de las vías para que el tren corte el paso a los perseguidores (solo presa). Sabiduría (Percepción) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Policía Sospechoso"
    },
    {
      tipo: "parrafo",
      texto: "Un oficial de policía adelante ve la persecución pero no sabe qué pensar, y sospecha de todos los involucrados."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Carisma. Cada participante de un bando tiene éxito automáticamente en la salvación si al menos uno de ellos muestra una placa de policía como reacción."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Desviar la sospecha hacia un oponente. Carisma (Engaño o Persuasión) contra Carisma (Engaño o Persuasión), dependiendo de si los participantes están del lado de la ley o no. Mover al policía al camino de los perseguidores para que tengan que abrirse paso (solo presa). Destreza (Juego de Manos) contra Fuerza (Atletismo)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Callejones Laberínticos"
    },
    {
      tipo: "parrafo",
      texto: "La persecución tuerce una esquina y se adentra en un laberinto de callejones confusos, llenos de cubos de basura y desechos."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Inteligencia (Investigación) o Sabiduría (Callejeo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Buscar un atajo por los callejones. Sabiduría (Callejeo) contra Sabiduría (Callejeo). Derribar un cubo de basura para hacer tropezar a los perseguidores (solo la presa). Fuerza (Atletismo) contra Destreza (Acrobacias). Despistar a tu oponente para que se meta por otro callejón (solo la presa). Carisma (Engaño) contra Sabiduría (Perspicacia)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Multitud"
    },
    {
      tipo: "parrafo",
      texto: "Una densa multitud de gente bloquea la calle más adelante."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Inteligencia (Ciencias Sociales) o Carisma (Intimidación o Persuasión)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Convencer a la gente para que se interponga en el camino de tus oponentes. Carisma (Persuasión) contra Carisma (Intimidación o Persuasión). Desaparecer entre la multitud (solo la presa). Carisma (Sigilo) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Contenedor de Basura"
    },
    {
      tipo: "parrafo",
      texto: "Un contenedor de basura en proceso de ser vaciado por un camión grande bloquea el camino."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Buscar otra forma de rodearlo. Inteligencia (Investigación) o Sabiduría (Callejeo) contra Inteligencia (Investigación) o Sabiduría (Callejeo). Convencer al conductor del camión para que bloquee a tu oponente después de que hayas pasado (solo la presa). Carisma (Persuasión) contra Carisma (Intimidación o Persuasión)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Recta"
    },
    {
      tipo: "parrafo",
      texto: "La acera está despejada, pero las vallas bloquean cualquier otro camino que puedas tomar."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Constitución (Resistencia)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Patearlo. Constitución (Resistencia) contra Constitución (Resistencia). Saltar una valla (solo la presa). Fuerza (Atletismo) contra Fuerza (Atletismo)."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Persecución a Pie, Interior del Edificio"
    },
    {
      tipo: "parrafo",
      texto: "Estas complicaciones pueden usarse para persecuciones que tienen lugar en un solo edificio grande o en varios edificios unidos. Un GM también puede alternar estas complicaciones con las de otras secciones a medida que una persecución entra y sale de los edificios."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-complicaciones-persecucion-interior-d10",
      titulo: "Complicaciones de Persecución a Pie, Interior del Edificio (d10)",
      encabezados: ["d10", "Complicación"],
      filas: [
        ["1", "Residencia/Oficina"],
        ["2", "Pasillo Abarrotado"],
        ["3", "Pasillos Confusos"],
        ["4", "Desorden"],
        ["5", "Cajas Apiladas"],
        ["6", "Escaleras Arriba"],
        ["7", "Escaleras Abajo"],
        ["8", "Espacio Reducido"],
        ["9", "Puertas Cerradas"],
        ["10", "Pasillo Largo"]
      ]
    },
    {
      tipo: "h6",
      texto: "Residencia/Oficina"
    },
    {
      tipo: "parrafo",
      texto: "La persecución conduce a una habitación ocupada, sorprendiendo a todos los que se encuentran dentro."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Carisma."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Convencer a la gente para que hostigue a tu oponente. Carisma (Engaño o Persuasión) contra Carisma (Engaño o Persuasión), dependiendo de si los participantes tienen permiso para estar en la zona o no. Inclinar muebles en el camino de los perseguidores (solo presa). Fuerza (Atletismo) contra Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Pasillo Abarrotado"
    },
    {
      tipo: "parrafo",
      texto: "El pasillo de enfrente está obstruido por personas que bloquean el paso."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Fuerza o Carisma."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Gritar a todos que se quiten de en medio. Carisma (Intimidación) contra Carisma (Intimidación). Buscar otra forma de rodearlo (solo presa). Sabiduría (Percepción) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Pasillos Confusos"
    },
    {
      tipo: "parrafo",
      texto: "La persecución se atasca en una sección de pasillos confusamente dispuestos."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Inteligencia."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Descifrar la intención del arquitecto para tomar los giros correctos. Inteligencia (Artes y Oficios) contra Inteligencia (Artes y Oficios). Hacer giros bruscos para despistar a los perseguidores (solo la presa). Destreza (Sigilo) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Desorden"
    },
    {
      tipo: "parrafo",
      texto: "La persecución conduce a una habitación desordenada, llena de todo tipo de chatarra con la que se podría tropezar."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Correr directamente y tratar de no tropezar. Destreza (Acrobacias) contra Destreza (Acrobacias). Intentar despistar a los perseguidores manteniéndose oculto detrás de la chatarra (solo la presa). Destreza (Sigilo) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Cajas Apiladas"
    },
    {
      tipo: "parrafo",
      texto: "Pilas de cajas de cartón bloquean la mayor parte del pasillo de enfrente."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Fuerza o Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Mantener el ritmo navegando entre las cajas. Inteligencia (Investigación) contra Inteligencia (Investigación). Atravesar las cajas a la fuerza. Fuerza (Atletismo) contra Fuerza (Atletismo). Estratégicamente sacar una caja para derribar una pila sobre los perseguidores (solo la presa). Sabiduría (Artes y Oficios) en contienda con una tirada de salvación de Destreza."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Escaleras Arriba"
    },
    {
      tipo: "parrafo",
      texto: "El único camino a seguir es un tramo de escaleras que suben a otra planta."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo) o Constitución (Resistencia)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Subir los escalones de tres en tres. Constitución (Resistencia) contra Constitución (Resistencia). Tirar un cubo de basura u otro objeto por las escaleras (solo presa). Fuerza (Atletismo) contra Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Escaleras Abajo"
    },
    {
      tipo: "parrafo",
      texto: "El único camino a seguir es un tramo de escaleras que bajan."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo) o Constitución (Resistencia)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Saltar por las escaleras. Fuerza (Atletismo) contra Fuerza (Atletismo) o Destreza (Acrobacias). Deslizarse por las barandillas. Destreza (Acrobacias) contra Fuerza (Atletismo) o Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Espacio Reducido"
    },
    {
      tipo: "parrafo",
      texto: "La persecución se adentra en un espacio de acceso, entre paredes, a través de un conducto de ventilación o alguna otra ruta estrecha."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Destreza (Acrobacias) o Inteligencia (Seguridad)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Abrirse paso a través. Destreza (Acrobacias) contra Destreza (Acrobacias). Desaparecer en silencio mientras se atraviesa un espacio pequeño (solo presa). Destreza (Sigilo) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Puertas Cerradas"
    },
    {
      tipo: "parrafo",
      texto: "Varias puertas más adelante están cerradas, bloqueando el camino a menos que se abran rápidamente o se derriben."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo) o Inteligencia (Seguridad)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Saltar por una ventana. Fuerza (Atletismo) contra Fuerza (Atletismo). Volver a cerrar una puerta tras de ti (solo presa). Destreza (Juego de Manos) contra Inteligencia (Seguridad) o Fuerza (Atletismo)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Pasillo Largo"
    },
    {
      tipo: "parrafo",
      texto: "Un pasillo largo ocupado solo por un carrito de limpieza ofrece la oportunidad de aumentar la velocidad."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Constitución (Resistencia)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Patearlo. Constitución (Resistencia) contra Constitución (Resistencia). Volcar el carrito de limpieza para bloquear a los que vienen detrás (solo presa). Fuerza (Atletismo) contra Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Persecución a Pie, Azoteas de la Ciudad"
    },
    {
      tipo: "parrafo",
      texto: "Estas complicaciones pueden usarse para cualquier persecución que lleve a los personajes por la parte superior de uno o más edificios. Este tipo de persecución es más común en una ciudad, pero puede tener lugar en cualquier lugar donde haya varios edificios juntos."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-complicaciones-persecucion-azoteas-d10",
      titulo: "Complicaciones de Persecución a Pie, Azoteas de la Ciudad (d10)",
      encabezados: ["d10", "Complicación"],
      filas: [
        ["1", "Grandes Huecos"],
        ["2", "Tormenta de Palomas"],
        ["3", "Claraboya"],
        ["4", "Maquinaria"],
        ["5", "Tejado Inclinado"],
        ["6", "Ventanas"],
        ["7", "Escalera Arriba"],
        ["8", "Escalera Abajo"],
        ["9-10", "Azotea Abierta"]
      ]
    },
    {
      tipo: "h6",
      texto: "Grandes Huecos"
    },
    {
      tipo: "parrafo",
      texto: "Grandes callejones entre edificios requieren una serie de saltos largos para cruzar."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Fuerza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Buscar los saltos más fáciles de hacer. Sabiduría (Percepción) o Sabiduría (Callejeo) contra Sabiduría (Percepción) o Sabiduría (Callejeo). Realizar los saltos más difíciles para limitar la persecución. Fuerza (Atletismo) contra Fuerza (Atletismo)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Tormenta de Palomas"
    },
    {
      tipo: "parrafo",
      texto: "Correr por el tejado perturba una bandada de palomas, que llenan el aire a tu alrededor."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Esquivar a través de las aves. Sabiduría (Percepción) o Destreza (Acrobacias) contra Sabiduría (Percepción) o Destreza (Acrobacias). Ahuyentar a las aves para distraer a tus perseguidores (solo presa). Sabiduría (Supervivencia) en contienda con una tirada de salvación de Destreza."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Claraboya"
    },
    {
      tipo: "parrafo",
      texto: "La persecución se dirige hacia una enorme claraboya de cristal, que debe cruzarse con cuidado."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Rodear la ventana sin reducir la velocidad. Fuerza (Atletismo) contra Fuerza (Atletismo) o Destreza (Acrobacias). Romper el cristal detrás de ti para evitar la persecución (solo presa). Fuerza (Atletismo) o Sabiduría (Artes y Oficios) en contienda con una tirada de salvación de Destreza."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Maquinaria"
    },
    {
      tipo: "parrafo",
      texto: "Este tejado está cubierto de salidas de ventilación, puertas y otras protuberancias, creando un verdadero laberinto."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Inteligencia o Sabiduría."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Usar tu conocimiento de maquinaria para intuir qué caminos tendrán más espacio abierto. Inteligencia (Mecánica) contra Inteligencia (Mecánica). Intentar despistar a los perseguidores entre el desorden (solo presa). Destreza (Sigilo) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Tejado Inclinado"
    },
    {
      tipo: "parrafo",
      texto: "La persecución conduce a una pendiente pronunciada en la azotea, lo que dificulta el equilibrio."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Correr por la pendiente sin reducir la velocidad. Destreza (Acrobacias) contra Destreza (Acrobacias). Impulsarse hasta la cima de la pendiente. Fuerza (Atletismo) contra Fuerza (Atletismo) o Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Ventanas"
    },
    {
      tipo: "parrafo",
      texto: "La ruta a seguir atraviesa un pequeño edificio en la azotea al que solo se accede por ventanas cerradas."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo) o Inteligencia (Seguridad)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Saltar por una ventana. Fuerza (Atletismo) contra Fuerza (Atletismo). Bloquear una ventana detrás de ti (solo presa). Fuerza (Atletismo) o Sabiduría (Artes y Oficios) contra Inteligencia (Seguridad) o Fuerza (Atletismo)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Escalera Arriba"
    },
    {
      tipo: "parrafo",
      texto: "Una escalera por adelante conduce a una parte más alta del tejado."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Mover la escalera y tratar de hacer caer a tu oponente. Fuerza (Atletismo) contra Destreza (Acrobacias). Empujar la escalera mientras los perseguidores están subiendo (solo presa). Fuerza (Atletismo) contra Fuerza (Atletismo)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Escalera Abajo"
    },
    {
      tipo: "parrafo",
      texto: "Una escalera por delante desciende a una parte inferior del tejado."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Mover la escalera y tratar de hacer caer a tu oponente. Fuerza (Atletismo) contra Destreza (Acrobacias). Saltarlo. Fuerza (Atletismo) contra Fuerza (Atletismo)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Azotea Abierta"
    },
    {
      tipo: "parrafo",
      texto: "Una azotea abierta ofrece la oportunidad de acelerar."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Constitución (Resistencia)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Correr. Constitución (Resistencia) contra Constitución (Resistencia). Volver sobre los perseguidores para confundirlos (solo presa). Carisma (Engaño) contra Sabiduría (Perspicacia)."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Persecución a Pie, Subterráneo Urbano"
    },
    {
      tipo: "parrafo",
      texto: "Estas complicaciones pueden usarse para alcantarillas, túneles de vapor, túneles de metro o redes de sótanos, y son de mayor utilidad en una ciudad. También pueden usarse para llevar temporalmente una persecución a una ubicación subterránea antes de reaparecer en una calle o en un edificio."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-complicaciones-persecucion-subterraneo-d10",
      titulo: "Complicaciones de Persecución a Pie, Subterráneo Urbano (d10)",
      encabezados: ["d10", "Complicación"],
      filas: [
        ["1", "Tuberías de Vapor"],
        ["2", "Aguas Residuales"],
        ["3", "Terreno Roto"],
        ["4", "Tren Chirriante"],
        ["5", "Ratas de Alcantarilla"],
        ["6", "Vía Férrea en Desuso"],
        ["7", "Maquinaria"],
        ["8", "Túnel de Barro"],
        ["9-10", "Pasajes Retorcidos"]
      ]
    },
    {
      tipo: "h6",
      texto: "Tuberías de Vapor"
    },
    {
      tipo: "parrafo",
      texto: "Las tuberías en las paredes de enfrente gotean chorros de vapor abrasador."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Constitución."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Romper una tubería y hacer que dispare vapor a un oponente. Inteligencia (Mecánica o Ciencias Naturales) contra Constitución (Resistencia). Esconderse en el vapor para que los oponentes pierdan el rastro de tu posición. Destreza (Sigilo) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Aguas Residuales"
    },
    {
      tipo: "parrafo",
      texto: "La persecución conduce a una enorme tubería parcialmente inundada de aguas residuales, prometiendo un paso desagradable."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Constitución."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Lanzar aguas residuales a tu oponente. Constitución (Resistencia) contra Constitución (Resistencia). Correr por los lados curvos de la tubería para evitar quedarse atascado. Destreza (Acrobacias) contra Fuerza (Atletismo) o Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Terreno Roto"
    },
    {
      tipo: "parrafo",
      texto: "El suelo de enfrente ha sido roto, dejando pedazos afilados de hormigón y tuberías en tu camino."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Destreza."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Buscar el camino más seguro. Sabiduría (Percepción) contra Sabiduría (Percepción). Saltar entre los trozos salientes de hormigón. Destreza (Acrobacias) contra Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Tren Chirriante"
    },
    {
      tipo: "parrafo",
      texto: "Un tren pasa en la dirección de la persecución, sus ruedas chirriantes hacen imposible concentrarse."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Sabiduría."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Saltar para engancharse al tren en movimiento. Fuerza (Atletismo) contra Fuerza (Atletismo). Colarse entre los vagones del tren y evadir a los perseguidores al otro lado (solo presa). Destreza (Atletismo) contra Destreza (Acrobacias)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Ratas de Alcantarilla"
    },
    {
      tipo: "parrafo",
      texto: "Un túnel lleno de ratas de alcantarilla crea un peligroso pasadizo."
    },
    {
      tipo: "parrafo",
      texto: "Peligro. Tirada de salvación de Carisma."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Asustar a las ratas para que se metan en el camino de tu oponente. Carisma (Intimidación) en contienda con una tirada de salvación de Carisma. Agitar a las ratas para que acosen a los perseguidores detrás de ti (solo presa). Sabiduría (Supervivencia) en contienda con una tirada de salvación de Carisma."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Vía Férrea en Desuso"
    },
    {
      tipo: "parrafo",
      texto: "La persecución entra en una sección de un túnel de metro en desuso, lleno de vías oxidadas y que se bifurca en numerosas direcciones."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Sabiduría (Callejeo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Encontrar el camino más rápido a través de las vías retorcidas. Inteligencia (Investigación) o Sabiduría (Callejeo) contra Inteligencia (Investigación) o Sabiduría (Callejeo). Despistar a los perseguidores al tomar un túnel inesperado (solo presa). Carisma (Engaño) contra Sabiduría (Perspicacia)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Maquinaria"
    },
    {
      tipo: "parrafo",
      texto: "Una sala de máquinas llena de máquinas y pasarelas de conexión, que requiere trepar o saltar para atravesarla."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Fuerza (Atletismo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Sacudir el suelo bajo tu oponente activando una máquina. Inteligencia (Mecánica) contra Destreza (Acrobacias). Buscar las pasarelas más estables. Inteligencia (Mecánica) contra Inteligencia (Mecánica)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Túnel de Barro"
    },
    {
      tipo: "parrafo",
      texto: "Un largo túnel por delante está relativamente despejado pero lleno de barro pegajoso."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Constitución (Resistencia)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Patearlo. Constitución (Resistencia) contra Constitución (Resistencia). Patear barro a los perseguidores (solo presa). Destreza (Juego de Manos) contra Constitución (Resistencia)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Pasajes Retorcidos"
    },
    {
      tipo: "parrafo",
      texto: "La persecución se adentra en un laberinto de pasajes retorcidos, allas aparentemente iguales."
    },
    {
      tipo: "parrafo",
      texto: "Desafío. Prueba de Inteligencia (Investigación) o Sabiduría (Supervivencia)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Buscar un atajo. Sabiduría (Callejeo) contra Sabiduría (Supervivencia). Esconderse en los túneles (solo presa). Destreza (Sigilo) contra Sabiduría (Percepción)."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Persecución de Vehículos, Calles de la Ciudad"
    },
    {
      tipo: "parrafo",
      texto: "Estas complicaciones son para una persecución de vehículos en un entorno urbano, o para una parte de una persecución en una región rural que atraviesa una zona densamente poblada."
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación realizadas por el vehículo en la persecución se indican como tales. Todas las demás tiradas de salvación las realiza el conductor. Cada complicación presenta solo una actividad sugerida para la acción Ganar Terreno, ya que las persecuciones de vehículos suelen limitar el número de jugadores que pueden realizar esa acción."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-complicaciones-persecucion-vehiculos-d10",
      titulo: "Complicaciones de Persecución de Vehículos, Calles de la Ciudad (d10)",
      encabezados: ["d10", "Complicación"],
      filas: [
        ["1", "Carrito de Verduras"],
        ["2", "Baches"],
        ["3", "Colina Empinada"],
        ["4", "Accidente en Curso"],
        ["5", "Tráfico Pesado"],
        ["6", "Callejones Estrechos"],
        ["7", "Excrementos de Paloma"],
        ["8", "A Través del Centro Comercial"],
        ["9-10", "Autopista"]
      ]
    },
    {
      tipo: "h6",
      texto: "Carrito de Verduras"
    },
    {
      tipo: "parrafo",
      texto: "La ruta de la persecución conduce directamente a un carrito de verduras que está siendo cargado o descargado de un camión cercano, sin espacio para rodearlo."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Fuerza (vehículo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Usar la parte trasera del camión como rampa (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador máximo igual al modificador de Destreza de un vehículo para cada conductor."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Baches"
    },
    {
      tipo: "parrafo",
      texto: "El camino por delante está lleno de baches, lo que sacude el vehículo."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Destreza, con un bonificador igual al modificador de Destreza del vehículo. Cualquiera que conduzca un vehículo Mediano o más pequeño realiza la salvación con desventaja."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Conducir directamente (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Constitución de cada vehículo."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Colina Empinada"
    },
    {
      tipo: "parrafo",
      texto: "La calle por delante sube una cuesta empinada, y luego gira rápidamente hacia abajo de nuevo."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Destreza, con un bonificador igual al modificador de Destreza del vehículo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Usar la colina como una enorme rampa (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Fuerza de cada vehículo."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Accidente en Curso"
    },
    {
      tipo: "parrafo",
      texto: "Un accidente más adelante ha detenido el tráfico, obligando a la persecución a rodearlo."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Inteligencia o Sabiduría. Un pasajero puede gastar su reacción para realizar esta tirada de salvación en su lugar, pero no puede realizar una acción en su próximo turno si lo hace."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Navegar por el caos (solo conductor). Sabiduría (Percepción) contra Sabiduría (Percepción). Un conductor en un vehículo Enorme tiene desventaja en esta prueba. Un conductor en un vehículo Gargantuesco no puede realizar esta acción."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Tráfico Pesado"
    },
    {
      tipo: "parrafo",
      texto: "La carretera de enfrente está atascada de tráfico."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Inteligencia o Sabiduría. Un pasajero puede gastar su reacción para realizar esta tirada de salvación en su lugar, pero no puede realizar una acción en su próximo turno si lo hace."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Zigzaguear a través del tráfico en lugar de rodearlo (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Destreza de cada vehículo."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Callejones Estrechos"
    },
    {
      tipo: "parrafo",
      texto: "La persecución se adentra en una serie de callejones que ofrecen poco espacio para moverse."
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Destreza (Vehículos), con un bonificador máximo igual al modificador de Destreza del vehículo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Buscar la mejor ruta (solo conductor). Inteligencia (Investigación) o Sabiduría (Callejeo) contra Inteligencia (Investigación) o Sabiduría (Callejeo)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Excrementos de Paloma"
    },
    {
      tipo: "parrafo",
      texto: "Mientras la persecución pasa por debajo de una bandada de palomas, ¡una tormenta de excrementos oscurece de repente la vista!"
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Sabiduría (Percepción)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Asustar a las aves para que se dirijan a los oponentes (un participante por bando). Sabiduría (Supervivencia) o Carisma (Intimidación) contra Sabiduría (Supervivencia) o Carisma (Intimidación)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "A Través del Centro Comercial"
    },
    {
      tipo: "parrafo",
      texto: "La gente se zambulle mientras la persecución gira directamente hacia un centro comercial."
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Sabiduría (Perspicacia) o Carisma (Intimidación)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Conducir a través de los quioscos (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Constitución de cada vehículo."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Autopista"
    },
    {
      tipo: "parrafo",
      texto: "Un tramo de carretera abierta aparece más adelante, perfecto para coger velocidad."
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Destreza (Vehículos), con un bonificador igual al modificador de Fuerza del vehículo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Acelera (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Fuerza de cada vehículo."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Persecución de Vehículos, Carreteras Secundarias"
    },
    {
      tipo: "parrafo",
      texto: "Estas complicaciones son útiles para las persecuciones de vehículos rurales, así como para las persecuciones en zonas pobladas que atraviesan temporalmente terrenos más accidentados."
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación realizadas por el vehículo en la persecución se indican como tales. Todas las demás tiradas de salvación las realiza el conductor. La mayoría de las complicaciones presentan solo una actividad sugerida para la acción Ganar Terreno, ya que las persecuciones de vehículos suelen limitar el número de jugadores que pueden realizar esa acción."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-complicaciones-persecucion-carreteras-secundarias-d10",
      titulo: "Complicaciones de Persecución de Vehículos, Carreteras Secundarias (d10)",
      encabezados: ["d10", "Complicación"],
      filas: [
        ["1", "Carretera de Barro"],
        ["2", "Ciervo en los Faros"],
        ["3", "Curvas Cerradas"],
        ["4", "Ramas Caídas"],
        ["5", "Ramas Bajas"],
        ["6", "Estacionamiento"],
        ["7", "Corredores"],
        ["8", "Camino de Tierra"],
        ["9-10", "Carreteras Serpentinas"]
      ]
    },
    {
      tipo: "h6",
      texto: "Carretera de Barro"
    },
    {
      tipo: "parrafo",
      texto: "La carretera por delante está cubierta de barro, lo que la convierte en un resbaladizo desastre."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Constitución (vehículo)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Conducir directamente a través del barro más espeso (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Constitución de cada vehículo. Rociar barro a los perseguidores (solo conductor presa). Destreza (Vehículos) contra Sabiduría (Percepción). Si cualquiera de los vehículos es más grande que el otro, el conductor del vehículo más grande tiene ventaja en esta prueba."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Ciervo en los Faros"
    },
    {
      tipo: "parrafo",
      texto: "Un ciervo sale corriendo a la carretera."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Carisma."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Asustar al ciervo para que se dirija hacia tus oponentes (una vez por bando). Carisma (Intimidación) contra Carisma (Intimidación)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Curvas Cerradas"
    },
    {
      tipo: "parrafo",
      texto: "La carretera se desvía rápidamente de un lado a otro mientras atraviesa una pendiente pronunciada."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Destreza, con un bonificador igual al modificador de Destreza del vehículo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Conducir directamente (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Constitución de cada vehículo. Si un vehículo no tiene la propiedad Todo Terreno, el conductor de ese vehículo tiene desventaja en esta prueba."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Ramas Caídas"
    },
    {
      tipo: "parrafo",
      texto: "El camino por delante está cubierto de ramas caídas."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Constitución (vehículo). Si el vehículo es Gargantuesco, esta salvación se realiza con ventaja."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Tomar el mejor camino a través de las ramas (solo conductor). Inteligencia (Investigación) o Sabiduría (Supervivencia) contra Inteligencia (Investigación) o Sabiduría (Supervivencia)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Ramas Bajas"
    },
    {
      tipo: "parrafo",
      texto: "Varias ramas bloquean la vista hacia adelante, lo que dificulta ver la carretera."
    },
    {
      tipo: "parrafo",
      texto: "Peligro (Solo Conductor). Tirada de salvación de Sabiduría."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Ir rápido y esperar lo mejor (solo conductor). Sabiduría (Percepción) o Sabiduría (Supervivencia) contra Sabiduría (Percepción) o Sabiduría (Supervivencia)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Estacionamiento"
    },
    {
      tipo: "parrafo",
      texto: "Un estacionamiento lo suficientemente vacío como para coger velocidad."
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Destreza (Vehículos), con un bonificador igual al modificador de Fuerza del vehículo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Acelerar a fondo (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Fuerza de cada vehículo."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Corredores"
    },
    {
      tipo: "parrafo",
      texto: "Grupos de corredores se mueven en ambas direcciones por la carretera."
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Sabiduría (Perspicacia) o Carisma (Intimidación)."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Convencer a los corredores para que lancen cosas al vehículo de tu oponente (una vez por bando). Carisma (Persuasión) contra Carisma (Intimidación o Persuasión)."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Camino de Tierra"
    },
    {
      tipo: "parrafo",
      texto: "La carretera se estrecha hasta convertirse en un camino de tierra."
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Destreza (Vehículos), con un bonificador máximo igual al modificador de Destreza del vehículo. Si un vehículo no tiene la propiedad Todo Terreno, esta prueba se realiza con desventaja."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "¡Acelera a fondo! (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Fuerza de cada vehículo. Si el vehículo de un conductor no tiene la propiedad Todo Terreno, ese conductor tiene desventaja en esta prueba."
        }
      ]
    },
    {
      tipo: "h6",
      texto: "Carreteras Serpentinas"
    },
    {
      tipo: "parrafo",
      texto: "La carretera sigue un camino sinuoso, lo que requiere una serie de curvas cerradas para mantener la velocidad."
    },
    {
      tipo: "parrafo",
      texto: "Desafío (Solo Conductor). Prueba de Destreza (Vehículos), con un bonificador igual al modificador de Destreza del vehículo."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Sugerencias para Ganar Terreno",
          definicion: "Tomar las curvas rápido (solo conductor). Destreza (Vehículos) contra Destreza (Vehículos), con un bonificador igual al modificador de Destreza de cada vehículo."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Finalizando la Persecución"
    },
    {
      tipo: "parrafo",
      texto: "Cuando una persecución termina, si los participantes del bando de la presa han escapado, la escena ha terminado. O bien los personajes escaparon y pueden pasar a lo siguiente, o sus oponentes escaparon de ellos y tendrán que averiguar qué hacer a continuación. "
    },
    {
      tipo: "parrafo",
      texto: "Si el bando del depredador gana la persecución, suelen ocurrir dos posibilidades. En la mayoría de los casos, comienza el combate. Pero cuando sea apropiado, el GM puede hacer que los PNJ capturados simplemente se rindan, y siempre es posible —aunque poco probable— que los personajes capturados se rindan. Tal escenario se utiliza mejor para perseguir a enemigos significativamente más débiles o heridos, donde una pelea sería una pérdida de tiempo. "
    },
    {
      tipo: "parrafo",
      texto: "Depende del GM cómo describir el final de una persecución, trabajando con la idea de que los puntos de persecución son una especie de fuerza narrativa. Cuando una persecución llega a su fin, el balance de puntos de persecución podría sugerir un evento repentino dentro de la narrativa, como personajes que huyen deslizándose bajo una puerta de mamparo que se cierra justo a tiempo, vehículos perseguidores que se estrellan, o enemigos que corren hacia un callejón sin salida, lo que lleva las cosas a una conclusión. "
    },
    {
      tipo: "h5",
      texto: "Reiniciando una Persecución"
    },
    {
      tipo: "parrafo",
      texto: "Los participantes del lado de la presa pueden intentar huir de nuevo si tienen la oportunidad, pero el GM decide si eso es posible. Los enemigos acorralados tendrán que superar a sus enemigos para siquiera intentar huir de nuevo, y los combatientes Agarrados o Restringidos normalmente no pueden intentar huir de nuevo en absoluto. Si los jugadores están siendo perseguidos y la oposición es especialmente letal, el GM podría optar por terminar una persecución en un entorno más abierto, dando a los héroes una mejor oportunidad de intentar escapar de nuevo. "
    },
    {
      tipo: "h4",
      texto: "Encuentros de Investigación"
    },
    {
      tipo: "parrafo",
      texto: "Durante un encuentro de investigación, los personajes buscan pistas y reúnen información. El desafío de tal encuentro proviene de unir las piezas y aprender lo que puedan. El GM podría solicitar pruebas de habilidad, especialmente pruebas de Inteligencia (Investigación) y Sabiduría (Percepción). Pero muchas investigaciones implican dejar que los personajes interactúen con su entorno y hagan preguntas sobre lo que encuentran. "
    },
    {
      tipo: "parrafo",
      texto: "Recuerda, un encuentro de investigación no suele cubrir un misterio completo. Investigar una escena del crimen representa solo una parte de la resolución de un crimen. En cambio, el objetivo es encontrar una o más pistas que acerquen a los personajes un paso más a la resolución de un misterio mayor, les den una ventaja contra un oponente, los dirijan hacia otro encuentro o punto de la trama, o simplemente completen información interesante que dé contexto a otras partes de la historia en curso. "
    },
    {
      tipo: "parrafo",
      texto: "Al preparar un encuentro de investigación, lo más importante que debe decidir un GM es qué información pueden obtener los personajes y cómo pueden obtenerla. "
    },
    {
      tipo: "h4",
      texto: "Encuentros Sociales"
    },
    {
      tipo: "parrafo",
      texto: "Durante un encuentro social, los personajes buscan obtener algo hablando con uno o más PNJ. Podrían intentar obtener información de alguien, convencer a un guardia para que los deje entrar en un edificio, persuadir a un atracador para que los deje en paz, o participar en cualquier otro tipo de interacción de personaje a personaje. "
    },
    {
      tipo: "parrafo",
      texto: "Manejar los encuentros sociales en Everyday Heroes puede cubrirse con un juego de rol fácil y una o dos tiradas de dados. Pero un encuentro social también puede ser un desafío de juego de rol complejo, con muchos enfoques posibles para decidir qué tirar y qué resultado asignar a esas tiradas. "
    },
    {
      tipo: "parrafo",
      texto: "Un GM debe tener en cuenta que los desafíos sociales son en gran medida asimétricos. Los personajes pueden usar pruebas de habilidad con las habilidades de Engaño, Intimidación y Persuasión para manipular a los PNJ, pero los PNJ no pueden usar ese tipo de pruebas en los personajes de la misma manera. Los jugadores siempre deben tener un control estricto sobre cómo se sienten sus héroes, en qué creen y las decisiones que toman. "
    },
    {
      tipo: "parrafo",
      texto: "Ya sea usando la prueba de un PNJ o una tirada de salvación, las contiendas de pruebas de habilidad tienen resultados menos predecibles que las pruebas de CD fija. Pero pueden parecer más justas para los jugadores, ya que una contienda se basa en las estadísticas del PNJ en lugar del juicio del GM. El truco es decidir qué tipo de prueba debe tirar el PNJ. Ser persuasivo no significa que un PNJ sea automáticamente resistente a la persuasión, por lo que estas contiendas suelen ser asimétricas. "
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-contiendas-sociales",
      titulo: "Contiendas Sociales",
      encabezados: ["Héroe", "PNJ"],
      filas: [
        ["Carisma (Engaño) para mentir sobre sí mismos", "Sabiduría (Perspicacia) para determinar las motivaciones del héroe"],
        ["Carisma (Persuasión) para venderle al PNJ un coche chatarra", "Inteligencia (Vehículos) que representa el conocimiento de coches"],
        ["Carisma (Intimidación) para convencer a un PNJ de que los deje ir", "Tirada de salvación de Carisma para ver cuán seguros están de sus habilidades"],
        ["Carisma (Persuasión) para pedir un favor", "Tirada de salvación de Sabiduría para representar el buen juicio"]
      ]
    },
    {
      tipo: "parrafo",
      texto: "Cuando los PNJ intentan manipular a los héroes, el GM tiene dos opciones. Puede simplemente decir lo que dice un PNJ y dejar que los jugadores y los personajes descubran lo que significa, o puede permitir que los personajes realicen pruebas de Sabiduría (Perspicacia) para obtener alguna pista sobre si el PNJ está mintiendo o tiene motivos ocultos. Este es el único escenario en el que una contienda que involucre a un PNJ realizando una prueba de habilidad con Engaño, Intimidación o Persuasión contra un héroe puede funcionar bien. Si el héroe tiene éxito, obtiene una pista sobre las verdaderas motivaciones del PNJ. Pero no hay una consecuencia real de que el héroe pierda la contienda más que no obtener la perspicacia que buscaba, dejándolo aún libre para tomar cualquier decisión que considere mejor. "
    },
    {
      tipo: "h4",
      texto: "Equipo Restringido"
    },
    {
      tipo: "parrafo",
      texto: "En el mundo real, ciertos artículos están restringidos para la compra o posesión por la mayoría de las personas. Esto incluye productos ilícitos y equipo normalmente reservado para el ejército o las fuerzas del orden. A veces, sin embargo, tienes que dejar que los héroes rompan las reglas."
    },
    {
      tipo: "parrafo",
      texto: "Exactamente qué artículos decides restringir puede variar dependiendo de la ubicación y las circunstancias. Los héroes con un trasfondo o profesión relacionados con actividades criminales, la aplicación de la ley o el ejército a menudo tienen oportunidades de acceder a equipo restringido. El personal policial y militar se arriesga a graves repercusiones legales por usar equipo emitido fuera del cumplimiento del deber. Y cualquier persona atrapada por las autoridades portando equipo ilegal no solo se lo confiscará, sino que probablemente enfrentará un proceso penal."
    },
    {
      tipo: "parrafo",
      texto: "En última instancia, la discreción del GM determina qué artículos están libremente disponibles para los héroes y a qué costo. Algunas aventuras pueden limitar el equipo debido a los temas de la historia, por circunstancias específicas o para equilibrar los encuentros."
    },
    {
      tipo: "h5",
      texto: "Circunstancias Limitantes"
    },
    {
      tipo: "parrafo",
      texto: "Bajo ciertas circunstancias, los héroes pueden verse limitados en los tipos de equipo y material a los que tienen acceso, incluyendo cualquiera de los siguientes ejemplos:"
    },
    {
      tipo: "lista",
      items: [
        "La aventura se desarrolla en el transcurso de unas pocas horas, sin tiempo para ir de compras o volver a casa a buscar el equipo necesario.",
        "La aventura tiene lugar en un lugar remoto sin tiendas ni servicios de entrega, dando a los héroes acceso solo a lo que llevan encima o pueden encontrar en el entorno.",
        "Los héroes se mueven por lugares donde llevar armas u otro equipo restringido abiertamente les causaría problemas inmediatos, legales o de otro tipo.",
        "A los héroes se les puede negar temporalmente el acceso a su riqueza y crédito debido a hackers o acciones gubernamentales.",
        "Las casas y vehículos de los héroes pueden estar bajo vigilancia de enemigos peligrosos que quieren evitar."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Cuando surgen tales circunstancias, puede ser importante para la historia y el drama llevar un registro más detallado del equipo que los héroes llevan. Esto se puede hacer de tres maneras diferentes."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Empacando para un Viaje",
          definicion: "En este escenario, los héroes saben que se dirigen a un entorno o circunstancias donde no pueden comprar lo que necesitan. Saben que solo tendrán acceso a lo que lleven o puedan encontrar en el entorno. Cada jugador debe escribir una lista de artículos específicos que su personaje está empacando para el viaje. El GM puede decidir cuántos detalles se necesitan y qué es razonable llevar. Las armas y municiones son de principal preocupación en ciertos tipos de aventuras, pero las herramientas y suministros también podrían ser críticos. Los artículos mundanos no vale la pena rastrearlos."
        },
        {
          termino: "Aislamiento Inesperado",
          definicion: "La mayoría de la gente no anda por ahí cargando muchas posesiones, pero la mayoría de la gente no son héroes. Como los personajes no saben cuándo van a entrar en conflicto o participar en una situación heroica, es una buena idea que cada jugador mantenga una lista del equipo que su héroe siempre lleva consigo, así como de las cosas que guardan en su vehículo (si tienen uno). El GM podría querer limitar los tipos de artículos a los que los héroes tienen acceso en estas situaciones para crear encuentros dramáticos, pero eso debe equilibrarse con la noción de cada jugador sobre quién es su héroe y cuán preparados para la acción les gusta estar."
        },
        {
          termino: "Aislamiento Forzado",
          definicion: "Los escenarios más terribles para el equipo implican que los héroes sean arrestados o secuestrados. Generalmente, cualquier PNJ interesado en capturar personajes tiene el mismo interés en quitarles sus posesiones y limitar su acceso al equipo. Hasta que los héroes puedan escapar de estas circunstancias, poseen o tienen acceso solo a lo que el GM les dice, o lo que los jugadores puedan convencer al GM de que sus personajes podrían llevar oculto. “Ocultando Objetos” en el capítulo 10 describe las reglas para que los personajes oculten objetos de la observación visual o una búsqueda enfocada."
        }
      ]
    },
    {
      tipo: "h5",
      texto: "Restricciones de Armas"
    },
    {
      tipo: "parrafo",
      texto: "El alcance del juego y los tipos de aventuras en los que los personajes se embarcan determinan cómo el GM maneja la disponibilidad de armas restringidas. A pesar de las excepciones para personajes con conexiones con el ejército o las fuerzas del orden, los héroes trabajan bajo y se enfrentan a uno de los cuatro niveles de restricción de armas."
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Alta Restricción",
          definicion: "En este nivel, todo artículo específicamente diseñado como arma está prohibido sin un permiso gubernamental. Incluso con un permiso, las armas deben transportarse dentro de un estuche seguro hacia y desde el lugar donde están autorizadas para su uso. Típicamente, no se permite ningún tipo de arma para defensa propia, ni en público ni en el hogar."
        },
        {
          termino: "Restricción Media",
          definicion: "Bajo restricciones de armas medias, los civiles pueden obtener permiso para portar una pistola, pero deben obtener una licencia y demostrar que tienen una necesidad legítima de dicha arma, ya sea para defensa propia o como miembros de un club de tiro o una organización de coleccionistas. Se permiten rifles de caza y escopetas con una licencia de caza apropiada. Las armas cuerpo a cuerpo son legales como herramientas o artículos de colección, pero no como armas de defensa propia. Las armaduras corporales y otros equipos paramilitares también están limitados a los titulares de permisos que puedan demostrar una necesidad de dicho equipo."
        },
        {
          termino: "Baja Restricción",
          definicion: "Trabajar con bajas restricciones de armas significa que solo un grupo selecto de armas y explosivos militares están prohibidos. Algunas regulaciones pueden limitar el uso de armas de fuego, armaduras y armas cuerpo a cuerpo, pero se permite la propiedad libre de dichos artículos."
        },
        {
          termino: "Sin Restricción",
          definicion: "Típicamente, la ausencia de restricciones sobre armas y equipo similar se encuentra solo en áreas fuera de la jurisdicción gubernamental efectiva. A veces esto significa la ausencia de leyes, o que las leyes no tienen medios efectivos de aplicación."
        }
      ]
    },
    {
      tipo: "h4",
      texto: "Viajes"
    },
    {
      tipo: "parrafo",
      texto: "A veces es importante saber cuánto tiempo se tarda en viajar de un lugar a otro por el bien de una historia. Gracias a las maravillas de Internet y a que Everyday Heroes está ambientado por defecto en el mundo moderno, averiguar los tiempos de viaje a casi cualquier lugar por cualquier medio de transporte está a solo unos clics de distancia en el smartphone o la computadora de un jugador."
    },
    {
      tipo: "parrafo",
      texto: "Para cálculos sobre la marcha de los tiempos de viaje durante las aventuras, la siguiente tabla proporciona estimaciones aproximadas de la velocidad y el alcance de varios tipos de movimiento y transporte. Los modos de transporte que requieren mantenimiento regular o tiempo de inactividad frecuente pueden limitar el alcance recorrido en 8 horas o 1 día. El nivel de precio puede representar el costo de un vehículo, el pago de una tarifa o la compra de combustible, lo que sea más asequible."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-tiempo-viaje-metodo",
      titulo: "Tiempo de Viaje por Método",
      encabezados: ["Método", "1 hora", "8 horas", "1 día", "Nivel de Precio"],
      filas: [
        ["A pie", "3 millas", "24 millas", "30 millas", "0"],
        ["En bicicleta", "15 millas", "120 millas", "150 millas", "1"],
        ["En coche", "50 millas", "400 millas", "800 millas", "1"],
        ["En tren", "50 millas", "400 millas", "1,000 millas", "1"],
        ["En tren bala", "150 millas", "1,200 millas", "1,200 millas", "2"],
        ["En avión pequeño", "150 millas", "1,200 millas", "1,400 millas", "2"],
        ["En avión a reacción", "500 millas", "4,000 millas", "8,000 millas", "2"],
        ["En avión supersónico", "1,200 millas", "3,500 millas", "3,500 millas", "4"],
        ["En bote de remos", "3 millas", "24 millas", "30 millas", "1"],
        ["En velero", "8 millas", "64 millas", "192 millas", "3"],
        ["En lancha motora", "35 millas", "280 millas", "840 millas", "2"],
        ["En lancha rápida", "50 millas", "400 millas", "800 millas", "3"]
      ]
    },
    {
      tipo: "h4",
      texto: "Hackeo Informático"
    },
    {
      tipo: "parrafo",
      texto: "A menos que el hackeo informático sea una parte central de tu aventura, no requiere reglas complicadas. Una simple prueba de Inteligencia (Computadoras) es todo lo que necesitas, con la CD establecida según la dificultad de la tarea. La siguiente tabla ofrece algunas pautas."
    },
    {
      tipo: "lista",
      items: [
        "Un personaje necesita competencia en la habilidad de Computadoras para intentar cualquier prueba de hackeo. Intentar realizar una prueba de Computadoras sin competencia da como resultado un fallo automático.",
        "El hackeo lleva tiempo. Una tarea fácil puede tomar solo unos minutos, mientras que una tarea difícil puede tomar una hora o más. Como regla general, un personaje puede reducir a la mitad el tiempo que tarda una tarea de hackeo aceptando una penalización de -5 en su tirada. Por el contrario, un personaje puede obtener un bonificador de +5 en una tirada si se toma el doble del tiempo normal para la tarea.",
        "Un fallo en una prueba de hackeo generalmente significa que el personaje no puede intentar esa tarea de nuevo hasta que haya pasado una cantidad significativa de tiempo, y a menudo activa algún tipo de alarma o contramedida de seguridad."
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-cds-hackeo",
      titulo: "CD de Hackeo",
      encabezados: ["CD", "Tarea de Ejemplo"],
      filas: [
        ["10", "Acceder a un sistema informático público, como un directorio de biblioteca o un portal de información del campus."],
        ["15", "Acceder a un sistema informático privado protegido por contraseña, como el portátil de alguien o la red de una pequeña empresa."],
        ["20", "Acceder a la red de una gran corporación o a un sistema gubernamental de bajo nivel."],
        ["25", "Acceder a una red gubernamental o militar de alto secreto."],
        ["30", "Acceder a sistemas informáticos teóricos o de próxima generación."]
      ]
    },
    {
      tipo: "h4",
      texto: "Francotiradores"
    },
    {
      tipo: "parrafo",
      texto: "Los francotiradores pueden ser un adversario particularmente mortal en una campaña de Everyday Heroes, pero hay reglas especiales a tener en cuenta al usarlos. La mayoría de las armas de francotirador tienen un alcance efectivo de más de 1,000 pies. A esa distancia, la mayoría de los personajes ni siquiera podrán ver de dónde viene el disparo, y mucho menos tomar represalias."
    },
    {
      tipo: "parrafo",
      texto: "Cuando se usa un francotirador, es importante dar a los personajes la oportunidad de encontrar cobertura, incluso si no saben de dónde viene el disparo. Como regla general, un GM debe dar a los personajes un turno completo de acciones después de que se dispare el primer tiro para que corran hacia un lugar seguro. Después de eso, cualquiera que se exponga puede ser blanco del francotirador. Usar las reglas de Cobertura en el Capítulo 9 es importante, al igual que dar a los personajes la oportunidad de determinar de dónde provienen los disparos."
    },
    {
      tipo: "h4",
      texto: "Confrontaciones (Standoffs)"
    },
    {
      tipo: "parrafo",
      texto: "Las confrontaciones son un elemento básico de las películas de acción. Los héroes tienen a los villanos a punta de pistola. Los villanos tienen a los héroes a punta de pistola. Todos tienen rehenes. Podría ser una situación de robo a un banco o una tensa negociación en un almacén abandonado. Las confrontaciones pueden ser una excelente manera de construir drama y suspense en una historia."
    },
    {
      tipo: "parrafo",
      texto: "Para manejar una confrontación, sigue estos pasos:"
    },
    {
      tipo: "lista",
      items: [
        "<strong>Paso 1: Iniciativa.</strong> A menos que un lado haya sorprendido claramente al otro, no tires por iniciativa todavía.",
        "<strong>Paso 2: Conversación.</strong> Deja que la escena se desarrolle. Permite que los jugadores hablen tanto como quieran, y juega el papel de los PNJ de la manera más realista posible. Algunos PNJ pueden estar nerviosos. Otros pueden estar tranquilos y serenos. Algunos pueden ser propensos a la violencia, mientras que otros pueden querer evitarla a toda costa. El objetivo del juego de rol es determinar si se puede llegar a un acuerdo o si la situación se deteriora.",
        "<strong>Paso 3: Pruebas de Habilidad.</strong> Durante la conversación, los personajes pueden intentar realizar pruebas de habilidad para obtener una ventaja. Las pruebas de Carisma (Engaño, Intimidación, Persuasión) y Sabiduría (Perspicacia) son las más comunes aquí. Una prueba exitosa podría dar a los personajes una ventaja en la próxima tirada de iniciativa, o podría evitar la necesidad de tirar por iniciativa por completo.",
        "<strong>Paso 4: ¡Acción!</strong> Si las negociaciones se rompen, o si un bando decide que ha tenido suficiente, tira por iniciativa. La escena de la confrontación ha terminado y el combate ha comenzado."
      ]
    },
    {
      tipo: "h4",
      texto: "Llamar a las Autoridades"
    },
    {
      tipo: "parrafo",
      texto: "A veces, la mejor opción para los héroes es simplemente llamar a la policía. Sin embargo, en las películas de acción, esto a menudo conduce a resultados indeseables. Los refuerzos pueden tardar en llegar. La policía puede no creer la historia de los personajes. Los villanos pueden tener a la policía en su nómina. El GM siempre debe considerar las consecuencias de involucrar a las autoridades y dejar que se desarrollen de manera realista."
    },
    {
      tipo: "h4",
      texto: "Deslizamientos y Avalanchas"
    },
    {
      tipo: "parrafo",
      texto: "Un deslizamiento de tierra o una avalancha pueden ser causados por un personaje que usa explosivos o por un evento natural. En cualquier caso, el GM determina el tamaño del área afectada y el daño que causa. La regla general es la siguiente:"
    },
    {
      tipo: "lista",
      items: [
        "Un personaje atrapado en un deslizamiento de tierra o avalancha debe realizar una tirada de salvación de Destreza. La CD de la salvación se basa en la gravedad del evento, desde una CD 10 para un evento menor hasta una CD 20 para uno mayor.",
        "Si el personaje tiene éxito en la tirada de salvación, puede usar su reacción para moverse hasta la mitad de su velocidad a un lugar seguro, si es posible. Si no hay un lugar seguro al que moverse, o si el personaje falla la tirada de salvación, sufre daño contundente y queda enterrado bajo los escombros. Un personaje enterrado está Restringido e Incapacitado, y comienza a asfixiarse.",
        "Un personaje puede intentar liberarse de los escombros realizando una prueba de Fuerza (Atletismo) con una CD igual a la tirada de salvación original."
      ]
    },
    {
      tipo: "h2",
      texto: "Reglas Opcionales"
    },
    {
      tipo: "h3",
      texto: "Inspiración"
    },
    {
      tipo: "parrafo",
      texto: "La inspiración es una regla que los GMs pueden usar para recompensar a los jugadores por un juego de rol excepcional, pensar de manera inteligente o simplemente por ser entretenidos. Un GM puede otorgar inspiración a un jugador en cualquier momento. Un jugador solo puede tener una inspiración a la vez, y no puede transferirla a otro jugador."
    },
    {
      tipo: "parrafo",
      texto: "Un jugador puede gastar su inspiración para ganar ventaja en cualquier tirada de d20. Deben decidir gastar su inspiración antes de realizar la tirada. Después de usarla, la inspiración se pierde."
    },
    {
      tipo: "h3",
      texto: "Descansos Rápidos"
    },
    {
      tipo: "parrafo",
      texto: "Los GMs que deseen acelerar el juego pueden permitir descansos rápidos, que duran solo 10 minutos en lugar de una hora. Todas las demás reglas para los descansos cortos se aplican a los descansos rápidos."
    },
    {
      tipo: "h3",
      texto: "Rastreo de Munición"
    },
    {
      tipo: "parrafo",
      texto: "No a todos los jugadores les gusta llevar un registro de cuántas balas quedan en su arma. Si prefieres no hacerlo, puedes usar las siguientes reglas opcionales para el seguimiento de la munición."
    },
    {
      tipo: "lista",
      items: [
        "<strong>Recarga Menor:</strong> Cuesta una acción bonus y se usa para recargar un arma con 10 o menos rondas en un cargador.",
        "<strong>Recarga Mayor:</strong> Cuesta una acción y se usa para recargar cualquier arma con un cargador de más de 10 rondas.",
        "<strong>Recarga de Emergencia:</strong> Cuando un personaje saca un 1 natural en una tirada de ataque con un arma de fuego, se queda sin munición. Debe realizar una recarga menor o mayor en su próximo turno si desea seguir disparando."
      ]
    },
    {
      tipo: "h3",
      texto: "Muerte Súbita"
    },
    {
      tipo: "parrafo",
      texto: "Las tiradas de salvación por muerte añaden una capa de suspense al juego. Sin embargo, no todos los GMs las disfrutan. Si prefieres un juego más letal, puedes declarar que cualquier personaje que llegue a 0 puntos de golpe muere instantáneamente."
    },
    {
      tipo: "h3",
      texto: "Veneno"
    },
    {
      tipo: "parrafo",
      texto: "Cuando un personaje es envenenado, sufre los efectos que se enumeran en la siguiente tabla. Si un personaje es envenenado varias veces, los efectos se acumulan. Un personaje puede intentar realizar una tirada de salvación de Constitución al final de cada uno de sus turnos para terminar con los efectos del veneno. La CD de la salvación se basa en la potencia del veneno."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-venenos",
      titulo: "Venenos",
      encabezados: ["Potencia", "CD", "Efecto"],
      filas: [
        ["Baja", "10", "1d4 de daño por veneno por ronda, condición de Envenenado."],
        ["Media", "15", "1d8 de daño por veneno por ronda, condición de Envenenado."],
        ["Alta", "20", "1d12 de daño por veneno por ronda, condición de Envenenado."]
      ]
    },
    {
      tipo: "h3",
      texto: "Heridas"
    },
    {
      tipo: "parrafo",
      texto: "Las heridas son una regla opcional que se puede usar para añadir más realismo y peligro al juego. Cuando un personaje sufre una herida, tira en la siguiente tabla para determinar el efecto. Un personaje puede tener múltiples heridas, pero no puede tener la misma herida dos veces. Si un personaje saca una herida que ya tiene, el GM elige una herida diferente de la tabla."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-heridas",
      titulo: "Heridas",
      encabezados: ["d20", "Herida", "Efecto"],
      filas: [
        ["1", "Hueso Roto (brazo)", "No puedes usar el brazo. Si es tu brazo dominante, tienes desventaja en las tiradas de ataque y pruebas de habilidad que requieran el uso de las manos."],
        ["2", "Hueso Roto (pierna)", "Tu velocidad se reduce a la mitad y tienes desventaja en las pruebas de habilidad basadas en la Destreza."],
        ["3", "Conmoción Cerebral", "Tienes desventaja en las pruebas de habilidad y tiradas de salvación de Inteligencia y Sabiduría."],
        ["4-5", "Herida Interna", "Tienes desventaja en las pruebas de habilidad y tiradas de salvación de Fuerza y Constitución."],
        ["6-7", "Herida Menor", "Tienes un nivel de Fatiga."],
        ["8-10", "Cicatriz Horrible", "Tienes desventaja en las pruebas de Carisma (Persuasión), pero ventaja en las pruebas de Carisma (Intimidación)."],
        ["11-13", "Herida Leve", "Sin efecto adverso."],
        ["14-16", "Músculo Distendido", "Tienes desventaja en las pruebas de habilidad y tiradas de salvación de Fuerza y Destreza."],
        ["17", "Herida Debilitante Persistente", "Tira en la tabla de Heridas Debilitantes Persistentes."],
        ["18-19", "Cojo", "Tu velocidad se reduce en 5 pies."],
        ["20", "Horriblemente Desfigurado", "La gente reacciona ante ti con miedo y disgusto. Tienes desventaja en todas las pruebas de habilidad basadas en el Carisma, excepto Intimidación."]
      ]
    },
    {
      tipo: "h5",
      texto: "Sanando Heridas"
    },
    {
      tipo: "parrafo",
      texto: "Una herida se puede curar con una prueba de Sabiduría (Medicina) exitosa. La CD de la prueba es igual a la tirada de d20 que resultó en la herida. Si la prueba tiene éxito, la herida se cura y el personaje ya no sufre sus efectos. Un personaje puede intentar curar una herida una vez al día."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-heridas-debilitantes-persistentes",
      titulo: "Heridas Debilitantes Persistentes",
      encabezados: ["d6", "Herida", "Efecto"],
      filas: [
        ["1", "Daño Cerebral", "Tu Inteligencia o Sabiduría se reduce permanentemente en 1d4."],
        ["2", "Ciego de un Ojo", "Tienes desventaja en las pruebas de Sabiduría (Percepción) que se basan en la vista."],
        ["3", "Lesión de Espalda Crónica", "Tienes desventaja permanente en las pruebas de habilidad y tiradas de salvación de Fuerza."],
        ["4", "Cicatriz Emocional", "Tienes desventaja permanente en las pruebas de habilidad y tiradas de salvación de Sabiduría o Carisma."],
        ["5", "Sordo de un Oído", "Tienes desventaja en las pruebas de Sabiduría (Percepción) que se basan en el oído."],
        ["6", "Miembro Perdido", "Pierdes un brazo, mano, pierna o pie. El GM determina el efecto."]
      ]
    },
    {
      tipo: "h3",
      texto: "Enfermedad"
    },
    {
      tipo: "parrafo",
      texto: "Un personaje puede contraer una enfermedad por diversas fuentes. Cuando un personaje está expuesto a una enfermedad, debe realizar una tirada de salvación de Constitución para evitar infectarse. La CD de la salvación se basa en la virulencia de la enfermedad."
    },
    {
      tipo: "lista",
      items: [
        "<strong>CD 10:</strong> Enfermedad de baja gravedad, como un resfriado común.",
        "<strong>CD 15:</strong> Enfermedad de gravedad media, como la gripe.",
        "<strong>CD 20:</strong> Enfermedad de alta gravedad, como el ébola."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Si la tirada de salvación falla, el personaje contrae la enfermedad y sufre sus efectos. Los efectos de una enfermedad pueden variar desde leves hasta mortales. Un personaje puede intentar realizar una tirada de salvación de Constitución al final de cada día para recuperarse de la enfermedad. Si la tirada de salvación tiene éxito, la enfermedad termina y el personaje ya no sufre sus efectos."
    },
    {
      tipo: "h3",
      texto: "Drogas Recreativas"
    },
    {
      tipo: "parrafo",
      texto: "Las drogas recreativas son una parte desafortunada de la vida moderna. Un personaje puede optar por consumir drogas por diversas razones, pero siempre hay un costo. La siguiente sección detalla los efectos de varias drogas recreativas. Los personajes pueden volverse adictos a cualquiera de estas drogas. Un personaje que consume una droga más de una vez en un período de 24 horas debe realizar una tirada de salvación de Constitución. La CD de la salvación es 10 para la primera vez que se consume la droga, y aumenta en 5 por cada vez adicional que se consume la droga dentro de las 24 horas. Si la tirada de salvación falla, el personaje se vuelve adicto."
    },
    {
      tipo: "parrafo",
      texto: "Un personaje adicto debe consumir la droga al menos una vez cada 24 horas o sufrir los efectos de la abstinencia. Los efectos de la abstinencia son determinados por el GM, pero generalmente incluyen un nivel de Fatiga y desventaja en las pruebas de habilidad y tiradas de salvación. Un personaje puede intentar superar una adicción pasando una semana sin consumir la droga. Al final de la semana, el personaje debe realizar una tirada de salvación de Constitución de CD 20. Si la tirada de salvación tiene éxito, la adicción termina. Si la tirada de salvación falla, el personaje permanece adicto."
    },
    {
      tipo: "h6",
      texto: "Alcohol"
    },
    {
      tipo: "parrafo",
      texto: "El alcohol es un depresor que afecta el sistema nervioso central. Un personaje que consume alcohol sufre los siguientes efectos:<br>• <strong>Dosis baja:</strong> 1 bebida por hora. Ventaja en las tiradas de salvación contra el miedo.<br>• <strong>Dosis moderada:</strong> 2-3 bebidas por hora. Desventaja en las pruebas de Destreza, condición de Envenenado.<br>• <strong>Dosis alta:</strong> 4 o más bebidas por hora. Desventaja en todas las pruebas de habilidad, tiradas de ataque y tiradas de salvación, condición de Envenenado."
    },
    {
      tipo: "h6",
      texto: "Cafeína"
    },
    {
      tipo: "parrafo",
      texto: "La cafeína es un estimulante que aumenta el estado de alerta y la concentración. Un personaje que consume cafeína sufre los siguientes efectos:<br>• <strong>Dosis baja:</strong> 1-2 bebidas con cafeína por hora. Ventaja en las pruebas de Sabiduría (Percepción).<br>• <strong>Dosis moderada:</strong> 3-4 bebidas con cafeína por hora. El personaje no puede dormir.<br>• <strong>Dosis alta:</strong> 5 o más bebidas con cafeína por hora. El personaje gana un nivel de Fatiga."
    },
    {
      tipo: "h6",
      texto: "Marihuana"
    },
    {
      tipo: "parrafo",
      texto: "La marihuana es un alucinógeno que altera la percepción y el estado de ánimo. Un personaje que consume marihuana sufre los siguientes efectos:<br>• <strong>Dosis baja:</strong> Ventaja en las pruebas de habilidad creativas, desventaja en las pruebas de Sabiduría (Percepción).<br>• <strong>Dosis moderada:</strong> Desventaja en todas las pruebas de habilidad que no sean creativas, las tiradas de ataque y las tiradas de salvación.<br>• <strong>Dosis alta:</strong> Condición de Envenenado e Incapacitado."
    },
    {
      tipo: "h6",
      texto: "Cocaína"
    },
    {
      tipo: "parrafo",
      texto: "La cocaína es un estimulante que produce euforia y aumenta la energía. Un personaje que consume cocaína sufre los siguientes efectos:<br>• <strong>Efecto inmediato:</strong> Durante 1 hora, el personaje tiene ventaja en las pruebas de Carisma y no puede ser asustado.<br>• <strong>Consecuencias:</strong> Después de 1 hora, el personaje gana un nivel de Fatiga."
    },
    {
      tipo: "h6",
      texto: "Heroína"
    },
    {
      tipo: "parrafo",
      texto: "La heroína es un opiáceo que produce euforia y alivia el dolor. Un personaje que consume heroína sufre los siguientes efectos:<br>• <strong>Efecto inmediato:</strong> Durante 1 hora, el personaje es inmune al dolor, ganando reducción de daño 5 contra todo el daño, y no puede ser asustado.<br>• <strong>Consecuencias:</strong> Después de 1 hora, el personaje gana un nivel de Fatiga y tiene desventaja en todas las pruebas de habilidad, tiradas de ataque y tiradas de salvación durante 1d4 horas."
    }
  ]
};
export default capitulo12;