import {useState} from 'react';

export default function Input() {

    const [currentInput, setCurrentInput] = useState("");

    function newTodo(e) {
        e.preventDefault();
        setCurrentInput(e.target.children[0].value);
        console.log(currentInput);
    }

    return (
        <div className="container">
            <form onSubmit={newTodo}>
            <input type="text" className="w-100 my-3" placeholder="Introduce un nuevo To-Do"/>
            </form>
        </div>
    )

};