import React, { Component } from 'react';

class Barista extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.confirm()
    }

    state = {
        text: "Hello, How May I Help You Today?"
    }

    confirm() {
        this.setState({ text: "One " + this.props.coffee + "? That will be $" + this.props.value });
        setTimeout(() => { this.waiting() }, 5000);
    }

    waiting() {
        this.setState({ text: "Waiting for " + this.props.coffee });
        setTimeout(() => { this.finish() }, 5000);
    }

    finish() {
        this.setState({ text: "Here is your " + this.props.coffee + ". Enjoy!" });
    }

    render() {

        return (

            <div>

                {this.state.text}

            </div>
        )
    }
}

export default Barista;
