import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import ToDoList from '../Components/ToDoList';
import Input from '../Components/Input';

function Page4() {

  const API_Todos = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_Todos)
    .then(response => response.json())
    .then(data => setTodos(data.slice(0, 20)))
  }, []);

  return (
    <div className="container">
      <h3 className="text-center">To Do List</h3>
      <Input todos = {todos} setTodos = {setTodos} />
      <ToDoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default Page4;
