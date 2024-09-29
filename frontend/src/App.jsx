import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <div>
      Hello World 
      <CreateToDo></CreateToDo>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App
