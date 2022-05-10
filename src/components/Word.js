import React from "react";
import Letter from "./Letter";

function Word({ word }) {
    const componentArray = []

    if (word) {
        for (const letter in word) {
            componentArray.push(<Letter />)
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