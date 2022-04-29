import './App.css';
import Home from './components/Home';
// import Levels from './components/Levels';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hangman from './components/Hangman';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hangman</h1>
      <Home />

      <Link to="/levels">
        <button type="button">
          Let's Get Started
        </button>
      </Link>

      {/* <Levels /> */}
      {/* <ErrorBoundary> */}
        {/* <Hangman /> */}
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
