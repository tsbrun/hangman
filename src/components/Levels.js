import React, { useEffect } from "react"; // useState
import { useDispatch, useSelector } from "react-redux";
import Level from "./Level";
import { Link } from "react-router-dom";
import { fetchLevels, levelsSelector } from "../features/levels/levelsSlice";

function Levels() {
    // initialize redux hook
    const dispatch = useDispatch()
    const { levels, loading, hasErrors } = useSelector(levelsSelector)


    // dispatch thunk when component first mounts
    useEffect(() => {
        dispatch(fetchLevels())
    }, [])

    return(
        <>
        <Link to="/">Home</Link>
        
        <div className="levels-container">
            {levels.map(x => (
                <Link to={`/hangman/${x.id}`}>
                    <Level key={x.id} id={x.id} />
                </Link>
            ))}
        </div>
        </>
    )
}

export default Levels;