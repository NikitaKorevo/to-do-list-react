import { Component } from "react";

class ButtonAdd extends Component {
  asdf() {
    console.log('123');
  }
  
  render() {
    

    return (
      <button onClick={() => this.asdf()} id="myButtonAdd" className="button-add">ADD</button>
    );
  }
}

export default ButtonAdd;