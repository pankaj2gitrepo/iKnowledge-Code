import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 14,
    fontWeight: "bold",
    width: 60,
    padding: 12,
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span>{this.props.children}</span>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
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
