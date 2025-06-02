import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/actions/todoActions";

export default function TodoForm() {
  const [title = '', setTitle] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim()) return;

    dispatch(addTodo(title));
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}