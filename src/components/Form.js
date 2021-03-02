import Button from "./Button";
import Input from "./Input";
import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form>
                <label>
                    Meddelande:
                    <Input />
                    <Button />
                </label>
            </form>
        );
    }
}

export default Form;