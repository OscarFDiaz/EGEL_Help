import './styles/App.css';
import { Question } from './layout/Question';

function App() {
  return (
    <main className="main">
      <section className="section__question">
        <Question />
      </section>
    </main>
  );
}

export default App;
