import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 14,
    fontWeight: "bold",
    width: 60,
    padding: 12,
  };

  constructor() {
    super();
    console.log(`Counter - constructor()`);
  }

  render() {
    console.log(`Counter - render()`);
    const { children, counter, onIncrement, onDelete } = this.props;

    return (
      <React.Fragment>
        <div>
          <span>{children}</span>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => onIncrement(counter)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log(`Counter - componentDidMount()`);
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
