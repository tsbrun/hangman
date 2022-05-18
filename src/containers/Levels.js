import React from "react"; // useState
import Level from "../components/levels/Level";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Levels(props) {
    // const location = useLocation()
    // const { levels } = location.state
    const levels = props.data

    return(
        <>
        {/* <Link to="/">Home</Link> */}
        
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