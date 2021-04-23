export default function ToDoList({todos}) {

    function crossOut(e) {
        console.log(e.target.userId);
    }

    return(
        <div className="">
            {todos.map(todo => {
                return (
                    <ul className="list-group" key={todo.userId}>
                        <li onClick={crossOut} className="list-group-item">{todo.userId} {todo.title} {todo.Completed}</li>
                    </ul>
                )
            })}
        </div>
    )
    

};