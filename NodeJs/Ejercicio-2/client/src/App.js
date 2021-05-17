import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import ToDoList from './Components/ToDoList';
import Input from './Components/Input';

function App() {

  const API_Todos = "http://localhost:3001/todolist/";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_Todos)
    .then(response => response.json())
    .then(data => setTodos(data.toDoList))
  }, []);

  return (
    <div className="container">
      <h3 className="text-center">To Do List</h3>
      <Input todos = {todos} setTodos = {setTodos} />
      <ToDoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
