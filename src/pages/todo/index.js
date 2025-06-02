import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";

export default function Todo() {
  return (
    <div>
      <h1>Todo</h1>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
      <TodoCounter></TodoCounter>
    </div>
  )
}