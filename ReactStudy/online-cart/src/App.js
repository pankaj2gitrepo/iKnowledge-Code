import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="Container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
