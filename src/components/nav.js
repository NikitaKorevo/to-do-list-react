import { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navButton: [
        {
          key: 0,
          id: 0,
          name: 'myButtonAll',
          className: 'nav__button-pressed',
        },
        {
          key: 1,
          id: 1,
          name: 'myButtonActive',
          className: undefined,
        },
        {
          key: 2,
          id: 2,
          name: 'myButtonDone',
          className: undefined,
        }
      ]
    }
  }

  clearNavButton = (e) => {
    const eventTarget = e.target.id;
    if (eventTarget === '') return;

    let copyState = this.state.navButton;
    let result = copyState.map ((el, i) => {
      return {...el, className:undefined};
    })
    this.setState({navButton: result});

    this.handleNavButton(result, eventTarget);
    return result;
  }

  handleNavButton = (result, eventTarget) => {
    result = result.map ((el, i) => {
      return el.name === eventTarget ? {...el, className: 'nav__button-pressed'} : el;
    }) 

    this.setState({navButton: result});
    this.setPressedNavButton(eventTarget)
    return result;
  }

  setPressedNavButton(eventTarget) {
    this.props.getPressedNavButton(eventTarget);
  }

  render() {
    return (
    <nav className="nav" onClick={this.clearNavButton}>
      <div className="nav__lane"></div>
      <button id="myButtonAll" className={this.state.navButton[0].className}>All</button>
      <button id="myButtonActive" className={this.state.navButton[1].className}>Active</button>
      <button id="myButtonDone" className={this.state.navButton[2].className}>Done</button>
    </nav>
    );
  }
}

export default Nav;