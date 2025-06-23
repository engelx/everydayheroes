const capitulo7 = {
  id: "capitulo-7",
  titulo: "Capítulo 7: Hazañas",
  numero: 7,
  contenido: [
    {
      tipo: "introduccion",
      texto: "Las Hazañas optimizan o añaden variedad a tu héroe. Al usarlas para personalizar lo que un héroe puede hacer, ayudan a que cada héroe sea único. Las Hazañas se dividen en tres grandes categorías: Hazañas Básicas, Hazañas Avanzadas y Hazañas Multiclase."
    },
    {
      tipo: "h2",
      texto: "Adquiriendo Hazañas"
    },
    {
      tipo: "parrafo",
      texto: "En los niveles 2, 4, 6, 8 y 10, los héroes pueden elegir hazañas. Puedes elegir dos hazañas menores o una hazaña mayor. Las hazañas mayores son más poderosas, por lo que solo puedes obtener una cuando elijas hazañas. Todas las hazañas multiclase son mayores, pero la mayoría de las demás son menores."
    },
    {
      tipo: "parrafo",
      texto: "Algunas hazañas tienen requisitos previos que debes cumplir para tomarlas. Esto puede ser un nivel mínimo, una puntuación de característica, una competencia u otra hazaña. Si en algún momento un héroe deja de cumplir los requisitos previos para una hazaña que ha tomado, no puede usar los beneficios de la hazaña hasta que vuelva a cumplir los requisitos previos. Esto no se aplica a los requisitos previos que te exigen no tener un arquetipo o clase determinados."
    },
    {
      tipo: "h3",
      texto: "Tipos de Hazañas"
    },
    {
      tipo: "lista_definicion",
      items: [
        {
          termino: "Hazañas Básicas",
          definicion: "Estas hazañas genéricas te permiten elegir qué beneficios obtienes u ofrecen talentos de personaje básicos. Puedes tomar hazañas básicas varias veces. Todas las hazañas básicas son hazañas menores. ¡Las hazañas básicas son geniales si quieres hacer que tu héroe sea fuerte, manteniendo las cosas simples!"
        },
        {
          termino: "Hazañas Avanzadas",
          definicion: "Estas hazañas te otorgan beneficios específicos y detallados que son únicos o imitan talentos de clases. Solo puedes tomar una hazaña avanzada una vez. La mayoría de las hazañas avanzadas son hazañas menores, pero algunas son hazañas mayores."
        },
        {
          termino: "Hazañas Multiclase",
          definicion: "Estas hazañas te otorgan talentos de otros arquetipos y clases. Solo puedes tomarlas una vez, y no puedes tomar las hazañas de tu propio arquetipo o clase. Estas poderosas hazañas añaden complejidad a tu héroe. Todas las hazañas multiclase son hazañas mayores."
        }
      ]
    },
    {
      tipo: "h3",
      texto: "Tabla de Hazañas"
    },
    {
      tipo: "parrafo",
      texto: "La tabla de hazañas puede ayudarte a encontrar una hazaña que quieras tomar. Revisa la tabla para ver qué hazañas te podrían gustar, y luego busca los detalles de lo que hacen en el juego."
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-hazañas-basicas",
      titulo: "Hazañas Básicas",
      encabezados: ["Nombre de la Hazaña", "Descripción", "Tipo"],
      filas: [
        ["Entrenamiento de Puntuación de Característica", "Aumenta una puntuación de característica en 1 punto", "Menor"],
        ["Entrenamiento de Habilidad Avanzado", "Otorga experiencia en una habilidad en la que ya eres competente", "Menor"],
        ["Entrenamiento de Equipo", "Otorga competencias con equipo", "Menor"],
        ["Inversiones", "Aumenta el Nivel de Riqueza", "Menor"],
        ["Entrenamiento de Habilidad", "Otorga competencias con habilidades", "Menor"],
        ["Entrenamiento de Supervivencia", "Otorga competencias con tiradas de salvación", "Menor"]
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-hazañas-avanzadas-menores",
      titulo: "Hazañas Avanzadas — Menores",
      encabezados: ["Nombre de la Hazaña", "Descripción", "Tipo"],
      filas: [
        ["Susurrador de Animales", "Proporciona una mascota bien entrenada", "Menor"],
        ["Esquivador Hábil", "Permite ataques con arma secundaria mientras esquivas", "Menor"],
        ["Reflejos Impresionantes", "Atrapa y devuelve las armas que te lancen", "Menor"],
        ["Médico de Campo", "Ayuda a otros a recuperar puntos de golpe en combate", "Menor"],
        ["Maestro de la Hoja", "Dificulta a los oponentes cuando usas un arma cuerpo a cuerpo cortante", "Menor"],
        ["Combate a Ciegas", "Lucha eficazmente en la oscuridad o mientras estás Ciego", "Menor"],
        ["Bruto", "Dificulta a los oponentes cuando usas un arma cuerpo a cuerpo contundente", "Menor"],
        ["Entrenamiento Cruzado", "Usa cualquier habilidad física con habilidades físicas", "Menor"],
        ["Conducción Defensiva", "Obtén ventajas en persecuciones de vehículos violentas", "Menor"],
        ["Tenaz", "Se estabiliza automáticamente cuando tiene 0 puntos de golpe", "Menor"],
        ["Pies Rápidos", "Corre más rápido", "Menor"],
        ["Manos Rápidas", "Recarga y manipula armas más rápido", "Menor"],
        ["Parkour", "Supera obstáculos fácilmente mientras corres", "Menor"],
        ["Contactos Globales", "Tiene amigos en todo el mundo", "Menor"],
        ["Luchador", "Obtén ventajas al agarrar e inmovilizar", "Menor"],
        ["Gran Cocinero", "Cura aliados e influye en la gente con la cocina", "Menor"],
        ["Pistolero", "Dispara rápido y con precisión a corta distancia", "Menor"],
        ["Artillero", "Dispara con precisión desde vehículos en movimiento y monturas", "Menor"],
        ["Robusto", "Los Dados de Golpe curan más puntos de golpe", "Menor"],
        ["Imitador", "Imita bien a personas específicas", "Menor"],
        ["Aprendiz de Todo", "Obtén un bonificador en habilidades en las que no eres competente", "Menor"],
        ["Experto en Idiomas", "Aprende idiomas y el uso de cifrados", "Menor"],
        ["Predicar con el Ejemplo", "Da ventaja a otros en pruebas de habilidad grupales", "Menor"],
        ["Tiro Perfecto", "Nunca falles con una granada", "Menor"],
        ["Fuego de Fijación", "Sigue a un objetivo mientras usas fuego de supresión", "Menor"],
        ["Acumulador", "Lleva más cosas", "Menor"],
        ["Especialista en Venenos", "Obtén ventajas al tratar y usar venenos", "Menor"],
        ["Castigador", "Obtén ataques de oportunidad en más situaciones", "Menor"],
        ["Corredor", "Mejora tu velocidad y agilidad en persecuciones de vehículos", "Menor"],
        ["Pensamiento Renacentista", "Intercambia modificadores de Inteligencia y Sabiduría para pruebas de habilidad", "Menor"],
        ["Resistente", "Resiste varias condiciones como Fatiga y Aturdido", "Menor"],
        ["Reforzado", "Resiste efectos y daños de venenos", "Menor"],
        ["Ingenioso", "Crea herramientas y materiales de casi cualquier cosa", "Menor"],
        ["Explorador", "Obtén un bonificador en percepción y trampas", "Menor"],
        ["Seductor", "Obtén ventajas sociales a través del atractivo sexual", "Menor"],
        ["Hostigador", "Evita ataques de oportunidad de varias maneras", "Menor"],
        ["Arrebatar la Victoria", "Convierte un 1 en un 20 una vez al día", "Menor"],
        ["Dedos Pegajosos", "Roba carteras en combate cuerpo a cuerpo", "Menor"],
        ["Toque de Gracia", "Obtén un bonificador a las tiradas de salvación no competentes", "Menor"],
        ["Volteretas", "Muévete entre multitudes y levántate rápidamente", "Menor"],
        ["Muerto Viviente", "Continúa actuando con 0 puntos de golpe", "Menor"],
        ["Ballena", "Usa tu riqueza para obtener ventaja social", "Menor"],
        ["Empalador", "Tienes talento para apuñalar a los oponentes donde más les duele", "Menor"],
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-hazañas-avanzadas-mayores",
      titulo: "Hazañas Avanzadas — Mayores",
      encabezados: ["Nombre de la Hazaña", "Descripción", "Tipo"],
      filas: [
        ["Tonto de la Fortuna", "Vuelve a tirar tres ataques, tiradas de salvación o pruebas de habilidad por día", "Mayor"],
        ["Guerrillero", "Emboscada a enemigos desde las sombras", "Mayor"],
        ["Hostigador", "Bloquea ataques cuerpo a cuerpo y ataca mientras te retiras", "Mayor"],
        ["Saludable", "Aumenta tu máximo de puntos de golpe", "Mayor"],
        ["Disparo Perfecto", "Dispara a múltiples oponentes que están en fila", "Mayor"],
        ["Golpe de Poder", "Inflige daño a los oponentes al hacerles tropezar o empujar", "Mayor"],
        ["Arma Distintiva", "Obtén varias ventajas usando un arma favorita", "Mayor"],
        ["Ataque Amplio", "Golpea a múltiples oponentes con un solo gran golpe", "Mayor"]
      ]
    },
    {
      tipo: "tabla",
      id_tabla: "tabla-hazañas-multiclase-mayores",
      titulo: "Hazañas Multiclase (Hazañas Mayores)",
      encabezados: ["Nombre de la Hazaña", "Descripción", "Tipo"],
      filas: [
        ["Entrenamiento de Arquetipo (Entrenamiento de Héroe Fuerte, Entrenamiento de Héroe Ágil, Entrenamiento de Héroe Resistente, Entrenamiento de Héroe Inteligente, Entrenamiento de Héroe Sabio, Entrenamiento de Héroe Encantador)", "Obtén habilidades y talentos de cada uno de los seis arquetipos", "Mayor"],
        ["Entrenamiento de Clase (Entrenamiento de Brawler, Entrenamiento de Artillero Pesado, Entrenamiento de Luchador de MMA, Entrenamiento de Artista Marcial, Entrenamiento de Pícaro, Entrenamiento de Tirador Certero, Entrenamiento de Guardaespaldas, Entrenamiento de Comando, Entrenamiento de Scrapper, Entrenamiento de Ingeniero, Entrenamiento de Hacker, Entrenamiento de Mente Maestra, Entrenamiento de Científico, Entrenamiento de Cazador, Entrenamiento de Maestro, Entrenamiento de Detective, Entrenamiento de Duelista, Entrenamiento de Icono, Entrenamiento de Líder, Entrenamiento de Manipulador)", "Obtén competencias y talentos de cada una de las diecinueve clases", "Mayor"],
        ["Entrenamiento de Clase Avanzado (Entrenamiento de Brawler Avanzado, Entrenamiento de Artillero Pesado Avanzado, Entrenamiento de Luchador de MMA Avanzado, Entrenamiento de Artista Marcial Avanzado, Entrenamiento de Pícaro Avanzado, Entrenamiento de Tirador Certero Avanzado, Entrenamiento de Guardaespaldas Avanzado, Entrenamiento de Comando Avanzado, Entrenamiento de Scrapper Avanzado, Entrenamiento de Ingeniero Avanzado, Entrenamiento de Hacker Avanzado, Entrenamiento de Mente Maestra Avanzada, Entrenamiento de Científico Avanzado, Entrenamiento de Cazador Avanzado, Entrenamiento de Maestro Avanzado, Entrenamiento de Detective Avanzado, Entrenamiento de Duelista Avanzado, Entrenamiento de Icono Avanzado, Entrenamiento de Líder Avanzado, Entrenamiento de Manipulador Avanzado)", "Obtén talentos de clase de nivel superior", "Mayor"]
      ]
    },
    {
      tipo: "h2",
      texto: "Hazañas Básicas"
    },
    {
      tipo: "h3",
      texto: "Entrenamiento de Puntuación de Característica (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has entrenado tu mente y/o cuerpo para aumentar tu potencial humano general. Cada vez que tomas esta hazaña, puedes aumentar cualquier puntuación de característica en 1 hasta un máximo de 20."
    },
    {
      tipo: "h3",
      texto: "Entrenamiento de Habilidad Avanzado (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te encanta adquirir nuevas habilidades y destrezas a través del estudio y la práctica constantes. Cada vez que tomas esta hazaña, ganas experiencia en una habilidad de tu elección en la que ya eres competente."
    },
    {
      tipo: "h3",
      texto: "Entrenamiento de Equipo (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te has entrenado para usar varios tipos de equipo de combate."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Básico si aún no la tienes.",
        "Elige una competencia de equipo adicional entre Equipo Avanzado, Equipo Histórico y Equipo Improvisado.",
        "Si ya tienes competencia con Equipo Avanzado, puedes seleccionar Equipo Militar."
      ]
    },
    {
      tipo: "h3",
      texto: "Inversiones (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has realizado inversiones inteligentes o has recibido una herencia de algún tipo. Cada vez que tomas esta hazaña, ganas +1 Nivel de Riqueza (máximo 5)."
    },
    {
      tipo: "h3",
      texto: "Entrenamiento de Habilidad (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te encanta adquirir nuevas habilidades y destrezas a través del estudio y la práctica constantes. Cada vez que tomas esta hazaña, ganas competencia en dos habilidades de tu elección."
    },
    {
      tipo: "h3",
      texto: "Entrenamiento de Supervivencia (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te has fortalecido contra diversos peligros. Cada vez que tomas esta hazaña, ganas competencia con un tipo de tirada de salvación de tu elección."
    },
    {
      tipo: "h2",
      texto: "Hazañas Avanzadas — Menores"
    },
    {
      tipo: "parrafo",
      texto: "Las hazañas avanzadas incluyen actividades heroicas y cotidianas. Muchas son útiles en combate, pero hay muchas otras para usar en la resolución de otro tipo de desafíos."
    },
    {
      tipo: "h3",
      texto: "Susurrador de Animales (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Formas un vínculo especial con tus mascotas y eres bueno con los animales. Ganas ventaja en las pruebas de habilidad para influir en los animales."
    },
    {
      tipo: "parrafo",
      texto: "Puedes entrenar a un animal de tamaño diminuto a grande para que realice una variedad de comportamientos a tu orden:"
    },
    {
      tipo: "lista",
      items: [
        "Traer objetos, ya sean lanzados, a la vista o en un lugar conocido por el animal (a discreción del GM).",
        "Buscar objetos específicos, olores, sonidos u otros estímulos que el animal pueda detectar naturalmente.",
        "Entregar un objeto a un lugar conocido por el animal.",
        "Dar la alarma cuando una persona o animal desconocido entra en un lugar donde se encuentra el animal.",
        "Realizar acrobacias o trucos físicos dentro de su rango de capacidades."
      ]
    },
    {
      tipo: "parrafo",
      texto: "El bloque de estadísticas de este animal es el de un miembro promedio de su especie. Si la mascota muere, puedes entrenar una nueva en 30 días. Las acciones del animal, fuera de los comportamientos especificados, siempre quedan a discreción del GM. Esta hazaña no permite que una mascota realice ataques en combate."
    },
    {
      tipo: "parrafo",
      texto: "Si tienes un talento de clase que otorga un compañero animal especial, esta hazaña puede aplicarse tanto a ese animal como a cualquier otro que elijas entrenar."
    },
    {
      tipo: "h3",
      texto: "Esquivador Hábil (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Aunque prefieres mantenerte a la defensiva, has aprendido a combinar un ataque cuando es necesario. Puedes realizar un ataque con arma secundaria después de realizar una acción de Esquivar, renunciando al requisito de haber realizado la acción de Ataque en este turno."
    },
    {
      tipo: "h3",
      texto: "Reflejos Impresionantes (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te has entrenado para atrapar objetos que se lanzan hacia ti de forma refleja e incluso puedes devolverlos. Cuando alguien te arroja un arma, puedes gastar una reacción para intentar atraparla y luego devolverla al atacante. Antes de que el atacante tire para golpear, haz una tirada de salvación de Destreza con una CD igual a la Defensa del atacante. Si tienes éxito, el atacante es golpeado y recibe daño del ataque. Si fallas, el ataque se resuelve normalmente."
    },
    {
      tipo: "h3",
      texto: "Médico de Campo (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te has entrenado en primeros auxilios y medicina de emergencia."
    },
    {
      tipo: "lista",
      items: [
        "Cuando uses un botiquín de primeros auxilios para estabilizar a alguien, esa persona también recupera 1 punto de golpe.",
        "Como acción, puedes usar un botiquín de primeros auxilios para tratar a una persona consciente adyacente a ti. Realiza una prueba de Inteligencia (Medicina) de CD 10. Si tiene éxito, el objetivo puede gastar un Dado de Golpe para recuperar puntos de golpe. Esta acción no se puede volver a usar en la misma persona hasta que haya realizado un descanso corto o prolongado.",
        "Si no tienes un botiquín de primeros auxilios a mano, puedes intentar improvisar. Haz una prueba de Sabiduría (Supervivencia) de CD 15. Si tiene éxito, no necesitas un botiquín de primeros auxilios. Si la prueba falla, no puedes encontrar los materiales necesarios."
      ]
    },
    {
      tipo: "h3",
      texto: "Maestro de la Hoja (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres un experto en el uso de armas blancas para infligir cortes paralizantes a tus oponentes."
    },
    {
      tipo: "lista",
      items: [
        "Una vez por turno, cuando golpeas a un oponente con un ataque que inflige daño cortante, puedes reducir la velocidad del objetivo en 10 pies hasta el comienzo de tu próximo turno.",
        "Después de que consigas un golpe crítico que inflige daño cortante a un oponente, hasta el comienzo de tu próximo turno, el objetivo tiene desventaja en todas las tiradas de ataque."
      ]
    },
    {
      tipo: "h3",
      texto: "Combate a Ciegas (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "A través de un entrenamiento riguroso, has aprendido a usar tu audición y otros sentidos para seguir el rastro de los enemigos en el campo de batalla."
    },
    {
      tipo: "lista",
      items: [
        "Los oponentes no tienen ventaja en las tiradas de ataque dirigidas a ti porque no puedes verlos.",
        "No tienes desventaja en las tiradas de ataque debido a limitaciones de visibilidad.",
        "Puedes realizar pruebas de habilidad que normalmente requieren vista mientras no puedes ver, siempre que el GM considere que se puede sustituir otro sentido con suficiente práctica."
      ]
    },
    {
      tipo: "h3",
      texto: "Bruto (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Sabes cómo golpear cabezas y desequilibrar a tus oponentes."
    },
    {
      tipo: "lista",
      items: [
        "Una vez por turno, cuando golpeas a un oponente con un ataque que inflige daño contundente, puedes moverlo 5 pies a un espacio desocupado, siempre que el objetivo sea de tamaño grande o menor.",
        "Cuando obtienes un golpe crítico que inflige daño contundente a un oponente, las tiradas de ataque contra ese combatiente tienen ventaja hasta el comienzo de tu próximo turno."
      ]
    },
    {
      tipo: "h3",
      texto: "Entrenamiento Cruzado (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres un atleta completo, capaz de aprovechar tus puntos fuertes para superar tus debilidades. Elige una puntuación de característica entre Fuerza, Destreza o Constitución. Siempre puedes usar esa puntuación de característica al realizar pruebas de habilidad de Atletismo, Acrobacias o Resistencia."
    },
    {
      tipo: "h3",
      texto: "Conducción Defensiva (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te has entrenado para operar vehículos en condiciones hostiles y peligrosas."
    },
    {
      tipo: "lista",
      items: [
        "Tienes ventaja en las pruebas de Destreza (Vehículos) realizadas para evitar un choque.",
        "Otorgas a tu vehículo ventaja en las tiradas de salvación realizadas contra complicaciones.",
        "Mientras operas un vehículo, aumenta su modificador de Constitución en 2."
      ]
    },
    {
      tipo: "h3",
      texto: "Tenaz (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres duro como una roca y no caes fácilmente. Cuando eres reducido a 0 puntos de golpe pero no muerto, te estabilizas automática e inmediatamente."
    },
    {
      tipo: "h3",
      texto: "Pies Rápidos (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres especialmente rápido con los pies."
    },
    {
      tipo: "lista",
      items: [
        "Tu velocidad base aumenta en 10.",
        "Al usar la acción Correr (Dash), ignoras el terreno difícil.",
        "Ganas ventaja en las pruebas de Fuerza (Atletismo) realizadas durante una persecución a pie."
      ]
    },
    {
      tipo: "h3",
      texto: "Manos Rápidas (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te has entrenado extensamente con armas de fuego."
    },
    {
      tipo: "lista",
      items: [
        "Puedes recargar un arma con una velocidad de recarga de acción bonus como acción libre.",
        "Puedes recargar un arma con una velocidad de recarga de acción como acción bonus.",
        "Puedes desatascar un arma como acción bonus.",
        "Como acción, puedes desmontar un arma que tengas en la mano."
      ]
    },
    {
      tipo: "h3",
      texto: "Parkour (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has practicado el arte de correr a través de entornos llenos de obstáculos y peligros sin reducir la velocidad."
    },
    {
      tipo: "lista",
      items: [
        "Escalar no se considera movimiento difícil para ti.",
        "Puedes ignorar los requisitos de movimiento para saltos.",
        "Puedes saltar hasta 15 pies sin sufrir daño y aterrizar de pie. Esto no evita el daño por caída.",
        "Ganas ventaja en las pruebas de Destreza (Acrobacias) realizadas durante una persecución a pie."
      ]
    },
    {
      tipo: "h3",
      texto: "Contactos Globales (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has construido una red de amigos y contactos por todo el mundo."
    },
    {
      tipo: "lista",
      items: [
        "Dondequiera que viajes, puedes pedir un favor a un amigo, como un viaje, traducción, comida y alojamiento, información local, fianza (donde esté disponible) o rescate discreto (cuando sea factible).",
        "Puedes obtener ventaja en las pruebas de Sabiduría (Callejeo) llamando a un amigo y pidiéndole consejos.",
        "Puedes pedir prestados hasta tres objetos con un nivel de precio de 3 o menos por mes a tu amigo local. ¡Sé el tipo de héroe que devuelve lo que pide prestado!"
      ]
    },
    {
      tipo: "h3",
      texto: "Luchador (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has desarrollado las habilidades necesarias para defenderte en el combate cuerpo a cuerpo."
    },
    {
      tipo: "lista",
      items: [
        "Tienes ventaja en las tiradas de ataque contra un oponente al que estás apresando.",
        "Si actualmente tienes un oponente Apresado, puedes realizar un ataque especial para inmovilizarlo. No se realiza tirada de ataque ni prueba de habilidad, el éxito es automático. Tú y el oponente se consideran Restringidos hasta que se rompa el agarre."
      ]
    },
    {
      tipo: "h3",
      texto: "Gran Cocinero (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Puedes preparar comida para que sepa muy bien y proporcione una nutrición óptima."
    },
    {
      tipo: "lista",
      items: [
        "Tienes ventaja en las pruebas de Carisma (Persuasión) realizadas con cualquiera que coma una comida que hayas preparado para ellos.",
        "Cuando tú o uno de tus compañeros come comida que has preparado, puede recuperar hasta dos Dados de Golpe gastados. No pueden hacerlo de nuevo hasta que terminen un descanso prolongado."
      ]
    },
    {
      tipo: "h3",
      texto: "Pistolero (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes un dedo rápido para el gatillo y puedes disparar con precisión a corta distancia."
    },
    {
      tipo: "lista",
      items: [
        "No sufres desventaja por atacar con un arma de fuego a un oponente adyacente.",
        "Puedes realizar una acción bonus para tratar cualquier arma de fuego que empuñes que no tenga la propiedad de Disparo Lento como si tuviera la propiedad Ráfaga 3 hasta el final de tu turno."
      ]
    },
    {
      tipo: "h3",
      texto: "Artillero (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Estás entrenado en el uso de armas a distancia desde un vehículo en movimiento o mientras estás montado. No tienes desventaja al realizar ataques a distancia debido a estar montado o en un vehículo en movimiento."
    },
    {
      tipo: "h3",
      texto: "Robusto (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te mantienes en buena salud y sabes cómo cuidarte. Al tirar un Dado de Golpe para recuperar puntos de golpe, recuperas al menos el doble de tu modificador de Constitución o 2 puntos de golpe, lo que sea mayor."
    },
    {
      tipo: "h3",
      texto: "Empalador (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes talento para apuñalar a tus oponentes donde más les duele."
    },
    {
      tipo: "lista",
      items: [
        "Una vez por turno, cuando golpeas a un oponente con un ataque que inflige daño perforante, puedes volver a tirar uno de los dados de daño del ataque.",
        "Cuando obtienes un golpe crítico que inflige daño perforante a un oponente, puedes tirar el daño dos veces y tomar el mejor de los dos resultados en lugar de solo un dado."
      ]
    },
    {
      tipo: "h3",
      texto: "Imitador (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has dominado el arte de copiar la voz y los modales de los demás."
    },
    {
      tipo: "lista",
      items: [
        "Tienes ventaja en las pruebas de Carisma (Interpretación) al imitar a otras personas, sonidos de animales o sonidos de objetos.",
        "Tienes ventaja en las pruebas de Carisma (Interpretación) para disfrazar tu propia identidad o para parecer otra persona."
      ]
    },
    {
      tipo: "h3",
      texto: "Aprendiz de Todo (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Estás bien leído y eres bueno en todo lo que te propones. Puedes añadir la mitad de tu bonificador de competencia (redondeado hacia abajo) a cualquier prueba de habilidad que requiera una habilidad en la que no seas competente. No puedes usar este bonificador si ninguna habilidad es aplicable."
    },
    {
      tipo: "h3",
      texto: "Experto en Idiomas (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has aprendido varios idiomas y estudiado la naturaleza del lenguaje, lo que te da una visión de la simbología y la comunicación."
    },
    {
      tipo: "lista",
      items: [
        "Elige dos idiomas adicionales.",
        "Puedes aprender nuevos idiomas, volviéndote competente en 6 semanas, siempre que tengas un manual en un idioma que conozcas o acceso a un maestro dispuesto y competente en él.",
        "Eres hábil en el descifrado de códigos lingüísticos o simbólicos, obteniendo ventaja en las pruebas de Inteligencia (Ciencias Sociales) para descifrarlos o comprenderlos.",
        "También puedes crear cifrados y mensajes codificados. A menos que se te proporcionen los medios para descifrarlos, solo se pueden descifrar con una prueba de Inteligencia con una CD igual a tu puntuación de Inteligencia + tu bonificador de competencia."
      ]
    },
    {
      tipo: "h3",
      texto: "Predicar con el Ejemplo (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres bueno mostrando a los demás cómo hacer algo y llevándolos al éxito. Cuando estás en un equipo realizando una prueba de habilidad grupal, puedes hacer tu prueba primero. Si tienes éxito, otros miembros del equipo tienen ventaja en sus pruebas."
    },
    {
      tipo: "h3",
      texto: "Tiro Perfecto (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres un experto en lanzar objetos a objetivos estacionarios. Al lanzar o disparar una granada u otro objeto a un espacio o un objeto inmóvil, no necesitas hacer una tirada de ataque, impactas automáticamente."
    },
    {
      tipo: "h3",
      texto: "Fuego de Fijación (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Te aseguras de que un oponente no pueda escapar fácilmente de tu fuego de supresión."
    },
    {
      tipo: "lista",
      items: [
        "Cuando usas la acción Fuego de Supresión, puedes elegir un único objetivo oponente visible. Hasta que termine el fuego de supresión, o hasta que comience tu próximo turno, puedes cambiar el área objetivo de tu fuego de supresión a dondequiera que el objetivo sea visible, siempre que tengas una línea de fuego clara a esa ubicación. Cambiar el área objetivo no requiere ninguna acción.",
        "Esto hace que la reacción de Agacharse para Cubrirse sea imposible para el objetivo a menos que haya cobertura total al alcance de su movimiento, ya que el héroe puede seguir su movimiento. El objetivo debe usar su reacción de Agacharse para Cubrirse antes de que lo hagan otros combatientes en el área de fuego. Después de que el objetivo haya tenido esa oportunidad, verifica si hay otros combatientes en la nueva área de fuego."
      ]
    },
    {
      tipo: "h3",
      texto: "Acumulador (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes la espalda fuerte y eres hábil para empacar eficientemente."
    },
    {
      tipo: "lista",
      items: [
        "Puedes llevar 5 de bulto adicionales sin penalización.",
        "Puedes sacar objetos de un estuche de transporte como acción bonus en combate."
      ]
    },
    {
      tipo: "parrafo",
      texto: "El bulto es una regla opcional en las reglas básicas de Everyday Heroes."
    },
    {
      tipo: "h3",
      texto: "Especialista en Venenos (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Estás capacitado para fabricar y aplicar venenos de forma segura."
    },
    {
      tipo: "lista",
      items: [
        "Tienes ventaja en las pruebas de Inteligencia (Medicina) y Sabiduría (Supervivencia) para identificar y tratar venenos.",
        "Puedes manejar veneno sin necesidad de realizar una prueba de habilidad para evitar lesiones.",
        "Puedes aplicar veneno a una pieza de munición o arma como acción bonus.",
        "El uso de veneno por parte de los héroes queda a discreción del GM, así que consulta con tu GM antes de tomar esta hazaña."
      ]
    },
    {
      tipo: "h3",
      texto: "Castigador (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes talento para patear a la gente cuando está en el suelo y para aprovechar otras oportunidades."
    },
    {
      tipo: "lista",
      items: [
        "Puedes realizar un ataque de oportunidad cuando un oponente adyacente se levanta del estado Prono.",
        "Puedes realizar un ataque de oportunidad cuando un oponente adyacente recoge un objeto del suelo o usa un dispositivo.",
        "Puedes realizar un ataque de oportunidad cuando un oponente adyacente realiza un ataque especial contra ti."
      ]
    },
    {
      tipo: "h3",
      texto: "Corredor (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Sabes cómo llevar un vehículo al límite, yendo más rápido y maniobrando mejor que otros."
    },
    {
      tipo: "lista",
      items: [
        "Mientras operas un vehículo, aumenta su modificador de Fuerza en 2.",
        "Mientras operas un vehículo, aumenta su modificador de Destreza en 2.",
        "Ganas ventaja en las pruebas de Destreza (Vehículos) solicitadas por complicaciones."
      ]
    },
    {
      tipo: "h3",
      texto: "Pensamiento Renacentista (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres capaz de abordar los desafíos desde un enfoque filosófico e intelectual. Puedes sustituir tu modificador de Inteligencia por tu modificador de Sabiduría y viceversa al realizar pruebas de habilidad con habilidades en las que eres competente."
    },
    {
      tipo: "h3",
      texto: "Resistente (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "A través de exposiciones repetidas a castigos corporales, has ganado una resistencia significativa. Tienes ventaja en las tiradas de salvación para evitar, resistir y recuperarte de las siguientes condiciones: Fatiga, Intoxicación, Paralizado, Enfermo y Aturdido."
    },
    {
      tipo: "h3",
      texto: "Reforzado (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has desarrollado resistencias a numerosas dolencias y toxinas a través de una vida saludable y exposiciones pasadas."
    },
    {
      tipo: "lista",
      items: [
        "Tienes ventaja en las tiradas de salvación para resistir los efectos de venenos y enfermedades.",
        "Tienes reducción de daño 5 contra veneno."
      ]
    },
    {
      tipo: "h3",
      texto: "Ingenioso (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes la extraña habilidad de hacer casi cualquier cosa que necesites con lo que tengas a mano. En 10 minutos, puedes crear un invento improvisado que te permite intentar cualquier prueba de habilidad en la que seas competente sin necesidad de las herramientas, materiales o equipo que normalmente necesitarías, y anulas cualquier desventaja situacional aplicada a la prueba."
    },
    {
      tipo: "parrafo",
      texto: "Este proceso de invención improvisada implica desmantelar y romper otras herramientas u objetos perfectamente buenos que tengas a mano."
    },
    {
      tipo: "h3",
      texto: "Explorador (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has agudizado tu conciencia para captar pequeños detalles en tu entorno, lo que te permite detectar peligros y oportunidades."
    },
    {
      tipo: "lista",
      items: [
        "Ganas ventaja en las pruebas de Percepción pasiva (recuerda que la ventaja en una prueba pasiva es simplemente un bonificador de +5).",
        "Tienes ventaja en las pruebas de habilidad realizadas para derrotar trampas."
      ]
    },
    {
      tipo: "h3",
      texto: "Seductor (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has desarrollado un atractivo sexual innegable a través de una combinación de aspecto y actitud. Ganas ventaja en las pruebas de Carisma (Persuasión) y Carisma (Engaño) con personas que se sienten atraídas por tu género."
    },
    {
      tipo: "h3",
      texto: "Hostigador (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres rápido con los pies en combate y siempre estás atento a tus oponentes."
    },
    {
      tipo: "lista",
      items: [
        "Como reacción, puedes hacer que un ataque de oportunidad realizado contra ti falle automáticamente.",
        "Si golpeas a un oponente con un ataque cuerpo a cuerpo, no puede realizar un ataque de oportunidad contra ti hasta el comienzo de tu próximo turno."
      ]
    },
    {
      tipo: "h3",
      texto: "Arrebatar la Victoria (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes una extraña habilidad para convertir un desastre potencial en un éxito asombroso. Cuando sacas un 1 en un d20, puedes tratarlo como si hubieras sacado un 20. No puedes volver a hacer esto hasta que termines un descanso prolongado."
    },
    {
      tipo: "h3",
      texto: "Dedos Pegajosos (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres muy rápido robando carteras y experto en usar el combate como cobertura para tus robos."
    },
    {
      tipo: "lista",
      items: [
        "Puedes realizar pruebas de Destreza (Juego de Manos) para robar carteras como acción bonus en combate, siempre que tengas una mano libre.",
        "Si has golpeado a un oponente con un ataque cuerpo a cuerpo en esta ronda, tienes ventaja en las pruebas de Destreza (Juego de Manos) contra ese oponente en esta ronda."
      ]
    },
    {
      tipo: "parrafo",
      texto: "El carterismo suele manejarse como una contienda entre la prueba de Destreza (Juego de Manos) del ladrón contra la Percepción pasiva del defensor. Puedes robar cualquier objeto razonable de la persona que no esté sosteniendo o vistiendo. Los pasadores de granadas y las armas son opciones populares en combate."
    },
    {
      tipo: "h3",
      texto: "Toque de Gracia (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes una habilidad inusual para adaptarte a los golpes de la vida y salir de las dificultades. Puedes añadir la mitad de tu bonificador de competencia (redondeado hacia abajo) a las tiradas de salvación en las que no eres competente. Esto no se aplica a las tiradas de salvación por muerte, pero puede aplicarse a las tiradas de salvación de armadura."
    },
    {
      tipo: "h3",
      texto: "Volteretas (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Has dominado el movimiento de formas inusuales y en circunstancias diversas."
    },
    {
      tipo: "lista",
      items: [
        "No necesitas gastar movimiento para levantarte del estado Prono.",
        "Arrastrarse no se considera movimiento difícil para ti.",
        "Puedes moverte a través de espacios ocupados por oponentes.",
        "Moverte a través de un espacio ocupado por alguien no es terreno difícil para ti."
      ]
    },
    {
      tipo: "h3",
      texto: "Muerto Viviente (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Con sombría determinación sigues luchando, sin detenerte hasta tu último aliento. Cuando eres reducido a 0 puntos de golpe pero no muerto, en lugar de caer Inconsciente, ganas dos niveles de Fatiga y caes Prono. Permaneces en 0 puntos de golpe y debes realizar tiradas de salvación por muerte normalmente. Si recuperas puntos de golpe mientras estás en 0 puntos de golpe, puedes eliminar estos dos niveles de Fatiga."
    },
    {
      tipo: "h3",
      texto: "Ballena (Hazaña Menor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Nivel de Riqueza 4 o superior. Eres un gran apostador, un derrochador, y todo el mundo lo sabe, especialmente aquellos que quieren un pedazo de lo que tienes."
    },
    {
      tipo: "lista",
      items: [
        "Puedes añadir tu Nivel de Riqueza como bonificador a las pruebas de Carisma (Intimidación) y Carisma (Persuasión) realizadas con trabajadores de servicio al cliente, banqueros, profesionales de ventas, dueños de negocios, personal de casino y políticos.",
        "Ganas ventaja en las pruebas de Carisma (Persuasión) realizadas al sobornar a alguien que tiene un Nivel de Riqueza inferior al tuyo.",
        "Obtienes comidas y alojamiento gratis en hoteles y restaurantes de casino."
      ]
    },
    {
      tipo: "h2",
      texto: "Hazañas Avanzadas — Mayores"
    },
    {
      tipo: "h3",
      texto: "Tonto de la Fortuna (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Has aprendido a confiar en la providencia, y de alguna manera te ha tratado amablemente a cambio de tu fe. Ganas 3 puntos de suerte, que se reponen cada vez que realizas un descanso prolongado. Puedes gastar un punto de suerte para volver a tirar una tirada de ataque, tirada de salvación o prueba de habilidad después de la tirada, pero antes de saber el resultado. Si se tiran varios d20 debido a ventaja o desventaja, eliges solo uno para volver a tirar."
    },
    {
      tipo: "h3",
      texto: "Guerrillero (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres uno de los mejores en esconderte en las sombras y atacar desde la oscuridad."
    },
    {
      tipo: "lista",
      items: [
        "Puedes ignorar los efectos de la poca visibilidad.",
        "Puedes intentar esconderte de un oponente del que tienes poca visibilidad.",
        "Mientras estás escondido, si fallas un ataque a distancia, el ataque no revela automáticamente tu posición."
      ]
    },
    {
      tipo: "h3",
      texto: "Hostigador (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Eres hábil en el combate cuerpo a cuerpo y puedes protegerte de los combatientes de corta distancia."
    },
    {
      tipo: "lista",
      items: [
        "Si eres golpeado con un ataque cuerpo a cuerpo mientras empuñas un arma cuerpo a cuerpo con la que eres competente, puedes usar tu reacción para añadir tu bonificador de competencia a tu defensa contra ese ataque, lo que podría convertir el golpe en un fallo.",
        "Después de realizar la acción Desengancharse, puedes realizar un único ataque a distancia como acción bonus."
      ]
    },
    {
      tipo: "h3",
      texto: "Saludable (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "A través de una actividad rigurosa y una buena vida, te has vuelto más resistente a las lesiones y la fatiga en la batalla. Al tomar esta hazaña, aumenta tu máximo de puntos de golpe en 2 por nivel de personaje. Cada vez que subas de nivel, aumenta tu máximo de puntos de golpe en 2."
    },
    {
      tipo: "h3",
      texto: "Disparo Perfecto (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Has perfeccionado la técnica de golpear a múltiples oponentes con un solo disparo. Cuando realizas un ataque a distancia con un arma balística utilizando proyectiles perforantes, puedes atacar a múltiples objetivos disparando a través de uno y hacia el siguiente. Todos los objetivos a los que ataques de esta manera deben estar en tu línea de fuego. Ataca al objetivo más cercano primero. Si impactas, tira daño normalmente y luego puedes realizar un ataque al siguiente objetivo en tu línea de fuego. Si los objetivos posteriores son impactados, reciben el mismo daño. Si fallas algún ataque, o si el daño es detenido por la armadura, no puedes realizar más ataques. Puedes atacar a un número de objetivos igual al Valor de Penetración de tu arma."
    },
    {
      tipo: "parrafo",
      texto: "Los rifles y ametralladoras se cargan con proyectiles perforantes por defecto, mientras que las pistolas y escopetas no. Las armas balísticas con un VP de 3 o más son perforantes."
    },
    {
      tipo: "parrafo",
      texto: "Si no estás jugando con un mapa o miniaturas, pregunta al GM cuántos objetivos puedes alinear en una situación dada. Dos sería lo más común, y necesitarías reposicionarte para alinearlos para el tiro perfecto."
    },
    {
      tipo: "h3",
      texto: "Golpe de Poder (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Tienes una habilidad especial para golpear violentamente a la gente contra el suelo y taclearlos con gran fuerza."
    },
    {
      tipo: "lista",
      items: [
        "Tienes ventaja en los intentos de empujar/hacer tropezar.",
        "Si empujas o haces tropezar con éxito a un oponente, puedes infligir el daño de tu golpe desarmado, incluyendo tu modificador de puntuación de característica de cuerpo a cuerpo."
      ]
    },
    {
      tipo: "h3",
      texto: "Arma Distintiva (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Estás dedicado al uso de un arma específica y te sientes más seguro al empuñarla. Elige un arma específica como tu arma distintiva, descríbela y dale un nombre. Todos los beneficios posteriores de esta hazaña requieren que estés empuñando esta arma."
    },
    {
      tipo: "lista",
      items: [
        "Puedes ignorar una fuente de desventaja al realizar una tirada de ataque.",
        "Tienes ventaja en las pruebas de habilidad para evitar ser desarmado.",
        "Tienes ventaja en las pruebas de Carisma (Intimidación).",
        "Tu arma distintiva no se romperá como resultado de tus propias acciones, habilidades o talentos de clase."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Si algún enemigo horrible u otra calamidad destruye tu preciada arma distintiva, puedes designar y nombrar una nueva después de un período de luto apropiado de 1 semana."
    },
    {
      tipo: "h3",
      texto: "Ataque Amplio (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Usando armas más grandes, eres capaz de lidiar con multitudes de oponentes realizando un amplio ataque de barrido."
    },
    {
      tipo: "lista",
      items: [
        "Una vez durante tu turno, si estás atacando con un arma cuerpo a cuerpo a dos manos o un arma cuerpo a cuerpo versátil en dos manos, puedes tratar tu ataque como un ataque de barrido. Durante un ataque de barrido, realizas un ataque cuerpo a cuerpo contra cada oponente dentro de tu alcance cuerpo a cuerpo."
      ]
    },
    {
      tipo: "parrafo",
      texto: "Cualquier modificador de ataque que tenga un número limitado de usos por cualquier razón, se aplica individualmente a cada ataque que realices, no universalmente a todos los ataques que realices durante un ataque de barrido."
    },
    {
      tipo: "nota_especial",
      titulo: "Ejemplo de Ataque Amplio",
      texto: "Lakeisha Brown está empuñando una lanza, un arma marcial a dos manos con un alcance de 10 pies. Lakeisha tiene Ataque Amplio, así como Entrenamiento de Combate Avanzado. Hay tres oponentes al alcance de su lanza durante su turno. Decide usar la Acción de Ataque y obtiene dos ataques. Declara que su primer ataque es un Ataque Amplio, por lo que realiza una tirada de ataque contra cada uno de los tres oponentes al alcance, golpea a dos de ellos y tira daño por cada uno. Obtiene un segundo ataque del Entrenamiento de Combate Avanzado, pero no puede usar Ataque Amplio porque solo se puede usar una vez durante su turno. En su lugar, realiza un ataque regular contra uno de los oponentes a los que golpeó con el ataque de barrido."
    },
    {
      tipo: "h2",
      texto: "Hazañas Multiclase"
    },
    {
      tipo: "parrafo",
      texto: "Las hazañas multiclase ofrecen a los héroes la oportunidad de obtener temas y talentos de arquetipos y clases diferentes a los suyos. Para calificar para las hazañas de clase que no están en el arquetipo de tu héroe, primero debes tomar la hazaña de entrenamiento de arquetipo para esas clases. Dado que todas las hazañas multiclase son hazañas avanzadas, solo puedes tomar una hazaña multiclase una vez. No hay límite para cuántas hazañas multiclase puedes tener aparte del número de selecciones de hazañas que se le han otorgado a tu héroe."
    },
    {
      tipo: "parrafo",
      texto: "Las hazañas multiclase se enumeran en el mismo orden que los arquetipos y las clases en la sección de Clases, en lugar de en orden alfabético."
    },
    {
      tipo: "lista",
      items: [
        "Zagriev “El Oso Ruso” Novikov es un Héroe Fuerte con la clase de luchador de MMA. Acaba de alcanzar el nivel 4 y quiere multiclasear con brawler. Como su arquetipo es Héroe Fuerte, cumple el prerrequisito para la hazaña Entrenamiento de Brawler.",
        "Sue Fairfield, una Héroe Resistente con la clase de comando, está interesada en multiclasear con la clase de artillero pesado. Necesita tomar la hazaña Entrenamiento de Héroe Fuerte antes de poder tomar la hazaña Entrenamiento de Artillero Pesado."
      ]
    },
    {
      tipo: "h3",
      texto: "Hazañas Multiclase de Héroe Fuerte"
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Héroe Fuerte (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un arquetipo de Héroe Fuerte, Fuerza 13+, Nivel 2+. Has aprendido a usar tu fuerza para enfocar una ofensiva agresiva."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Básico.",
        "Ganas competencia en una de las siguientes habilidades: Atletismo, Acrobacias o Resistencia.",
        "Antes de realizar un ataque, puedes declarar que estás siendo temerario. Ganas ventaja en todas las tiradas de ataque con armas cuerpo a cuerpo, pero todos los oponentes que te ataquen tienen ventaja en sus tiradas de ataque. Esto dura hasta el comienzo de tu próximo turno."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Brawler (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Fuerte O hazaña Entrenamiento de Héroe Fuerte, no es un brawler (clase), Nivel 4+. Te has entrenado para ser una máquina de destrucción, sin dejar que nada se interponga entre tú y tu objetivo."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Improvisado.",
        "Tienes ventaja en cualquier prueba de Fuerza que realices para romper un objeto. Además, tus ataques cuerpo a cuerpo tienen +1 de Valor de Penetración.",
        "Como acción bonus, puedes moverte hasta tu velocidad, pero debes moverte hacia un oponente. Si no hay enemigos presentes, puedes moverte hacia una situación obviamente peligrosa en su lugar."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Brawler Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un brawler (clase), hazaña Entrenamiento de Brawler, Nivel 8+. Pocos oponentes o armas pueden sobrevivir a los poderosos golpes que asestas."
    },
    {
      tipo: "lista",
      items: [
        "Una vez durante tu turno, cuando golpeas a un oponente con un ataque con un arma cuerpo a cuerpo, puedes elegir infligir 2d6 de daño adicional. Si lo haces, y no atacaste con un golpe desarmado, el arma se destruye. No puedes usar este talento con ataques explosivos.",
        "Tienes ventaja en las pruebas de habilidad y tiradas de salvación para evitar o escapar de ser Apresado, Restringido, Aturdido o Paralizado."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Artillero Pesado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Fuerte O hazaña Entrenamiento de Héroe Fuerte, no es un artillero pesado (clase), Nivel 4+. Te gustan las armas grandes y no puedes mentir, si alguien te hace daño, va a morir."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Puedes usar Fuerza en lugar de Destreza cuando realizas un ataque a distancia con un arma a distancia que no tenga la propiedad ligera.",
        "Puedes ignorar la propiedad estacionaria de las armas.",
        "Antes de realizar un ataque con un arma a distancia que no sea ligera, puedes declarar que estás siendo temerario. Ganas ventaja en tus tiradas de ataque con esa arma, pero todos los oponentes que te ataquen tienen ventaja en sus tiradas de ataque. Esto dura hasta el comienzo de tu próximo turno."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Artillero Pesado Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un artillero pesado (clase), hazaña Entrenamiento de Artillero Pesado, Nivel 8+. El sonido de los explosivos y el fuego de ametralladora pesada son música para tus oídos."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Militar.",
        "Cuando dañas a cualquier objetivo con Fuego de Supresión o un explosivo, el daño se incrementa en el doble de tu bonificador de competencia.",
        "Cuando realizas la acción Fuego de Supresión, puedes duplicar el área cubierta."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Luchador de MMA (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Fuerte O hazaña Entrenamiento de Héroe Fuerte, no es un luchador de MMA (clase), Nivel 4+. A través de un duro entrenamiento te has vuelto hábil en una variedad de disciplinas de artes marciales."
    },
    {
      tipo: "lista",
      items: [
        "Si tienes un oponente Apresado, puedes aplicar un movimiento de sumisión como ataque especial. Infliges automáticamente el daño de tu golpe desarmado al oponente. No puedes usar Ataque Poderoso al realizar un Movimiento de Sumisión.",
        "El daño de tu golpe desarmado mejora en un paso de dado."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Luchador de MMA Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un luchador de MMA (clase), hazaña Entrenamiento de Luchador de MMA, Nivel 8+. Has endurecido tus puños y perfeccionado tu técnica, convirtiéndote en un combatiente desarmado muy peligroso."
    },
    {
      tipo: "lista",
      items: [
        "Ganas ventaja en las pruebas de Fuerza (Atletismo) realizadas para iniciar o escapar de un agarre.",
        "Una vez durante tu turno, antes de tirar para golpear con un golpe desarmado, puedes declarar que es un derribo. Si el derribo golpea, infliges daño y puedes realizar un ataque especial desarmado libre contra el objetivo.",
        "Una vez durante tu turno, antes de tirar para golpear con un golpe desarmado, puedes declarar que es un jab. Si el jab golpea, ganas ventaja en tu próxima tirada de ataque cuerpo a cuerpo contra ese oponente. No puedes declarar un ataque como derribo y jab."
      ]
    },
    {
      tipo: "h3",
      texto: "Hazañas Multiclase de Héroe Ágil"
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Héroe Ágil (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un arquetipo de Héroe Ágil, Destreza 13+, Nivel 2+. Has entrenado tus reflejos al límite. Tus movimientos son rápidos y elegantes."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Básico.",
        "Elige una entre Acrobacias, Juego de Manos, Sigilo y Vehículos. Ganas competencia en la habilidad elegida.",
        "Puedes realizar la acción Correr (Dash) o Desengancharse (Disengage) como acción bonus.",
        "Durante una persecución a pie, tienes ventaja en las pruebas de Fuerza (Atletismo) realizadas como parte de una acción Ganar Terreno."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Artista Marcial (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Ágil O hazaña Entrenamiento de Héroe Ágil, no es un artista marcial (clase), Nivel 4+. Te has entrenado para golpear eficientemente con las manos y los pies, y eres hábil con las armas utilizadas para el deporte y el entrenamiento."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Histórico.",
        "El daño de tu golpe desarmado mejora en un paso de dado.",
        "Puedes realizar un golpe desarmado como acción bonus.",
        "Escalar y nadar no son movimientos difíciles para ti."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Artista Marcial Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un artista marcial (clase), hazaña Entrenamiento de Artista Marcial, Nivel 8+. Tu elevada conciencia y reflejos te han convertido en un objetivo difícil y hábil en ataques con arma secundaria."
    },
    {
      tipo: "lista",
      items: [
        "El daño de tu golpe desarmado mejora en un paso de dado más.",
        "Ignoras el terreno difícil cuando te mueves.",
        "Tratas todas las armas cuerpo a cuerpo que no tienen la propiedad Pesada como si tuvieran la propiedad Finura.",
        "Cuando realizas una tirada de salvación de Destreza para recibir la mitad de daño de un efecto, no recibes daño si la salvación es exitosa, y la mitad de daño si falla."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Pícaro (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Ágil O hazaña Entrenamiento de Héroe Ágil, no es un pícaro (clase), Nivel 4+. Te has vuelto bastante bueno para sacar ventaja con tácticas desleales."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Elige una entre Acrobacias, Engaño, Intimidación, Seguridad, Juego de Manos, Sigilo y Callejeo. Ganas competencia en la habilidad elegida.",
        "Puedes Esconderte, Interactuar con Objetos o realizar una prueba de Seguridad o Juego de Manos como acción bonus.",
        "Tienes ventaja en las tiradas de ataque contra cualquier oponente que no haya actuado en este combate."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Pícaro Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un pícaro (clase), hazaña Entrenamiento de Pícaro, Nivel 8+. Has aprendido las mejores formas de herir a una persona cuando no lo ve venir."
    },
    {
      tipo: "lista",
      items: [
        "Elige una entre Acrobacias, Engaño, Intimidación, Seguridad, Juego de Manos, Sigilo y Callejeo. Ganas experiencia en la habilidad elegida.",
        "Una vez por turno, cuando golpeas a un objetivo con un ataque, si tenías ventaja en ese ataque o un aliado está a menos de 5 pies de ese objetivo, puedes elegir infligir 2d6 de daño adicional. No puedes infligir este daño adicional si el ataque tenía desventaja."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Tirador Certero (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Ágil O hazaña Entrenamiento de Héroe Ágil, no es un tirador certero (clase), Nivel 4+. El manejo de armas a distancia se ha convertido en una segunda naturaleza para ti y usarlas requiere tan poco esfuerzo como respirar."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Puedes desenfundar dos armas ligeras a una mano como acción libre.",
        "Puedes recargar dos armas a distancia con la misma acción, sin necesidad de una mano libre.",
        "Puedes ignorar la propiedad de Disparo Lento de las armas a distancia.",
        "Cuando usas un arma a distancia a dos manos, no tienes desventaja en las tiradas de ataque a largo alcance."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Tirador Certero Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un tirador certero (clase), hazaña Entrenamiento de Tirador Certero, Nivel 8+. Tu dominio de las armas a distancia te ha convertido en un oponente temido por todos."
    },
    {
      tipo: "lista",
      items: [
        "Puedes añadir tu modificador de Destreza a las tiradas de daño realizadas con ataques a distancia con la mano secundaria.",
        "Cuando usas un arma a distancia a dos manos, puedes ignorar la media cobertura al realizar ataques a distancia a objetivos con cobertura.",
        "Cuando usas un arma a distancia a dos manos, tratas a los objetivos con tres cuartos de cobertura como si tuvieran media cobertura (esto cambia la defensa de cobertura de 20 a 16).",
        "Obtienes un golpe crítico en una tirada de 19 o 20 al realizar ataques a distancia."
      ]
    },
    {
      tipo: "h3",
      texto: "Hazañas Multiclase de Héroe Resistente"
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Héroe Resistente (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un arquetipo de Héroe Resistente, Constitución 13+, Nivel 2+. Te has fortalecido hasta el punto de que encuentras un poco de dolor y esfuerzo bastante estimulantes."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Básico.",
        "Ganas reducción de daño (contra todos los tipos de daño) igual a tu bonificador de competencia.",
        "Una vez durante tu turno, cuando atacas a un oponente que te ha dañado desde el final de tu último turno, ganas un bonificador de +2 en la tirada de ataque."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Guardaespaldas (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Resistente O hazaña Entrenamiento de Héroe Resistente, no es un guardaespaldas (clase), Nivel 4+. Con gusto te pones en peligro para proteger a otros, y te has entrenado para hacer exactamente eso."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Cuando un aliado a menos de 5 pies es golpeado por un ataque, puedes usar tu reacción para hacer que el ataque te golpee a ti en su lugar.",
        "Si estás cubierto y adyacente a un aliado dispuesto, puedes realizar una acción bonus en tu turno para mover a ese aliado a una cobertura. Puedes moverte hasta 5 pies durante esta acción para hacer espacio para tu aliado.",
        "No dañas a los aliados si sacas un fallo crítico al disparar en combate cuerpo a cuerpo."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Guardaespaldas Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un guardaespaldas (clase), hazaña Entrenamiento de Guardaespaldas, Nivel 8+. Siempre vigilante, has perfeccionado aún más tu habilidad para mantener a salvo a quienes proteges."
    },
    {
      tipo: "lista",
      items: [
        "Puedes ignorar la cobertura proporcionada por tus aliados en tu línea de fuego o en combate cuerpo a cuerpo con tu objetivo.",
        "Cuando un oponente usa Agacharse para Cubrirse como reacción a uno de tus ataques o acciones, su velocidad de movimiento se reduce a 0 en su próximo turno.",
        "Puedes realizar hasta dos reacciones entre cada uno de tus turnos."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Comando (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Resistente O hazaña Entrenamiento de Héroe, no es un comando (clase), Nivel 4+. Lo das todo en combate, convirtiéndote en un objetivo muy difícil de abatir."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Puedes realizar la acción Segundo Aliento como acción bonus.",
        "Puedes desenfundar, armar y lanzar una granada como acción bonus. Debes tener una mano libre o ya estar sosteniendo la granada para hacerlo."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Comando Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un comando (clase), hazaña Entrenamiento de Comando, Nivel 8+. Eres una persona especialmente peligrosa, capaz de realizar hazañas en combate que pocos pueden igualar."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Militar.",
        "Al esforzarte al límite, puedes realizar una acción adicional durante tu turno. Solo puedes hacer esto una vez antes de terminar un descanso prolongado.",
        "Ganas un bonificador de +2 a tu Defensa."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Scrapper (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Resistente O hazaña Entrenamiento de Héroe Resistente, no es un scrapper (clase), Nivel 4+. Te encanta el combate uno a uno y buscas forzar una confrontación con tu oponente elegido."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Los enemigos que realizan la acción Desengancharse provocan ataques de oportunidad de tu parte antes de abandonar tu alcance.",
        "Los enemigos a tu alcance que atacan a uno de tus aliados que no seas tú provocan un ataque de oportunidad de tu parte.",
        "Cuando dañas a un oponente con un ataque de oportunidad, su velocidad se reduce a 0 hasta el final de su turno actual, impidiendo un mayor movimiento."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Scrapper Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un scrapper (clase), hazaña Entrenamiento de Scrapper, Nivel 8+. Tienes una habilidad asombrosa para sobrevivir a todo tipo de dolor y castigo."
    },
    {
      tipo: "lista",
      items: [
        "Cuando recibes daño de un ataque, puedes usar tu reacción para reducir a la mitad el daño de ese ataque contra ti.",
        "Después de realizar cualquier tirada de salvación, puedes volver a tirar esa tirada de salvación. No puedes volver a hacer esto hasta que termines un descanso corto."
      ]
    },
    {
      tipo: "h3",
      texto: "Hazañas Multiclase de Héroe Inteligente"
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Héroe Inteligente (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un arquetipo de Héroe Inteligente, Inteligencia 13+, Nivel 2+. Has agudizado tu ingenio hasta el límite y has convertido tu mente en el arma más grande de todas."
    },
    {
      tipo: "lista",
      items: [
        "Ganas 2 puntos de Genio. Puedes activar cualquier plan que conozcas gastando 1 punto de Genio. Los puntos de Genio se recargan cuando terminas un descanso prolongado. Tu CD de Plan es 8 + tu modificador de Inteligencia + tu bonificador de competencia.",
        "Aprendes dos planes de la lista de Planes Compartidos para Héroes Inteligentes.",
        "Solo puedes usar mejoras de planes compartidos hasta el Nivel 1."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Ingeniero (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Inteligente o hazaña Entrenamiento de Héroe Inteligente, no es un ingeniero (clase), Nivel 4+. Has estudiado el mundo de la tecnología y la maquinaria y has obtenido conocimientos sorprendentes."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia en Mecánica.",
        "Obtienes un Compañero Mecánico de la lista de compañeros mecánicos del ingeniero (esto no incluye talentos relacionados con el Compañero Mecánico. El compañero sigue las reglas de compañero estándar).",
        "Aprendes 1 plan adicional de la lista de planes del ingeniero.",
        "Solo puedes usar mejoras de planes de ingeniero hasta el Nivel 3.",
        "Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 3."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Ingeniero Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un ingeniero (clase), hazaña Entrenamiento de Ingeniero, Nivel 8+. Tu dominio del mundo técnico es lo suficientemente impresionante como para asombrar a la mayoría de la gente con tus habilidades."
    },
    {
      tipo: "lista",
      items: [
        "Ganas experiencia en Mecánica.",
        "Ganas 1 punto de Genio adicional.",
        "Aprendes 2 planes adicionales, ya sean de la lista de planes del Ingeniero o de la lista de planes compartidos.",
        "Solo puedes usar mejoras de planes de ingeniero hasta el Nivel 5.",
        "Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 5."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Hacker (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Inteligente o hazaña Entrenamiento de Héroe Inteligente, no es un hacker (clase), Nivel 4+. Te has sumergido profundamente en el océano digital y te has convertido en una de las élites de ese reino."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia en Computadoras.",
        "Ganas 1 punto de Genio adicional.",
        "Aprendes 1 plan adicional de la lista de planes del hacker.",
        "Solo puedes usar mejoras de planes de hacker hasta el Nivel 3.",
        "Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 3."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Hacker Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un hacker (clase), hazaña Entrenamiento de Hacker, Nivel 8+. Cuando los administradores de sistemas escuchan tu nombre, tiemblan de miedo o se asombran de tus habilidades de élite."
    },
    {
      tipo: "lista",
      items: [
        "Ganas experiencia en Computadoras.",
        "Ganas 1 punto de Genio adicional.",
        "Aprendes dos planes adicionales, ya sean de la lista de planes del Hacker o de la lista de planes compartidos.",
        "Solo puedes usar mejoras de planes de hacker hasta el Nivel 5.",
        "Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 5."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Mente Maestra (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Inteligente O hazaña Entrenamiento de Héroe Inteligente, no es una mente maestra (clase), Nivel 4+. Has pasado muchísimo tiempo intentando ser más listo que todos, y está funcionando."
    },
    {
      tipo: "lista",
      items: [
        "Elige Investigación o Ciencias Sociales. Ganas competencia en la habilidad elegida.",
        "Ganas 1 punto de Genio adicional.",
        "Aprendes 1 plan adicional de la lista de planes de la mente maestra.",
        "Solo puedes usar mejoras de planes de mente maestra hasta el Nivel 3.",
        "Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 3."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Mente Maestra Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es una mente maestra (clase), hazaña Entrenamiento de Mente Maestra, Nivel 8+. Has ideado planes dentro de planes dentro de planes. ¿Qué tal dos planes más?"
    },
    {
      tipo: "lista",
      items: [
        "Elige Investigación o Ciencias Sociales. Ganas experiencia en la habilidad elegida.",
        "Ganas 1 punto de Genio adicional.",
        "Aprendes 2 planes adicionales de la lista de planes de la mente maestra o compartidos.",
        "Solo puedes usar mejoras de planes de mente maestra hasta el Nivel 5.",
        "Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 5."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Científico (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Inteligente O hazaña Entrenamiento de Héroe Inteligente, no es un científico (clase), Nivel 4+. Para aquellos dispuestos a dominar el conocimiento, el universo puede ser su caja de arena."
    },
    {
      tipo: "lista",
      items: [
        "Elige Medicina o Ciencias Naturales. Ganas competencia en la habilidad elegida.",
        "Ganas 1 punto de Genio adicional.",
        "Aprendes 1 plan adicional de la lista de planes del científico.",
        "Solo puedes usar mejoras de planes de científico hasta el Nivel 3.",
        "Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 3."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Científico Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un científico (clase), hazaña Entrenamiento de Científico, Nivel 8+. Tu dominio de los elementos de la naturaleza tiene pocos iguales."
    },
    {
      tipo: "lista",
      items: [
        "Elige Medicina o Ciencias Naturales. Ganas experiencia en la habilidad elegida.",
        "Ganas 1 punto de Genio adicional.",
        "Aprendes 2 planes adicionales de la lista de planes del científico o compartidos.",
        "Solo puedes usar mejoras de planes de científico hasta el Nivel 5. Si no eres un arquetipo de Héroe Inteligente, solo puedes usar mejoras de planes compartidos hasta el Nivel 5."
      ]
    },
    {
      tipo: "h3",
      texto: "Hazañas Multiclase de Héroe Sabio"
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Héroe Sabio (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un arquetipo de Héroe Sabio, Sabiduría 13+, Nivel 2+. Has aprendido a actuar con eficiencia en lugar de con rapidez, eligiendo cuidadosamente el curso de acción correcto."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Básico.",
        "Elige una entre Perspicacia, Percepción, Callejeo y Supervivencia. Ganas competencia en la habilidad elegida.",
        "Ganas 2 puntos de Enfoque. Tu Enfoque se recarga cada vez que terminas un descanso corto o prolongado.",
        "Puedes gastar un punto de enfoque para volver a tirar una prueba de habilidad de Sabiduría fallida. Esto solo se puede hacer una vez por prueba de habilidad.",
        "Puedes elegir no caer Prono cuando te Agachas para Cubrirte."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Cazador (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Sabio O hazaña Entrenamiento de Héroe Sabio, no es un cazador (clase), Nivel 4+. Has aprendido el arte de rastrear presas y llevarlas al suelo."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Elige una entre Percepción, Sigilo y Supervivencia. Ganas competencia en la habilidad elegida.",
        "Ganas 1 punto de Enfoque adicional.",
        "Como acción bonus, puedes gastar 1 punto de Enfoque para marcar a un oponente objetivo que puedas ver.",
        "Ganas ventaja en las pruebas de Sabiduría (Percepción) contra un objetivo marcado.",
        "Ganas ventaja en las pruebas de Sabiduría (Callejeo) y Sabiduría (Supervivencia) realizadas para rastrear o encontrar un objetivo marcado.",
        "Puedes gastar 1 punto de Enfoque para volver a tirar una tirada de daño que realices contra un objetivo marcado. Si se tiran varios dados para el daño, vuelves a tirar todos los dados de daño. Solo puedes hacer esto una vez por ataque."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Cazador Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un cazador (clase), hazaña Entrenamiento de Cazador, Nivel 8+. Has perfeccionado aún más tus habilidades de caza, centrándote en lo que se necesita para sobrevivir a encuentros con presas peligrosas."
    },
    {
      tipo: "lista",
      items: [
        "Elige una entre Percepción, Sigilo o Supervivencia. Debes ser competente en la habilidad elegida. Ganas Experiencia en la habilidad elegida.",
        "Ganas 1 punto de Enfoque adicional.",
        "Puedes gastar 1 punto de Enfoque para volver a tirar una tirada de ataque fallida contra un objetivo marcado realizada por ti o tu compañero de caza. Solo puedes hacer esto una vez por ataque.",
        "Después de que un oponente te golpea con un ataque, ganas un bonificador de +4 a la Defensa contra cualquier ataque posterior que ese mismo oponente realice contra ti hasta el comienzo de tu próximo turno."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Maestro (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Sabio O hazaña Entrenamiento de Héroe Sabio, no es un maestro (clase), Nivel 4+. Tu meditación contemplativa te ha llevado a un estado de armonía interior y a patear traseros."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Improvisado.",
        "Ganas 1 punto de enfoque adicional.",
        "Tienes reducción de daño 15 contra caídas.",
        "Puedes gastar 1 punto de enfoque para realizar la acción Correr (Dash), Desengancharse (Disengage) o Esquivar (Dodge) como acción bonus.",
        "Puedes gastar 1 punto de enfoque para realizar un golpe desarmado como acción bonus."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Maestro Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un maestro (clase), hazaña Entrenamiento de Maestro, Nivel 8+. Tu gran sabiduría y paz interior te han dado la capacidad de evitar el peligro con elegancia y noquear a la gente."
    },
    {
      tipo: "lista",
      items: [
        "Ganas 1 punto de enfoque adicional.",
        "Cuando el ataque de un oponente te falla, y estás adyacente a un oponente diferente, puedes realizar una reacción para hacer que el ataque fallido golpee al oponente adyacente.",
        "Cuando golpeas a un objetivo con un golpe desarmado, un arma cuerpo a cuerpo sencilla o un arma improvisada, puedes gastar 1 punto de enfoque para intentar aturdir a ese objetivo. Debe realizar una tirada de salvación de Constitución o quedar Aturdido hasta el final de tu próximo turno. La CD de la salvación es 8 + tu modificador de Sabiduría + tu bonificador de competencia."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Detective (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Sabio o hazaña Entrenamiento de Héroe Sabio, no es un detective (clase), Nivel 4+. Has agudizado tu conciencia de tu entorno y eres hábil para detectar las debilidades de un oponente."
    },
    {
      tipo: "lista",
      items: [
        "Ganas competencia con Equipo Avanzado.",
        "Elige una entre Perspicacia, Investigación, Percepción, Seguridad y Callejeo. Ganas competencia en la habilidad elegida.",
        "No puedes ser sorprendido.",
        "Puedes realizar la acción Buscar como acción bonus.",
        "Ganas 1 punto de Enfoque adicional.",
        "Puedes gastar 1 punto de Enfoque para volver a tirar una prueba de habilidad de Inteligencia fallida. Esto solo se puede hacer una vez por prueba de habilidad."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Detective Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un detective (clase), hazaña Entrenamiento de Detective, Nivel 8+. Tu intuición te ha dado la capacidad de sorprender a tus enemigos y golpearlos donde más les duele."
    },
    {
      tipo: "lista",
      items: [
        "Elige una entre Perspicacia, Investigación, Percepción, Seguridad y Callejeo. Ganas experiencia en la habilidad elegida.",
        "Ganas 1 punto de Enfoque adicional.",
        "Como acción bonus, puedes gastar 1 punto de Enfoque para ganar ventaja en tu próxima tirada de ataque. Si el ataque impacta, infliges 2d6 de daño adicional al objetivo.",
        "Cuando realizas una tirada de salvación de Destreza para recibir la mitad de daño de un efecto, no recibes daño si la salvación es exitosa, y la mitad de daño si falla."
      ]
    },
    {
      tipo: "h3",
      texto: "Hazañas Multiclase de Héroe Encantador"
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Héroe Encantador (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un arquetipo de Héroe Encantador, Carisma 13+, Nivel 2+. Tienes una forma de expresarte con palabras y/o una mirada que podría matar."
    },
    {
      tipo: "lista",
      items: [
        "Elige dos entre Engaño, Intimidación, Interpretación y Persuasión. Ganas competencia en las habilidades elegidas.",
        "Elige una entre Engaño, Intimidación, Interpretación y Persuasión. Debes ser competente en la habilidad elegida. Ganas experiencia en la habilidad elegida.",
        "Tienes dos dados de influencia, que son d6. Un dado de influencia se gasta cuando se tira. Recuperas todos tus dados de influencia gastados cuando terminas un descanso corto o prolongado.",
        "Cuando realizas una prueba de Carisma, después de tirar pero antes de determinar el resultado, puedes tirar un dado de influencia y añadirlo a tu resultado."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Duelista (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Encantador O hazaña Entrenamiento de Héroe Encantador, no es un Duelista (clase), Nivel 4+. Has aprendido el antiguo arte de la gracia en combate, manteniéndote un paso por delante de tu oponente."
    },
    {
      tipo: "lista",
      items: [
        "Competencia con Equipo Básico y Equipo Histórico.",
        "Ganas 1 dado de influencia adicional.",
        "Mientras empuñas un arma de finura, tu bonificador de Defensa se incrementa en +1.",
        "Aprendes dos trucos, elegidos de la lista de trucos de duelista."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Duelista Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un duelista (clase), hazaña Entrenamiento de Duelista, Nivel 8+. Te has convertido en un experto en las maniobras de estocada y parada, bailando alrededor de los oponentes y golpeando cuando son más vulnerables."
    },
    {
      tipo: "lista",
      items: [
        "Ganas 1 dado de influencia adicional.",
        "Tus dados de influencia ahora son d8 en lugar de d6 (ignora esto si tu arquetipo es Héroe Encantador).",
        "Puedes añadir tu modificador de Carisma a la iniciativa.",
        "Los ataques de oportunidad realizados contra ti tienen desventaja.",
        "Aprendes un truco adicional elegido de la lista de trucos de duelista."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Icono (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Encantador O hazaña Entrenamiento de Héroe Encantador, no es un icono (clase), Nivel 4+. ¡Eres la bomba, el no va más, y quizás el MEJOR de todos los tiempos!"
    },
    {
      tipo: "lista",
      items: [
        "Competencias con Equipo Básico y Equipo Avanzado.",
        "Ganas 1 dado de influencia adicional.",
        "Aprendes dos trucos, elegidos de la lista de trucos de icono.",
        "Como acción bonus, puedes dar una oportunidad a tus aliados atrayendo la atención de un oponente del que eres consciente que puede oírte a menos de 60 pies. El siguiente ataque que uno de tus aliados realice contra ese objetivo antes del comienzo de tu próximo turno tiene ventaja."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Icono Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un icono (clase), hazaña Entrenamiento de Icono, Nivel 8+. ¡Definitivamente eres el MEJOR, no dejes que nadie te diga lo contrario!"
    },
    {
      tipo: "lista",
      items: [
        "Ganas 1 dado de influencia adicional.",
        "Tus dados de influencia ahora son d8 en lugar de d6 (ignora esto si tu arquetipo es Héroe Encantador).",
        "Aprendes un truco adicional elegido de la lista de trucos de Icono.",
        "Cada vez que sacas un 1 en un dado de influencia o un dado de daño, puedes volver a tirar ese dado una vez, tomando el nuevo resultado.",
        "Como reacción, cuando un oponente a menos de 5 pies que puede verte te ataca, puedes hacer que ese ataque tenga desventaja. No pueden cambiar de objetivo en reacción a que hagas esto."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Líder (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Encantador O hazaña Entrenamiento de Héroe Encantador, no es un líder (clase), Nivel 4+. Tus aliados respetan tu sabiduría y tus consejos, lo que te permite dirigirlos en combate y levantarles el ánimo en el descanso."
    },
    {
      tipo: "lista",
      items: [
        "Competencia con Equipo Básico y Avanzado.",
        "Ganas 1 dado de influencia adicional.",
        "Aprendes dos trucos, elegidos de la lista de trucos de icono.",
        "Como acción, puedes dar una orden a uno de tus aliados. Ese aliado puede usar una reacción para realizar un ataque o moverse hasta su velocidad."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Líder Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un líder (clase), hazaña Entrenamiento de Líder, Nivel 8+. Has desarrollado aún más tus habilidades de liderazgo, lo que te permite dirigir y motivar mejor a tus aliados."
    },
    {
      tipo: "lista",
      items: [
        "Ganas 1 dado de influencia adicional.",
        "Tus dados de influencia ahora son d8 en lugar de d6 (ignora esto si tu arquetipo es Héroe Encantador).",
        "Aprendes un truco adicional elegido de la lista de trucos de Líder.",
        "Fomentas la camaradería entre tus aliados. Cada vez que tú y tus aliados termináis un descanso corto, tú y cualquier aliado que pueda oírte recuperáis 1 Dado de Golpe gastado, ya sea que se haya gastado durante este descanso o antes. Solo puedes hacer esto una vez antes de terminar un descanso prolongado.",
        "Como acción, puedes otorgar a ti mismo y hasta a 6 aliados que puedan oírte puntos de golpe temporales iguales a tu Nivel de Héroe más tu modificador de Carisma. No puedes volver a realizar esta acción hasta que termines un descanso corto o prolongado."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Manipulador (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: Arquetipo de Héroe Encantador O hazaña Entrenamiento de Héroe Encantador, no es un manipulador (clase), Nivel 4+. Has aprendido el arte no solo de influir en los demás, sino de someterlos a tu voluntad."
    },
    {
      tipo: "lista",
      items: [
        "Ganas 1 dado de influencia adicional.",
        "Aprendes dos trucos, elegidos de la lista de trucos de Manipulador.",
        "Puedes desmoralizar a un oponente a menos de 60 pies como acción. El objetivo debe realizar una tirada de salvación de Sabiduría contra una CD de 8 + tu modificador de Carisma + tu bonificador de competencia. Si falla la salvación, el objetivo tiene desventaja en las tiradas de ataque, desventaja en las pruebas de habilidad y las tiradas de ataque contra el objetivo tienen ventaja. Este efecto dura hasta el final de tu próximo turno."
      ]
    },
    {
      tipo: "h4",
      texto: "Entrenamiento de Manipulador Avanzado (Hazaña Mayor)"
    },
    {
      tipo: "parrafo",
      texto: "Prerrequisito: No es un manipulador (clase), hazaña Entrenamiento de Manipulador, Nivel 8+. No solo te metes en la cabeza de tus enemigos, sino que vives allí sin pagar alquiler."
    },
    {
      tipo: "lista",
      items: [
        "Ganas 1 dado de influencia adicional.",
        "Tus dados de influencia ahora son d8 en lugar de d6 (ignora esto si tu arquetipo es Héroe Encantador).",
        "Aprendes un truco adicional, elegido de la lista de trucos de Manipulador.",
        "Puedes imitar perfectamente la voz de otra persona, siempre que la hayas oído hablar durante al menos 1 minuto. Una prueba de Sabiduría (Perspicacia) exitosa, enfrentada a tu prueba de Carisma (Engaño), permite a un oyente determinar que la voz es falsa.",
        "Puedes usar tu habilidad Desmoralizar como acción bonus. Todavía puedes usarla como acción, lo que te permite usarla dos veces durante tu turno si lo deseas."
      ]
    }
  ]
};
export default capitulo7;