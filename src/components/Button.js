const Button = (props) => {
    return ( 
        <input type="submit" value="Send" onClick={props.onSubmit} />
     );
}

export default Button;