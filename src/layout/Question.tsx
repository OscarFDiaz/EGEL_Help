import { informatica2023 } from '../data/informatica2023';
import { useHandleQuestion } from '../hooks/useHandleQuestion';

export const Question = () => {
  const { questions } = informatica2023;

  const {
    questionIndex,
    questionAmount,
    selectedAnswers,
    isAnswerCorrect,
    correctAnswers,
    incorrectAnswers,
    handleAnswerChange,
    handleNextQuestion,
    handlePrevQuestion,
  } = useHandleQuestion();

  const { answers, question, number, correct_answer } = questions[questionIndex];

  return (
    <div className="question">
      <h3 className="question__subtitle">
        <span>
          Selecciona tu respuesta {questionIndex + 1} / {questionAmount}
        </span>
        <span>
          Correctas {correctAnswers} | Incorrectas {incorrectAnswers}
        </span>
      </h3>

      <div className="question__container">
        {/* Question */}
        <h2 className="question__question">{question}</h2>
        {/* 
              Section for the answers 
              Section contains the posible answers and correct
              Each answer is a div
            */}
        <section className="question__answers">
          {answers.map((answer, i) => (
            <div key={i} className="question__answer">
              <input
                className="question__input"
                type="radio"
                id={`Q_${number}_opt_${i}`}
                name={`Q_${number}`}
                value={`Q_${number}_opt_${i}`} // Use this value to check if is in the array
                checked={selectedAnswers[number] === `Q_${number}_opt_${i}`}
                onChange={(event) =>
                  handleAnswerChange(event, number, correct_answer, answer)
                }
              />
              <label
                htmlFor={`Q_${number}_opt_${i}`}
                className={`question__label ${
                  selectedAnswers[number] === `Q_${number}_opt_${i}`
                    ? isAnswerCorrect[number]
                      ? 'question__label--correct'
                      : 'question__label--incorrect'
                    : ''
                }`}
              >
                <p className="question__p">{answer}</p>
              </label>
            </div>
          ))}
        </section>
      </div>
      <div className="question__buttons">
        {questionIndex !== 0 && (
          <button
            className="question__button question__button--back"
            onClick={handlePrevQuestion}
          >
            Anterior
          </button>
        )}

        {questionIndex === questionAmount ? (
          <button
            className="question__button question__button--next"
            onClick={handleNextQuestion}
          >
            Terminar
          </button>
        ) : (
          <button
            className="question__button question__button--next"
            onClick={handleNextQuestion}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};
