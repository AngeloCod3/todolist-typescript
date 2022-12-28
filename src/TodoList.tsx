import { Todo } from './model';
import './TodoList.scss';

interface Props {
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC = ({todos,setTodos}: Props) => {
  return (
    <div className='todos'>
        {}
    </div>
  )
}

export default TodoList;