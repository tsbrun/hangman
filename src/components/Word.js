import React from "react";

function Word({ word }) {
    const componentArray = []

    function handleOnKeyDown(e) {
        console.log(e.key)
    }

    if (word) {
        for (const letter in word) {
            componentArray.push(<input className="hangman-input" type="text" value="_" onKeyDown={handleOnKeyDown}></input>)
        }
    } 

    return(
        <>
        {/* tabIndex="0" onKeyDown={(e) => console.log(e.key)} */}
        <div className="hangman-word" >
            <p>{componentArray}</p>
        </div>
        </>
    )
}

export default Word;