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
                setLevel(json.render)
            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData()
        console.log(level)
    }, [])

    
    return(
        <>
        <Image />
        <Hint hint={level.hint} />
        <Word />
        </>
    )
}

export default Hangman;