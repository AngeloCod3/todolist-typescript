import { Todo } from './model';
import SingleTodo from './SingleTodo';
import './TodoList.scss';

interface Props {
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC = ({todos,setTodos}: Props) => {
  return (
    <ul className='list-group todos mt-3'>
        {todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </ul>
  )
}

export default TodoList;