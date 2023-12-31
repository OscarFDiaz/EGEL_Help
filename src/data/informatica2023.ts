interface Props {
  id: number;
  name: string;
  year: string;
  questions: QuestionsProps[];
}

interface QuestionsProps {
  number: number;
  question: string;
  correct_answer: string;
  answers: string[];
}

export const informatica2023: Props = {
  id: 1,
  name: 'EGEL PLUS Informatica',
  year: '2023 - 2024',
  questions: [
    {
      number: 0,
      question: '¿Cuál de los siguientes términos describe las pruebas?',
      correct_answer: 'Evaluar entregable para encontrar errores',
      answers: [
        'Encontrando código roto',
        'Evaluar entregable para encontrar errores',
        'Una etapa de todos los proyectos',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 1,
      question: '¿Qué es la complejidad ciclomática?',
      correct_answer: 'Prueba de caja blanca',
      answers: [
        'Prueba de caja negra',
        'Prueba de caja blanca',
        'Prueba de caja amarilla',
        'Prueba de caja verde',
      ],
    },
    {
      number: 2,
      question: '¿Límites inferior y superior están presentes en qué gráfico?',
      correct_answer: 'Ejecutar gráfico',
      answers: [
        'Ejecutar gráfico',
        'Gráfico de barras',
        'Cuadro de control',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 3,
      question: '¿Se realizan pruebas de mantenimiento utilizando qué metodología?',
      correct_answer: 'Ensayo de amplitud y ensayo de profundidad',
      answers: [
        'Repetir',
        'Pruebas de cordura',
        'Ensayo de amplitud y ensayo de profundidad',
        'Pruebas de confirmación',
      ],
    },
    {
      number: 4,
      question: 'Las técnicas de caja blanca también se clasifican como:',
      correct_answer: 'Ensayos estructurales',
      answers: [
        'Pruebas basadas en diseño',
        'Ensayos estructurales',
        'Error al adivinar la técnica',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 5,
      question: 'La prueba exhaustiva es:',
      correct_answer: 'Poco práctico pero posible',
      answers: [
        'Siempre posible',
        'Prácticamente posible',
        'Poco práctico pero posible',
        'Impracticable e imposible',
      ],
    },
    {
      number: 6,
      question: '¿Cuál de las siguientes es la técnica de la caja blanca?',
      correct_answer: 'Todas las mencionadas',
      answers: [
        'Prueba de declaración',
        'Prueba de decisión',
        'Cobertura de la condición',
        'Todas las mencionadas',
      ],
    },
    {
      number: 7,
      question: '¿Cuáles son los diferentes niveles de prueba?',
      correct_answer: 'Todas las mencionadas',
      answers: [
        'Pruebas unitarias',
        'Pruebas del sistema',
        'Pruebas de integración',
        'Todas las mencionadas',
      ],
    },
    {
      number: 8,
      question: '¿El análisis del valor de la frontera pertenece a?',
      correct_answer: 'Prueba de caja negra',
      answers: [
        'Prueba de caja blanca',
        'Prueba de caja negra',
        'Prueba de caja blanca y caja negra',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 9,
      question: 'La prueba alfa se realiza en:',
      correct_answer: 'Fin del desarrollador',
      answers: [
        'Fin del desarrollador',
        'Fin del usuario',
        'Fin del desarrollador y usuario',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 10,
      question: 'Las pruebas en las que se comprueba el código',
      correct_answer: 'Prueba de caja blanca',
      answers: [
        'Prueba de caja negra',
        'Prueba de caja blanca',
        'Prueba de caja roja',
        'Prueba de caja verde',
      ],
    },
    {
      number: 11,
      question: 'Pruebas realizadas sin planificación y documentación',
      correct_answer: 'Pruebas Adhoc',
      answers: [
        'Pruebas unitarias',
        'Pruebas de regresión',
        'Pruebas Adhoc',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 12,
      question: 'La prueba de aceptación también se conoce como:',
      correct_answer: 'Prueba beta',
      answers: [
        'Prueba de caja gris',
        'Prueba de caja blanca',
        'Prueba alfa',
        'Prueba beta',
      ],
    },
    {
      number: 13,
      question: '¿Cuál de las siguientes es una prueba no funcional?',
      correct_answer: 'Pruebas de rendimiento',
      answers: [
        'Prueba de caja negra',
        'Pruebas de rendimiento',
        'Pruebas unitarias',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 14,
      question: 'La prueba beta se realiza en:',
      correct_answer: 'Fin del usuario',
      answers: [
        'Fin del usuario',
        'Fin del desarrollador',
        'Fin de usuario y desarrollador',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 15,
      question: 'SPICE significa:',
      correct_answer: 'Mejora de procesos de software y determinación de capacidad',
      answers: [
        'Mejora de procesos de software y determinación de compatibilidad',
        'Mejora de procesos de software y determinación de control',
        'Mejora de procesos de software y determinación de capacidad',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 16,
      question: 'La prueba de unidad se realiza por:',
      correct_answer: 'Desarrolladores',
      answers: ['Usuarios', 'Desarrolladores', 'Clientes', 'Ninguna de las mencionadas'],
    },
    {
      number: 17,
      question: 'Las pruebas de comportamiento son:',
      correct_answer: 'Prueba de caja negra',
      answers: [
        'Prueba de caja blanca',
        'Prueba de caja negra',
        'Prueba de caja gris',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 18,
      question: '¿Cuál de las siguientes es una prueba de caja negra?',
      correct_answer: 'Análisis del valor límite',
      answers: [
        'Prueba de ruta básica',
        'Análisis del valor límite',
        'Análisis de ruta de código',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 19,
      question: '¿Cuál de los siguientes no se usa para medir el tamaño del software?',
      correct_answer: 'Tamaño del módulo',
      answers: [
        'KLOC',
        'Puntos de función',
        'Tamaño del módulo',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 20,
      question: 'Standard Enforcer es un:',
      correct_answer: 'Herramienta de prueba estática',
      answers: [
        'Herramienta de prueba estática',
        'Pruebas dinámicas',
        'Pruebas estáticas y dinámicas',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 21,
      question:
        'Muchas aplicaciones que utilizan análisis estático encuentran 01-02% NCSS, NCSS significa:',
      correct_answer: 'Declaración de fuente sin comentarios',
      answers: [
        'Declaración de fuente no codificada',
        'Oraciones de fuente sin comentarios',
        'Declaración de fuente sin comentarios',
        'Todas las mencionadas',
      ],
    },
    {
      number: 22,
      question:
        '¿Qué herramienta de prueba hace un simple trabajo de hacer cumplir los estándares de manera uniforme en muchos programas?',
      correct_answer: 'Ambos, el inspector de código y el ejecutor estándar',
      answers: [
        'Analizador estático',
        'Inspector de código',
        'Ejecutor estándar',
        'Ambos, el inspector de código y el ejecutor estándar',
      ],
    },
    {
      number: 23,
      question:
        'Las pruebas de software con datos reales en un entorno real se conocen como:',
      correct_answer: 'Pruebas beta',
      answers: [
        'Prueba alfa',
        'Pruebas beta',
        'Pruebas de regresión',
        'Ninguno de los mencionados',
      ],
    },
    {
      number: 24,
      question:
        '¿Cuál de las siguientes herramientas de prueba examina el programa de forma sistemática y automáticamente?',
      correct_answer: 'Analizador estático',
      answers: [
        'Inspector de código',
        'Analizador estático',
        'Enforcer estándar',
        'Analizador de cobertura',
      ],
    },
    {
      number: 25,
      question: '¿Qué herramienta de prueba es responsable de documentar los programas?',
      correct_answer: 'Sistemas de prueba de archivo',
      answers: [
        'Generador de pruebas / archivos',
        'Sistema de prueba de arnés',
        'Sistemas de prueba de archivo',
        'Analizador de cobertura',
      ],
    },
    {
      number: 26,
      question: 'La prueba Beta se realiza por:',
      correct_answer: 'Usuarios',
      answers: ['Desarrolladores', 'Probadores', 'Usuarios', 'Todas las mencionadas'],
    },
    {
      number: 27,
      question: 'La herramienta ejecutora estándar analiza todo el programa',
      correct_answer: 'Falso',
      answers: ['Verdad', 'Falso'],
    },
    {
      number: 28,
      question:
        'El programa de depuración es un programa que se ejecuta simultáneamente con el programa bajo prueba y proporciona comandos para:',
      correct_answer: 'Todas las mencionadas',
      answers: [
        'Examinar la memoria y los registros',
        'Detener la ejecución en un punto particular',
        'Búsqueda de referencias para variables particulares, constantes y registros',
        'Todas las mencionadas',
      ],
    },
    {
      number: 29,
      question:
        'Execution Verifier es una herramienta dinámica que también se conoce como:',
      correct_answer: 'Analizador de cobertura',
      answers: [
        'Generador de archivos de prueba',
        'Analizador de cobertura',
        'Comparador de salida',
        'Sistema de prueba de arnés',
      ],
    },
    {
      number: 30,
      question: 'El mantenimiento del software incluye:',
      correct_answer: 'Todas las mencionadas',
      answers: [
        'Correcciones de errores',
        'Mejoras de capacidades',
        'Supresión de capacidades obsoletas',
        'Todas las mencionadas',
      ],
    },
    {
      number: 31,
      question: '¿El mantenimiento se clasifica en cuántas categorías?',
      correct_answer: 'Cuatro',
      answers: ['Dos', 'Tres', 'Cuatro', 'Cinco'],
    },
    {
      number: 32,
      question:
        'La modificación del software para que coincida con los cambios en el entorno siempre cambiante, ¿en qué categoría de mantenimiento de software?',
      correct_answer: 'Adaptativo',
      answers: ['Correctivo', 'Adaptativo', 'Perfectivo', 'Preventivo'],
    },
    {
      number: 33,
      question: '¿Cuántas fases hay en Taute Maintenance Model?',
      correct_answer: 'Ocho',
      answers: ['Seis', 'Siete', 'Ocho', 'Nueve'],
    },
    {
      number: 34,
      question:
        '¿Qué tipo de prueba de software se usa generalmente en Mantenimiento de Software?',
      correct_answer: 'Pruebas de regresión',
      answers: [
        'Pruebas de regresión',
        'Pruebas del sistema',
        'Pruebas de integración',
        'Pruebas unitarias',
      ],
    },
    {
      number: 35,
      question: 'La prueba de regresión es una actividad muy costosa',
      correct_answer: 'Verdad',
      answers: ['Verdad', 'Falso'],
    }, ///////////////////////////////////////////////////////////////////
    {
      number: 36,
      question:
        "Las técnicas de reevaluación selectiva pueden ser más económicas que la técnica de 'reprobar todo' ¿Cuántas técnicas de reevaluación selectiva existen?",
      answers: ['Dos', 'Tres', 'Cuatro', 'Cinco'],
      correct_answer: 'Tres',
    },
    {
      number: 37,
      question:
        '¿Qué técnica de reevaluación selectiva selecciona cada caso de prueba que hace que un programa modificado produzca una salida diferente a su versión original?',
      answers: ['Cobertura', 'Minimización', 'Seguro', 'Maximización'],
      correct_answer: 'Seguro',
    },
    {
      number: 38,
      question:
        '_____ mide la capacidad de una técnica de selección de prueba de regresión para manejar aplicaciones realistas',
      answers: ['Eficiencia', 'Precisión', 'Generalidad', 'Inclusividad'],
      correct_answer: 'Generalidad',
    },
    {
      number: 39,
      question:
        '¿Qué técnica de selección de prueba de regresión expone fallas causadas por modificaciones?',
      answers: ['Eficiencia', 'Precisión', 'Generalidad', 'Inclusividad'],
      correct_answer: 'Inclusividad',
    },
    {
      number: 40,
      question:
        '¿Cuál de los siguientes diagramas no es compatible con UML considerando el modelado basado en datos?',
      answers: [
        'Actividad',
        'Diagrama de flujo de datos (DFD)',
        'Carta del estado',
        'Componente',
      ],
      correct_answer: 'Diagrama de flujo de datos (DFD)',
    },
    {
      number: 41,
      question:
        '_____ nos permite inferir que diferentes miembros de clases tienen algunas características comunes',
      answers: ['Realización', 'Agregación', 'Generalización', 'Dependencia'],
      correct_answer: 'Generalización',
    },
    {
      number: 42,
      question:
        'Uno crea modelos de comportamiento de un sistema cuando está discutiendo y diseñando la arquitectura del sistema',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 43,
      question:
        'Los diagramas de _____ y _____ de UML representan el modelo de interacción',
      answers: [
        'Caso de uso, secuencia',
        'Clase, Objeto',
        'Actividad, Carta del estado',
        'Todas las mencionadas',
      ],
      correct_answer: 'Caso de uso, secuencia',
    },
    {
      number: 44,
      question:
        '¿Qué nivel de Diagrama de relaciones entre entidades (ERD) modela todas las entidades y relaciones?',
      answers: ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4'],
      correct_answer: 'Nivel 2',
    },
    {
      number: 45,
      question:
        'Las clases _____ se utilizan para crear la interfaz que el usuario ve y con la que interactúa cuando utiliza el software.',
      answers: ['Controlador', 'Entidad', 'Límite', 'Negocios'],
      correct_answer: 'Límite',
    },
    {
      number: 46,
      question:
        '¿Cuál de las siguientes afirmaciones es incorrecta con respecto al modelo de Colaborador de responsabilidad de la clase (CRC)?',
      answers: [
        'Todos los escenarios de casos de uso (y los correspondientes diagramas de casos de uso) están organizados en categorías en el modelo CRC',
        'El líder de revisión lee el caso de uso deliberadamente',
        'Solo los desarrolladores en la revisión (del modelo CRC) reciben un subconjunto de las tarjetas de índice del modelo CRC',
        'Todas las mencionadas',
      ],
      correct_answer:
        'Solo los desarrolladores en la revisión (del modelo CRC) reciben un subconjunto de las tarjetas de índice del modelo CRC',
    },
    {
      number: 47,
      question: 'Un objeto de datos también puede encapsular procesos y operaciones',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 48,
      question: '¿Cuál es el primer objetivo del proceso de prueba?',
      answers: ['Prevención de errores', 'Pruebas', 'Ejecución', 'Análisis'],
      correct_answer: 'Prevención de errores',
    },
    {
      number: 49,
      question: 'Los errores de software durante la codificación se conocen como:',
      answers: ['Errores', 'Fallas', 'Bichos', 'Defectos'],
      correct_answer: 'Bichos',
    },
    {
      number: 50,
      question:
        'Nombre una técnica de evaluación para evaluar la calidad de los casos de prueba',
      answers: [
        'Análisis de mutaciones',
        'Validación',
        'Verificación',
        'Análisis de rendimiento',
      ],
      correct_answer: 'Análisis de mutaciones',
    },
    {
      number: 51,
      question: 'La prueba debe realizarse para cada posible:',
      answers: ['Datos', 'Caso', 'Variable', 'Todas las mencionadas'],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 52,
      question: '¿Cuál de los siguientes no forma parte del informe de errores?',
      answers: ['Caso de prueba', 'Salida', 'Versión de software', 'LOC(Line of code)'],
      correct_answer: 'LOC(Line of code)',
    },
    {
      number: 53,
      question:
        '¿Cuál de las siguientes opciones no forma parte del Flujo de ejecución durante la depuración?',
      answers: ['Paso sobre', 'Entrar en', 'Intensificar', 'Salir'],
      correct_answer: 'Intensificar',
    },
    {
      number: 54,
      question: 'El método de Complejidad ciclomática viene bajo el método de prueba',
      answers: ['Caja amarilla', 'Caja blanca', 'Caja gris', 'Caja negra'],
      correct_answer: 'Caja blanca',
    },
    {
      number: 55,
      question:
        '¿Cuál es una técnica de prueba de caja negra apropiada para todos los niveles de prueba?',
      answers: [
        'Pruebas de aceptación',
        'Pruebas de regresión',
        'Partición de equivalencia',
        'Aseguramiento de la calidad',
      ],
      correct_answer: 'Partición de equivalencia',
    },
    {
      number: 56,
      question:
        '¿Cuál de las siguientes es la manera de asegurar que las pruebas estén realmente probando el código?',
      answers: [
        'Pruebas de estructura de control',
        'Prueba de trayectoria compleja',
        'Cobertura del código',
        'Aseguramiento de la calidad del software',
      ],
      correct_answer: 'Cobertura del código',
    },
    {
      number: 57,
      question: 'Las pruebas efectivas reducirán el costo de:',
      answers: ['Mantenimiento', 'Diseño', 'Codificación', 'Documentación'],
      correct_answer: 'Mantenimiento',
    },
    {
      number: 58,
      question: '¿Cuál de los siguientes es un problema común?',
      answers: [
        'Errores de intercambio de datos',
        'Accediendo a elementos de datos del tipo equivocado',
        'Intentar usar áreas de memoria después de liberarlas',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 59,
      question:
        'El proceso de generación de documentos de análisis y diseño se conoce como:',
      answers: [
        'Ingeniería de software',
        'Reingeniería de software',
        'Ingeniería inversa',
        'Reingeniería',
      ],
      correct_answer: 'Ingeniería inversa',
    },
    {
      number: 60,
      question: '¿Qué es un parche de software?',
      answers: [
        'Arreglo requerido o crítico',
        'Arreglo de emergencia',
        'Arreglo diario o rutinario',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Arreglo de emergencia',
    },
    {
      number: 61,
      question: '¿Cuál de los siguientes no es un modelo de mantenimiento?',
      answers: [
        'Modelo de cascada',
        'Modelo orientado a la reutilización',
        'Modelo de mejora iterativa',
        'Modelo de solución rápida',
      ],
      correct_answer: 'Modelo de cascada',
    },
    {
      number: 62,
      question:
        '¿Qué significa ACT en el modelo In Boehm para el mantenimiento del software?',
      answers: [
        'Pista de cambio actual',
        'Pista de cambio anual',
        'Cambio anual del tráfico',
        'Tráfico de cambio actual',
      ],
      correct_answer: 'Cambio anual del tráfico',
    },
    {
      number: 63,
      question: 'Elegir las opciones adecuadas con respecto a las pruebas de regresión',
      answers: [
        'Ayuda en el desarrollo de software',
        'Ayuda en el mantenimiento del software',
        'Ayuda en el desarrollo y mantenimiento de software',
        'Ninguno de los mencionados',
      ],
      correct_answer: 'Ayuda en el desarrollo y mantenimiento de software',
    },
    {
      number: 64,
      question: '¿Qué son los sistemas heredados?',
      answers: [
        'Nuevos sistemas',
        'Sistemas antiguos',
        'Sistemas subdesarrollados',
        'Ninguno de los mencionados',
      ],
      correct_answer: 'Sistemas antiguos',
    },
    {
      number: 65,
      question: '¿Cuál de los siguientes manuales no es una documentación de usuario?',
      answers: [
        'Guía para principiantes',
        'Guía de instalación',
        'Guía de referencia',
        'SRS - Especificación de requisitos de software',
      ],
      correct_answer: 'SRS - Especificación de requisitos de software',
    },
    {
      number: 66,
      question: '¿Cuál de los siguientes manuales es una documentación de usuario?',
      answers: [
        'SRS - Especificación de requisitos de software',
        'SDD - Documento de diseño de software',
        'Resumen del sistema',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Resumen del sistema',
    },
    {
      number: 67,
      question:
        'El proceso de transformación de un modelo en código fuente se conoce como:',
      answers: [
        'Ingeniería delantera',
        'Ingeniería inversa',
        'Reingeniería',
        'Reconstruyendo',
      ],
      correct_answer: 'Ingeniería delantera',
    },
    {
      number: 68,
      question:
        '¿Cuántas etapas hay en el modelo de mejora iterativa utilizado durante el mantenimiento del software?',
      answers: ['Dos', 'Tres', 'Cuatro', 'Cinco'],
      correct_answer: 'Cuatro',
    },
    {
      number: 69,
      question:
        'El Lenguaje de modelado unificado (UML) se ha convertido en un estándar efectivo para el modelado de software ¿Cuántas notaciones diferentes tiene?',
      answers: ['Tres', 'Cuatro', 'Seis', 'Nueve'],
      correct_answer: 'Nueve',
    },
    {
      number: 70,
      question:
        '¿Qué modelo en el modo del sistema representa el comportamiento dinámico del sistema?',
      answers: [
        'Modelo de contexto',
        'Modelo de comportamiento',
        'Modelo de datos',
        'Modelo de objeto',
      ],
      correct_answer: 'Modelo de comportamiento',
    },
    {
      number: 71,
      question:
        '¿Qué modelo en el modo de sistemas representa la naturaleza estática del sistema?',
      answers: [
        'Modelo de comportamiento',
        'Modelo de contexto',
        'Modelo de datos',
        'Modelo estructural',
      ],
      correct_answer: 'Modelo estructural',
    },
    {
      number: 72,
      question:
        '¿Qué perspectiva en el modo del sistema muestra el sistema o la arquitectura de datos?',
      answers: [
        'Perspectiva estructural',
        'Perspectiva de comportamiento',
        'Perspectiva externa',
        'Todas las conocidas',
      ],
      correct_answer: 'Perspectiva estructural',
    },
    {
      number: 73,
      question:
        '¿Qué modelo de sistema se muestra en las operaciones de cajeros automáticos que se muestran a continuación?',
      answers: [
        'Modelo estructural',
        'Modelo de contexto',
        'Modelo de comportamiento',
        'Modelo de interacción',
      ],
      correct_answer: 'Modelo de contexto',
    },
    {
      number: 74,
      question:
        'Los diagramas de actividad se utilizan para modelar el procesamiento de datos',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 75,
      question:
        'La ingeniería basada en modelos es solo un concepto teórico. No se puede convertir en un código de trabajo / ejecutable',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 76,
      question:
        '¿Dónde están disponibles los programas y los datos que utilizará la computadora?',
      answers: ['Salida', 'Unidad de procesamiento', 'Entrada', 'Almacenamiento'],
      correct_answer: 'Almacenamiento',
    },
    {
      number: 77,
      question: 'Un puerto paralelo es el más utilizado por un:',
      answers: ['Ratón', 'Monitor', 'Impresora', 'Dispositivo de almacenamiento externo'],
      correct_answer: 'Impresora',
    },
    {
      number: 78,
      question: 'La computadora sigue un principio simple llamado GIGO que significa:',
      answers: [
        'Basura dentro, basura fuera',
        'Salida de basura, buena salida',
        'Buena entrada, buena salida',
        'Mayores instrucciones, mayor salida',
      ],
      correct_answer: 'Basura dentro, basura fuera',
    },
    {
      number: 79,
      question:
        'Organiza los siguientes dispositivos en orden ascendente de la velocidad:\n\nA RAM\nB Disco duro\nC Caché\nD Floppy',
      answers: ['ABDC', 'BDAC', 'DBAC', 'BADC'],
      correct_answer: 'BDAC',
    },
    {
      number: 80,
      question:
        '¿Cuál es la unidad comúnmente utilizada para medir la velocidad de transmisión de datos?',
      answers: [
        'Bits por segundo',
        'Nanosegundos',
        'Caracteres por segundo',
        'Megahertz',
      ],
      correct_answer: 'Bits por segundo',
    },
    {
      number: 81,
      question:
        '¿Cuál de los siguientes no está incluido en las funciones básicas del sistema operativo?',
      answers: [
        'Control de trabajo',
        'Programación de trabajos',
        'Gestión de la memoria',
        'Gestión de datos',
      ],
      correct_answer: 'Control de trabajo',
    },
    {
      number: 82,
      question: "La tecnología 'diente azul' permite:",
      answers: [
        'Comunicación de teléfono fijo a móvil',
        'Transmisión de señales solo en teléfonos móviles',
        'Comunicación inalámbrica entre equipos',
        'Comunicación de televisión vía satélite',
      ],
      correct_answer: 'Comunicación inalámbrica entre equipos',
    },
    {
      number: 83,
      question: 'Un byte consiste en:',
      answers: ['Cuatro bits', 'Un bit', 'Diez bits', 'Ocho bits'],
      correct_answer: 'Ocho bits',
    },
    {
      number: 84,
      question: 'ENIAC era:',
      answers: [
        'Una computadora electrónica',
        'Un motor',
        'Un dispositivo de memoria',
        'Una calculadora electrónica',
      ],
      correct_answer: 'Una computadora electrónica',
    },
    {
      number: 85,
      question: 'El sistema operativo llamado UNIX se usa típicamente para:',
      answers: [
        'Computadoras de escritorio',
        'Ordenadores portátiles',
        'Supercomputadoras',
        'Todos estos',
      ],
      correct_answer: 'Todos estos',
    },
    {
      number: 86,
      question:
        'Hay varias categorías primarias de procedimientos ¿Cuál de los siguientes no es una categoría primaria de procedimientos?',
      answers: [
        'Pruebas',
        'Copia de seguridad y recuperación',
        'Desarrollo de firewall',
        'Diseño',
      ],
      correct_answer: 'Desarrollo de firewall',
    },
    {
      number: 87,
      question:
        'Todos los cálculos lógicos y matemáticos realizados por la computadora ocurren en el:',
      answers: [
        'Unidad central de procesamiento',
        'Placa madre',
        'Memoria',
        'Unidad de control central',
      ],
      correct_answer: 'Unidad central de procesamiento',
    },
    {
      number: 88,
      question: 'La conexión entre su computadora en casa y su ISP local se denomina:',
      answers: [
        'La última milla',
        'El estiramiento de casa',
        'La página de inicio',
        'La columna vertebral',
      ],
      correct_answer: 'La página de inicio',
    },
    {
      number: 89,
      question:
        'Cuando se habla de entrada y salida de computadora, entrada se refiere a',
      answers: [
        'Cualquier procesamiento de datos que ocurra a partir de la nueva entrada de datos en la computadora',
        'Datos o información que ha sido ingresada en la computadora',
        'La transmisión de datos que han sido ingresados en la computadora',
      ],
      correct_answer: 'Datos o información que ha sido ingresada en la computadora',
    },
    {
      number: 90,
      question: 'El software de computadora puede definirse como:',
      answers: [
        'La computadora y sus equipos asociados',
        'Las instrucciones que le dicen a la computadora qué hacer',
        'Componentes informáticos que actúan para lograr un objetivo',
        'Una interfaz entre la computadora y la red',
      ],
      correct_answer: 'Las instrucciones que le dicen a la computadora qué hacer',
    },
    {
      number: 91,
      question: 'La memoria principal de una computadora también puede ser llamada:',
      answers: [
        'Almacenamiento primario',
        'Memoria interna',
        'Memoria primaria',
        'Todos estos',
      ],
      correct_answer: 'Todos estos',
    },
    {
      number: 92,
      question:
        '¿Cuál de los siguientes no es un tipo de software de computadora que se pueda pensar?',
      answers: [
        'Fuera de la plataforma',
        'A medida',
        'Desarrollado a medida',
        'Fuera de la plataforma con alteraciones',
      ],
      correct_answer: 'Fuera de la plataforma con alteraciones',
    },
    {
      number: 93,
      question:
        '_____ son intentos de individuos por obtener información confidencial de usted al falsificar su identidad',
      answers: [
        'Viajes de phishing',
        'Virus informáticos',
        'Estafas de spyware',
        'Estafas de phishing',
      ],
      correct_answer: 'Estafas de phishing',
    },
    {
      number: 94,
      question: 'El trabajo principal de la CPU es:',
      answers: [
        'Cumplir las instrucciones del programa',
        'Almacenar datos / información para uso futuro',
        'Procesar datos e información',
        'Ambos Cumplir las instrucciones del programa y Procesar datos e información',
      ],
      correct_answer:
        'Ambos Cumplir las instrucciones del programa y Procesar datos e información',
    },
    {
      number: 95,
      question: '¿Cuál de los siguientes es un ejemplo de un disco óptico?',
      answers: [
        'Discos magnéticos',
        'Discos de memoria',
        'Discos de bus de datos',
        'Discos versátiles digitales',
      ],
      correct_answer: 'Discos versátiles digitales',
    },
    {
      number: 96,
      question:
        '¿Cuál de los siguientes es un ejemplo de dispositivos de almacenamiento?',
      answers: ['Discos magnéticos', 'Cintas', 'DVDs', 'Todos estos'],
      correct_answer: 'Todos estos',
    },
    {
      number: 97,
      question:
        'Una persona que usó su experiencia para obtener acceso a las computadoras de otras personas para obtener información ilegalmente o hacer daño es una:',
      answers: ['Hacker', 'Spammer', 'Analista', 'Programador'],
      correct_answer: 'Hacker',
    },
    {
      number: 98,
      question:
        'Una forma popular de aprender acerca de las computadoras sin tener que ir al aula se llama:',
      answers: ['I-learning', 'Aprendizaje aislado', 'E-learning', 'Aprendizaje cercano'],
      correct_answer: 'E-learning',
    },
    {
      number: 99,
      question:
        '¿Cuál de los siguientes es un dispositivo de almacenamiento que utiliza discos magnéticos rígidos instalados permanentemente para almacenar datos / información?',
      answers: ['Disquete', 'Disco duro', 'Disco permanente', 'Ninguno de estos'],
      correct_answer: 'Disco duro',
    },
    {
      number: 100,
      question:
        'Un diccionario de datos tiene una lista consolidada de datos contenidos en:\n\nI) Flujos de datos \n II) Alamacenes de datos \n III) Salidas de datos \n IV) Procesos',
      answers: ['I y III', 'I y II', 'II y IV', 'I y IV'],
      correct_answer: 'I y II',
    },
    {
      number: 101,
      question:
        'Un diccionario de datos es útil como:\n\nI) Es una ayuda de documentación \nII) Asiste en el diseño de formularios de entrada\nIII) Contiene todos los datos en una aplicación, incluidos los datos temporales utilizados en los procesos \n IV) Es una buena idea en el diseño de sistemas',
      answers: ['I y II', 'I y IV', 'I, II y III', 'I y IV'],
      correct_answer: 'I, II y III',
    },
    {
      number: 102,
      question: 'Por metadatos entendemos:',
      answers: [
        'Datos muy grandes',
        'Datos sobre datos',
        'Diccionario de datos',
        'Datos significativos',
      ],
      correct_answer: 'Datos sobre datos',
    },
    {
      number: 103,
      question: 'Se suele desarrollar un diccionario de datos',
      answers: [
        'En la fase de especificación de requisitos',
        'Durante el análisis de viabilidad',
        'Cuando se desarrolla DFD',
        'Cuando se diseña una datadae',
      ],
      correct_answer: 'Cuando se desarrolla DFD',
    },
    {
      number: 104,
      question: 'Un diccionario de datos tiene información sobre:',
      answers: [
        'Cada elemento de datos en un flujo de datos',
        'Sólo un elemento de datos clave en un flujo de datos',
        'Solo elementos de datos importantes en un flujo de datos',
        'Sólo elementos de datos numéricos en un flujo de datos',
      ],
      correct_answer: 'Cada elemento de datos en un flujo de datos',
    },
    {
      number: 105,
      question: 'Un elemento de datos en un diccionario de datos puede tener:',
      answers: [
        'Solo valor entero',
        'Sin valor',
        'Solo valor real',
        'Solo valor decimal',
      ],
      correct_answer: 'Sin valor',
    },
    {
      number: 106,
      question: 'Un código conciso es necesariamente:',
      answers: ['Preciso', 'Significativo', 'Exhaustivo', 'Difícil'],
      correct_answer: 'Preciso',
    },
    {
      number: 107,
      question: 'Los números de serie utilizados como códigos son:',
      answers: [
        'Concisos y Significativos',
        'Significativos y Expandibles',
        'Significativos e Integrales',
        'Concisos y Expandibles',
      ],
      correct_answer: 'Concisos y Expandibles',
    },
    {
      number: 108,
      question: 'Los códigos de bloqueo son:',
      answers: [
        'Concisos y Significativos',
        'Significativos y Expandibles',
        'Expandibles e Integrales',
        'Concisos y Expandibles',
      ],
      correct_answer: 'Significativos y Expandibles',
    },
    {
      number: 109,
      question: 'Los códigos de clasificación de grupo son:',
      answers: [
        'Concisos y Significativos',
        'Concisos, Significativos y Expandibles',
        'Significativos, Expandibles e Integrales',
        'Concisos, Significativos e Integrales',
      ],
      correct_answer: 'Significativos, Expandibles e Integrales',
    },
    {
      number: 110,
      question: 'Los códigos significativos son:',
      answers: [
        'Concisos y Significativos',
        'Concisos, Significativos y Expandibles',
        'Significativos, Expandibles e Integrales',
        'Concisos, Significativos e Integrales',
      ],
      correct_answer: 'Significativos, Expandibles e Integrales',
    },
    {
      number: 111,
      question: 'En códigos significativos algunas o todas las partes del código:',
      answers: ['Son significativas', 'Son utilizables', 'Representar valores'],
      correct_answer: 'Representar valores',
    },
    {
      number: 112,
      question:
        'La numeración de secuencias de los registros se utiliza para:\n\n I) Identifique cada registro de manera única \nII) Seguimiento de un registro faltante en un lote de registros \nIII) Cuenta el número de registros \nIV) Ordenar los registros',
      answers: ['I, II', 'I, II, III', 'I, II, III, IV', 'I, IV'],
      correct_answer: 'I, II, III, IV',
    },
    {
      number: 113,
      question: 'El estudio implica:',
      answers: [
        'Estudio de un sistema existente',
        'Sistema que documenta el sistema existente',
        'Identificando deficiencias actuales y estableciendo nuevos objetivos',
        'Todo lo anterior',
      ],
      correct_answer: 'Todo lo anterior',
    },
    {
      number: 114,
      question: 'La herramienta principal utilizada en el diseño estructurado es una:',
      answers: ['Diagrama de estructura', 'Diagrama de flujo del programa', 'Módulo'],
      correct_answer: 'Diagrama de estructura',
    },
    {
      number: 115,
      question:
        '¿Cuántos pasos hay en el ciclo de vida del desarrollo de sistemas (SDLC)?',
      answers: ['4', '5', '6', '10'],
      correct_answer: '4',
    },
    {
      number: 116,
      question:
        'El primer paso en el ciclo de vida del desarrollo de sistemas (SDLC) es:',
      answers: [
        'Análisis',
        'Diseño',
        'Identificación de problemas / oportunidades',
        'Desarrollo y Documentación',
      ],
      correct_answer: 'Identificación de problemas / oportunidades',
    },
    {
      number: 117,
      question:
        'La mayoría de las aplicaciones de software modernas le permiten personalizar y automatizar varias funciones utilizando pequeños "miniprogramas" personalizados:',
      answers: ['Macros', 'Código', 'Rutinas', 'Subrutinas'],
      correct_answer: 'Macros',
    },
    {
      number: 118,
      question:
        'El proceso organizado o conjunto de pasos que deben seguirse para desarrollar un sistema de información se conoce como:',
      answers: [
        'Ciclo analítico',
        'Ciclo de diseño',
        'Especificación del programa',
        'Ciclo de vida del desarrollo del sistema',
      ],
      correct_answer: 'Ciclo de vida del desarrollo del sistema',
    },
    {
      number: 119,
      question: '¿El paso final en el ciclo de vida del desarrollo de Sytem (SDLC)?',
      answers: ['Análisis', 'Operacional', 'Desarrollo', 'Diseño'],
      correct_answer: 'Operacional',
    },
    {
      number: 120,
      question:
        'La decisión de hacer o comprar está asociada con el paso _____ en el SDLC',
      answers: [
        'Identificación del problema / oportunidad',
        'Diseño',
        'Análisis',
        'Desarrollo y Documentación',
      ],
      correct_answer: 'Diseño',
    },
    {
      number: 121,
      question:
        'En la fase de Análisis, ocurre el desarrollo del _____, que es una declaración clara de las metas y objetivos del proyecto',
      answers: [
        'Documentación',
        'Diagrama de flujo',
        'Especificación del programa',
        'Diseño',
      ],
      correct_answer: 'Especificación del programa',
    },
    {
      number: 122,
      question:
        'La programación real del código de software se realiza durante el paso _____ en el SDLC',
      answers: [
        'Mantenimiento y Evaluación',
        'Diseño',
        'Análisis',
        'Desarrollo y Documentación',
      ],
      correct_answer: 'Desarrollo y Documentación',
    },
    {
      number: 123,
      question:
        'Las mejoras, actualizaciones y correcciones de errores se realizan durante el paso en el SDLC',
      answers: [
        'Mantenimiento y Evaluación',
        'Identificación del problema / oportunidad',
        'Diseño',
        'Desarrollo y Documentación',
      ],
      correct_answer: 'Mantenimiento y Evaluación',
    },
    {
      number: 124,
      question: 'El _____ determina si el proyecto debe seguir adelante',
      answers: [
        'Evaluación de viabilidad',
        'Identificación de oportunidad',
        'Evaluación del sistema',
        'Especificación del programa',
      ],
      correct_answer: 'Evaluación de viabilidad',
    },
    {
      number: 125,
      question:
        'Los escritores técnicos generalmente proporcionan el _____ para el nuevo sistema',
      answers: ['Programas', 'Red', 'Análisis', 'Documentación'],
      correct_answer: 'Documentación',
    },
    {
      number: 126,
      question: '_____ diseñar e implementar estructuras de bases de datos',
      answers: [
        'Programadores',
        'Gerentes de proyecto',
        'Escritores técnicos',
        'Administradores de bases de datos',
      ],
      correct_answer: 'Administradores de bases de datos',
    },
    {
      number: 127,
      question:
        '_____ pasan la mayor parte de su tiempo en las etapas iniciales del SDLC, hablando con los usuarios finales, recopilando información, documentando sistemas y proponiendo soluciones',
      answers: [
        'Analistas de sistemas',
        'Gerentes de proyecto',
        'Ingenieros de redes',
        'Administradores de la base de datos',
      ],
      correct_answer: 'Analistas de sistemas',
    },
    {
      number: 128,
      question:
        '_____ administre el desarrollo del sistema, asigne personal, administre el presupuesto y los informes, y asegúrese de que se cumplan los plazos',
      answers: [
        'Gerentes de proyecto',
        'Ingenieros de redes',
        'Diseñadores gráficos',
        'Analistas de sistemas',
      ],
      correct_answer: 'Gerentes de proyecto',
    },
    {
      number: 129,
      question:
        '_____ es el proceso de traducir una tarea en una serie de comandos que una computadora utilizará para realizar esa tarea',
      answers: [
        'Diseño del proyecto',
        'Instalación',
        'Análisis de sistemas',
        'Programación',
      ],
      correct_answer: 'Programación',
    },
    {
      number: 130,
      question: 'La depuración es:',
      answers: [
        'Creando el código del programa',
        'Encontrar y corregir errores en el código del programa',
        'Identificar la tarea a computarizar',
        'Creando el algoritmo',
      ],
      correct_answer: 'Encontrar y corregir errores en el código del programa',
    },
    {
      number: 131,
      question:
        'La traducción de la declaración del problema en una serie de pasos secuenciales que describen lo que el programa debe hacer se conoce como:',
      answers: [
        'La codificación',
        'Depuración',
        'Creando el algoritmo',
        'Escribiendo la documentación',
      ],
      correct_answer: 'Creando el algoritmo',
    },
    {
      number: 132,
      question:
        'La traducción del algoritmo a un lenguaje de programación ocurre en el paso _____ del PD LC',
      answers: [
        'Depuración',
        'Codificación',
        'Pruebas y documentación',
        'Desarrollo de algoritmos',
      ],
      correct_answer: 'Codificación',
    },
    {
      number: 133,
      question: 'La declaración del problema debe incluir todos los siguientes EXCEPTO:',
      answers: ['Entrada', 'Salida', 'Procesamiento', 'Almacenamiento'],
      correct_answer: 'Almacenamiento',
    },
    {
      number: 134,
      question:
        'La declaración del problema incluye el _____ , que enumera los números de entrada específicos que un programa esperaría normalmente que el usuario ingrese y valores de salida precisos que un programa perfecto devolvería para esos valores de entrada',
      answers: [
        'Plan de pruebas',
        'Manejador de errores',
        'Ciclo de salida a bolsa',
        'Especificación de entrada-salida',
      ],
      correct_answer: 'Plan de pruebas',
    },
    {
      number: 135,
      question:
        'El objetivo principal de la fase de determinación de requisitos del desarrollo del sistema de información es:',
      answers: [
        'Determinar si la información es necesaria para una organización',
        'Determinar qué información necesita una organización',
        'Determinar cómo se puede proporcionar la información que necesita una organización',
        'Determinar cuándo se dará la información',
      ],
      correct_answer: 'Determinar qué información necesita una organización',
    },
    {
      number: 136,
      question:
        'Los requisitos de información de una organización pueden ser determinados por:',
      answers: [
        'Entrevistar a los gerentes y usuarios y llegar a los requisitos basados en el consenso',
        'Descubrir qué hacen organizaciones similares',
        'Decirle a la organización lo que necesitan en función de su experiencia',
        'Enviar un cuestionario a todos los empleados de la organización',
      ],
      correct_answer:
        'Entrevistar a los gerentes y usuarios y llegar a los requisitos basados en el consenso',
    },
    {
      number: 137,
      question:
        'Es necesario priorizar los requisitos de información de una organización en la fase de determinación de requisitos como:',
      answers: [
        'Siempre es bueno priorizar',
        'Hay demandas conflictivas de los usuarios',
        'Hay restricciones en los presupuestos, el tiempo disponible, los recursos humanos y los requisitos',
        'Toda buena organización lo hace',
      ],
      correct_answer:
        'Hay restricciones en los presupuestos, el tiempo disponible, los recursos humanos y los requisitos',
    },
    {
      number: 138,
      question: 'Se realiza la especificación del requisito',
      answers: [
        'Una vez determinados los requisitos',
        'Antes de que se determinen los requerimientos',
        'Simultáneamente con determinación de requerimientos',
        'Independiente de la determinación de requerimientos',
      ],
      correct_answer: 'Una vez determinados los requisitos',
    },
    {
      number: 139,
      question:
        'El código se desarrolla con las propiedades medibles de un elemento conocido',
      answers: [
        'Código de clasificación de grupo',
        'Código de autocomprobación',
        'Código de dígitos significativos',
        'Código numérico',
      ],
      correct_answer: 'Código de dígitos significativos',
    },
    {
      number: 140,
      question:
        'Es necesario consultar lo siguiente al elaborar la especificación del requisito:',
      answers: [
        'Solo altos directivos',
        'Solo alta y media gerencia',
        'Solo gerentes superiores, medios y operativos',
        'Gerentes superiores, medios y operativos, y también todos los que usarán el sistema',
      ],
      correct_answer:
        'Gerentes superiores, medios y operativos, y también todos los que usarán el sistema',
    },
    {
      number: 141,
      question:
        'Para comprender el funcionamiento de una organización para la cual se está diseñando un sistema basado en computadora, un analista debe:',
      answers: [
        'Ver solo el trabajo actual y el flujo de documentos en la organización',
        'Discutir solo con la gerencia de nivel medio y medio',
        'Entrevistar a los gerentes principales, intermedios, de línea y también a los empleados que ingresarán los datos y usarán el sistema',
        'Solo personal administrativo y de nivel medio que tenga una larga experiencia en la organización y que sea usuario del sistema',
      ],
      correct_answer:
        'Entrevistar a los gerentes principales, intermedios, de línea y también a los empleados que ingresarán los datos y usarán el sistema',
    },
    {
      number: 142,
      question: 'Se realiza un estudio de factibilidad',
      answers: [
        'Después de los requisitos finales se elaboran las especificaciones',
        'Durante el periodo en el que se elaboran las especificaciones de los requisitos',
        'Antes de que se elaboren las especificaciones de los requisitos finales',
        'En cualquier momento',
      ],
      correct_answer:
        'Antes de que se elaboren las especificaciones de los requisitos finales',
    },
    {
      number: 143,
      question: 'El principal objetivo del estudio de viabilidad es:',
      answers: [
        'Evaluar si es posible cumplir con los requisitos especificados',
        'Evaluar si es posible cumplir con los requisitos especificados sujetos a restricciones de presupuesto, recursos humanos y hardware',
        'Asistir a la gerencia en la implementación del sistema deseado',
        'Eliminar los cuellos de botella en la implementación del sistema deseado',
      ],
      correct_answer:
        'Evaluar si es posible cumplir con los requisitos especificados sujetos a restricciones de presupuesto, recursos humanos y hardware',
    },
    {
      number: 144,
      question: 'Es necesario llevar a cabo un estudio de factibilidad como:',
      answers: [
        'La alta dirección no puede garantizar que un proyecto sea viable antes de llamar a un analista de sistemas',
        'La alta dirección no está segura de lo que quieren del sistema',
        'A pesar de que la alta gerencia está a favor del sistema, la tecnología puede no estar madura para su implementación',
        'Todas las organizaciones lo hacen',
      ],
      correct_answer:
        'A pesar de que la alta gerencia está a favor del sistema, la tecnología puede no estar madura para su implementación',
    },
    {
      number: 145,
      question:
        'La tecnología que ayuda a las empresas a cambiar de negocio permitiéndoles usar nuevos métodos se denomina:',
      answers: [
        'Procesamiento de datos',
        'Sistemas de información',
        'Tecnologías de la información',
        'Virtualización',
      ],
      correct_answer: 'Tecnologías de la información',
    },
    {
      number: 146,
      question:
        '¿Cuál de los siguientes no es un ejemplo de una forma en que la tecnología está cambiando el negocio y su relación con los empleados?',
      answers: [
        'La tecnología reduce los residuos',
        'La tecnología corta ciclos de desarrollo',
        'La tecnología elimina capas de gestión',
        'La tecnología está rompiendo barreras corporativas',
      ],
      correct_answer: 'La tecnología elimina capas de gestión',
    },
    {
      number: 147,
      question:
        'Una red de la empresa, cerrada al acceso público, que utiliza tecnología de tipo Internet se llama:',
      answers: ['Intranet', 'Internet', 'Extranet', 'Todas las anteriores'],
      correct_answer: 'Intranet',
    },
    {
      number: 148,
      question:
        'La utilidad de la información de gestión depende de ¿cuál de las siguientes características?',
      answers: ['Calidad', 'Lo completo', 'Oportunidad', 'Todas las anteriores'],
      correct_answer: 'Todas las anteriores',
    },
    {
      number: 149,
      question:
        'El cambio más dinámico en tecnología empresarial en los últimos años es:',
      answers: [
        'La velocidad de las impresoras',
        'El alejamiento de las computadoras centrales hacia los sistemas de red',
        'El costo de las computadoras',
        'Ninguna de las anteriores',
      ],
      correct_answer:
        'El alejamiento de las computadoras centrales hacia los sistemas de red',
    },
    {
      number: 150,
      question: '¿Cuál de los siguientes no es un beneficio importante de las redes?',
      answers: [
        'Ahorrando tiempo y dinero',
        'Proporcionando enlaces fáciles a través de fronteras funcionales',
        'Permitiendo a los empleados ver información completa',
        'Ninguna de las anteriores',
      ],
      correct_answer: 'Ninguna de las anteriores',
    },
    {
      number: 151,
      question:
        'El programa de computadora que se usa para manejar cualquier cosa, desde una nota a un libro de varios capítulos, se llama a (n):',
      answers: [
        'Programa de base de datos',
        'Hoja de cálculo',
        'Programa de contabilidad',
        'Programa de procesamiento de textos',
      ],
      correct_answer: 'Programa de procesamiento de textos',
    },
    {
      number: 152,
      question:
        'El Sr X quiere calcular el punto de equilibrio para un producto ¿Cuál de los siguientes programas usaría?',
      answers: [
        'Base de datos',
        'Hoja de cálculo',
        'Procesador de textos',
        'Ninguna de las anteriores',
      ],
      correct_answer: 'Hoja de cálculo',
    },
    {
      number: 153,
      question:
        'Los programas de computadora que hacen posible que diferentes marcas de computadoras se transfieran datos entre sí se llaman:',
      answers: [
        'Software del centro de mensajes',
        'Software de base de datos',
        'Software de comunicación',
        'Todas las anteriores',
      ],
      correct_answer: 'Software de comunicación',
    },
    {
      number: 154,
      question:
        '¿Cuál de los siguientes no es un problema importante que surge de la creciente dependencia de la tecnología de la información?',
      answers: [
        'Cambios de recursos humanos',
        'Rentabilidad',
        'Amenazas de seguridad',
        'Preocupaciones sobre la privacidad',
      ],
      correct_answer: 'Rentabilidad',
    },
    {
      number: 155,
      question:
        'Según el libro de texto, algunos futuristas creen que en los primeros años del siglo XXI, tanto como el porcentaje de la fuerza laboral canadiense trabajará en casa',
      answers: ['20', '40', '30', '50'],
      correct_answer: '40',
    },
    {
      number: 156,
      question:
        '¿Cuál de las siguientes carreras está ganando trabajadores debido al crecimiento de la tecnología de la información?',
      answers: [
        'Ingenieros informáticos',
        'Operadores informáticos',
        'Ingenieros de sistemas',
        'Ingenieros informáticos e Ingenieros de sistemas',
      ],
      correct_answer: 'Ingenieros informáticos e Ingenieros de sistemas',
    },
    {
      number: 157,
      question:
        '¿Cuál de las siguientes carreras están perdiendo trabajadores debido al crecimiento de la tecnología de la información?',
      answers: [
        'Operadores informáticos',
        'Contadores',
        'Ingenieros informáticos',
        'Gente de ventas',
      ],
      correct_answer: 'Operadores informáticos',
    },

    {
      number: 158,
      question: '¿Cuál de las siguientes es una ventaja de teletrabajo?',
      answers: [
        'Implica menos tiempo de viaje',
        'Permite a las empresas retener a empleados valiosos durante el embarazo',
        'Permite a hombres y mujeres quedarse en casa con niños pequeños',
        'Todas las anteriores',
      ],
      correct_answer: 'Todas las anteriores',
    },
    {
      number: 159,
      question: '¿Cuál de los siguientes programas es gratuito?',
      answers: ['Software de dominio público', 'Hojas de cálculo', 'Shareware', 'Todos'],
      correct_answer: 'Software de dominio público',
    },
    {
      number: 160,
      question: '¿Cuál es el primer paso en el ciclo de vida del desarrollo de software?',
      answers: [
        'Análisis',
        'Diseño',
        'Identificación del problema / oportunidad',
        'Desarrollo y documentación',
      ],
      correct_answer: 'Identificación del problema / oportunidad',
    },
    {
      number: 161,
      question: '¿Qué herramienta se usa para el diseño estructurado?',
      answers: [
        'Diagrama de flujo del programa',
        'Carta de estructura',
        'Diagrama de flujo de datos',
        'Módulo',
      ],
      correct_answer: 'Carta de estructura',
    },
    {
      number: 162,
      question:
        'Una instrucción paso a paso que se usa para resolver un problema se conoce como:',
      answers: ['Estructura secuencial', 'Una lista', 'Un plan', 'Un algoritmo'],
      correct_answer: 'Un algoritmo',
    },
    {
      number: 163,
      question:
        'En la fase de Análisis, ocurre el desarrollo del _____, que es una declaración clara de las metas y objetivos del proyecto',
      answers: [
        'Documentación',
        'Diagrama de flujo',
        'Especificación del programa',
        'Diseño',
      ],
      correct_answer: 'Especificación del programa',
    },
    {
      number: 164,
      question:
        'La programación real del código de software se realiza durante el paso _____ en el SDLC',
      answers: [
        'Mantenimiento y evaluación',
        'Diseño',
        'Análisis',
        'Desarrollo y documentación',
      ],
      correct_answer: 'Desarrollo y documentación',
    },
    {
      number: 165,
      question: '¿Quién diseña e implementa estructuras de bases de datos?',
      answers: [
        'Programadores',
        'Gerentes de proyecto',
        'Escritores técnicos',
        'Administradores de bases de datos',
      ],
      correct_answer: 'Administradores de bases de datos',
    },
    {
      number: 166,
      question:
        '_____ es el proceso de traducir una tarea en una serie de comandos que una computadora utilizará para realizar esa tarea',
      answers: [
        'Diseño del proyecto',
        'Instalación',
        'Análisis de sistemas',
        'Programación',
      ],
      correct_answer: 'Programación',
    },
    {
      number: 167,
      question: 'La depuración es:',
      answers: [
        'Creando código de programa',
        'Encontrar y corregir errores en el código del programa',
        'Identificar la tarea a computarizar',
        'Creando el algoritmo',
      ],
      correct_answer: 'Encontrar y corregir errores en el código del programa',
    },
    {
      number: 168,
      question: 'En la fase de diseño, ¿cuál es el área principal de preocupación?',
      answers: ['Arquitectura', 'Datos', 'Interfaz', 'Todas las mencionadas'],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 169,
      question:
        'La importancia del diseño del software se puede resumir en una sola palabra que es:',
      answers: ['Eficiencia', 'Exactitud', 'Calidad', 'Complejidad'],
      correct_answer: 'Calidad',
    },
    {
      number: 170,
      question:
        '¿Cuál de los siguientes no es el objetivo principal en el modelo de análisis?',
      answers: [
        'Describiendo las quejas de los clientes',
        'Establecer una base para la creación de un diseño de software',
        'Definir un conjunto de requisitos que se pueden validar una vez que el software está construido',
        'Ninguno de los mencionados',
      ],
      correct_answer: 'Ninguno de los mencionados',
    },
    {
      number: 171,
      question:
        'Una descripción de cada función presentada en el DFD está contenida en un:',
      answers: [
        'Flujo de datos',
        'Especificación del proceso',
        'Especificación de control',
        'Almacén de datos',
      ],
      correct_answer: 'Especificación del proceso',
    },
    {
      number: 172,
      question:
        '¿Qué diagrama indica el comportamiento del sistema como consecuencia de eventos externos?',
      answers: [
        'Diagrama de flujo de datos',
        'Diagrama de transición de estado',
        'Diagrama de especificación de control',
        'Diagrama de flujo de trabajo',
      ],
      correct_answer: 'Diagrama de transición de estado',
    },
    {
      number: 173,
      question: 'Un modelo de datos contiene:',
      answers: ['Objeto de datos', 'Atributos', 'Relaciones', 'Todas las mencionadas'],
      correct_answer: 'Todas las mencionadas',
    },

    {
      number: 174,
      question:
        '_____ define las propiedades de un objeto de datos y adopta una de las tres características diferentes',
      answers: [
        'Objeto de datos',
        'Atributos',
        'Relaciones',
        'Objeto de datos y atributos',
      ],
      correct_answer: 'Atributos',
    },
    {
      number: 175,
      question:
        'El _____ de una relación es 0 si no hay una necesidad explícita de que ocurra la relación o si la relación es opcional',
      answers: ['Modalidad', 'Cardinalidad', 'Entidad', 'Análisis estructurado'],
      correct_answer: 'Modalidad',
    },
    {
      number: 176,
      question:
        'Una _____ es una representación gráfica que representa el flujo de información y las transformaciones que se aplican a medida que los datos se mueven de entrada a salida',
      answers: [
        'Diagrama de flujo de datos',
        'Diagrama de transición de estado',
        'Especificación de control',
        'Diagrama de flujo de trabajo',
      ],
      correct_answer: 'Diagrama de transición de estado',
    },
    {
      number: 177,
      question:
        'Se produce una condición de datos cuando se pasan datos a un elemento de entrada seguido de un elemento de procesamiento y el resultado en la salida de control',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 178,
      question:
        'El permite al ingeniero de software desarrollar modelos del dominio de información y del dominio funcional al mismo tiempo:',
      answers: [
        'Diagrama de flujo de datos',
        'Diagrama de transición de estado',
        'Especificación de control',
        'Diagrama de actividad',
      ],
      correct_answer: 'Diagrama de flujo de datos',
    },
    {
      number: 179,
      question:
        'El _____ contiene un diagrama de transición de estado que es una especificación secuencial de comportamiento',
      answers: [
        'Diagrama de flujo de datos',
        'Diagrama de transición de estado',
        'Especificación de control',
        'Diagrama de flujo de trabajo',
      ],
      correct_answer: 'Especificación de control',
    },
    {
      number: 180,
      question: '¿Cuál de los siguientes no es un modelo de proceso evolutivo?',
      answers: [
        'Modelo Espiral WINWIN',
        'Modelo incremental',
        'Modelo de desarrollo concurrente',
        'Todas las mencionadas',
      ],
      correct_answer: 'Modelo incremental',
    },
    {
      number: 181,
      question:
        'El modelo incremental es el resultado de una combinación de elementos, ¿de qué dos modelos?',
      answers: [
        'Construir y arreglar modelo y modelo de cascada',
        'Modelo lineal y modelo RAD',
        'Modelo lineal y modelo de prototipos',
        'Modelo de cascada y modelo de RAD',
      ],
      correct_answer: 'Modelo lineal y modelo de prototipos',
    },
    {
      number: 182,
      question: '¿Cuál es la principal ventaja de usar el modelo incremental?',
      answers: [
        'El cliente puede responder a cada incremento',
        'Más fácil de probar y depurar',
        'Se utiliza cuando es necesario llevar un producto al mercado antes de tiempo',
        'Más fácil de probar y depurar. Se utiliza cuando existe la necesidad de llevar un producto al mercado antes de tiempo',
      ],
      correct_answer:
        'Más fácil de probar y depurar Se utiliza cuando existe la necesidad de llevar un producto al mercado antes de tiempo',
    },
    {
      number: 183,
      question: 'El modelo espiral fue propuesto originalmente por:',
      answers: ['IBM', 'Barry Boehm', 'Pressman', 'Royce'],
      correct_answer: 'Barry Boehm',
    },
    {
      number: 184,
      question: 'El modelo en espiral tiene dos dimensiones: _____ y _____',
      answers: [
        'Diagonal, angular',
        'Radial, perpendicular',
        'Radial, angular',
        'Diagonal, perpendicular',
      ],
      correct_answer: 'Radial, angular',
    },
    {
      number: 185,
      question: '¿En qué se diferencia WINWIN Spiral Model de Spiral Model?',
      answers: [
        'Define las tareas requeridas para definir recursos, líneas de tiempo y otra información relacionada con el proyecto',
        'Define un conjunto de actividades de negociación al comienzo de cada paso alrededor de la espiral',
        'Define tareas requeridas para evaluar tanto riesgos técnicos como de gestión',
        'Define las tareas necesarias para construir, probar, instalar y proporcionar soporte al usuario',
      ],
      correct_answer:
        'Define un conjunto de actividades de negociación al comienzo de cada paso alrededor de la espiral',
    },
    {
      number: 186,
      question: 'Identificar la desventaja del modelo espiral',
      answers: [
        'No funciona bien para proyectos más pequeños',
        'Gran cantidad de análisis de riesgo',
        'Fuerte aprobación y control de documentación',
        'La funcionalidad adicional se puede agregar en una fecha posterior',
      ],
      correct_answer: 'No funciona bien para proyectos más pequeños',
    },
    {
      number: 187,
      question: 'Spiral Model tiene la participación del usuario en todas sus fases',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 188,
      question: '¿En qué se diferencia el modelo incremental del modelo espiral?',
      answers: [
        'El progreso se puede medir para el modelo incremental',
        'Los requisitos cambiantes se pueden acomodar en el modelo incremental',
        'Los usuarios pueden ver el sistema temprano en el modelo incremental',
        'Todas las mencionadas',
      ],
      correct_answer: 'El progreso se puede medir para el modelo incremental',
    },
    {
      number: 189,
      question:
        'Si tuviera que crear aplicaciones cliente / servidor, ¿qué modelo elegiría?',
      answers: [
        'Modelo Espiral WINWIN',
        'Modelo en espiral',
        'Modelo concurrente',
        'Modelo incremental',
      ],
      correct_answer: 'Modelo concurrente',
    },
    {
      number: 190,
      question:
        'El Lenguaje de modelado unificado (UML) se ha convertido en un estándar efectivo para el modelado de software ¿Cuántas notaciones diferentes tiene?',
      answers: ['Tres', 'Cuatro', 'Seis', 'Nueve'],
      correct_answer: 'Nueve',
    },
    {
      number: 191,
      question:
        '¿Qué modelo en el modelado del sistema representa el comportamiento dinámico del sistema?',
      answers: [
        'Modelo de contexto',
        'Modelo de comportamiento',
        'Modelo de datos',
        'Modelo de objeto',
      ],
      correct_answer: 'Modelo de comportamiento',
    },
    {
      number: 192,
      question:
        '¿Qué modelo en el modelado de sistemas representa la naturaleza estática del sistema?',
      answers: [
        'Modelo de comportamiento',
        'Modelo de contexto',
        'Modelo de datos',
        'Modelo estructural',
      ],
      correct_answer: 'Modelo estructural',
    },
    {
      number: 193,
      question:
        '¿Qué perspectiva en el modelado del sistema muestra el sistema o la arquitectura de datos?',
      answers: [
        'Perspectiva estructural',
        'Perspectiva de comportamiento',
        'Perspectiva externa',
        'Todas las mencionadas',
      ],
      correct_answer: 'Perspectiva estructural',
    },
    {
      number: 194,
      question:
        'Los diagramas de actividad se utilizan para modelar el procesamiento de datos',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 195,
      question:
        'La ingeniería basada en modelos es solo un concepto teórico. No se puede convertir en un código de trabajo / ejecutable',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 196,
      question: 'La cohesión es una indicación cualitativa del grado en que un módulo:',
      answers: [
        'Se puede escribir de forma más compacta',
        'Se enfoca en una sola cosa',
        'Es capaz de completar su función de manera oportuna',
        'Está conectado a otros módulos y al mundo exterior',
      ],
      correct_answer: 'Se enfoca en una sola cosa',
    },
    {
      number: 197,
      question:
        'El acoplamiento es una indicación cualitativa del grado en que un módulo:',
      answers: [
        'Se puede escribir de forma más compacta',
        'Se enfoca en una sola cosa',
        'Es capaz de completar su función de manera oportuna',
        'Está conectado a otros módulos y al mundo exterior',
      ],
      correct_answer: 'Está conectado a otros módulos y al mundo exterior',
    },
    {
      number: 198,
      question: 'SCM significa:',
      answers: [
        'Gestión de control de software',
        'Gestión de la configuración del software',
        'Gestión del concepto de software',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Gestión de la configuración del software',
    },
    {
      number: 199,
      question: 'Cuando el código se pone a disposición de otros, va en un / a :',
      answers: [
        'Disco duro',
        'Biblioteca de acceso controlado',
        'Servidores',
        'Control de acceso',
      ],
      correct_answer: 'Biblioteca de acceso controlado',
    },
    {
      number: 200,
      question:
        '¿Cuál de las siguientes no es una fase principal en el Proceso de administración de la configuración (CM)?',
      answers: [
        'Planificación de CM',
        'Ejecutando el proceso CM',
        'Auditorias de MC',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Ninguna de las mencionadas',
    },
    {
      number: 201,
      question:
        'CM se trata de administrar los diferentes artículos en el producto y los cambios en ellos',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 202,
      question:
        '¿Qué permite que diferentes proyectos utilicen los mismos archivos de origen al mismo tiempo?',
      answers: [
        'Control de versiones',
        'Control de acceso',
        'Proceso CM',
        'Control de versiones y control de acceso',
      ],
      correct_answer: 'Control de versiones',
    },
    {
      number: 203,
      question: '¿Cuál de los siguientes no es un proceso de gestión de cambios?',
      answers: [
        'Registrar los cambios',
        'Estimar impacto en esfuerzo y cronograma',
        'Revisar el impacto con los grupos de interés',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Ninguna de las mencionadas',
    },
    {
      number: 204,
      question:
        'La administración de la configuración (CM) es necesaria para entregar el producto al cliente',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 205,
      question:
        '¿Cuál es uno o más elementos de configuración de software que se han revisado y acordado formalmente y que sirven como base para un mayor desarrollo?',
      answers: ['Línea de base', 'Cambios acumulativos', 'CM', 'Control de cambio'],
      correct_answer: 'Línea de base',
    },
    {
      number: 206,
      question: '¿Cómo se verifican las líneas de base?',
      answers: [
        'Por opiniones',
        'Por inspecciones',
        'A prueba de código',
        'Todas las mencionadas',
      ],
      correct_answer: 'A prueba de código',
    },
    {
      number: 207,
      question: '¿Cuál de los siguientes es un ejemplo de elementos de configuración?',
      answers: [
        'Procedimientos de SCM',
        'Código fuente',
        'Descripciones de diseño de software',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 208,
      question: 'SCM controla solo los productos del proceso de desarrollo',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 209,
      question: 'CCB significa',
      answers: [
        'Cambio de tablero de control',
        'Cambio de línea base de control',
        'Cambios acumulados en la línea de base',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Cambio de tablero de control',
    },
    {
      number: 210,
      question:
        '¿Qué información se requiere para procesar un cambio a una línea de base?',
      answers: [
        'Razones para realizar los cambios',
        'Una descripción de los cambios propuestos',
        'Lista de otros elementos afectados por los cambios',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 211,
      question: 'El tamaño y la complejidad son parte de:',
      answers: [
        'Métricas del producto',
        'Métricas del proceso',
        'Métricas del proyecto',
        'Todas las mencionadas',
      ],
      correct_answer: 'Métricas del proyecto',
    },
    {
      number: 212,
      question: 'El costo y el horario son parte de:',
      answers: [
        'Métricas del producto',
        'Métricas del proceso',
        'Métricas del proyecto',
        'Todas las mencionadas',
      ],
      correct_answer: 'Métricas del proyecto',
    },
    {
      number: 213,
      question:
        'El número de errores encontrados por persona por hora gastada es un ejemplo de:',
      answers: ['Medida', 'Medir', 'Métrica', 'Todas las mencionadas'],
      correct_answer: 'Medida',
    },
    {
      number: 214,
      question:
        '¿Cuál de los siguientes no está clasificado en la Operación del producto de los factores de calidad del software de McCall?',
      answers: ['Flexibilidad', 'Confiabilidad', 'Usabilidad', 'Integridad'],
      correct_answer: 'Integridad',
    },
    {
      number: 215,
      question:
        'La relación arco-nodo se da como r = a / n ¿Qué representa (a) en la relación?',
      answers: [
        'Número máximo de nodos en cualquier nivel',
        'El camino más largo desde la raíz hasta una hoja',
        'Número de módulos',
        'Líneas de control',
      ],
      correct_answer: 'Número de módulos',
    },
    {
      number: 216,
      question:
        '¿Cuál de las siguientes no está categorizada bajo Métricas de diseño a nivel de componente?',
      answers: [
        'Métricas de complejidad',
        'Métricas de Cohesión',
        'Morfología Métrica',
        'Métricas de acoplamiento',
      ],
      correct_answer: 'Métricas de Cohesión',
    },
    {
      number: 217,
      question: 'El porcentaje de módulos que fueron inspeccionados es parte de:',
      answers: [
        'Métricas del producto',
        'Métricas del proceso',
        'Métricas del proyecto',
        'Todas las mencionadas',
      ],
      correct_answer: 'Métricas del proceso',
    },
    {
      number: 218,
      question: 'Métrico es el acto de obtener una medida',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 219,
      question: 'MTTC cae en la categoría de:',
      answers: ['Corrección', 'Integridad', 'Mantenibilidad', 'Todas las mencionadas'],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 220,
      question:
        'Identifique la opción correcta con referencia a Métricas de calidad del software',
      answers: [
        'Integrity = [Sigma(1 - threat)] * (1 - security)',
        'Integrity = [1 - Sigma(threat)] * (1 - security)',
        'Integrity = [1 - threat * Sigma(1 - security)]',
        'Integrity = Sigma[1 - threat * (1 - security)]',
      ],
      correct_answer: 'Integrity = [1 - threat * Sigma(1 - security)]',
    },
    {
      number: 221,
      question: 'Los dispositivos físicos de una computadora:',
      answers: ['Software', 'Paquete', 'Hardware', 'Software del sistema'],
      correct_answer: 'Hardware',
    },
    {
      number: 222,
      question:
        'El paquete de software es un grupo de programas que resuelven múltiples problemas',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 223,
      question:
        '_____ se refiere a renovar o cambiar componentes, como aumentar la memoria principal o las capacidades del disco duro, o agregar altavoces, módems, etc',
      answers: ['Grados', 'Prosodia', 'Síntesis', 'Actualizaciones'],
      correct_answer: 'Actualizaciones',
    },
    {
      number: 224,
      question:
        '¿Cuál de los siguientes está diseñado para controlar las operaciones de una computadora?',
      answers: [
        'Software de aplicación',
        'Software del sistema',
        'Software de utilidad',
        'Usuario',
      ],
      correct_answer: 'Software del sistema',
    },
    {
      number: 225,
      question: '¿Cuál de los siguientes no es un ejemplo de software del sistema?',
      answers: [
        'Traductor de idiomas',
        'Software de utilidad',
        'Software de comunicación',
        'Procesadores de textos',
      ],
      correct_answer: 'Procesadores de textos',
    },
    {
      number: 226,
      question:
        'Una persona que diseña los programas en un paquete de software se llama:',
      answers: [
        'Usuario',
        'Gerente de Software',
        'Desarrollador del sistema',
        'Programador del sistema',
      ],
      correct_answer: 'Desarrollador del sistema',
    },
    {
      number: 227,
      question:
        '_____ está diseñado para resolver un problema específico o para hacer una tarea específica',
      answers: [
        'Software de aplicación',
        'Software del sistema',
        'Software de utilidad',
        'Usuario',
      ],
      correct_answer: 'Software del sistema',
    },
    {
      number: 228,
      question: '¿El ensamblador se utiliza como traductor para?',
      answers: ['Lenguaje de bajo nivel', 'Lenguaje de alto nivel', 'COBOL', 'C'],
      correct_answer: 'Lenguaje de bajo nivel',
    },
    {
      number: 229,
      question: '¿Cómo llamas a un programa en ejecución?',
      answers: ['Comando', 'Proceso', 'Tarea', 'Instrucción'],
      correct_answer: 'Proceso',
    },
    {
      number: 230,
      question: '¿Cuál de los siguientes no es un estado de proceso?',
      answers: ['Terminado', 'Corriendo', 'Bloqueado', 'Ejecución'],
      correct_answer: 'Ejecución',
    },
    {
      number: 231,
      question: 'La gestión de calidad en ingeniería de software también se conoce como:',
      answers: ['SQA', 'SQM', 'SQI', 'SQA y SQM'],
      correct_answer: 'SQA',
    },
    {
      number: 232,
      question:
        'La calidad también puede considerarse en términos de satisfacción del usuario, que incluye:',
      answers: [
        'Un producto conforme',
        'Salida de buena calidad',
        'Entrega dentro del presupuesto y horario',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 233,
      question: '¿Las inspecciones y pruebas son qué tipos de costos de calidad?',
      answers: ['Prevención', 'Fallo interno', 'Fallo externo', 'Evaluación'],
      correct_answer: 'Evaluación',
    },
    {
      number: 234,
      question:
        'Según el principio de Pareto, el x% de los defectos se puede rastrear al y% de todas las causas ¿Cuáles son los valores de x y y?',
      answers: ['60, 40', '70, 30', '80, 20', 'No existe tal principio'],
      correct_answer: '80, 20',
    },
    {
      number: 235,
      question: '¿Qué es Six Sigma?',
      answers: [
        'Es la estrategia más utilizada para el aseguramiento de la calidad estadística',
        'El "Six Sigma" se refiere a seis desviaciones estándar',
        'Es la estrategia más utilizada para el aseguramiento de la calidad estadística Y el "Six Sigma" se refiere a seis desviaciones estándar',
        'Una guía de Revisión Técnica Formal (FTR) para la inspección de calidad',
      ],
      correct_answer:
        'Es la estrategia más utilizada para el aseguramiento de la calidad estadística Y el "Six Sigma" se refiere a seis desviaciones estándar',
    },
    {
      number: 236,
      question: '¿Cuál de los siguientes no es un paso central de Six Sigma?',
      answers: ['Definir', 'Control', 'Medida', 'Analizar'],
      correct_answer: 'Control',
    },
    {
      number: 237,
      question: 'La no conformidad con los requisitos del software se conoce como:',
      answers: [
        'Disponibilidad de software',
        'Fiabilidad del software',
        'Falla del software',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Falla del software',
    },
    {
      number: 238,
      question:
        'La seguridad del software es equivalente a la confiabilidad del software',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 239,
      question:
        'La mala interpretación de la comunicación con el cliente es una muestra de posibles defectos de causa',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 240,
      question:
        '¿En qué tipo de costo de calidad se incurre cuando se detecta un error en un producto antes del envío?',
      answers: ['Prevención', 'Fallo interno', 'Fallo externo', 'Evaluación'],
      correct_answer: 'Fallo interno',
    },
    {
      number: 241,
      question:
        'El grado en que se siguen las especificaciones de diseño durante la fabricación se conoce como:',
      answers: [
        'Calidad de diseño',
        'Calidad de conformidad',
        'Calidad de las pruebas',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Calidad de conformidad',
    },
    {
      number: 242,
      question:
        'La calidad del diseño abarca los requisitos y las especificaciones del sistema',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 243,
      question:
        'De acuerdo con la norma ISO 9001, la inspección y las pruebas son responsabilidad de la administración',
      answers: [
        'Control de proceso',
        'Control de documentos',
        'Control de productos no conformes',
        'Mantenimiento',
      ],
      correct_answer: 'Control de proceso',
    },
    {
      number: 244,
      question:
        '¿Cuál de los siguientes no es un diagrama estudiado en Análisis de requisitos?',
      answers: [
        'Casos de uso',
        'Diagrama de relación de entidad',
        'Diagrama de transición del estado',
        'Diagrama de actividad',
      ],
      correct_answer: 'Diagrama de actividad',
    },
    {
      number: 245,
      question:
        '¿Cuántos estudios de factibilidad se realizan en el Análisis de Requerimientos?',
      answers: ['Dos', 'Tres', 'Cuatro', 'Ninguna de las mencionadas'],
      correct_answer: 'Tres',
    },
    {
      number: 246,
      question: '¿Cuántas fases hay en el Análisis de Requerimientos?',
      answers: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
      correct_answer: 'Cinco',
    },
    {
      number: 247,
      question: 'La trazabilidad no se considera en el análisis de requisitos',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 248,
      question:
        'El análisis de requisitos es crítico para el éxito de un proyecto de desarrollo',
      answers: [
        'Verdad',
        'Falso',
        'Depende del tamaño del proyecto',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Verdad',
    },
    {
      number: 249,
      question: '_____ y _____ son las dos cuestiones del Análisis de requisitos',
      answers: [
        'Performance, Diseño',
        'Grupo de Interés, Desarrollador',
        'Funcional, no funcional',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Grupo de Interés, Desarrollador',
    },
    {
      number: 250,
      question:
        'Los requisitos que resultan del análisis de requisitos se expresan típicamente desde una de las tres perspectivas o vistas ¿Qué es esa perspectiva o vista?',
      answers: ['Desarrollador', 'Usuario', 'No funcional', 'Físico'],
      correct_answer: 'Físico',
    },
    {
      number: 251,
      question: 'El análisis de requerimientos es un proceso iterativo',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 252,
      question:
        'Coad y Yourdon sugirieron _____ características de selección que deberían usarse como analista y considera cada objeto potencial para su inclusión en el modelo de análisis de requisitos',
      answers: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
      correct_answer: 'Seis',
    },
    {
      number: 253,
      question: 'Los requisitos deben especificar "qué" pero no "cómo"',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 254,
      question:
        '¿Qué dos requisitos tienen prioridad durante la gestión de requisitos de un producto?',
      answers: [
        'Usuario y desarrollador',
        'Funcional y no funcional',
        'Duradero y volátil',
        'Todas las mencionadas',
      ],
      correct_answer: 'Duradero y volátil',
    },
    {
      number: 255,
      question:
        'Teniendo en cuenta el ejemplo de emisión / devolución de un libro, catalogación, etc en la gestión de una biblioteca ¿Qué tipo de requisito de gestión se describe aquí?',
      answers: ['Duradero', 'Volátil', 'Duradero y volátil', 'Todas las mencionadas'],
      correct_answer: 'Duradero',
    },
    {
      number: 256,
      question: '¿Por qué es importante la gestión de requisitos? Se debe a los cambios',
      answers: [
        'Al medio ambiente',
        'En tecnología',
        'En las expectativas del cliente',
        'En todo lo mencionado',
      ],
      correct_answer: 'En todo lo mencionado',
    },
    {
      number: 257,
      question:
        'La gestión de requisitos es un requisito previo para el desarrollo orientado a la calidad',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 258,
      question:
        'La trazabilidad de los requisitos es una de las partes más importantes en la gestión de requisitos. También puede ser referido como el corazón de la gestión de requisitos',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 259,
      question:
        'La gestión de requisitos tiene un alto costo de inicio inicial pero no necesita financiamiento continuo a lo largo de un proyecto',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 260,
      question:
        '¿Cuál de las siguientes no es una herramienta de Workbench de Gestión de Requisitos?',
      answers: ['RTM', 'Puertas', 'Suite Racional', 'RDD 100'],
      correct_answer: 'Suite Racional',
    },
    {
      number: 261,
      question: '¿Cuál de las siguientes es una actividad de gestión de requisitos?',
      answers: [
        'Investigación',
        'Diseño',
        'Construcción y ensayo',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 262,
      question:
        "Qué funcionalidad de la Herramienta de administración de requisitos (RMT) se describe en la declaración: 'la herramienta debe poder detectar automáticamente las relaciones entre los artefactos. Por ejemplo, técnicas de recuperación de información, monitoreo del historial de cambios, nombres de esquemas o transformaciones de modelos'",
      answers: [
        'Detección automática de enlaces',
        'Soporte a la documentación',
        'Representación gráfica',
        'Creación y cambio automático de enlaces',
      ],
      correct_answer: 'Detección automática de enlaces',
    },
    {
      number: 263,
      question:
        "Según un informe estadístico: 'más del 30% de todos los proyectos de software se cancelan antes de completarse y más del 70% del resto no entrega las funciones esperadas' ¿Cuál debe ser la razón de tal situación?",
      answers: [
        'Mala gestión del cambio',
        'Mala gestión de los requisitos',
        'Pobre control de calidad',
        'Todas las mencionadas',
      ],
      correct_answer: 'Mala gestión de los requisitos',
    },
    {
      number: 264,
      question: "¿La forma completa de 'OS' es?",
      answers: [
        'Orden de importancia',
        'Sistema operativo',
        'Software abierto',
        'Sensor óptico',
      ],
      correct_answer: 'Sistema operativo',
    },
    {
      number: 265,
      question: 'La cinta se utiliza en:',
      answers: [
        'Impresora laser',
        'Trazador (Plotter)',
        'Impresora de chorro de tinta',
        'Impresora matricial de puntos',
      ],
      correct_answer: 'Impresora matricial de puntos',
    },
    {
      number: 266,
      question: 'La libreta de direcciones contiene:',
      answers: [
        'Dirección de correo electrónico',
        'Números de teléfono',
        'Nombres de personas',
        'Todas las anteriores',
      ],
      correct_answer: 'Todas las anteriores',
    },
    {
      number: 267,
      question: "¿Formulario completo de 'DOCOMO'?",
      answers: [
        'Conectarse a través del móvil',
        'Comunicaciones a través de la red móvil',
        'Dongle Comunicación Sobre Móvil',
        'Hacer comunicación o más',
      ],
      correct_answer: 'Comunicaciones a través de la red móvil',
    },
    {
      number: 268,
      question: 'Joystick se utiliza para:',
      answers: [
        'Mueve el cursor en la pantalla',
        'Juegos de computadora',
        'Mueve el cursor en la pantalla y Juegos de computadora',
        'Ninguno de esos',
      ],
      correct_answer: 'Mueve el cursor en la pantalla y Juegos de computadora',
    },
    {
      number: 269,
      question: '¿Un DNS traduce un nombre de dominio en qué?',
      answers: ['Binary', 'Hex', 'IP', 'URL'],
      correct_answer: 'IP',
    },
    {
      number: 270,
      question: '¿Cuándo se envió el primer correo electrónico?',
      answers: ['1963', '1969', '1971', '1974'],
      correct_answer: '1971',
    },
    {
      number: 271,
      question: '¿Qué tipo de memoria es volátil?',
      answers: ['Cache', 'RAM', 'ROM', 'Disco duro'],
      correct_answer: 'RAM',
    },
    {
      number: 272,
      question: '¿Cuál de las siguientes no es una característica del iPhone 4?',
      answers: ['4G', 'Cámara frontal', 'Grabación HD', 'Multitarea'],
      correct_answer: '4G',
    },
    {
      number: 273,
      question: 'La memoria principal también se conoce cómo:',
      answers: [
        'Memoria auxiliar',
        'Memoria primaria',
        'Memoria secundaria',
        'Ninguna de las anteriores',
      ],
      correct_answer: 'Memoria primaria',
    },
    {
      number: 274,
      question: 'Una presentación significa:',
      answers: [
        'Exhibición de productos',
        'Explica la utilidad de los productos',
        'Un regalo',
        'Exhibición de la comunicación o habilidades',
      ],
      correct_answer: 'Explica la utilidad de los productos',
    },
    {
      number: 275,
      question: 'El término CRM significa:',
      answers: [
        'Gestión de la relación con el cliente',
        'Gerente de retención de Clientes',
        'Reunión relativa del cliente',
        'Mercado de raíces de canal',
      ],
      correct_answer: 'Gestión de la relación con el cliente',
    },
    {
      number: 276,
      question: '¿Por qué se usaría un switch en una red en lugar de un HUB?',
      answers: [
        'Para reducir el tráfico de red',
        'Para prevenir la propagación de todos los virus',
        'Para conectar una computadora directamente a internet',
        'Para gestionar la seguridad de las contraseñas en la estación de trabajo',
      ],
      correct_answer: 'Para reducir el tráfico de red',
    },
    {
      number: 277,
      question:
        '¿Qué se debe hacer para convertir con éxito el formato de una imagen de BMP a JPEG?',
      answers: [
        'Comprimir el archivo',
        'Renombrar la imagen',
        'Usar el guardar como comando',
        'Cambiar la extensión del archivo de imagen',
      ],
      correct_answer: 'Usar el guardar como comando',
    },
    {
      number: 278,
      question:
        'Una empresa actualiza regularmente una guía de referencia para el usuario, algunos empleados están confundidos acerca de cuál de los documentos impresos es el más actualizado ¿Qué característica debe incluirse en la guía de referencia para eliminar esta confusión?',
      answers: [
        'Comprimir el archivo',
        'Renombrar la imagen',
        'Usar el guardar como comando',
        'Cambiar la extensión del archivo de imagen',
      ],
      correct_answer: 'Renombrar la imagen',
    },
    {
      number: 279,
      question:
        'El término asociado con el procesamiento de la velocidad de comparación es:',
      answers: ['FFTS', 'MPG', 'MIPS', 'CPS'],
      correct_answer: 'MIPS',
    },
    {
      number: 280,
      question:
        'Los datos de una hoja de cálculo deben importarse en un paquete de base de datos ¿Qué formato de archivo sería el más apropiado al guardar el archivo de hoja de cálculo?',
      answers: ['CSV', 'HTML', 'PDF', 'RTF'],
      correct_answer: 'CSV',
    },
    {
      number: 281,
      question: 'Para reproducir sonido, el reproductor de audio CD utiliza un:',
      answers: [
        'Cristal de cuarzo',
        'Aguja de titanio',
        'Rayo laser',
        'Barium Titanium Ceramic',
      ],
      correct_answer: 'Rayo laser',
    },
    {
      number: 282,
      question:
        '¿Cuál de los siguientes indicaría que la batería de la placa base ha fallado?',
      answers: [
        'Las contraseñas del sistema operativo se pierden',
        'Los archivos en el disco duro se pierden y se corrompen',
        'La configuración del hardware, incluida la memoria virtual, vuelve a los valores predeterminados',
        'La configuración del hardware, incluida la fecha y hora actuales, vuelve a los valores predeterminados',
      ],
      correct_answer:
        'La configuración del hardware, incluida la fecha y hora actuales, vuelve a los valores predeterminados',
    },
    {
      number: 283,
      question:
        '¿Cuál de los siguientes es un componente esencial del ciclo de comunicación?',
      answers: [
        'Un mensaje',
        'Un intérprete',
        'Una cuenta de correo electrónico',
        'Una conexión a internet',
      ],
      correct_answer: 'Un mensaje',
    },
    {
      number: 284,
      question: '¿Qué país creó el software de red más utilizado en la década de 1980?',
      answers: ['Sun', 'IBM', 'Novell', 'Microsoft'],
      correct_answer: 'Novell',
    },
    {
      number: 285,
      question:
        '¿En qué año se eligió la @ para su uso en la dirección de correo electrónico?',
      answers: ['1972', '1976', '1980', '1984'],
      correct_answer: '1972',
    },
    {
      number: 286,
      question: '¿Qué compañía de computadoras estadounidense se llama Big Blue?',
      answers: ['IBM', 'Compaq corp', 'Microsoft', 'Tandy svenson'],
      correct_answer: 'IBM',
    },
    {
      number: 287,
      question:
        '¿A quién se le atribuye la idea de usar tarjetas perforadas para controlar patrones en una máquina de ondulación?',
      answers: ['Pascal', 'Hollerith', 'Babbage', 'Jacquard'],
      correct_answer: 'Jacquard',
    },
    {
      number: 288,
      question: '¿Qué significa SSL?',
      answers: [
        'Capa de socket del sistema (System socket layer)',
        'Acceso seguro al sistema (Secure system login)',
        'Capa de conexión segura (Secure socket layer)',
        'Acceso seguro al sistema (Secure system login)',
      ],
      correct_answer: 'Capa de conexión segura (Secure socket layer)',
    },
    {
      number: 289,
      question: '¿Qué es MAC?',
      answers: [
        'Una computadora hecha por Apple',
        'Corrupción de la dirección de memoria',
        'Computadora Apple Mediocre',
        'El control de acceso a medios',
      ],
      correct_answer: 'El control de acceso a medios',
    },
    {
      number: 290,
      question: '¿Qué significa PPTP?',
      answers: [
        'Protocolo de transmisión punto a punto',
        'Protocolo de transferencia punto a punto',
        'Protocolo de túnel de punto a punto',
        'Protocolo de tráfico punto a punto',
      ],
      correct_answer: 'Protocolo de túnel de punto a punto',
    },
    {
      number: 291,
      question:
        'El IBM PC-XT fue el primero en incluir un disco duro ¿Cuál fue la capacidad de este disco?',
      answers: ['750 KB', '10 KB', '20 KB', '144 KB'],
      correct_answer: '10 KB',
    },
    {
      number: 292,
      question:
        "En 1983, ¿qué persona fue la primera en ofrecer una definición del término 'virus informático'?",
      answers: ['Smith', 'Cohen', 'Norton', 'Mcafee'],
      correct_answer: 'Cohen',
    },
    {
      number: 293,
      question: 'La abreviatura de la computadora DTP usualmente significa?',
      answers: [
        'DeskTop Publishing',
        'Tipo de datos de programación',
        'Protocolo de transmisión digital',
        'Ninguna de las anteriores',
      ],
      correct_answer: 'DeskTop Publishing',
    },
    {
      number: 294,
      question:
        'La introducción de la especificación de requisitos de software establece:',
      answers: ['Objetivos', 'Diseño', 'Metas y objetivos del software'],
      correct_answer: 'Objetivos',
    },
    {
      number: 295,
      question:
        'El paso de generación de código realiza la tarea. Seleccione la opción correcta:',
      answers: [
        'Especificación traducida a una forma legible por máquina',
        'Diseño traducido en una forma legible por máquina',
        'Requisitos traducidos a un formato legible por máquina',
        'Datos de usuario traducidos a un formato legible por máquina',
      ],
      correct_answer: 'Diseño traducido en una forma legible por máquina',
    },
    {
      number: 296,
      question:
        "La/el _____ es la capacidad de alentar a las personas técnicas 'empujar o tirar' para que produzcan lo mejor posible",
      answers: [
        'Acción de Evaluar',
        'La motivación',
        'Ninguno de los dados',
        'Monitoreo',
      ],
      correct_answer: 'La motivación',
    },
    {
      number: 297,
      question:
        '_____ contiene un análisis de lo que salió mal, lo que salió bien y lo que podría haber hecho mejor en el proyecto de software',
      answers: [
        'Preparar informe de cierre',
        'Identificar el aprendizaje',
        'Identificar componentes de software reutilizables',
        'Ninguno',
      ],
      correct_answer: 'Preparar informe de cierre',
    },
    {
      number: 298,
      question: '¿En qué se basa la arquitectura de un software?',
      answers: [
        'Diseño',
        'Requisitos',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Requisitos',
    },
    {
      number: 299,
      question:
        '¿Qué pasaría si a una organización diferente se le diera el mismo conjunto de requisitos?',
      answers: [
        'Producirá la misma arquitectura',
        'Producirá diferente arquitectura',
        'Puede o no producir la misma arquitectura',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Puede o no producir la misma arquitectura',
    },
    {
      number: 300,
      question: '¿Qué factores produce una arquitectura de software?',
      answers: ['Técnico', 'Negocios', 'Social', 'Todas las mencionadas'],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 301,
      question: '¿Qué significa arquitectura de software?',
      answers: [
        'Es la estructura o estructura de los sistemas',
        'Se compone de componentes de software',
        'Relación entre componentes',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 302,
      question:
        'Los arquitectos están influenciados por cuál de los siguientes factores:',
      answers: [
        'Clientes y usuarios finales',
        'Organización en desarrollo',
        'Antecedentes y experiencia de los arquitectos',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 303,
      question:
        '¿Cómo influyen las organizaciones en desarrollo por parte de los arquitectos?',
      answers: [
        'Negocio inmediato',
        'Negocio a largo plazo',
        'Estructura organizativa',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 304,
      question:
        '¿Cuáles de los siguientes son verdaderos con respecto al ciclo de negocios de la arquitectura?',
      answers: [
        'La arquitectura puede afectar los objetivos empresariales de las organizaciones en desarrollo',
        'La arquitectura afecta la estructura de las organizaciones en desarrollo',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer:
        'La arquitectura afecta la estructura de las organizaciones en desarrollo',
    },
    {
      number: 305,
      question: '¿El proceso basado en la arquitectura incluye cuál de los siguientes?',
      answers: [
        'Creación del caso de negocio para el sistema',
        'Entender los requerimientos',
        'Analizar o valorar la arquitectura',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 306,
      question: '¿En cuál de los siguientes consiste un caso de negocios?',
      answers: [
        '¿Cuánto debería costar un producto?',
        '¿Qué ayuda proporciona el lenguaje de descripción de Arquitectura?',
        '¿Qué es el análisis de dominio?',
        'Nada de lo mencionado',
      ],
      correct_answer: '¿Cuánto debería costar un producto?',
    },
    {
      number: 307,
      question: '¿Qué reclamo sigue analizando y evaluando la arquitectura?',
      answers: [
        'Las ADL proporcionan capacidades analíticas valiosas, pero tienden a concentrarse en las propiedades de tiempo de ejecución del sistema',
        'El mantenimiento es el aspecto principal',
        'La mantenibilidad tiene muchas facetas',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 308,
      question:
        '¿Cuál de los siguientes pasos se siguen para la descripción general de SAAM?',
      answers: [
        'Desarrollar escenarios',
        'Describa la arquitectura del candidato',
        'Clasificar escenarios',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 309,
      question: '¿Cuál de los siguientes se relaciona con los escenarios?',
      answers: [
        'Los escenarios ilustran los tipos de actividades que el sistema debe soportar',
        'Los escenarios ilustran los tipos de cambios que se anticipan se realizarán en el sistema',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 310,
      question:
        '¿Cuál es el procedimiento seguido para la descripción de la arquitectura candidata?',
      answers: [
        'La descripción debe hacerse en notación arquitectónica que sea bien entendida por las partes involucradas en el análisis',
        'La descripción se puede hacer en cualquier notación que sea bien entendida por las partes involucradas',
        'La descripción puede o no estar descrita en notaciones que se utilizan para el análisis',
        'Ninguna de las mencionadas',
      ],
      correct_answer:
        'La descripción debe hacerse en notación arquitectónica que sea bien entendida por las partes involucradas en el análisis',
    },
    {
      number: 311,
      question: '¿Cuáles son las clasificaciones de los escenarios?',
      answers: [
        'Escenario directo',
        'Escenario indirecto',
        'Escenario hacia adelante',
        'Escenario directo e indirecto',
      ],
      correct_answer: 'Escenario directo e indirecto',
    },
    {
      number: 312,
      question: '¿Cuál de los siguientes es verdadero?',
      answers: [
        'Un escenario directo no puede ser evaluado indirectamente por el sistema',
        'Otro escenario, excepto el escenario directo, requiere modificación antes de ejecutarse',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 313,
      question: '¿Qué se hace al realizar la evaluación del escenario?',
      answers: [
        'Para el escenario indirecto, deben enumerarse los cambios en la arquitectura que son necesarios para que sea compatible con el escenario',
        'El costo de realizar el cambio debe ser estimado',
        'Debe haber una tabla de resumen que enumere todos los escenarios (directos e indirectos)',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 314,
      question: '¿Cuál de los siguientes es verdadero?',
      answers: [
        'Todo escenario directo requerirá cambiar un solo componente',
        'Todo escenario indirecto no requerirá cambiar un solo componente',
        'Todo escenario indirecto requerirá cambiar un solo componente',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Todo escenario directo requerirá cambiar un solo componente',
    },
    {
      number: 315,
      question: '¿Por qué es importante la interacción del escenario?',
      answers: [
        'Expone la asignación de funcionalidad al diseño del producto',
        'Sigue un camino de comunicación que conduce a la estabilidad de los sistemas',
        'Alcanza el principal objetivo de la modificabilidad',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Expone la asignación de funcionalidad al diseño del producto',
    },
    {
      number: 316,
      question:
        '¿La cantidad de interacción del escenario está relacionada con cuál de las siguientes métricas?',
      answers: [
        'Complejidad estructural',
        'Acoplamiento',
        'Cohesión',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 317,
      question: '¿Cuál de los siguientes es correcto?',
      answers: [
        'El propósito de asignar ponderaciones es resolver la situación en la que los puntajes de la primera arquitectura es mejor en la otra mitad',
        'El propósito de asignar ponderaciones es resolver la situación en la que la puntuación de la segunda arquitectura está bien en la otra mitad del escenario',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer:
        'El propósito de asignar ponderaciones es resolver la situación en la que los puntajes de la primera arquitectura es mejor en la otra mitad',
    },
    {
      number: 318,
      question:
        '¿Cuál de los siguientes pasos se siguen para la descripción general de SAAM?',
      answers: [
        'Desarrollar escenarios',
        'Describa la arquitectura del candidato',
        'Clasificar escenarios',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 319,
      question: '¿Cuál de los siguientes se relaciona con los escenarios?',
      answers: [
        'Los escenarios ilustran los tipos de actividades que el sistema debe soportar',
        'Los escenarios ilustran los tipos de cambios que se anticipan se realizarán en el sistema',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 320,
      question:
        '¿Cuál es el procedimiento seguido para la descripción de la arquitectura candidata?',
      answers: [
        'La descripción debe hacerse en notación arquitectónica que sea bien entendida por las partes involucradas en el análisis',
        'La descripción se puede hacer en cualquier notación que sea bien entendida por las partes involucradas',
        'La descripción puede o no estar descrita en notaciones que se utilizan para el análisis',
        'Ninguna de las mencionadas',
      ],
      correct_answer:
        'La descripción debe hacerse en notación arquitectónica que sea bien entendida por las partes involucradas en el análisis',
    },
    {
      number: 321,
      question: '¿Cuáles son las clasificaciones de los escenarios?',
      answers: [
        'Escenario directo',
        'Escenario indirecto',
        'Escenario hacia adelante',
        'Escenario directo e indirecto',
      ],
      correct_answer: 'Escenario directo e indirecto',
    },
    {
      number: 322,
      question: '¿Cuál de los siguientes es verdadero?',
      answers: [
        'Un escenario directo no puede ser evaluado indirectamente por el sistema',
        'Otro escenario, excepto el escenario directo, requiere modificación antes de ejecutarse',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 323,
      question: '¿Qué se hace al realizar la evaluación del escenario?',
      answers: [
        'Para el escenario indirecto, deben enumerarse los cambios en la arquitectura que son necesarios para que sea compatible con el escenario',
        'El costo de realizar el cambio debe ser estimado',
        'Debe haber una tabla de resumen que enumere todos los escenarios (directos e indirectos)',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 324,
      question: '¿Cuál de los siguientes es verdadero?',
      answers: [
        'Todo escenario directo requerirá cambiar un solo componente',
        'Todo escenario indirecto no requerirá cambiar un solo componente',
        'Todo escenario indirecto requerirá cambiar un solo componente',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Todo escenario directo requerirá cambiar un solo componente',
    },
    {
      number: 325,
      question: '¿Por qué es importante la interacción del escenario?',
      answers: [
        'Expone la asignación de funcionalidad al diseño del producto',
        'Sigue un camino de comunicación que conduce a la estabilidad de los sistemas',
        'Alcanza el principal objetivo de la modificabilidad',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Expone la asignación de funcionalidad al diseño del producto',
    },
    {
      number: 326,
      question:
        '¿La cantidad de interacción del escenario está relacionada con cuál de las siguientes métricas?',
      answers: [
        'Complejidad estructural',
        'Acoplamiento',
        'Cohesión',
        'Todas las mencionadas',
      ],
      correct_answer: 'Todas las mencionadas',
    },
    {
      number: 327,
      question: '¿Cuál de los siguientes es correcto?',
      answers: [
        'El propósito de asignar ponderaciones es resolver la situación en la que los puntajes de la primera arquitectura es mejor en la otra mitad',
        'El propósito de asignar ponderaciones es resolver la situación en la que la puntuación de la segunda arquitectura está bien en la otra mitad del escenario',
        'Todas las mencionadas',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Ninguna de las mencionadas',
    },
    {
      number: 328,
      question:
        'El proceso de entender y especificar en detalle lo que debe lograr el sistema de información se llama _____ de sistemas',
      answers: ['Diseño', 'Especificación', 'Análisis', 'Administración'],
      correct_answer: 'Análisis',
    },
    {
      number: 329,
      question:
        '_____ de sistemas significa especificar en detalle cómo se deben implementar físicamente los muchos componentes del sistema de información',
      answers: ['Diseño', 'Especificación', 'Análisis', 'Administración'],
      correct_answer: 'Diseño',
    },
    {
      number: 330,
      question: 'El papel más importante de un analista de sistemas en los negocios es: ',
      answers: [
        'Comprensión técnica de los sistemas de información',
        'Resolución de problemas',
        'Saber qué datos necesitan ser almacenados y usados',
        'Habilidades especiales de programación',
      ],
      correct_answer: 'Resolución de problemas',
    },
    {
      number: 331,
      question: '_____ se refiere a la división de un sistema en procesos o subsistemas',
      answers: [
        'Diseño del sistema',
        'Gestión de datos',
        'Programación',
        'Descomposición funcional',
      ],
      correct_answer: 'Descomposición funcional',
    },
    {
      number: 332,
      question: 'Un límite de automatización se describe mejor como la separación entre:',
      answers: [
        'Sistema y su entorno',
        'Parte automatizada de un sistema y la parte manual de un sistema',
        'Parte manual de un sistema y su entorno',
        'Parte automatizada de un sistema y su entorno',
      ],
      correct_answer: 'Parte automatizada de un sistema y la parte manual de un sistema',
    },
    {
      number: 333,
      question:
        'Los cambios en el desarrollo de software, la tecnología y las prácticas comerciales han creado muchas oportunidades profesionales nuevas para los analistas, incluido _____',
      answers: [
        'Ventas y soporte de software ERP',
        'Auditoría, cumplimiento y seguridad',
        'Desarrollo web',
        'Todas las anteriores',
      ],
      correct_answer: 'Todas las anteriores',
    },
    {
      number: 334,
      question:
        'Una técnica que busca alterar la naturaleza del trabajo realizado en una función empresarial, con el objetivo de mejorar radicalmente el desempeño, se llama :',
      answers: [
        'Reingeniería de procesos de negocio',
        'Planificación estratégica',
        'Planificación estratégica de los sistemas de información',
        'Planificación de recursos empresariales (ERP)',
      ],
      correct_answer: 'Reingeniería de procesos de negocio',
    },
    {
      number: 335,
      question:
        'Una descripción de los sistemas de información integrados que necesita la organización para llevar a cabo sus funciones comerciales se llama:',
      answers: [
        'Reingeniería de procesos de negocio',
        'Plan de arquitectura de la aplicación',
        'Plan de arquitectura tecnológica',
        'Planificación de recursos empresariales (ERP)',
      ],
      correct_answer: 'Plan de arquitectura de la aplicación',
    },
    {
      number: 336,
      question:
        'Una descripción del hardware, el software y las redes de comunicaciones necesarias para implementar los sistemas de información planificados se llama:',
      answers: [
        'Planificación estratégica de los sistemas de información',
        'Planificación de la arquitectura de aplicaciones',
        'Plan de arquitectura tecnológica',
        'Planificación de recursos empresariales (ERP)',
      ],
      correct_answer: 'Plan de arquitectura tecnológica',
    },
    {
      number: 337,
      question:
        'Rocky Mountain Outfitters desea distribuir más las aplicaciones comerciales en múltiples ubicaciones y sistemas informáticos, reservando el centro de datos para el servidor web, la base de datos y las funciones de telecomunicaciones Esto es un ejemplo de:',
      answers: [
        'Planificación de aplicaciones de arquitectura',
        'Planificación de recursos empresariales (ERP)',
        'Planificación de la arquitectura tecnológica',
        'Planificación estratégica',
      ],
      correct_answer: 'Planificación de la arquitectura tecnológica',
    },
    {
      number: 338,
      question:
        '¿Cuál de los siguientes es un ejemplo de una técnica utilizada para completar actividades específicas de desarrollo del sistema?',
      answers: [
        'Planificación de proyectos',
        'Entorno de desarrollo integrado (IDE)',
        'Proveedor de servicios de aplicación (ASP)',
        'Gestión de la cadena de suministro (SCM)',
      ],
      correct_answer: 'Planificación de proyectos',
    },
    {
      number: 339,
      question:
        '¿Cuál de los siguientes es el enfoque del analista para resolver problemas?',
      answers: [
        'Verifique que los beneficios de resolver el problema superen los costos, luego investigue y comprenda el problema',
        'Desarrolle un conjunto de posibles soluciones, luego verifique que los beneficios de resolver el problema superen los costos',
        'Verifique que los beneficios de resolver el problema superen los costos, luego defina los requisitos para resolver el problema',
        'Implemente la solución, luego defina los detalles de la solución elegida',
      ],
      correct_answer:
        'Verifique que los beneficios de resolver el problema superen los costos, luego defina los requisitos para resolver el problema',
    },
    {
      number: 340,
      question:
        'El último paso del enfoque del analista para resolver problemas es _____',
      answers: [
        'Decida cuál es la mejor solución y haga una recomendación',
        'Monitor para asegurarse de que obtiene los resultados deseados',
        'Verifique que los beneficios de resolver el problema superen los costos',
        'Implementar la solución',
      ],
      correct_answer: 'Implementar la solución',
    },
    {
      number: 341,
      question: 'Un sistema de gestión del conocimiento: ',
      answers: [
        'Indexa todo el conocimiento contenido dentro de una organización',
        'Soporta el almacenamiento y acceso a documentos dentro de una organización',
        'Es otro término para un sistema de bibliotecas',
        'Requiere una gran cantidad de espacio de almacenamiento en línea',
      ],
      correct_answer:
        'Soporta el almacenamiento y acceso a documentos dentro de una organización',
    },
    {
      number: 342,
      question:
        'Las habilidades en un área no técnica, como la entrevista y la gestión de equipos, se denominan _____',
      answers: [
        'Habilidades inherentes',
        'Habilidades técnicas',
        'Habilidades duras (hard)',
        'Habilidades blandas (soft)',
      ],
      correct_answer: 'Habilidades blandas (soft)',
    },
    {
      number: 343,
      question: 'Un ejemplo de una fase de proyecto en un proyecto predictivo es:',
      answers: [
        'Recopilación de información sobre las necesidades del usuario',
        'Realizar un análisis de costo / beneficio del proyecto',
        'Planeando el proyecto',
        'Dibujando la interfaz del sistema',
      ],
      correct_answer: 'Planeando el proyecto',
    },
    {
      number: 344,
      question: 'El objetivo principal de la fase de análisis es:',
      answers: [
        'Analizar las capacidades y estructura del sistema anterior',
        'Priorizar las alternativas para un nuevo sistema',
        'Determinar la estructura básica y el enfoque para el nuevo sistema',
        'Entender y documentar las necesidades y requerimientos de los usuarios',
      ],
      correct_answer:
        'Entender y documentar las necesidades y requerimientos de los usuarios',
    },
    {
      number: 345,
      question:
        'El dominio del problema es la parte del desarrollo de sistemas que se refiere al _____',
      answers: [
        'Problemas asociados al entorno informático',
        'Área del negocio del usuario para la cual se está desarrollando un sistema',
        'Problemas de la organización de la empresa',
        'Área de la industria que se traduce en una competencia más intensa',
      ],
      correct_answer:
        'Área del negocio del usuario para la cual se está desarrollando un sistema',
    },
    {
      number: 346,
      question:
        'Esa parte del nuevo sistema de información que satisface las necesidades comerciales del usuario en el dominio del problema se conoce como:',
      answers: ['Procedimiento del sistema', 'Aplicación', 'Red', 'Interfaz de usuario'],
      correct_answer: 'Aplicación',
    },
    {
      number: 347,
      question:
        'La fase _____ comienza solo después de que el nuevo sistema ha sido instalado y puesto en producción, y dura toda la vida productiva del sistema',
      answers: ['Análisis', 'Diseño', 'Implementación', 'Apoyo'],
      correct_answer: 'Apoyo',
    },
    {
      number: 348,
      question:
        'Los usuarios suelen estar más involucrados en el proyecto, ¿en qué dos fases?',
      answers: [
        'Análisis y diseño',
        'Planificación y análisis',
        'Diseño e implementación',
        'Análisis e implementación',
      ],
      correct_answer: 'Análisis e implementación',
    },
    {
      number: 349,
      question:
        'La primera actividad oficial del equipo del proyecto cuando inicia la fase de planificación del proyecto es:',
      answers: [
        'Definir el problema del negocio',
        'Personal del equipo del proyecto',
        'Desarrollar un análisis de costo / beneficio',
        'Escribir una propuesta de proyecto',
      ],
      correct_answer: 'Definir el problema del negocio',
    },
    {
      number: 350,
      question:
        'El término _____ describe una empresa planificada que produce un nuevo sistema de información',
      answers: [
        'Proyecto de desarrollo de sistemas',
        'Fase',
        'Ciclo de vida de desarrollo de sistemas (SDLC)',
        'Fase de diseño',
      ],
      correct_answer: 'Proyecto de desarrollo de sistemas',
    },
    {
      number: 351,
      question:
        'La mayoría de los sistemas de información nuevos deben comunicarse con otros sistemas existentes, por lo que el diseño del método y los detalles de estos enlaces de comunicación deben definirse con precisión. Estos se llaman:',
      answers: [
        'Modelos',
        'Interfaces del sistema',
        'Mesas de ayuda',
        'Interfaces de diseño',
      ],
      correct_answer: 'Interfaces del sistema',
    },
    {
      number: 352,
      question:
        'El término _____ significa que las actividades laborales se realizan una vez, luego otra vez, y una vez más',
      answers: [
        'Programación eXtreme (XP)',
        'Iteración',
        'Modelado ágil',
        'Proceso Unificado (UP)',
      ],
      correct_answer: 'Iteración',
    },
    {
      number: 353,
      question:
        'El término _____ se refiere a un enfoque que completa partes de un sistema en una o más iteraciones y las pone en funcionamiento para los usuarios',
      answers: [
        'Desarrollo incremental',
        'Ingeniería de la información (IE)',
        'Proceso Unificado (UP)',
        'Diseño estructurado',
      ],
      correct_answer: 'Desarrollo incremental',
    },
    {
      number: 354,
      question:
        'Una/un _____ en desarrollo de sistemas es una colección de pautas que ayudan a un analista a completar una tarea o actividad de desarrollo de sistemas',
      answers: ['Iteración', 'Modelo', 'Técnica', 'Herramienta'],
      correct_answer: 'Técnica',
    },
    {
      number: 355,
      question: 'Un programa _____ es uno que tiene un principio y un final',
      answers: ['Iterativo', 'Estructurado', 'Incremental', 'Orientado a objetos'],
      correct_answer: 'Estructurado',
    },
    {
      number: 356,
      question:
        'La programación _____ divide los programas más complejos en una jerarquía de módulos de programa',
      answers: [
        'Incremental',
        'Iterativa',
        'Orientada a objetos',
        'De arriba hacia abajo',
      ],
      correct_answer: 'De arriba hacia abajo',
    },
    {
      number: 357,
      question:
        'El modelo gráfico clave de los requisitos de los sistemas utilizados con el análisis estructurado es el:',
      answers: [
        'Diagrama de flujo',
        'Diagrama de flujo de datos (DFD)',
        'Diagrama de clase',
        'Tabla de evaluación de proyectos y técnica de revisión (PERT)',
      ],
      correct_answer: 'Tabla de evaluación de proyectos y técnica de revisión (PERT)',
    },
    {
      number: 358,
      question:
        'Un (a) _____ es una cosa en el sistema informático que es capaz de responder a los mensajes',
      answers: ['Diagrama de entidad-relación (ERD)', 'Modelo', 'Herramienta', 'Objeto'],
      correct_answer: 'Objeto',
    },
    {
      number: 359,
      question: 'El/la _____ es un componente crítico de cualquier sistema nuevo',
      answers: [
        'Aplicación de gestión de proyectos',
        'Interfaz de usuario',
        'Herramienta de ingeniería inversa',
        'Herramienta de generador de código',
      ],
      correct_answer: 'Interfaz de usuario',
    },
    {
      number: 360,
      question:
        'El objetivo de la fase _____ es mantener el sistema funcionando productivamente durante los años posteriores a su instalación inicial',
      answers: ['Apoyo', 'Diseño', 'Planificación', 'Análisis'],
      correct_answer: 'Apoyo',
    },
    {
      number: 361,
      question:
        'La técnica _____ fue desarrollada para proporcionar algunas pautas para decidir cuál debería ser el conjunto de programas, qué debería lograr cada programa y cómo debería organizarse el programa en una jerarquía',
      answers: [
        'Programación extrema (XP)',
        'Diseño estructurado',
        'Orientado a objetos',
        'Carta de estructura',
      ],
      correct_answer: 'Diseño estructurado',
    },
    {
      number: 362,
      question:
        'Un concepto clave en el enfoque del modelo _____ es el enfoque en el riesgo',
      answers: ['Espiral', 'Programación extrema (XP)', 'Riesgo', 'Ágil'],
      correct_answer: 'Espiral',
    },
    {
      number: 363,
      question:
        'Un enfoque _____ al SDLC se utiliza cuando los requisitos exactos de un sistema o las necesidades de los usuarios no se entienden bien',
      answers: ['Predictivo', 'Persistente', 'Incremental', 'Adaptado'],
      correct_answer: 'Adaptado',
    },
    {
      number: 364,
      question:
        'El enfoque _____ es un enfoque de SDLC que asume que las diversas fases de un proyecto se pueden completar de manera totalmente secuencial',
      answers: ['Cascada', 'Artefacto', 'Prototipo', 'Modelo espiral'],
      correct_answer: 'Cascada',
    },
    {
      number: 365,
      question:
        'Las herramientas de modelado visual generalmente contienen una base de datos de información sobre los modelos y el proyecto, que se llama (n):',
      answers: [
        'Base de conocimientos',
        'Base de información',
        'Biblioteca',
        'Repositorio',
      ],
      correct_answer: 'Repositorio',
    },
    {
      number: 366,
      question: 'Una herramienta popular de modelado visual es:',
      answers: ['Firefox', 'Power Point', 'Visio', 'Photoshop'],
      correct_answer: 'Visio',
    },
    {
      number: 367,
      question:
        'La gestión del proyecto implica la planificación, el monitoreo y el control de las personas, los procesos y los eventos que ocurren a medida que el software evoluciona desde un concepto preliminar hasta una implementación operativa',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Verdad',
    },
    {
      number: 368,
      question:
        '¿Cuál de los siguientes no es un enfoque efectivo de administración de proyectos de software?',
      answers: ['Personas', 'Producto', 'Popularidad', 'Proceso'],
      correct_answer: 'Popularidad',
    },
    {
      number: 369,
      question: 'PM-CMM significa:',
      answers: [
        'Modelo de madurez de la capacidad de gestión de personas',
        'Modelo de madurez de la capacidad de gestión de procesos',
        'Modelo de madurez de capacidad de gestión de producto',
        'Modelo de madurez de la capacidad de gestión de proyectos',
      ],
      correct_answer: 'Modelo de madurez de la capacidad de gestión de personas',
    },
    {
      number: 370,
      question: '¿Cuál de las siguientes no es una actividad de gerente de proyecto?',
      answers: [
        'Control del proyecto',
        'Gestión de proyectos',
        'Planificación del proyecto',
        'Diseño del proyecto',
      ],
      correct_answer: 'Diseño del proyecto',
    },
    {
      number: 371,
      question:
        'Un _____ de software proporciona un marco de trabajo a partir del cual se puede establecer un plan integral para el desarrollo de software',
      answers: ['Personas', 'Producto', 'Proceso', 'Ninguno de los mencionados'],
      correct_answer: 'Proceso',
    },
    {
      number: 372,
      question:
        '¿Quién define los problemas de negocios que a menudo tienen una influencia significativa en el proyecto?',
      answers: [
        'Practicantes',
        'Gerentes de proyecto',
        'Altos directivos',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Altos directivos',
    },
    {
      number: 373,
      question:
        '¿Quién entrega las habilidades técnicas que son necesarias para diseñar un producto o una aplicación?',
      answers: [
        'Practicantes',
        'Gerentes de proyecto',
        'Altos directivos',
        'Ninguna de las mencionadas',
      ],
      correct_answer: 'Practicantes',
    },
    {
      number: 374,
      question:
        '¿Cuál de los siguientes paradigmas intenta estructurar un equipo de manera que logre algunos de los controles asociados con el paradigma cerrado pero también gran parte de la innovación que se produce cuando se usa el paradigma aleatorio?',
      answers: [
        'Paradigma asincrono',
        'Paradigma abierto',
        'Paradigma cerrado',
        'Paradigma síncrono',
      ],
      correct_answer: 'Paradigma abierto',
    },
    {
      number: 375,
      question: '¿Cuál de las siguientes es una actividad intensiva en personal?',
      answers: [
        'Resolución de problemas',
        'Organización',
        'Motivación',
        'Gestión de proyectos',
      ],
      correct_answer: 'Gestión de proyectos',
    },
    {
      number: 376,
      question:
        '¿Qué paradigma estructura un equipo libremente y depende de la iniciativa individual de los miembros del equipo?',
      answers: [
        'Paradigma aleatorio',
        'Paradigma abierto',
        'Paradigma cerrado',
        'Paradigma síncrono',
      ],
      correct_answer: 'Paradigma síncrono',
    },
    {
      number: 377,
      question:
        '¿Cuál de los siguientes no es un enfoque para la estimación de costos de software?',
      answers: ['Empírico', 'Heurística', 'Analítica', 'Crítico'],
      correct_answer: 'Crítico',
    },
    {
      number: 378,
      question:
        '¿Cuál de los siguientes utiliza fórmulas derivadas empíricamente para predecir el esfuerzo en función de LOC o FP?',
      answers: [
        'Estimación basada en FP',
        'Estimación basada en el proceso',
        'COCOMO',
        'Tanto la estimación basada en FP como COCOMO',
      ],
      correct_answer: 'Tanto la estimación basada en FP como COCOMO',
    },
    {
      number: 379,
      question:
        'Los datos empíricos que soportan la mayoría de los modelos de estimación se derivan de una amplia muestra de proyectos',
      answers: ['Verdad', 'Falso'],
      correct_answer: 'Falso',
    },
    {
      number: 380,
      question: 'COCOMO significa:',
      answers: [
        'Modelo de coste constructivo',
        'Modelo de coste integral',
        'Modelo constructivo de estimación de costos',
        'Modelo completo de estimación de costos',
      ],
      correct_answer: 'Modelo de coste constructivo',
    },
    {
      number: 381,
      question:
        '¿Qué versión de COCOMO establece que una vez que se han estabilizado los requisitos, se ha establecido la arquitectura básica del software?',
      answers: [
        'Modelo de etapa de diseño temprano',
        'Modelo post-arquitectura-escenario',
        'Modelo de composición de la aplicación',
        'Todas las mencionadas',
      ],
      correct_answer: 'Modelo de etapa de diseño temprano',
    },
    {
      number: 382,
      question:
        'Qué modelo se usó durante las primeras etapas de la ingeniería de software, cuando la creación de un prototipo de las interfaces de usuario, la consideración del software y la interacción del sistema, la evaluación del rendimiento y la evaluación de la madurez de la tecnología fueron primordiales',
      answers: [
        'Modelo de etapa de diseño temprano',
        'Modelo post-arquitectura-escenario',
        'Modelo de composición de la aplicación',
        'Todas las mencionadas',
      ],
      correct_answer: 'Modelo de composición de la aplicación',
    },
    {
      number: 383,
      question: '¿Cuál no es una medida de tamaño para un producto de software?',
      answers: [
        'LOC',
        'Duración del programa de Halstead',
        'Recuento de funciones',
        'Complejidad ciclomática',
      ],
      correct_answer: 'Complejidad ciclomática',
    },
    {
      number: 384,
      question: 'COCOMO fue desarrollado inicialmente por:',
      answers: ['B. Beizer', 'Rajiv Gupta', 'B. W. Bohem', 'Gregg Rothermal'],
      correct_answer: 'B W Bohem',
    },
    {
      number: 385,
      question: 'La estimación del tamaño de un proyecto depende de:',
      answers: ['Coste', 'Tiempo', 'Horario', 'Ninguna de las mencionadas'],
      correct_answer: 'Ninguna de las mencionadas',
    },
    {
      number: 386,
      question: 'COCOMO-II fue desarrollado en:',
      answers: [
        'Universidad de Texas',
        'Universidad del sur de California',
        'MIT',
        'IIT-Kanpur',
      ],
      correct_answer: 'Universidad del sur de California',
    },
    {
      number: 387,
      question: '¿Cuál no es una etapa de COCOMO-II?',
      answers: [
        'Modelo de estimación de diseño temprano',
        'Modelo de estimación de la composición de la aplicación',
        'Modelo de estimación integral de costos',
        'Modelo de estimación post-arquitectura',
      ],
      correct_answer: 'Modelo de estimación de diseño temprano',
    },
    {
      number: 388,
      question: 'Herramienta utilizada para asegurar el juicio experto',
      answers: [
        'Revisión por pares',
        'Técnica Delphi',
        'Técnica de valor esperado',
        'Estructura de desglose del trabajo (WBS)',
      ],
      correct_answer: 'Técnica Delphi',
    },
    {
      number: 389,
      question:
        '¿Qué debe hacer el gerente del proyecto para garantizar que se incluya todo el trabajo en el proyecto?',
      answers: [
        'Crear un plan de contingencia',
        'Crear un plan de gestión de riesgos',
        'Crear una estructura de desglose del trabajo (WBS)',
        'Crear una declaración de alcance',
      ],
      correct_answer: 'Crear una estructura de desglose del trabajo (WBS)',
    },
    {
      number: 390,
      question:
        'La relación entre la finalización de un sucesor depende de la iniciación de su antecesor, ¿se conoce cómo?',
      answers: ['FS', 'FF', 'SS', 'SF'],
      correct_answer: 'SF',
    },
    {
      number: 391,
      question:
        '¿Qué debe hacer o seguir un gerente de proyecto para asegurar límites claros para la finalización del proyecto?',
      answers: [
        'Verificación del alcance',
        'Completar una declaración de alcance',
        'Definición del alcance',
        'Plan de gestión de riesgos',
      ],
      correct_answer: 'Completar una declaración de alcance',
    },
    {
      number: 392,
      question:
        'Una organización está certificada según un estándar medioambiental estricto y la utiliza como diferenciador clave con sus competidores. Método alternativo está disponible pero implica mucho riesgo ¿Qué debe hacer el equipo del proyecto?',
      answers: [
        'Soltar el enfoque alternativo',
        'Elaborar un plan de mitigación',
        'Procurar un seguro contra el riesgo',
        'Planear todas las precauciones para evitar el riesgo',
      ],
      correct_answer: 'Soltar el enfoque alternativo',
    },
    {
      number: 393,
      question:
        'Ese es el objetivo del gerente de proyecto detrás del estudio de los procesos de trabajo en un proyecto',
      answers: [
        'Control de calidad',
        'Planificación de la calidad',
        'Comprobar la adherencia a los procesos',
        'Aseguramiento de la calidad',
      ],
      correct_answer: 'Aseguramiento de la calidad',
    },
    {
      number: 394,
      question:
        '¿Cuál de las siguientes NO es una entrada para la ejecución del plan del proyecto?',
      answers: [
        'Sistema de autorización de trabajo',
        'Plan del proyecto',
        'Acción correctiva',
        'Acción preventiva',
      ],
      correct_answer: 'Sistema de autorización de trabajo',
    },
    {
      number: 395,
      question: 'El modelo sirve como base para la creación de _____ para el software',
      answers: ['Diseño', 'Mantenimiento', 'Pruebas', 'Especificaciones'],
      correct_answer: 'Especificaciones',
    },
    {
      number: 396,
      question:
        'Antes de que los requisitos puedan analizarse, modelarse o especificarse, se deben reunir a través de un/una:',
      answers: ['Proceso de elicitación', 'Entrevista', 'Reunión', 'Ninguno'],
      correct_answer: 'Proceso de elicitación',
    },
    {
      number: 397, // 399
      question: 'La identificación insuficiente es una:',
      answers: [
        'Problemas relacionados con la tecnología',
        'Problemas relacionados con el producto',
        'Problemas relacionados con el proceso',
        'Problemas relacionados con las personas',
      ],
      correct_answer: 'Problemas relacionados con el proceso',
    },
    {
      number: 398, //410
      question:
        'Usted puede usar la Matriz de Trazabilidad de Artículos para identificar _____ al final de cada fase',
      answers: ['SCIs', 'SCM', 'Diseño', 'Construcción'],
      correct_answer: 'SCIs',
    },
    {
      number: 399,
      question:
        'La mayoría de los gerentes de proyectos de software practican muchas técnicas de administración de dudosa autenticidad que se llaman:',
      answers: [
        'Herramientas de gestión de proyectos',
        'Mitos de gestión de proyectos',
        'Reglas de gestión de proyectos',
        'Fundamentos de gestión de proyectos',
      ],
      correct_answer: 'Mitos de gestión de proyectos',
    },
    {
      number: 400,
      question: 'El alcance definido es un:',
      answers: [
        'Problemas relacionados con la tecnología',
        'Problemas relacionados con el producto',
        'Problemas relacionados con el proceso',
        'Problemas relacionados con las personas',
      ],
      correct_answer: 'Problemas relacionados con el producto',
    },
    {
      number: 401,
      question: 'En la evaluación del problema se identifica el área de esfuerzo por:',
      answers: ['Analista', 'Diseñador', 'Codificador', 'Gerente'],
      correct_answer: 'Analista',
    },
    {
      number: 402,
      question: 'Un "facilitador" controla la reunión puede ser:',
      answers: ['Cliente', 'Un desarrollador', 'Un forastero', 'Todos'],
      correct_answer: 'Todos',
    },
    {
      number: 403,
      question:
        'El control de versiones combina _____ para administrar diferentes versiones de objetos de configuración que se crean durante el desarrollo de productos de software',
      answers: [
        'Procedimiento',
        'Herramientas',
        'Procedimiento y herramientas',
        'Ninguno de dado',
      ],
      correct_answer: 'Procedimiento y herramientas',
    },
    {
      number: 404,
      question:
        'Muchos proyectos de software se desvían del alcance original debido a la naturaleza del producto de software o la tecnología utilizada, se produce en:',
      answers: [
        'El alcance del producto cambió hacia el final del ciclo de vida del proyecto',
        'Desarrollo de software orientado a la investigación',
        'Alcance definido',
        'Usuarios difusos',
      ],
      correct_answer: 'Desarrollo de software orientado a la investigación',
    },
    {
      number: 405,
      question:
        'Cuando creas un producto o sistema, es importante seguir una serie de pasos predecibles, el proceso que sigues para desarrollarlo se conoce como:',
      answers: [
        'Diseño de software',
        'Proceso de software',
        'Programa de software',
        'Marco',
      ],
      correct_answer: 'Proceso de software',
    },
  ],
};
