import { Component } from "react";

class Nav extends Component {
  render() {
    return (
    <nav className="nav">
      <div className="nav__lane"></div>
      <button id="myButtonAll" className="nav__button-pressed">All</button>
      <button id="myButtonActive">Active</button>
      <button id="myButtonDone">Done</button>
    </nav>
    );
  }
}

export default Nav;