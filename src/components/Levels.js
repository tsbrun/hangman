import React, { useEffect, useState } from "react";
import Level from "./Level";
import { Link } from "react-router-dom";

function Levels() {
    const [levels, setLevels] = useState("")

    useEffect(() => {
        const url = "http://localhost:3001/levels"

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setLevels(json.levels)
            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData()
    }, [])

    const levelsArray = []

    for (let i = 0; i < levels.length; i++) {
        levelsArray.push(i)
    }

    return(
        <>
        <Link to="/">Home</Link>
        
        <div className="levels-container">
            {levelsArray.map(x => (
                <Link to={`/hangman/${x + 1}`}>
                    <Level key={x + 1} id={x + 1} />
                </Link>
            ))}
        </div>
        </>
    )
}

export default Levels;