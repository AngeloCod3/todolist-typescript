import React, { useState } from 'react'
import './SingleTodo.scss'
import {AiFillDelete, AiOutlineEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import { Todo } from './model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const SingleTodo: React.FC = ({todo, todos,  setTodos}: Props) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };

      const handleDelete = (id:number) => {
        setTodos(
            todos.filter((todo) =>
              todo.id !== id
            )
          );
      }

      const handleEdit = (e: React.FormEvent, id:number) => {
        e.preventDefault();
        setTodos(todos.map((todo)=> todo.id === id ? {...todo, todo: editTodo}:todo));
        setEdit(false);
      }
    


  return (
    <form onSubmit={e => handleEdit(e,todo.id)} className='list-group-item d-flex justify-content-between align-items-center ms-5 me-5 pt-3'>
        
        {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="h2 input__edit"

            />
          ) : todo.isDone ? (
            <s className="opacity-25 h2">{todo.todo}</s>
          ) : (
            <span className="h2">{todo.todo}</span>
          )}
        
        <div className="icons-container">
          
          <span className="icon me-2" onClick={() => handleDone(todo.id)}>
              <MdDone className='fs-3'/>
          </span>
          <span className="icon me-2" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete className='fs-3'/>
          </span>
          <span className="icon me-2" onClick={() => {
              if (!edit && !todo.isDone) {
                  setEdit(!edit)
          }} } >
              <AiOutlineEdit className='fs-3'/>
          </span>

        </div>
    </form>
  )
}

export default SingleTodo