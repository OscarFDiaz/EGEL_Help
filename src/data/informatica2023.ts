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
        'cobertura de la condición',
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
      correct_answer: 'prueba beta',
      answers: [
        'Prueba de caja gris',
        'Prueba de caja blanca',
        'Prueba alfa',
        'prueba beta',
      ],
    },
    {
      number: 13,
      question: '¿Cuál de las siguientes es una prueba no funcional?',
      correct_answer: 'Ensayo de amplitud y ensayo de profundidad',
      answers: [
        'Prueba de caja negra',
        'pruebas de rendimiento',
        'Pruebas unitarias',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 14,
      question: 'La prueba beta se realiza en:',
      correct_answer: 'Fin de usuario',
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
        'Muchas aplicaciones que utilizan análisis estático encuentran 01-02% NCSS NCSS significa:',
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
        '_____ las clases se usan para crear la interfaz que el usuario ve e interactúa a medida que se usa el software',
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
      correct_answer: 'Verdad',
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
      answers: ['Caso de prueba', 'Salida', 'Versión de software', 'LOC'],
      correct_answer: 'LOC',
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
      correct_answer: 'Ingeniería de software',
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
        'Qué perspectiva en el modo del sistema muestra el sistema o la arquitectura de datos',
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
        'La ingeniería basada en modelos es solo un concepto teórico No se puede convertir en un código de trabajo / ejecutable',
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
      correct_answer: 'La última milla',
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
      answers: [
        'Son significativas',
        'Son utilizables',
        'Son significativas',
        'Representar valores',
      ],
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
      answers: [
        'Diagrama de estructura',
        'Diagrama de estructura',
        'Diagrama de flujo del programa',
        'Módulo',
      ],
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
        'programa de contabilidad',
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
        'Los programas de computadora que hacen posible que diferentes marcas de computadoras se transfiera n datos entre sí se llaman:',
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
        'permite a hombres y mujeres quedarse en casa con niños pequeños',
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
        'Más fácil de probar y depurar Se utiliza cuando existe la necesidad de llevar un producto al mercado antes de tiempo',
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
        'Qué perspectiva en el modelado del sistema muestra el sistema o la arquitectura de datos',
      answers: [
        'Perspectiva estructural',
        'Perspectiva de comportamiento',
        'perspectiva externa',
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
        'La ingeniería basada en modelos es solo un concepto teórico No se puede convertir en un código de trabajo / ejecutable',
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
  ],
};
