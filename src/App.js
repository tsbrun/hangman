import './App.css';
import Home from './components/Home';

import { Link } from "react-router-dom";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLevels, levelsSelector } from './features/levels/levelsSlice';

import Level from './components/Level';

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

      <div className="levels-container">
            {levels.map(x => (
                <Link to={`/hangman/${x.id}`} state={{ level: x }}>
                    <Level key={x.id} />
                </Link>
            ))}
        </div>
    </div>
  );
}

export default App;
