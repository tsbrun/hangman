import React from "react";
import { Link } from "react-router-dom";

export default class LevelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hint: '',
            word: ''
        }

        this.handleHintChange = this.handleHintChange.bind(this)
        this.handleWordChange = this.handleWordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleHintChange(event) {
        this.setState({hint: event.target.value})
    }

    handleWordChange(event) {
        this.setState({word: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:3001/levels", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(this.state)
        }).then(resp => {
            if (resp.status === 200) {
                alert("Level submitted successfully.")
            }
        }).catch(err => {
            console.log(err)
        })

        this.setState({ hint: '', word: '' })
    }

    render() {
        return (
            <>
            <h2>Add Your Own Level</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Word: 
                    <input type="text" value={this.state.word} onChange={this.handleWordChange} />
                </label>
                <br /><br />
                <label>
                    Hint: 
                    <textarea type="text" value={this.state.hint} onChange={this.handleHintChange} />
                </label>                 
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <Link to={"/"}>Back to Homepage</Link>
            </>
        )
    }
}