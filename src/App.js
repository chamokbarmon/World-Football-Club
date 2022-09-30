import './App.css';
import Question from './componeds/Question/Question';
import Teams from './componeds/Teams/Teams';

function App() {
  return (
    <div className="App">
        <h1>World Football Club</h1>
        <Teams></Teams>
        <Question></Question>
    </div>
  );
}

export default App;
