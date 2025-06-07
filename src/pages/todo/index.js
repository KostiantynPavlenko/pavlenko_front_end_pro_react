import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function Todo() {
  
  return (
    <div>
      <h1>Todos</h1>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  )
}