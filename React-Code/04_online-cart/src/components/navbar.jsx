import React from "react";

// Stateless functional Compoment
const NavBar = (props) => {
  console.log(`NavBar - stateless functional component()`);
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar
            <span className="badge bg-pill bg-secondary m-2">
              {props.totalCounters}
            </span>
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
