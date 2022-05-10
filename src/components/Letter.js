import React, { useState } from "react";

export default function Letter() {
    const [letter, setLetter] = useState('')

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