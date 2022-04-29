import React, { useEffect, useState } from "react";
import Image from "./Image";
import Hint from "./Hint";
import Word from "./Word";
import { Link } from "react-router-dom";

function Hangman({id}) {
    const [level, setLevel] = useState("")

    useEffect(() => {
        console.log(id)
        const url = `http://localhost:3001/levels/${id.id}`

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
        <Link to="/">Home</Link>

        <Image />
        <Hint hint={level.hint} />
        <Word />
        </>
    )
}

export default Hangman;