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
      question: ' ¿Cuál de los siguientes términos describe las pruebas?',
      correct_answer: 'Evaluar entregable para encontrar errores.',
      answers: [
        'Encontrando código roto',
        'Evaluar entregable para encontrar errores.',
        'Una etapa de todos los proyectos.',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 1,
      question: '¿Qué es la complejidad ciclomática?',
      correct_answer: 'Prueba de caja blanca ',
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
        'gráfico de barras',
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
        'Ensayos estructurales.',
        'Error al adivinar la técnica.',
        'Ninguna de las mencionadas ',
      ],
    },
    {
      number: 5,
      question: 'La prueba exhaustiva es:',
      correct_answer: 'Poco práctico pero posible',
      answers: [
        'siempre posible',
        'prácticamente posible',
        'poco práctico pero posible',
        'impracticable e imposible',
      ],
    },
    {
      number: 6,
      question: '¿Cuál de las siguientes es la técnica de la caja blanca?',
      correct_answer: 'Todas las mencionadas',
      answers: [
        'Prueba de declaración',
        'Prueba de decisión',
        'cobertura de la condición ',
        'Todas las mencionadas.',
      ],
    },
    {
      number: 7,
      question: '¿Cuáles son los diferentes niveles de prueba?',
      correct_answer: 'Todas las mencionadas.',
      answers: [
        'Pruebas unitarias',
        'Pruebas del sistema',
        'Pruebas de integración ',
        'Todas las mencionadas.',
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
        'Ninguna de las mencionada',
      ],
    },
    {
      // 11
      number: 10,
      question: 'Las pruebas en las que se comprueba el código.',
      correct_answer: 'Prueba de caja blanca',
      answers: [
        'Prueba de caja negra',
        'Prueba de caja blanca',
        'Prueba de caja roja',
        'Prueba de caja verde',
      ],
    },
  ],
};
