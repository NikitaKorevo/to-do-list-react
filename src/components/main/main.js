import { Component } from "react";
import Textarea from "./textarea/Textarea";
import ButtonAdd from "./buttonAdd/ButtonAdd";
import Notes from "./notes/Notes";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textareaValueNow: '',
      arrNotes: '',
      isButtonAddPressed: false,
      clearTextareaValue: false
    }
  }
  
  transferTextareaValue = (value, statusClearTextareaValue) => {
    let textareaValueNow = value;
    this.setState({ textareaValueNow: textareaValueNow});
    this.setState({clearTextareaValue: statusClearTextareaValue});
  }

  handleButtonAddPressed = () => {
    console.log('Кнопка нажата');
    if (this.state.textareaValueNow !== ''){
      this.setState({isButtonAddPressed: true});
      this.setState({clearTextareaValue: true});
    }
  }

  handleButtonAddFalse = () => {
    this.setState({isButtonAddPressed : false});
    this.setState({textareaValueNow: ''});
  }

  render() {
    return (
      <main className="main">
        <p className="main__new-task">New Task</p>
        <Textarea clearTextareaValue={this.state.clearTextareaValue} isButtonAddPressed={this.state.isButtonAddPressed} transferTextareaValue={this.transferTextareaValue} />
        <ButtonAdd handleButtonAddPressed={this.handleButtonAddPressed} textareaValueNow={this.state.textareaValueNow}/>
        <Notes headerInput={this.props.headerInput} WhichPressedNavButton={this.props.WhichPressedNavButton} handleButtonAddFalse={this.handleButtonAddFalse} isButtonAddPressed={this.state.isButtonAddPressed} textareaValueNow={this.state.textareaValueNow}/>
     </main>
    );
  }
}

export default Main;