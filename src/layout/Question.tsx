import { informatica2023 } from '../data/informatica2023';
import { useHandleQuestion } from '../hooks/useHandleQuestion';

export const Question = () => {
  const { questions } = informatica2023;

  const {
    questionIndex,
    questionAmount,
    selectedAnswers,
    handleAnswerChange,
    handleNextQuestion,
    handlePrevQuestion,
  } = useHandleQuestion();

  // Not used: correct_answer, number, type
  const { answers, question, number } = questions[questionIndex];

  return (
    <div className="question">
      <h3 className="question__subtitle">
        Selecciona tu respuesta {questionIndex + 1} / {questionAmount}
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
                id={`Pregunta_${number}_inciso_${i}`}
                name={`Pregunta_${number}`}
                value={`Pregunta_${number}_inciso_${i}`}
                checked={selectedAnswers[number] === `Pregunta_${number}_inciso_${i}`}
                onChange={(event) => handleAnswerChange(event, number)}
              />
              <label
                htmlFor={`Pregunta_${number}_inciso_${i}`}
                className="question__label"
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
