import {useState} from 'react';

export default function Input({setTodos}) {

    const [currentInput, setCurrentInput] = useState("");

    function handleTitle(e) {
        setCurrentInput(e.target.value);
        };

    const [ID, setID] = useState(21);

    

    function addTodo(e) {
        e.preventDefault();
        setID(ID + 1);
        const newTodo = {id: ID, title: currentInput, completed: false};
        setTodos(currentTodos => [newTodo,...currentTodos]);
        setCurrentInput("");
    }

    

    return (
        <div className="container">
            <form onSubmit={addTodo}>
            <input onChange={handleTitle} type="text" value={currentInput} className="w-100 my-3" placeholder="Introduce un nuevo To-Do"/>
            </form>
        </div>
    )

};