
import './App.scss'
import Input from './Input'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { Todo } from './model'
import TodoList from './TodoList'

const App: React.FC = () => {

  const [todo,setTodo] = useState <string> ('');
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      setTodo('')
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <h1 className='mt-5 mb-5'>Taskity</h1>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
