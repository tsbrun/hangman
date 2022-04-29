import './App.css';
import Home from './components/Home';
// import Levels from './components/Levels';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hangman from './components/Hangman';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link> {" | "}
      <Link to="/levels">Levels</Link> {" | "}
      <Link to="/hangman">Hangman</Link>

      <h1>Hangman</h1>
      {/* <Home /> */}
      {/* <Levels /> */}
      {/* <ErrorBoundary> */}
        {/* <Hangman /> */}
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
