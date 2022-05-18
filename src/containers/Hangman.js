import React, { useState } from "react";
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

    // onClick event handler
    function checkGuess(event) {
        const guess = event.key
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                // make shallow copy of guesses
                let guessesCopy = guesses 
                // make shallow copy of indice to mutate
                let guessFromGuessesCopy = {...guessesCopy[i]}
                // set event.key as value at i 
                guessFromGuessesCopy = guess
                // put new value into copy of array
                guessesCopy[i] = guessFromGuessesCopy
                // set state to new copy
                setGuesses({guessesCopy})
            }
        }
        var j = (word.indexOf(guess))
        if (j === -1) {
            setCounter(counter - 1)
        }
    }

    console.log(word, guesses, counter)

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    return(
        <>
        <Link to="/">Home</Link>   
        {/* | <Link to="/levels">Levels</Link> */}

        <Image />
        <Hint hint={level.hint} />
        {/* <Word word={level.word} /> */}

        <div className="word-container">
            {alphabet.map(letter => <button onClick={e => checkGuess(e)}>{letter}</button>)}
        </div>
        </>
    )
}

export default Hangman;