import './App.css';
import Home from './components/Home';

import { Link } from "react-router-dom";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLevels, levelsSelector } from './features/levels/levelsSlice';

function App() {
  // initialize redux hook
  const dispatch = useDispatch()
  const { levels, loading, hasErrors } = useSelector(levelsSelector)


  // dispatch thunk when component first mounts
  useEffect(() => {
      dispatch(fetchLevels())
  }, [dispatch])
  
  console.log(levels)

  return (
    <div className="App">
      <h1>Hangman</h1>
      <Home />

      <h2>Let's Get Started</h2>

      {/* <Levels /> */}

      {/* <Link to="/levels">
        <button type="button">
          Let's Get Started
        </button>
      </Link> */}
    </div>
  );
}

export default App;
