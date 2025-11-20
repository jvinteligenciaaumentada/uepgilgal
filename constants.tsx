import React from 'react';
import { NodeData } from './types';

export const NODES: NodeData[] = [
  // 12:00 - Naturalista
  { 
    id: 'nat', 
    name: 'Naturalista', 
    color: '#76FF03', 
    icon: 'fa-leaf', 
    type: 'intel',
    title: 'INTELIGENCIA NATURALISTA', 
    desc: 'Fomentamos la conexión con el entorno natural, la conciencia ecológica y el estudio de las ciencias de la vida mediante la experiencia directa.',
    content: [
      {t:'Ecología Práctica', i:'fa-seedling', d:'Huertos escolares y proyectos de reciclaje gestionados por estudiantes.'}, 
      {t:'Ciencias de la Vida', i:'fa-frog', d:'Laboratorio de biología vivencial y observación de ecosistemas locales.'}, 
      {t:'Conciencia Ambiental', i:'fa-globe-americas', d:'Campañas de preservación y sostenibilidad comunitaria.'}
    ] 
  },
  // 1:00 - Musical
  { 
    id: 'mus', 
    name: 'Musical', 
    color: '#BA68C8', 
    icon: 'fa-music', 
    type: 'intel',
    title: 'INTELIGENCIA MUSICAL', 
    desc: 'Desarrollamos la sensibilidad rítmica y auditiva como herramienta para el aprendizaje matemático, lingüístico y emocional.',
    content: [
      {t:'Iniciación Musical', i:'fa-drum', d:'Percusión y ritmo para el desarrollo de la coordinación motora.'}, 
      {t:'Coro Polifónico', i:'fa-microphone-alt', d:'Expresión vocal colectiva y disciplina auditiva.'}, 
      {t:'Instrumentación', i:'fa-guitar', d:'Aprendizaje técnico de instrumentos y teoría musical aplicada.'}
    ] 
  },
  // 2:00 - Salud
  { 
    id: 'sal', 
    name: 'Salud', 
    color: '#4DD0E1', 
    icon: 'fa-heartbeat', 
    type: 'func',
    title: 'BIENESTAR INTEGRAL', 
    desc: 'Un enfoque preventivo y formativo sobre la salud física y mental de nuestra comunidad educativa.',
    features: [
      { title: 'Nutrición Consciente', desc: 'Programas de alimentación balanceada supervisados por expertos.', icon: 'fa-apple-alt' },
      { title: 'Primeros Auxilios', desc: 'Formación continua en respuesta a emergencias para staff y alumnos.', icon: 'fa-briefcase-medical' },
      { title: 'Salud Mental', desc: 'Gabinete de psicología para soporte emocional y cognitivo.', icon: 'fa-brain' },
      { title: 'Bioseguridad', desc: 'Protocolos de higiene y ambientes seguros para el aprendizaje.', icon: 'fa-shield-virus' }
    ]
  },
  // 3:00 - Espacial (Visual + Galería)
  { 
    id: 'esp', 
    name: 'Espacial', 
    color: '#D32F2F', 
    icon: 'fa-cube', 
    type: 'intel',
    title: 'VISUAL-ESPACIAL Y GALERÍA', 
    desc: 'Potenciamos la capacidad de visualizar, crear y manipular espacios mentales y físicos.',
    content: [
      {t:'Arte y Diseño', i:'fa-palette', d:'Expresión plástica, dibujo técnico y teoría del color.'}, 
      {t:'Geometría Aplicada', i:'fa-shapes', d:'Construcción de modelos 3D y comprensión del espacio.'}, 
      {t:'Pensamiento Visual', i:'fa-eye', d:'Mapas mentales y organización gráfica de la información.'}
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1427504742955-192864630859?auto=format&fit=crop&w=600&q=80'
    ]
  },
  // 4:00 - Verbal (Lingüística + Blog)
  { 
    id: 'verb', 
    name: 'Verbal', 
    color: '#FFEB3B', 
    icon: 'fa-comment', 
    type: 'intel',
    title: 'VERBAL-LINGÜÍSTICA & BLOG', 
    desc: 'Dominio del lenguaje como herramienta fundamental para la comunicación, la persuasión y el pensamiento complejo.',
    content: [
      {t:'Lectoescritura', i:'fa-book-reader', d:'Programas intensivos de comprensión lectora y redacción.'}, 
      {t:'Oratoria y Debate', i:'fa-podium', d:'Desarrollo de habilidades de argumentación y hablar en público.'}, 
      {t:'Idiomas', i:'fa-language', d:'Introducción al inglés como segunda lengua vehicular.'}
    ],
    blogPosts: [
      { 
        title: '¿Qué son las Inteligencias Múltiples y cómo las aplicamos en Gilgal?', 
        date: '2025', 
        excerpt: 'Cada niño tiene talentos únicos. En Gilgal no preguntamos "qué tan inteligente es tu hijo", sino "¿CÓMO es inteligente?". Descubre cómo identificamos y potenciamos cada tipo de genialidad.',
        content: `Cuando Howard Gardner propuso su teoría en 1983, revolucionó la educación. Ya no se trataba de medir la inteligencia con un número, sino de entender que hay múltiples formas de ser brillante.

En la Unidad Educativa Privada Gilgal hemos hecho de esta filosofía nuestro ADN. Cada mañana, cuando nuestros estudiantes entran al salón, no los vemos como un grupo homogéneo. Vemos a Sofía, que a sus 6 años compone melodías en el cuatro. A Carlos, que resuelve problemas matemáticos como si fueran acertijos. A María, que lidera naturalmente a sus compañeros en cada proyecto.

Las 8 inteligencias que trabajamos son:

• Lingüística: Para los que aman las palabras, los cuentos, el debate
• Lógico-matemática: Los que buscan patrones, resuelven enigmas
• Espacial: Artistas, arquitectos en formación, soñadores visuales
• Musical: Porque el ritmo también es una forma de pensar
• Corporal: Los que aprenden haciendo, creando, moviendo
• Interpersonal: Líderes natos, empáticos, conectores
• Intrapersonal: Reflexivos, conscientes de sí mismos
• Naturalista: Curiosos del mundo natural, científicos en potencia

¿Cómo lo hacemos? No es magia, es observación. Nuestros docentes están entrenados para detectar cómo cada niño procesa información. Algunos necesitan tocar, otros visualizar. Algunos aprenden mejor en grupo, otros en soledad.

El resultado es mágico: niños que antes 'no eran buenos en matemáticas' descubren que son genios espaciales. Niños 'tímidos' resultan ser líderes intrapersonales profundos.

En Gilgal no formamos estudiantes promedio. Potenciamos genios diversos.`
      },
      { 
        title: 'Cómo identificar los talentos naturales de tu hijo', 
        date: '2025', 
        excerpt: 'Tu hijo tiene superpoderes. Sí, leíste bien. Cada niño nace con talentos únicos esperando ser descubiertos. Aquí te enseñamos cómo detectarlos antes de que el sistema educativo tradicional los ignore.',
        content: `María José tiene 4 años y desarma todos los juguetes. Sus padres pensaban que era destructiva. Hasta que un día la vieron reconstruir una torre de bloques más compleja que el diseño original. ¿Destructiva? No. Ingeniera en formación.

Esta historia se repite constantemente. Confundimos señales. El niño 'hiperactivo' quizás sea corpóreo-cinético. La niña 'callada' podría tener inteligencia intrapersonal extraordinaria.

5 SEÑALES QUE NO DEBES IGNORAR:

1. OBSERVA EL JUEGO LIBRE
Cuando tu hijo elige qué hacer sin presión, muestra su verdadero yo. ¿Arma historias? Lingüístico. ¿Construye? Espacial. ¿Organiza a otros niños? Interpersonal.

2. NOTA QUÉ APRENDE RÁPIDO
Algunos niños memorizan canciones al instante (musical). Otros recuerdan rutas de memoria (espacial). Los que captan patrones numéricos rápido son lógico-matemáticos.

3. ESCUCHA SUS PREGUNTAS
'¿Por qué las nubes flotan?' (naturalista)
'¿Cómo funciona el teléfono?' (lógico)
'¿Por qué María está triste?' (interpersonal)
Las preguntas revelan la mente.

4. IDENTIFICA SUS FRUSTRACIONES
Un niño visual se frustra con explicaciones solo verbales. Uno corporal sufre en escritorios. Uno musical se distrae con silencio absoluto.

5. VE MÁS ALLÁ DE LAS NOTAS
En Venezuela, el sistema tradicional aún mide 'inteligencia' con exámenes. Pero un niño con 15 en matemáticas puede tener 20 en inteligencia espacial, musical o interpersonal.

EN GILGAL HACEMOS ESTO PROFESIONALMENTE
Nuestros docentes observan 8 dimensiones simultáneamente. Usamos evaluaciones no invasivas, juegos diseñados y proyectos que revelan talentos ocultos.

El primer paso es simple: mira a tu hijo. Realmente míralo. Sus genialidad está ahí, esperando que alguien la reconozca.`
      },
      { 
        title: 'La importancia del desarrollo emocional en edad escolar', 
        date: '2025', 
        excerpt: 'Las matemáticas importan, sí. Pero ¿sabes qué predice mejor el éxito futuro? La inteligencia emocional. En Gilgal no solo formamos mentes brillantes, formamos corazones fuertes.',
        content: `Diego llegó a primero con honores en lectura. Pero lloraba cada vez que algo salía mal. A los 7 años, aún no manejaba la frustración.

Esto es más común de lo que crees. Académicamente brillantes, emocionalmente frágiles.

La neurociencia es clara: el cerebro emocional madura DESPUÉS del cognitivo. Un niño puede resolver ecuaciones pero no sus propias emociones. Y eso está bien. Es desarrollo normal.

El problema es que la escuela tradicional ignora esto.

LAS 4 COMPETENCIAS EMOCIONALES QUE IMPORTAN:

1. AUTOCONCIENCIA
Saber qué siento y por qué. 'Estoy bravo porque perdí el juego' es más maduro que 'tú tienes la culpa'.

2. AUTORREGULACIÓN
No se trata de NO sentir rabia. Es saber qué hacer con ella. Respirar. Contar hasta 10. Alejarse antes de explotar.

3. EMPATÍA
Ponerse en zapatos ajenos. En Venezuela, donde vivimos crisis constantes, esta habilidad es supervivencia.

4. HABILIDADES SOCIALES
Pedir ayuda. Negociar. Resolver conflictos sin violencia. Estas no son 'soft skills', son habilidades de vida.

EN GILGAL LO TRABAJAMOS ASÍ:

• CÍRCULOS EMOCIONALES: Cada mañana hablamos de cómo nos sentimos. Sin juicio.
• MINDFULNESS INFANTIL: 5 minutos de respiración consciente cambian el día.
• RESOLUCIÓN DE CONFLICTOS: No separamos a niños peleados. Los sentamos a hablar, con mediación.
• DIARIO EMOCIONAL: Desde 2do grado, escriben cómo se sintieron hoy. La escritura sana.

LOS RESULTADOS SON REALES:
Niños que manejan ansiedad ante exámenes. Adolescentes que piden ayuda cuando la necesitan. Estudiantes que median conflictos entre compañeros.

¿Sabes qué empleadores buscan hoy? No robots académicos. Buscan humanos resilientes, empáticos, adaptables.

En un mundo que cambia cada día, la inteligencia emocional no es lujo. Es necesidad.

Y se cultiva temprano, o no se cultiva.`
      }
    ]
  },
  // 5:00 - Emocional (As Intrapersonal support)
  { 
    id: 'emo', 
    name: 'Emocional', 
    color: '#EC407A', 
    icon: 'fa-heart', 
    type: 'intel',
    title: 'INTELIGENCIA EMOCIONAL', 
    desc: 'Educación del corazón: Identificación, gestión y expresión saludable de las emociones.',
    content: [
      {t:'Alfabetización Emocional', i:'fa-smile-beam', d:'Reconocer y nombrar emociones propias y ajenas.'}, 
      {t:'Regulación', i:'fa-sliders-h', d:'Técnicas de autocontrol y gestión del estrés infantil.'}, 
      {t:'Empatía', i:'fa-hands-holding-heart', d:'Construcción de vínculos afectivos sanos y respetuosos.'}
    ] 
  },
  // 6:00 - Lógico
  { 
    id: 'log', 
    name: 'Lógico', 
    color: '#F48FB1', 
    icon: 'fa-calculator', 
    type: 'intel',
    title: 'LÓGICO-MATEMÁTICA', 
    desc: 'Desarrollo del pensamiento crítico, resolución de problemas y razonamiento abstracto.',
    content: [
      {t:'Matemática Aplicada', i:'fa-square-root-alt', d:'Aprendizaje basado en problemas reales y cotidianos.'}, 
      {t:'Robótica y Coding', i:'fa-robot', d:'Pensamiento computacional y lógica de programación.'}, 
      {t:'Ajedrez Escolar', i:'fa-chess-knight', d:'Estrategia, concentración y anticipación cognitiva.'}
    ] 
  },
  // 7:00 - Intrapersonal
  { 
    id: 'intra', 
    name: 'Intrapersonal', 
    color: '#4FC3F7', 
    icon: 'fa-user', 
    type: 'intel',
    title: 'INTRAPERSONAL', 
    desc: 'La capacidad de construir una percepción precisa de uno mismo y organizar la propia vida.',
    content: [
      {t:'Proyecto de Vida', i:'fa-road', d:'Definición de metas personales y autoevaluación.'}, 
      {t:'Mindfulness', i:'fa-spa', d:'Atención plena y relajación para el enfoque académico.'}, 
      {t:'Autonomía', i:'fa-user-check', d:'Fomento de la responsabilidad y la independencia.'}
    ] 
  },
  // 8:00 - Equipo (Gestión + Historia)
  { 
    id: 'gest', 
    name: 'Equipo', 
    color: '#FF9800', 
    icon: 'fa-tasks', 
    type: 'func',
    title: 'NUESTRA INSTITUCIÓN', 
    desc: 'Conoce la historia y el equipo humano que hace posible el sueño de Gilgal.',
    about: {
      history: 'Fundada en 2010 en el corazón de Cúa, la UEP Gilgal nació con la visión de transformar la educación tradicional. Iniciamos como un pequeño centro de tareas dirigidas y hoy somos una referencia en neuroeducación en los Valles del Tuy, graduando generaciones de jóvenes líderes.',
      mission: 'Formar seres humanos integrales, potenciando sus inteligencias múltiples en un ambiente de amor, excelencia académica y valores cristianos, preparándolos para los desafíos del futuro.',
      vision: 'Ser reconocidos nacionalmente como una institución vanguardista que revoluciona los paradigmas educativos, integrando neurociencia, tecnología y valores humanos.',
      values: ['Excelencia', 'Integridad', 'Innovación', 'Amor al Prójimo', 'Responsabilidad Social']
    },
    teamMembers: [
      { name: 'Dra. Elena Rojas', role: 'Directora', desc: 'PhD en Neuroeducación, visionaria del proyecto Gilgal.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' },
      { name: 'Lic. Carlos Méndez', role: 'Coord. Académico', desc: 'Especialista en currículo e innovación pedagógica.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80' },
      { name: 'Msc. Ana Torres', role: 'Psicopedagoga', desc: 'Líder del departamento de bienestar estudiantil.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80' }
    ]
  },
  // 9:00 - Cinestésica
  { 
    id: 'cin', 
    name: 'Cinestésica', 
    color: '#689F38', 
    icon: 'fa-running', 
    type: 'intel',
    title: 'CORPORAL-CINESTÉSICA', 
    desc: 'El cuerpo como medio de expresión y herramienta para transformar el conocimiento.',
    content: [
      {t:'Deportes', i:'fa-futbol', d:'Entrenamiento físico, disciplina y salud corporal.'}, 
      {t:'Artes Escénicas', i:'fa-theater-masks', d:'Teatro y danza para la desinhibición y expresión.'}, 
      {t:'Motricidad Fina', i:'fa-pen-fancy', d:'Destrezas manuales para el arte y la escritura.'}
    ] 
  },
  // 10:00 - Interpersonal
  { 
    id: 'inter', 
    name: 'Interpersonal', 
    color: '#FF5722', 
    icon: 'fa-users', 
    type: 'intel',
    title: 'INTERPERSONAL', 
    desc: 'Capacidad de entender a los demás e interactuar eficazmente con ellos.',
    content: [
      {t:'Liderazgo', i:'fa-fist-raised', d:'Formación de líderes positivos e influyentes.'}, 
      {t:'Trabajo en Equipo', i:'fa-people-carry', d:'Aprendizaje colaborativo y gestión de roles.'}, 
      {t:'Resolución de Conflictos', i:'fa-handshake', d:'Mediación y cultura de paz en el aula.'}
    ] 
  },
  // 11:00 - Admisión
  { 
    id: 'insc', 
    name: 'Admisión', 
    color: '#FFC107', 
    icon: 'fa-file-signature', 
    type: 'func',
    title: 'INSCRIPCIONES 2025', 
    desc: 'Únete a la familia Gilgal. Completa el formulario para iniciar el proceso de admisión.',
    showForm: true,
    showMap: true
  }
];