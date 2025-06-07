import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../../../store/thunks/todosThunk";

export default function TodoForm() {
  const [title = '', setTitle] = useState();
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if(!title.trim()) return;

    dispatch(addTodo({title, completed: false}));
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  )
}