import './App.css';
import Home from './components/Home';
import Levels from './components/Levels';
import ErrorBoundary from './components/ErrorBoundary';
import Hangman from './components/Hangman';

function App() {
  return (
    <div className="App">
      <h1>Hangman</h1>
      <Home />
      <Levels />
      {/* <ErrorBoundary> */}
        <Hangman />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
