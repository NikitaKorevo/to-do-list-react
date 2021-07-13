import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  HeaderInputChange = event => {
    this.props.getHeaderInput(event.target.value);
  }

  render() {
    return (
      <header className="header">
      <div className="header__logo"></div>
      <input onChange={this.HeaderInputChange} id="myInputSearch" className="header__search" type="search" placeholder="Search task for to do" />
    </header>
    );
  }
}

export default Header;