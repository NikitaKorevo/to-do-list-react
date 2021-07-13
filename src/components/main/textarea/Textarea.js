import { Component } from "react";

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

   textareaChange = event => {
    this.props.transferTextareaValue(event.target.value);
  } 


  render() {
    return (
      <textarea onChange={this.textareaChange} ></textarea>
    );
  }
}

export default Textarea;