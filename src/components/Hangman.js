import React, { useEffect, useState } from "react";
import Image from "./Image";
import Hint from "./Hint";
import Word from "./Word";

function Hangman() {
    const [level, setLevel] = useState("")

    useEffect(() => {
        const url = "http://localhost:3001/levels/1"

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                // console.log('i fire once')
                // console.log(json)
                setLevel(json)
            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData()
        // console.log(level)
    }, [])

    
    return(
        <>
        <h1>Hangman</h1>
        <Image />
        <Hint hint={level.render.hint} />
        <Word />
        </>
    )
}

export default Hangman;