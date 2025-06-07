import { useDispatch } from "react-redux";
import { updateTodoStatus } from "../../../store/thunks/todosThunk";

export default function TodoItem({ todo }) {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newStatus = e.target.checked;

    dispatch(updateTodoStatus({id: todo.id, completed: newStatus}));
  }

  return (
    <div>
      <p>{todo.title}</p>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={handleChange}/>
    </div>
  )
}