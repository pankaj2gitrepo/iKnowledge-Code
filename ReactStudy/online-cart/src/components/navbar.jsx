import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
