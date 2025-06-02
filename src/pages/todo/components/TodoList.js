import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector(state => state.todos);
  
  return (
    <div>
      <h2>Todos: </h2>
      {todos.map(todo => {        
        return <TodoItem 
        key={todo.id}
        todo={todo} />
      })}
    </div>
  )
}