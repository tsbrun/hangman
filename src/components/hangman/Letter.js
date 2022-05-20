import React from "react";

class Letter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: this.props.key,
            answer: this.props.answer,
            input: ''
        }
    }

    handleOnKeyDown = (e) => {
        switch(e.key) {
            case "Backspace":
                break;
            case "Tab":
                break;
            case " ":
                break;
            default: 
                if (this.state.answer === e.key) {
                    console.log('yay, green box')
                } else if (this.state.answer !== e.key) {
                    console.log('whoops, red box')
                }
                return;
        }
    }

    render() {
        return (
            <>
            <input 
            className="hangman-input" 
            type="text" 
            value={this.state.letter} 
            onKeyDown={this.handleOnKeyDown} 
            onChange={ (e) => this.setState({input: e.target.value}) }
            >
            </input>
            </>
        )
    }
}

export default Letter;