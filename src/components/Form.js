import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData: 0
        }
    }
    render() {
        return (
            <form>
                <label>
                    Meddelande:
                    <p>{this.props.message}</p>
                    <Input />
                    <Button />
                </label>
            </form>
        );
    }
}

export default Form;