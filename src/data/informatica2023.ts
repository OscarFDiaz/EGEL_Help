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
      correct_answer: 'Evaluar entregable para encontrar errores.',
      answers: [
        'Encontrando código roto.',
        'Evaluar entregable para encontrar errores.',
        'Una etapa de todos los proyectos.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 1,
      question: '¿Qué es la complejidad ciclomática?',
      correct_answer: 'Prueba de caja blanca.',
      answers: [
        'Prueba de caja negra.',
        'Prueba de caja blanca.',
        'Prueba de caja amarilla.',
        'Prueba de caja verde.',
      ],
    },
    {
      number: 2,
      question: '¿Límites inferior y superior están presentes en qué gráfico?',
      correct_answer: 'Ejecutar gráfico.',
      answers: [
        'Ejecutar gráfico.',
        'gráfico de barras.',
        'Cuadro de control.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 3,
      question: '¿Se realizan pruebas de mantenimiento utilizando qué metodología?',
      correct_answer: 'Ensayo de amplitud y ensayo de profundidad.',
      answers: [
        'Repetir.',
        'Pruebas de cordura.',
        'Ensayo de amplitud y ensayo de profundidad.',
        'Pruebas de confirmación.',
      ],
    },
    {
      number: 4,
      question: 'Las técnicas de caja blanca también se clasifican como:',
      correct_answer: 'Ensayos estructurales.',
      answers: [
        'Pruebas basadas en diseño.',
        'Ensayos estructurales.',
        'Error al adivinar la técnica.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 5,
      question: 'La prueba exhaustiva es:',
      correct_answer: 'Poco práctico pero posible.',
      answers: [
        'Siempre posible.',
        'Prácticamente posible.',
        'Poco práctico pero posible.',
        'Impracticable e imposible.',
      ],
    },
    {
      number: 6,
      question: '¿Cuál de las siguientes es la técnica de la caja blanca?',
      correct_answer: 'Todas las mencionadas.',
      answers: [
        'Prueba de declaración.',
        'Prueba de decisión.',
        'cobertura de la condición.',
        'Todas las mencionadas.',
      ],
    },
    {
      number: 7,
      question: '¿Cuáles son los diferentes niveles de prueba?',
      correct_answer: 'Todas las mencionadas.',
      answers: [
        'Pruebas unitarias.',
        'Pruebas del sistema.',
        'Pruebas de integración.',
        'Todas las mencionadas.',
      ],
    },
    {
      number: 8,
      question: '¿El análisis del valor de la frontera pertenece a?',
      correct_answer: 'Prueba de caja negra.',
      answers: [
        'Prueba de caja blanca.',
        'Prueba de caja negra.',
        'Prueba de caja blanca y caja negra.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 9,
      question: 'La prueba alfa se realiza en:',
      correct_answer: 'Fin del desarrollador.',
      answers: [
        'Fin del desarrollador.',
        'Fin del usuario.',
        'Fin del desarrollador y usuario.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 10,
      question: 'Las pruebas en las que se comprueba el código.',
      correct_answer: 'Prueba de caja blanca.',
      answers: [
        'Prueba de caja negra.',
        'Prueba de caja blanca.',
        'Prueba de caja roja.',
        'Prueba de caja verde.',
      ],
    },
    {
      number: 11,
      question: 'Pruebas realizadas sin planificación y documentación.',
      correct_answer: 'Pruebas Adhoc.',
      answers: [
        'Pruebas unitarias.',
        'Pruebas de regresión.',
        'Pruebas Adhoc.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 12,
      question: 'La prueba de aceptación también se conoce como:',
      correct_answer: 'prueba beta.',
      answers: [
        'Prueba de caja gris.',
        'Prueba de caja blanca.',
        'Prueba alfa.',
        'prueba beta.',
      ],
    },
    {
      number: 13,
      question: '¿Cuál de las siguientes es una prueba no funcional?',
      correct_answer: 'Ensayo de amplitud y ensayo de profundidad.',
      answers: [
        'Prueba de caja negra.',
        'pruebas de rendimiento.',
        'Pruebas unitarias.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 14,
      question: 'La prueba beta se realiza en:',
      correct_answer: 'Fin de usuario.',
      answers: [
        'Fin del usuario.',
        'Fin del desarrollador.',
        'Fin de usuario y desarrollador.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 15,
      question: 'SPICE significa:',
      correct_answer: 'Mejora de procesos de software y determinación de capacidad.',
      answers: [
        'Mejora de procesos de software y determinación de compatibilidad.',
        'Mejora de procesos de software y determinación de control.',
        'Mejora de procesos de software y determinación de capacidad.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 16,
      question: 'La prueba de unidad se realiza por:',
      correct_answer: 'Desarrolladores.',
      answers: [
        'Usuarios.',
        'Desarrolladores.',
        'Clientes.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 17,
      question: 'Las pruebas de comportamiento son:',
      correct_answer: 'Prueba de caja negra.',
      answers: [
        'Prueba de caja blanca.',
        'Prueba de caja negra.',
        'Prueba de caja gris.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 18,
      question: '¿Cuál de las siguientes es una prueba de caja negra?',
      correct_answer: 'Análisis del valor límite.',
      answers: [
        'Prueba de ruta básica.',
        'Análisis del valor límite.',
        'Análisis de ruta de código.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 19,
      question: '¿Cuál de los siguientes no se usa para medir el tamaño del software?',
      correct_answer: 'Tamaño del módulo.',
      answers: [
        'KLOC.',
        'Puntos de función.',
        'Tamaño del módulo.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 20,
      question: 'Standard Enforcer es un:',
      correct_answer: 'Herramienta de prueba estática.',
      answers: [
        'Herramienta de prueba estática.',
        'Pruebas dinámicas.',
        'Pruebas estáticas y dinámicas.',
        'Ninguna de las mencionadas.',
      ],
    },
    {
      number: 21,
      question:
        'Muchas aplicaciones que utilizan análisis estático encuentran 0.1-0.2% NCSS. NCSS significa:',
      correct_answer: 'Declaración de fuente sin comentarios.',
      answers: [
        'Declaración de fuente no codificada.',
        'Oraciones de fuente sin comentarios.',
        'Declaración de fuente sin comentarios.',
        'Todas las mencionadas.',
      ],
    },
    {
      number: 22,
      question:
        '¿Qué herramienta de prueba hace un simple trabajo de hacer cumplir los estándares de manera uniforme en muchos programas?',
      correct_answer: 'Ambos, el inspector de código y el ejecutor estándar.',
      answers: [
        'Analizador estático.',
        'Inspector de código.',
        'Ejecutor estándar.',
        'Ambos, el inspector de código y el ejecutor estándar.',
      ],
    },
    {
      number: 23,
      question:
        'Las pruebas de software con datos reales en un entorno real se conocen como:',
      correct_answer: 'Pruebas beta.',
      answers: [
        'Prueba alfa.',
        'Pruebas beta.',
        'Pruebas de regresión.',
        'Ninguno de los mencionados.',
      ],
    },
    {
      number: 24,
      question:
        '¿Cuál de las siguientes herramientas de prueba examina el programa de forma sistemática y automáticamente?',
      correct_answer: 'Analizador estático.',
      answers: [
        'Inspector de código.',
        'Analizador estático.',
        'Enforcer estándar.',
        'Analizador de cobertura.',
      ],
    },
    {
      number: 25,
      question: '¿Qué herramienta de prueba es responsable de documentar los programas?',
      correct_answer: 'Sistemas de prueba de archivo.',
      answers: [
        'Generador de pruebas / archivos.',
        'Sistema de prueba de arnés.',
        'Sistemas de prueba de archivo.',
        'Analizador de cobertura.',
      ],
    },
    {
      number: 26,
      question: 'La prueba Beta se realiza por:',
      correct_answer: 'Usuarios.',
      answers: ['Desarrolladores.', 'Probadores.', 'Usuarios.', 'Todas las mencionadas.'],
    },
    {
      number: 27,
      question: 'La herramienta ejecutora estándar analiza todo el programa.',
      correct_answer: 'Falso.',
      answers: ['Verdad.', 'Falso.'],
    },
    {
      number: 28,
      question:
        'El programa de depuración es un programa que se ejecuta simultáneamente con el programa bajo prueba y proporciona comandos para:',
      correct_answer: 'Todas las mencionadas.',
      answers: [
        'Examinar la memoria y los registros.',
        'Detener la ejecución en un punto particular.',
        'Búsqueda de referencias para variables particulares, constantes y registros.',
        'Todas las mencionadas.',
      ],
    },
    {
      number: 29,
      question:
        'Execution Verifier es una herramienta dinámica que también se conoce como:',
      correct_answer: 'Analizador de cobertura.',
      answers: [
        'Generador de archivos de prueba.',
        'Analizador de cobertura.',
        'Comparador de salida.',
        'Sistema de prueba de arnés.',
      ],
    },
    {
      number: 30,
      question: 'El mantenimiento del software incluye:',
      correct_answer: 'Todas las mencionadas.',
      answers: [
        'Correcciones de errores.',
        'Mejoras de capacidades.',
        'Supresión de capacidades obsoletas.',
        'Todas las mencionadas.',
      ],
    },
    {
      number: 31,
      question: '¿El mantenimiento se clasifica en cuántas categorías?',
      correct_answer: 'Cuatro.',
      answers: ['Dos.', 'Tres.', 'Cuatro.', 'Cinco.'],
    },
    {
      number: 32,
      question:
        'La modificación del software para que coincida con los cambios en el entorno siempre cambiante, ¿en qué categoría de mantenimiento de software?',
      correct_answer: 'Adaptativo.',
      answers: ['Correctivo.', 'Adaptativo.', 'Perfectivo.', 'Preventivo.'],
    },
    {
      number: 33,
      question: '¿Cuántas fases hay en Taute Maintenance Model?',
      correct_answer: 'Ocho.',
      answers: ['Seis.', 'Siete.', 'Ocho.', 'Nueve.'],
    },
    {
      number: 34,
      question:
        '¿Qué tipo de prueba de software se usa generalmente en Mantenimiento de Software?',
      correct_answer: 'Pruebas de regresión.',
      answers: [
        'Pruebas de regresión.',
        'Pruebas del sistema.',
        'Pruebas de integración.',
        'Pruebas unitarias.',
      ],
    },
    {
      number: 35,
      question: 'La prueba de regresión es una actividad muy costosa.',
      correct_answer: 'Verdad.',
      answers: ['Verdad.', 'Falso.'],
    }, ///////////////////////////////////////////////////////////////////
    {
      number: 36,
      question:
        "Las técnicas de reevaluación selectiva pueden ser más económicas que la técnica de 'reprobar todo'. ¿Cuántas técnicas de reevaluación selectiva existen?",
      answers: ['Dos.', 'Tres.', 'Cuatro.', 'Cinco.'],
      correct_answer: 'Tres.',
    },
    {
      number: 37,
      question:
        '¿Qué técnica de reevaluación selectiva selecciona cada caso de prueba que hace que un programa modificado produzca una salida diferente a su versión original?',
      answers: ['Cobertura.', 'Minimización.', 'Seguro.', 'Maximización.'],
      correct_answer: 'Seguro.',
    },
    {
      number: 38,
      question:
        '__________ mide la capacidad de una técnica de selección de prueba de regresión para manejar aplicaciones realistas.',
      answers: ['Eficiencia.', 'Precisión.', 'Generalidad.', 'Inclusividad.'],
      correct_answer: 'Generalidad.',
    },
    {
      number: 39,
      question:
        '¿Qué técnica de selección de prueba de regresión expone fallas causadas por modificaciones?',
      answers: ['Eficiencia.', 'Precisión.', 'Generalidad.', 'Inclusividad.'],
      correct_answer: 'Inclusividad.',
    },
    {
      number: 40,
      question:
        '¿Cuál de los siguientes diagramas no es compatible con UML considerando el modelado basado en datos?',
      answers: [
        'Actividad.',
        'Diagrama de flujo de datos (DFD).',
        'Carta del estado.',
        'Componente.',
      ],
      correct_answer: 'Diagrama de flujo de datos (DFD).',
    },
    {
      number: 41,
      question:
        '__________ nos permite inferir que diferentes miembros de clases tienen algunas características comunes.',
      answers: ['Realización.', 'Agregación.', 'Generalización.', 'Dependencia.'],
      correct_answer: 'Generalización.',
    },
    {
      number: 42,
      question:
        'Uno crea modelos de comportamiento de un sistema cuando está discutiendo y diseñando la arquitectura del sistema.',
      answers: ['Verdad.', 'Falso.'],
      correct_answer: 'Falso.',
    },
    {
      number: 43,
      question:
        'Los diagramas de __________ y __________ de UML representan el modelo de interacción.',
      answers: [
        'Caso de uso, secuencia.',
        'Clase, Objeto.',
        'Actividad, Carta del estado.',
        'Todas las mencionadas.',
      ],
      correct_answer: 'Caso de uso, secuencia.',
    },
    {
      number: 44,
      question:
        '¿Qué nivel de Diagrama de relaciones entre entidades (ERD) modela todas las entidades y relaciones?',
      answers: ['Nivel 1.', 'Nivel 2.', 'Nivel 3.', 'Nivel 4.'],
      correct_answer: 'Nivel 2.',
    },
    {
      number: 45,
      question:
        '__________ las clases se usan para crear la interfaz que el usuario ve e interactúa a medida que se usa el software.',
      answers: ['Controlador.', 'Entidad.', 'Límite.', 'Negocios.'],
      correct_answer: 'Límite.',
    },
    {
      number: 46,
      question:
        '¿Cuál de las siguientes afirmaciones es incorrecta con respecto al modelo de Colaborador de responsabilidad de la clase (CRC)?',
      answers: [
        'Todos los escenarios de casos de uso (y los correspondientes diagramas de casos de uso) están organizados en categorías en el modelo CRC.',
        'El líder de revisión lee el caso de uso deliberadamente.',
        'Solo los desarrolladores en la revisión (del modelo CRC) reciben un subconjunto de las tarjetas de índice del modelo CRC.',
        'Todas las mencionadas.',
      ],
      correct_answer:
        'Solo los desarrolladores en la revisión (del modelo CRC) reciben un subconjunto de las tarjetas de índice del modelo CRC.',
    },
    {
      number: 47,
      question: 'Un objeto de datos también puede encapsular procesos y operaciones.',
      answers: ['Verdad.', 'Falso.'],
      correct_answer: 'Verdad.',
    },
    {
      number: 48,
      question: '¿Cuál es el primer objetivo del proceso de prueba?',
      answers: ['Prevención de errores.', 'Pruebas.', 'Ejecución.', 'Análisis.'],
      correct_answer: 'Prevención de errores.',
    },
    {
      number: 49,
      question: 'Los errores de software durante la codificación se conocen como:',
      answers: ['Errores.', 'Fallas.', 'Bichos.', 'Defectos.'],
      correct_answer: 'Bichos.',
    },
    {
      number: 50,
      question:
        'Nombre una técnica de evaluación para evaluar la calidad de los casos de prueba.',
      answers: [
        'Análisis de mutaciones.',
        'Validación.',
        'Verificación.',
        'Análisis de rendimiento.',
      ],
      correct_answer: 'Análisis de mutaciones.',
    },
    {
      number: 51,
      question: 'La prueba debe realizarse para cada posible:',
      answers: ['Datos.', 'Caso.', 'Variable.', 'Todas las mencionadas.'],
      correct_answer: 'Todas las mencionadas.',
    },
    {
      number: 52,
      question: '¿Cuál de los siguientes no forma parte del informe de errores?',
      answers: ['Caso de prueba.', 'Salida.', 'Versión de software.', 'LOC.'],
      correct_answer: 'LOC.',
    },
    {
      number: 53,
      question:
        '¿Cuál de las siguientes opciones no forma parte del Flujo de ejecución durante la depuración?',
      answers: ['Paso sobre.', 'Entrar en.', 'Intensificar.', 'Salir.'],
      correct_answer: 'Intensificar.',
    },
    {
      number: 54,
      question: 'El método de Complejidad ciclomática viene bajo el método de prueba.',
      answers: ['Caja amarilla.', 'Caja blanca.', 'Caja gris.', 'Caja negra.'],
      correct_answer: 'Caja blanca.',
    },
    {
      number: 55,
      question:
        '¿Cuál es una técnica de prueba de caja negra apropiada para todos los niveles de prueba?',
      answers: [
        'Pruebas de aceptación.',
        'Pruebas de regresión.',
        'Partición de equivalencia.',
        'Aseguramiento de la calidad.',
      ],
      correct_answer: 'Partición de equivalencia.',
    },
    {
      number: 56,
      question:
        '¿Cuál de las siguientes es la manera de asegurar que las pruebas estén realmente probando el código?',
      answers: [
        'Pruebas de estructura de control.',
        'Prueba de trayectoria compleja.',
        'Cobertura del código.',
        'Aseguramiento de la calidad del software.',
      ],
      correct_answer: 'Cobertura del código.',
    },
    {
      number: 57,
      question: 'Las pruebas efectivas reducirán el costo de:',
      answers: ['Mantenimiento.', 'Diseño.', 'Codificación.', 'Documentación.'],
      correct_answer: 'Mantenimiento.',
    },
    {
      number: 58,
      question: '¿Cuál de los siguientes es un problema común?',
      answers: [
        'Errores de intercambio de datos.',
        'Accediendo a elementos de datos del tipo equivocado.',
        'Intentar usar áreas de memoria después de liberarlas.',
        'Todas las mencionadas.',
      ],
      correct_answer: 'Todas las mencionadas.',
    },
    {
      number: 59,
      question:
        'El proceso de generación de documentos de análisis y diseño se conoce como:',
      answers: [
        'Ingeniería de software.',
        'Reingeniería de software.',
        'Ingeniería inversa.',
        'Reingeniería.',
      ],
      correct_answer: 'Ingeniería de software.',
    },
    {
      number: 60,
      question: '¿Qué es un parche de software?',
      answers: [
        'Arreglo requerido o crítico.',
        'Arreglo de emergencia.',
        'Arreglo diario o rutinario.',
        'Ninguna de las mencionadas.',
      ],
      correct_answer: 'Arreglo de emergencia.',
    },
    {
      number: 61,
      question: '¿Cuál de los siguientes no es un modelo de mantenimiento?',
      answers: [
        'Modelo de cascada.',
        'Modelo orientado a la reutilización.',
        'Modelo de mejora iterativa.',
        'Modelo de solución rápida.',
      ],
      correct_answer: 'Modelo de cascada.',
    },
    {
      number: 62,
      question:
        '¿Qué significa ACT en el modelo In Boehm para el mantenimiento del software?',
      answers: [
        'Pista de cambio actual.',
        'Pista de cambio anual.',
        'Cambio anual del tráfico.',
        'Tráfico de cambio actual.',
      ],
      correct_answer: 'Cambio anual del tráfico.',
    },
    {
      number: 63,
      question: 'Elegir las opciones adecuadas con respecto a las pruebas de regresión.',
      answers: [
        'Ayuda en el desarrollo de software.',
        'Ayuda en el mantenimiento del software.',
        'Ayuda en el desarrollo y mantenimiento de software.',
        'Ninguno de los mencionados.',
      ],
      correct_answer: 'Ayuda en el desarrollo y mantenimiento de software.',
    },
    {
      number: 64,
      question: '¿Qué son los sistemas heredados?',
      answers: [
        'Nuevos sistemas.',
        'Sistemas antiguos.',
        'Sistemas subdesarrollados.',
        'Ninguno de los mencionados.',
      ],
      correct_answer: 'Sistemas antiguos.',
    },
    {
      number: 65,
      question: '¿Cuál de los siguientes manuales no es una documentación de usuario?',
      answers: [
        'Guía para principiantes.',
        'Guía de instalación.',
        'Guía de referencia.',
        'SRS - Especificación de requisitos de software.',
      ],
      correct_answer: 'SRS - Especificación de requisitos de software.',
    },
    {
      number: 66,
      question: '¿Cuál de los siguientes manuales es una documentación de usuario?',
      answers: [
        'SRS - Especificación de requisitos de software.',
        'SDD - Documento de diseño de software.',
        'Resumen del sistema.',
        'Ninguna de las mencionadas.',
      ],
      correct_answer: 'Resumen del sistema.',
    },
    {
      number: 67,
      question:
        'El proceso de transformación de un modelo en código fuente se conoce como:',
      answers: [
        'Ingeniería delantera.',
        'Ingeniería inversa.',
        'Reingeniería.',
        'Reconstruyendo.',
      ],
      correct_answer: 'Ingeniería delantera.',
    },
    {
      number: 68,
      question:
        '¿Cuántas etapas hay en el modelo de mejora iterativa utilizado durante el mantenimiento del software?',
      answers: ['Dos.', 'Tres.', 'Cuatro.', 'Cinco.'],
      correct_answer: 'Cuatro.',
    },
    {
      number: 69,
      question:
        'El Lenguaje de modelado unificado (UML) se ha convertido en un estándar efectivo para el modelado de software. ¿Cuántas notaciones diferentes tiene?',
      answers: ['Tres.', 'Cuatro.', 'Seis.', 'Nueve.'],
      correct_answer: 'Nueve.',
    },
    {
      number: 70,
      question:
        '¿Qué modelo en el modo del sistema representa el comportamiento dinámico del sistema?',
      answers: [
        'Modelo de contexto.',
        'Modelo de comportamiento.',
        'Modelo de datos.',
        'Modelo de objeto.',
      ],
      correct_answer: 'Modelo de comportamiento.',
    },
    {
      number: 71,
      question:
        '¿Qué modelo en el modo de sistemas representa la naturaleza estática del sistema?',
      answers: [
        'Modelo de comportamiento.',
        'Modelo de contexto.',
        'Modelo de datos.',
        'Modelo estructural.',
      ],
      correct_answer: 'Modelo estructural.',
    },
    {
      number: 72,
      question:
        'Qué perspectiva en el modo del sistema muestra el sistema o la arquitectura de datos.',
      answers: [
        'Perspectiva estructural.',
        'Perspectiva de comportamiento.',
        'Perspectiva externa.',
        'Todas las conocidas.',
      ],
      correct_answer: 'Perspectiva estructural.',
    },
    {
      number: 73,
      question:
        '¿Qué modelo de sistema se muestra en las operaciones de cajeros automáticos que se muestran a continuación?',
      answers: [
        'Modelo estructural.',
        'Modelo de contexto.',
        'Modelo de comportamiento.',
        'Modelo de interacción.',
      ],
      correct_answer: 'Modelo de contexto.',
    },
    {
      number: 74,
      question:
        'Los diagramas de actividad se utilizan para modelar el procesamiento de datos.',
      answers: ['Verdad.', 'Falso.'],
      correct_answer: 'Verdad.',
    },
    {
      number: 75,
      question:
        'La ingeniería basada en modelos es solo un concepto teórico. No se puede convertir en un código de trabajo / ejecutable.',
      answers: ['Verdad.', 'Falso.'],
      correct_answer: 'Falso.',
    },
    {
      number: 76,
      question:
        '¿Dónde están disponibles los programas y los datos que utilizará la computadora?',
      answers: ['Salida.', 'Unidad de procesamiento.', 'Entrada.', 'Almacenamiento.'],
      correct_answer: 'Almacenamiento.',
    },
    {
      number: 77,
      question: 'Un puerto paralelo es el más utilizado por un:',
      answers: [
        'Ratón.',
        'Monitor.',
        'Impresora.',
        'Dispositivo de almacenamiento externo.',
      ],
      correct_answer: 'Impresora.',
    },
    {
      number: 78,
      question: 'La computadora sigue un principio simple llamado GIGO que significa:',
      answers: [
        'Basura dentro, basura fuera.',
        'Salida de basura, buena salida.',
        'Buena entrada, buena salida.',
        'Mayores instrucciones, mayor salida.',
      ],
      correct_answer: 'Basura dentro, basura fuera.',
    },
    {
      number: 79,
      question:
        'Organiza los siguientes dispositivos en orden ascendente de la velocidad:\n\nA. RAM\nB. Disco duro\nC. Caché\nD. Floppy',
      answers: ['ABDC.', 'BDAC.', 'DBAC.', 'BADC.'],
      correct_answer: 'BDAC.',
    },
    {
      number: 80,
      question:
        '¿Cuál es la unidad comúnmente utilizada para medir la velocidad de transmisión de datos?',
      answers: [
        'Bits por segundo.',
        'Nanosegundos.',
        'Caracteres por segundo.',
        'Megahertz.',
      ],
      correct_answer: 'Bits por segundo.',
    },
    {
      number: 81,
      question:
        '¿Cuál de los siguientes no está incluido en las funciones básicas del sistema operativo?',
      answers: [
        'Control de trabajo.',
        'Programación de trabajos.',
        'Gestión de la memoria.',
        'Gestión de datos.',
      ],
      correct_answer: 'Control de trabajo.',
    },
    {
      number: 82,
      question: "La tecnología 'diente azul' permite:",
      answers: [
        'Comunicación de teléfono fijo a móvil.',
        'Transmisión de señales solo en teléfonos móviles.',
        'Comunicación inalámbrica entre equipos.',
        'Comunicación de televisión vía satélite.',
      ],
      correct_answer: 'Comunicación inalámbrica entre equipos.',
    },
    {
      number: 83,
      question: 'Un byte consiste en:',
      answers: ['Cuatro bits.', 'Un bit.', 'Diez bits.', 'Ocho bits.'],
      correct_answer: 'Ocho bits.',
    },
    {
      number: 84,
      question: 'ENIAC era:',
      answers: [
        'Una computadora electrónica.',
        'Un motor.',
        'Un dispositivo de memoria.',
        'Una calculadora electrónica.',
      ],
      correct_answer: 'Una computadora electrónica.',
    },
    {
      number: 85,
      question: 'El sistema operativo llamado UNIX se usa típicamente para:',
      answers: [
        'Computadoras de escritorio.',
        'Ordenadores portátiles.',
        'Supercomputadoras.',
        'Todos estos.',
      ],
      correct_answer: 'Todos estos.',
    },
    {
      number: 86,
      question:
        'Hay varias categorías primarias de procedimientos. ¿Cuál de los siguientes no es una categoría primaria de procedimientos?',
      answers: [
        'Pruebas.',
        'Copia de seguridad y recuperación.',
        'Desarrollo de firewall.',
        'Diseño.',
      ],
      correct_answer: 'Desarrollo de firewall.',
    },
    {
      number: 87,
      question:
        'Todos los cálculos lógicos y matemáticos realizados por la computadora ocurren en / en el:',
      answers: [
        'Unidad central de procesamiento.',
        'Placa madre.',
        'Memoria.',
        'Unidad de control central.',
      ],
      correct_answer: 'Unidad central de procesamiento.',
    },
    {
      number: 88,
      question: 'La conexión entre su computadora en casa y su ISP local se denomina:',
      answers: [
        'La última milla.',
        'El estiramiento de casa.',
        'La página de inicio.',
        'La columna vertebral.',
      ],
      correct_answer: 'La última milla.',
    },
    {
      number: 89,
      question:
        'Cuando se habla de entrada y salida de computadora, entrada se refiere a',
      answers: [
        'Cualquier procesamiento de datos que ocurra a partir de la nueva entrada de datos en la computadora.',
        'Datos o información que ha sido ingresada en la computadora.',
        'La transmisión de datos que han sido ingresados en la computadora.',
      ],
      correct_answer: 'Datos o información que ha sido ingresada en la computadora.',
    },
    {
      number: 90,
      question: 'El software de computadora puede definirse como:',
      answers: [
        'La computadora y sus equipos asociados.',
        'Las instrucciones que le dicen a la computadora qué hacer.',
        'Componentes informáticos que actúan para lograr un objetivo.',
        'Una interfaz entre la computadora y la red.',
      ],
      correct_answer: 'Las instrucciones que le dicen a la computadora qué hacer.',
    },
    {
      number: 91,
      question: 'La memoria principal de una computadora también puede ser llamada -',
      answers: [
        'Almacenamiento primario.',
        'Memoria interna.',
        'Memoria primaria.',
        'Todos estos.',
      ],
      correct_answer: 'Todos estos.',
    },
    {
      number: 92,
      question:
        '¿Cuántas etapas hay en el modelo de mejora iterativa utilizado durante el mantenimiento del software?',
      answers: ['Dos.', 'Tres.', 'Cuatro.', 'Cinco.'],
      correct_answer: 'Cuatro.',
    },
    {
      number: 93,
      question:
        '¿Cuál de los siguientes no es un tipo de software de computadora que se pueda pensar?',
      answers: [
        'Fuera de la plataforma.',
        'A medida.',
        'Desarrollado a medida.',
        'Fuera de la plataforma con alteraciones.',
      ],
      correct_answer: 'Fuera de la plataforma con alteraciones.',
    },
    {
      number: 94,
      question:
        '__________ son intentos de individuos por obtener información confidencial de usted al falsificar su identidad.',
      answers: [
        'Viajes de phishing.',
        'Virus informáticos.',
        'Estafas de spyware.',
        'Estafas de phishing.',
      ],
      correct_answer: 'Estafas de phishing.',
    },
    {
      number: 95,
      question: 'El trabajo principal de la CPU es:',
      answers: [
        'Cumplir las instrucciones del programa.',
        'Almacenar datos / información para uso futuro.',
        'Procesar datos e información.',
        'Ambos Cumplir las instrucciones del programa y Procesar datos e información.',
      ],
      correct_answer:
        'Ambos Cumplir las instrucciones del programa y Procesar datos e información.',
    },
    {
      number: 96,
      question: '¿Cuál de los siguientes es un ejemplo de un disco óptico?',
      answers: [
        'Discos magnéticos.',
        'Discos de memoria.',
        'Discos de bus de datos.',
        'Discos versátiles digitales.',
      ],
      correct_answer: 'Discos versátiles digitales.',
    },
    {
      number: 97,
      question:
        '¿Cuál de los siguientes es un ejemplo de dispositivos de almacenamiento?',
      answers: ['Discos magnéticos.', 'Cintas.', 'DVDs.', 'Todos estos.'],
      correct_answer: 'Todos estos.',
    },
    {
      number: 98,
      question:
        'Una persona que usó su experiencia para obtener acceso a las computadoras de otras personas para obtener información ilegalmente o hacer daño es una:',
      answers: ['Hacker.', 'Spammer.', 'Analista.', 'Programador.'],
      correct_answer: 'Hacker.',
    },
    {
      number: 99,
      question:
        'Una forma popular de aprender acerca de las computadoras sin tener que ir al aula se llama:',
      answers: [
        'I-learning.',
        'Aprendizaje aislado.',
        'E-learning.',
        'Aprendizaje cercano.',
      ],
      correct_answer: 'E-learning.',
    },
    {
      number: 100,
      question:
        '¿Cuál de los siguientes es un dispositivo de almacenamiento que utiliza discos magnéticos rígidos instalados permanentemente para almacenar datos / información?',
      answers: ['Disquete.', 'Disco duro.', 'Disco permanente.', 'Ninguno de estos.'],
      correct_answer: 'Disco duro.',
    },
  ],
};
