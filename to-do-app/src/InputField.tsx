import React from 'react'
import "./InputField.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {
    return (
        <form action="" className="input">
            <input  value={todo} 
            onChange= { (e) => setTodo(e.target.value)}
            className="input__box" 
            type="input" 
            placeholder="Enter here"/>
            <button className="input__submit" >Go</button>
        </form>
    )
}

export default InputField