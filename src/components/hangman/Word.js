import React from "react";
import Letter from "./Letter";

function Word({ word }) {
    const componentArray = []

    if (word) {
        for (let i = 0; i < word.length; i++) {
            componentArray.push(<Letter key={i} answer={word[i]} />)
        }
    }

    return(
        <>
        <div className="hangman-word" >
            <p>{componentArray}</p>
        </div>
        </>
    )
}

export default Word;