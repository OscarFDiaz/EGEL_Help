import { useState } from 'react';
import { informatica2023 } from '../data/informatica2023';

export const useHandleQuestion = () => {
  const { questions } = informatica2023;

  const [questionIndex, setquestionIndex] = useState(0);
  const [questionAmount] = useState(questions.length);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean[]>([]);

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionNumber: number,
    correct_answer: string,
    answer: string,
  ) => {
    // Save the selected option
    const { value } = event.target;
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionNumber] = value;
    setSelectedAnswers(newSelectedAnswers);

    // Check if the answer is correct
    const isCorrect = correct_answer === answer;
    const newAnswerCorrect = [...isAnswerCorrect];
    newAnswerCorrect[questionNumber] = isCorrect;
    setIsAnswerCorrect(newAnswerCorrect);
  };

  const handleNextQuestion = () => {
    if (questionIndex < questionAmount - 1) {
      setquestionIndex((prev) => prev + 1);
    } else {
      console.log('No hay más preguntas');
    }
  };

  const handlePrevQuestion = () => {
    if (questionIndex > 0) {
      setquestionIndex((prev) => prev - 1);
    } else {
      console.log('Es la primera pregunta');
    }
  };

  return {
    // Data
    questionIndex,
    questionAmount,
    selectedAnswers,
    isAnswerCorrect,
    correctAnswers: isAnswerCorrect.filter((value) => value === true).length,
    incorrectAnswers: isAnswerCorrect.filter((value) => value === false).length,
    // Methods
    handleAnswerChange,
    handleNextQuestion,
    handlePrevQuestion,
  };
};
