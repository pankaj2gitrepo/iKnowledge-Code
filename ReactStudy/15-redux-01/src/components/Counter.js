import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementCounterHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementCounterHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={decrementCounterHandler}>Decrement Counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
