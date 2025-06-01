import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/actions/counterActions";

export default function Counter() {

  const dispatch = useDispatch();
  const { counter } = useSelector(state => state);
  
  return (
    <div>
      <h1>Counter</h1>
      <div>Value: {counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}