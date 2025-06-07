import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTodos } from "../../../store/thunks/todosThunk";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();

  const { todos, loading, error } = useSelector(state => {    
    return state.todo
  });

  useEffect(() => {
    dispatch(getAllTodos());
  }, [])

  if (loading) {
    return <h2>loading posts...</h2>
  }
  if (error) {
    return <span style={{color: '#0f0f0'}}>Error: {error}</span>
  }

  return (
    <div>
      {todos.map(todo => {        
        return <TodoItem 
          key={todo.id}
          todo={todo}></TodoItem>
      })}
    </div>
  )

}