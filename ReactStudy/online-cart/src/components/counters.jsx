import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.incrementHandle}
            onDelete={this.deleteHandle}
          >
            <label>Counter #{counter.id}</label>
          </Counter>
        ))}
      </div>
    );
  }

  incrementHandle = (counter) => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters });
  };

  deleteHandle = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
}

export default Counters;
