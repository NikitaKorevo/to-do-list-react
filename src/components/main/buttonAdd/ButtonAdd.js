import { Component } from "react";

class ButtonAdd extends Component {
  ButtonAddPressed() {
    this.props.handleButtonAddPressed();
  }
  
  render() {
    const textareaValueNow = this.props.textareaValueNow;
    const backgroundColorButtonAdd = textareaValueNow === '' ? "rgb(150, 150, 150)" : undefined;
    
    return (
      <button onClick={() => this.ButtonAddPressed()} id="myButtonAdd" className="button-add" style={{backgroundColor: backgroundColorButtonAdd}}>ADD</button>
    );
  }
}

export default ButtonAdd;