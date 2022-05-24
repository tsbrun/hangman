import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LevelForm() {
    const [hint, setHint] = useState("")
    const [word, setWord] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        // on refactor, dispatch sendUserLevel() action

        // fetch("http://localhost:3001/levels", {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json' 
        //     },
        //     body: JSON.stringify(this.state)
        // }).then(resp => {
        //     if (resp.status === 200) {
        //         alert("Level submitted successfully.")
        //     }
        // }).catch(err => {
        //     console.log(err)
        // })

        // reset form
        setHint("")
        setWord("")
    }

    return (
        <>
        <h2>Add Your Own Level</h2>
        <form onSubmit={handleSubmit()}>
            <label>
                Word: 
                <input type="text" value={word} onChange={e => setWord(e.target.value)} />
            </label>
            <br /><br />
            <label>
                Hint: 
                <textarea type="text" value={hint} onChange={e => setHint(e.target.value)} />
            </label>                 
            <br /><br />
            <input type="submit" value="Submit" />
        </form>
        <br />
        <Link to={"/"}>Back to Homepage</Link>
        </>
    )
}