import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitLevel, formSelector } from "../../features/form/formSlice";
import { Link } from "react-router-dom";

export default function LevelForm() {
    // initialize redux hook
    const dispatch = useDispatch()
    // const { message, loading, hasErrors } = useSelector(formSelector)
    // const { message } = useSelector((state) => state.message)
    // const { loading } = useSelector((state) => state.loading)
    // const { hasErrors } = useSelector((state) => state.hasErrors)

    // console.log(message, loading, hasErrors)

    const [hint, setHint] = useState("")
    const [word, setWord] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        // properly format data before it is sent to api
        const postData = {hint: hint, word: word}
        dispatch(submitLevel(postData))

        // reset form
        setHint("")
        setWord("")
    }

    return (
        <>
        <h2>Add Your Own Level</h2>
        <form onSubmit={e => handleSubmit(e)}>
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