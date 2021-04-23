import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import ToDoList from './Components/ToDoList';
import Input from './Components/Input';

function App() {

  const [todos, setTodos] = useState([
    {userId: 1, title: "Ejercicio-1", Completed: "NO"},
    {userId: 2, title: "Ejercicio-2", Completed: "NO"},
    {userId: 3, title: "Ejercicio-3", Completed: "NO"}
  ]);

  return (
    <div className="container">
      <h3 className="text-center">To Do List</h3>
      <Input />
      <ToDoList todos = {todos}/>
    </div>
  );
}

export default App;
