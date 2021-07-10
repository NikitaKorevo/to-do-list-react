import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
      <div className="header__logo"></div>
      <input id="myInputSearch" className="header__search" type="search" placeholder="Search task for to do" />
    </header>
    );
  }
}

export default Header;