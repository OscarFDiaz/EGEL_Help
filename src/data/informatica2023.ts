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
      question: 'Pregunta numero uno?',
      correct_answer: 'Respuesta correcta',
      answers: ['Respuesta posible', 'Segunda posibilidad', 'Tercera posibilidad'],
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
