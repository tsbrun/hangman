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
        // if (e.key === /^[a-zA-Z]*$/) {
            if (this.state.answer === e.key) {
                console.log('yay, green box')
            } else if (this.state.answer !== e.key) {
                console.log('whoops, red box')
            }
        // }
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