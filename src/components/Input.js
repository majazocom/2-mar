const Input = (props) => {
    return (
        <input type="text" onChange={props.updateMessage} />
    );
}

export default Input;