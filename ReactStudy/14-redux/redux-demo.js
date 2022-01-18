const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  console.log(`counterReducer`);
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);

console.log(`store.getState(): ${JSON.stringify(store.getState())}`);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(`counterSubscriber latestState: ${JSON.stringify(latestState)}`);
};
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
