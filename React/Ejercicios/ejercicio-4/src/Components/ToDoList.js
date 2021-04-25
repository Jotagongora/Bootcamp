export default function ToDoList({todos}) {

    function crossOut(completed) {
        return (e) => {
            (completed) ? (completed = !completed) : (completed = !completed);
            e.target.classList.toggle("crossOut");
        }
    }

    let addClass = "";

    return(
        <div className=""><ul className="list-group">
            {todos.map(todo => {
                if (todo.completed === true) {
                    addClass = "crossOut list-group-item";
                } else {
                    addClass = "list-group-item";
                }
                return (
                        <li onClick={crossOut(todo.completed)} key={todo.id} className={addClass}>{todo.id} {todo.title}</li>
                )
            })}
            </ul>
        </div>
    )
    

};