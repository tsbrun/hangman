import React, { useState } from "react";

export default function Letter({ key, answer }) {
    const [letter, setLetter] = useState('')

    console.log(key, answer)

    function handleOnKeyDown(e) {
        console.log(e.key)
    }

    return(
        <>
        <input 
        className="hangman-input" 
        type="text" 
        value={letter} 
        onKeyDown={handleOnKeyDown} 
        onChange={ (e) => setLetter(e.target.value) }
        >
        </input>
        </>
    )
}