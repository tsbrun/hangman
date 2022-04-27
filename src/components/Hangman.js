import React from "react";
import Image from "./Image";
import Hint from "./Hint";
import Word from "./Word";

function Hangman() {
    return(
        <>
        <h1>Hangman</h1>
        <Image />
        <Hint />
        <Word />
        </>
    )
}

export default Hangman;