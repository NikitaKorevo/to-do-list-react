import { Component } from "react";

class Textarea extends Component {
  /* let this.valueTextarea = textareaElement.current.value;
 */
  render() {
    return (
      <textarea ref={this.textareaElement}></textarea>
    );
  }
}

export default Textarea;