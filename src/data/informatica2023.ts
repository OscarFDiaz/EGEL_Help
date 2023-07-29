interface Props {
  id: number;
  name: string;
  year: string;
  questions: QuestionsProps[];
}

interface QuestionsProps {
  number: number;
  type: string;
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
      number: 1,
      type: 'multiple',
      question: ' ¿Cuál de los siguientes términos describe las pruebas?',
      correct_answer: 'Evaluar entregable para encontrar errores.',
      answers: [
        'Encontrando código roto',
        ' Evaluar entregable para encontrar errores.',
        'Una etapa de todos los proyectos.',
        'Ninguna de las mencionadas',
      ],
    },
    {
      number: 2,
      type: 'boolean',
      question: 'Pregunta numero dos?',
      correct_answer: 'Verdad',
      answers: ['Verdad', 'Mentira'],
    },
  ],
};
