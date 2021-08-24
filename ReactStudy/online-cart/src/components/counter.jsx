import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => this.incrementHandle({ id: 1 })}
          >
            increment
          </button>
        </div>
      </React.Fragment>
    );
  }

  incrementHandle = (product) => {
    console.log("IncrementHandle called, Count: ", this.state.count);
    console.log("product: ", product);
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
