import React, { useEffect, useState } from "react";
import Image from "../components/hangman/Image";
import Hint from "../components/hangman/Hint";
import Word from "../components/hangman/Word";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Hangman() {
    // get level from location object
    const location = useLocation()
    const { level } = location.state

    // split word into letters
    const word = level.word.split("")

    // set up initial state
    const [guesses, setGuesses] = useState([])
    const [counter, setCounter] = useState(8)
    const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'])

    // onClick event handler
    function checkGuess(event) {
        const guess = event.target.innerText
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                let copy = guesses 
                copy.splice(i, 0, guess)
                setGuesses(copy)
                // remove guess from alphabet so player can't use it again
                let alphabetCopy = alphabet 
                alphabetCopy = alphabetCopy.filter(letter => letter !== guess)
                setAlphabet(alphabetCopy)
            } 
        } 
        var j = (word.indexOf(guess))
        if (j === -1) {
            setCounter(counter - 1)
        }
    }
    
    return(
        <>
        <Link to="/">Home</Link>   
        {/* | <Link to="/levels">Levels</Link> */}

        <Image />
        <Hint hint={level.hint} />
        {/* <Word word={level.word} /> */}

        <div className="word-container">
            {alphabet.map(letter => <button onClick={e => checkGuess(e)}>{letter}</button>)}
            <br /><br />
            <h3>{guesses.join('')}</h3>
        </div>
        </>
    )
}

export default Hangman;