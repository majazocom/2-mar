import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class Form extends Component {
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