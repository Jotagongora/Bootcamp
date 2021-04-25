import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import ToDoList from './Components/ToDoList';
import Input from './Components/Input';

function App() {

  const url = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setTodos(data.slice(0, 20)))
  }, []);

  return (
    <div className="container">
      <h3 className="text-center">To Do List</h3>
      <Input todos = {todos} setTodos = {setTodos} />
      <ToDoList todos = {todos}/>
    </div>
  );
}

export default App;
