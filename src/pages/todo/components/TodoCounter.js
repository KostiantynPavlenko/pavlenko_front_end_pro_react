import { useSelector } from "react-redux";

export default function TodoCounter() {
  const { counter } = useSelector(state => state.todos)

  return (
    <div>
      <p>Todo counter: {counter}</p>
    </div>
  )
}