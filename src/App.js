import './App.css';
import Home from './components/Home';

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
    </div>
  );
}

export default App;
