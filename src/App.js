import './App.css';
import Home from './components/Home';

import { Link } from "react-router-dom";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLevels, levelsSelector } from './features/levels/levelsSlice';
import Levels from './containers/Levels';

import Button from 'react-bootstrap/Button';

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

      <Levels data={levels}  />

      <br /><br /> 

      <Link to={"/add-new-level"}>
        <Button variant="primary">Add Your Own Level</Button>
      </Link>
      
    </div>
  );
}

export default App;
