import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./action";
export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(Increment())}>INCREMENT</button>
      <button onClick={() => dispatch(Decrement())}>INCREMENT</button>
    </div>
  );
}
