import { Component } from "react";

class ButtonAdd extends Component {
  ButtonAddPressed() {
    this.props.handleButtonAddPressed();
  }
  
  render() {
    

    return (
      <button onClick={() => this.ButtonAddPressed()} id="myButtonAdd" className="button-add">ADD</button>
    );
  }
}

export default ButtonAdd;