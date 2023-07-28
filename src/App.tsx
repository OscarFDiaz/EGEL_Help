import { informatica2023 } from './data/informatica2023';
import './styles/App.css';

function App() {
  const { questions } = informatica2023;
  return (
    <>
      <h3>Selecciona tu respuesta</h3>

      {questions.map((question) => (
        <div key={question.number}>
          {/* Question */}
          <h2>{question.question}</h2>
          {/* 
            Section for the answers 
            Section contains the posible answers and correct
            Each answer is a div
          */}
          <section>
            {question.answers.map((answer, i) => (
              <div key={i}>
                <input
                  type="radio"
                  id={i.toString()}
                  name="select"
                  value={i.toString()}
                />
                <label htmlFor={i.toString()}>
                  <p>{answer}</p>
                </label>
              </div>
            ))}
          </section>
        </div>
      ))}

      <div>
        <button>Back</button>
        <button>Next</button>
      </div>
    </>
  );
}

export default App;
