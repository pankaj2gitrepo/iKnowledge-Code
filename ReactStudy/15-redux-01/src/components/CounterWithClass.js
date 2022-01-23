import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";

class CounterWithClass extends Component {
  incrementCounterHandler() {
    this.props.increment();
  }

  increaseCounterHandler() {
    this.props.increase();
  }

  decrementCounterHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter with Class</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <button onClick={this.incrementCounterHandler.bind(this)}>
          Increment Counter
        </button>
        <button onClick={this.increaseCounterHandler.bind(this)}>
          Increase Counter by 5
        </button>
        <button onClick={this.decrementCounterHandler.bind(this)}>
          Decrement Counter
        </button>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    increment: () => disptach({ type: "increment" }),
    increase: () => disptach({ type: "increase", amount: 5 }),
    decrement: () => disptach({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithClass);
