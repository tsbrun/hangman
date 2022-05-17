import React from "react";

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
        alert('A level was submitted: ' + this.state.hint + ' ' + this.state.word)
        console.log(this.state)
        event.preventDefault()
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
            </>
        )
    }
}