import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  styles = {
    width: 90,
  };

  constructor() {
    super();
    console.log(`Counters - constructor()`);
  }

  render() {
    console.log(`Counters - render()`);
    const { counters, onReset, onIncrement, onDelete } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          >
            <label style={this.styles}>Counter #{counter.id}</label>
          </Counter>
        ))}
      </div>
    );
  }

  componentDidMount() {
    console.log(`Counters - componentDidMount()`);
  }
}

export default Counters;
