import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import { Todo } from 'model';

const App: React.FC = () => {
const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();
if (todo){
  setTodos([...todos, {id: Data.now(), todo, isDone: false}])
}
  
}

  return (
    <div className="App">
    <span className="heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd= />
    </div>
  );
}

export default App;
