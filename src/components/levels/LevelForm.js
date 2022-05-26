import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitLevel, formSelector } from "../../features/form/formSlice";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LevelForm() {
    // initialize redux hook
    const dispatch = useDispatch()
    const { message, loading, hasErrors } = useSelector(formSelector)

    console.log(message, loading, hasErrors)

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
        <Form>
            <Form.Label>
                Word: 
                <Form.Control type="text" value={word} onChange={e => setWord(e.target.value)} />
            </Form.Label>
            <br />
            <Form.Label>
                Hint: 
                <Form.Control type="text" value={hint} onChange={e => setHint(e.target.value)} />
            </Form.Label>                 
            <br /><br />
            <Button variant="primary" onClick={e => handleSubmit(e)}>Submit</Button>
        </Form>
        <br />
        <Link to={"/"}><Button variant="secondary">Back to Homepage</Button></Link>
        </>
    )
}