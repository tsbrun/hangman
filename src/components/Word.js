import React from "react";

function Word({ word }) {
    // function handleKeyDown(e) {
    //     console.log(e)
    // }

    return(
        <>
        <div tabIndex="0" onKeyDown={(e) => console.log(e.key)}>
            <p>{word}</p>
        </div>
        </>
    )
}

export default Word;