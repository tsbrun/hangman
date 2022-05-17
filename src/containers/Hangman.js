import React from "react";
import Image from "../components/hangman/Image";
import Hint from "../components/hangman/Hint";
import Word from "../components/hangman/Word";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Hangman() {
    const location = useLocation()
    const { level } = location.state
    
    return(
        <>
        <Link to="/">Home</Link> | <Link to="/levels">Levels</Link>

        <Image />
        <Hint hint={level.hint} />
        <Word word={level.word} />
        </>
    )
}

export default Hangman;