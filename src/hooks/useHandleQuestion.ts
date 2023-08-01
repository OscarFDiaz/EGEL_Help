import { useState } from 'react';
import { informatica2023 } from '../data/informatica2023';
import Swal from 'sweetalert2';

export const useHandleQuestion = () => {
  const { questions } = informatica2023;

  const questionStorage = localStorage.getItem('questionIndex');
  let currentIndex;
  if (questionStorage) {
    currentIndex = parseInt(questionStorage);
  }
  const [questionIndex, setquestionIndex] = useState(currentIndex || 0);
  const [questionAmount] = useState(questions.length);

  // Retrieve data from storage => selected answers
  const answersStorage = localStorage.getItem('answerCorrect');
  let answersStorageArray;
  if (answersStorage) {
    answersStorageArray = JSON.parse(answersStorage);
  }

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean[]>(
    answersStorageArray || [],
  );

  // Retrieve data from storage => if answer is correct or not
  const selectedStorage = localStorage.getItem('selectedAnswers');
  let selectedStorageArray;
  if (selectedStorage) {
    selectedStorageArray = JSON.parse(selectedStorage);
  }

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    selectedStorageArray || [],
  );

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
    saveToLocalStorage('selectedAnswers', newSelectedAnswers);

    // Check if the answer is correct
    const isCorrect = correct_answer === answer;
    const newAnswerCorrect = [...isAnswerCorrect];
    newAnswerCorrect[questionNumber] = isCorrect;
    setIsAnswerCorrect(newAnswerCorrect);
    saveToLocalStorage('answerCorrect', newAnswerCorrect);
  };

  const saveToLocalStorage = (key: string, data: unknown) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleNextQuestion = () => {
    if (questionIndex < questionAmount - 1) {
      setquestionIndex((prev) => prev + 1);
      saveToLocalStorage('questionIndex', questionIndex);
    } else {
      console.log('No hay más preguntas');
    }
  };

  const handlePrevQuestion = () => {
    if (questionIndex > 0) {
      setquestionIndex((prev) => prev - 1);
      saveToLocalStorage('questionIndex', questionIndex);
    } else {
      console.log('Es la primera pregunta');
    }
  };

  const handleFinishQuestion = () => {
    const correct = isAnswerCorrect.filter((value) => value === true).length;
    const incorrect = isAnswerCorrect.filter((value) => value === false).length;
    Swal.fire({
      title: 'Preguntas terminadas',
      text: `Correctas: ${correct} - Incorrectas ${incorrect}`,
      icon: 'success',
      confirmButtonText: 'Terminar',
      footer: 'Se reiniciaran todo',
    });
    localStorage.clear();
    setquestionIndex(0);
    setIsAnswerCorrect([]);
    setSelectedAnswers([]);
  };

  const handleReportQuestion = () => {
    Swal.fire({
      title: 'Reportar pregunta',
      text: `Pregunta a reportar: ${questionIndex + 1}`,
      icon: 'success',
      confirmButtonText: 'Reportar',
    });
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
    handleFinishQuestion,
    handleNextQuestion,
    handlePrevQuestion,
    handleReportQuestion,
  };
};
