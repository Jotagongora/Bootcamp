import {useState} from 'react';

export default function Input({setTodos,todos}) {

    const [currentInput, setCurrentInput] = useState("");

    function handleTitle(e) {
        setCurrentInput(e.target.value);
        };

    

    function addTodo(e) {
        e.preventDefault();
        const newTodo = {id: todos[0].id + 20, title: currentInput, completed: false};
        setTodos(todos => [newTodo,...todos]);
        e.target.children[0].value = "";
        setCurrentInput("");
    }

    

    return (
        <div className="container">
            <form onSubmit={addTodo}>
            <input onChange={handleTitle} type="text" className="w-100 my-3" placeholder="Introduce un nuevo To-Do"/>
            </form>
        </div>
    )

};