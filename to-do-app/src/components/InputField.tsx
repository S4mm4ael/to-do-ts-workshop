import React from 'react'
import "./InputField.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
    return (
        <form action="" className="input" onSubmit={handleAdd}>
            <input  
            value={todo} 
            onChange= {(e) => setTodo(e.target.value)}
            className="input__box" 
            type="input" 
            placeholder="Enter here"/>
            <button className="input__submit" type="submit" >Go</button>
        </form>
    )
}

export default InputField