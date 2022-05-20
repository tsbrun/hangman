import React from "react";
import Level from "../components/levels/Level";
import { Link } from "react-router-dom";

function Levels(props) {
    const levels = props.data

    return(
        <>        
        <div className="levels-container">
            {levels.map(x => (
                <Link to={`/hangman/${x.id}`} state={{ level: x }}>
                    <Level key={x.id} id={x.id} />
                </Link>
            ))}
        </div>
        </>
    )
}

export default Levels;