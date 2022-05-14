import React, { useEffect } from "react";
import Image from "./Image";
import Hint from "./Hint";
import Word from "./Word";
import { Link } from "react-router-dom";
import { fetchLevels, levelsSelector } from "../features/levels/levelsSlice";
import { useDispatch, useSelector } from "react-redux";

function Hangman({ id }) {
    // initialize redux hook
    const dispatch = useDispatch()
    const { levels, loading, hasErrors } = useSelector(levelsSelector)


    // dispatch thunk when component first mounts
    useEffect(() => {
        dispatch(fetchLevels())
    }, [])

    const level = levels[id.id]
    
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