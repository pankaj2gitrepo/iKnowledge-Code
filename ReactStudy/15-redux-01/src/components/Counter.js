import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/indexWithReduxToolkit";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter with Redux Toolkit</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={increaseCounterHandler}>Increase Counter</button>
      <button onClick={decrementCounterHandler}>Decrement Counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
