import { Component } from "react";

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textareaValue: '',
      isButtonAddPressed: false,
      clearTextareaValue: false,
    };
  }

  componentDidUpdate() {
    if (this.props.clearTextareaValue === true) {
      this.clearTextareaValue();
    }
  } 

  textareaChange = event => {
    this.setState({textareaValue: event.target.value});
    this.props.transferTextareaValue(event.target.value, false);
  }

  clearTextareaValue = () => {
      if (this.state.textareaValue !== '') {
        this.setState({textareaValue: ''});
      }
  }


  render() {
    return (
      <textarea onChange={this.textareaChange} value={this.state.textareaValue}></textarea>
    );
  }
}

export default Textarea;