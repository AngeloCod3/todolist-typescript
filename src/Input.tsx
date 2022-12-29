import React from 'react';

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const Input: React.FC<Props> = ({todo,setTodo,handleAdd})=> {
  return (
    <form className="input-group mb-2 ps-5 pe-5 outline-none" onSubmit={handleAdd}>
      
        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" className="form-control" placeholder="Write a task"/>

        <button className="btn btn-success" type="submit">Add</button>
    </form>
  )
}

export default Input