export default function ToDoList({todos, setTodos}) {

    function crossOut(completed) {
        return (e) => {
            (completed) ? (completed = !completed) : (completed = !completed);
            e.target.classList.toggle("crossOut");
        }
    }

    let addClass = "";

    function remove(ID) {
        return () => {
            setTodos(todos.filter(todo => todo.id !== ID))
        }
    }

    return(
        <div className=""><ul className="list-group">
            {todos.map(todo => {
                if (todo.completed === true) {
                    addClass = "crossOut list-group-item";
                } else {
                    addClass = "list-group-item";
                }
                return (
                        <li onClick={crossOut(todo.completed)} key={todo.id} className={addClass}>{todo.id - 1}: {todo.title} <button onClick={remove(todo.id)} className="btn btn-danger float-right">X</button></li>
                )
            })}
            </ul>
        </div>
    )
    

};