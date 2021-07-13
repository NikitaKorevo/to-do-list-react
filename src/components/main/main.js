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
    }
  }
  
  transferTextareaValue = (value) => {
    let textareaValueNow = value;
    this.setState({ textareaValueNow: textareaValueNow});
  }

  handleButtonAddPressed = () => {
    console.log('Кнопка нажата');
    if (this.state.textareaValueNow !== '') this.setState({isButtonAddPressed: true});
  }

  handleButtonAddFalse = () => {
    this.setState({isButtonAddPressed : false});
  }

  render() {
    return (
      <main className="main">
        <p className="main__new-task">New Task</p>
        <Textarea transferTextareaValue={this.transferTextareaValue} />
        <ButtonAdd handleButtonAddPressed={this.handleButtonAddPressed} />
        <Notes WhichPressedNavButton={this.props.WhichPressedNavButton} handleButtonAddFalse={this.handleButtonAddFalse} isButtonAddPressed={this.state.isButtonAddPressed} textareaValueNow={this.state.textareaValueNow}/>
     </main>
    );
  }
}

export default Main;