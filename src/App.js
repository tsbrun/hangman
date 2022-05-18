import './App.css';
import Home from './components/Home';

import { Link } from "react-router-dom";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLevels, levelsSelector } from './features/levels/levelsSlice';
import Levels from './containers/Levels';

function App() {
  // initialize redux hook
  const dispatch = useDispatch()
  const { levels, loading, hasErrors } = useSelector(levelsSelector)


  // dispatch thunk when component first mounts
  useEffect(() => {
      dispatch(fetchLevels())
  }, [dispatch])
  
  return (
    <div className="App">
      <h1>Hangman</h1>
      <Home />

      {/* <Link to={"/levels"} state={{ levels: levels }}>
        <button>Let's Get Started</button>
      </Link> */}

      <h2>Let's Get Started</h2>

      <Levels data={levels}  />

      <br /><br /> 

      <Link to={"/add-new-level"}>
        <button>Add Your Own Level</button>
      </Link>
      
    </div>
  );
}

export default App;
