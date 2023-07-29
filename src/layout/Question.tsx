import { informatica2023 } from '../data/informatica2023';

export const Question = () => {
  const { questions } = informatica2023;

  return (
    <div className="question">
      <h3 className="question__subtitle">Selecciona tu respuesta</h3>

      {questions.map((question) => (
        <div key={question.number} className="question__container">
          {/* Question */}
          <h2 className="question__question">{question.question}</h2>
          {/* 
            Section for the answers 
            Section contains the posible answers and correct
            Each answer is a div
          */}
          <section className="question__answers">
            {question.answers.map((answer, i) => (
              <div key={i} className="question__answer">
                <input
                  className="question__input"
                  type="radio"
                  id={i.toString()}
                  name="select"
                  value={i.toString()}
                />
                <label htmlFor={i.toString()} className="question__label">
                  <p className="question__p">{answer}</p>
                </label>
              </div>
            ))}
          </section>
        </div>
      ))}

      <div className="question__buttons">
        <button className="question__button question__button--back">Back</button>
        <button className="question__button question__button--next">Next</button>
      </div>
    </div>
  );
};
