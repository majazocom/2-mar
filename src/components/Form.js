import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newMessage: ''
        }
    }

    updateMessage = (e) => {
        this.setState({
            newMessage: e.target.value
        })
    }

    setMessage = (e) => {
        e.preventDefault();
        this.setState({
            newMessage: ''
        })
        this.props.setMessageInApp(this.state.newMessage);
    }

    render() {
        return (
            <form>
                <label>
                    Type message:
                    <Input value={this.state.newMessage} updateMessage={this.updateMessage} />
                    <Button onSubmit={this.setMessage} />
                </label>
            </form>
        );
    }
}

export default Form;