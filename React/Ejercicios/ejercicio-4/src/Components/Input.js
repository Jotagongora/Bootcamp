import {useState} from 'react';

export default function Input({setTodos,todos}) {

    const [currentInput, setCurrentInput] = useState("");

    function handleTitle(e) {
        setCurrentInput(e.target.value);
        };

    function addTodo(e) {
        e.preventDefault();
        console.log(e.target.lastChild);
        const newTodo = {id: todos.length + 1, title: currentInput, completed: false}
        setTodos(todos => [newTodo,...todos])
    }

    

    return (
        <div className="container">
            <form onSubmit={addTodo}>
            <input onChange={handleTitle} type="text" className="w-100 my-3" placeholder="Introduce un nuevo To-Do"/>
            </form>
        </div>
    )

};