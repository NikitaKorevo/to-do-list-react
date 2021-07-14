import { Component } from "react";
import Note from "./note/Note";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.loadingLocalStorage(),
      textareaValueNow: null,
      isButtonAddPressed: false,
    }
  }

  loadingLocalStorage() {
    let arrNote = [];
    arrNote = JSON.parse(localStorage.getItem('LocalStorageNotes'));
    if (arrNote === null){
      arrNote = [];
    }
    return arrNote;
  }

  createTemplateNote = (idForLastNote) => {
    let arrNote = {
      key: idForLastNote,
      id: idForLastNote,
      p: String(this.state.textareaValueNow),
      isImportant: false,
      isDone: false,
    };
    return arrNote;
  }

  addNoteLocalStorage = () => {
    let arrNote = [];
    let idForLastNote = 0;
    arrNote = JSON.parse(localStorage.getItem('LocalStorageNotes'));
    if (arrNote === null){
      arrNote = [];
    } else {
      if (arrNote.length !== 0) idForLastNote = arrNote[arrNote.length - 1].id + 1;
    }

    let TemplateNote = this.createTemplateNote(idForLastNote);

    arrNote[arrNote.length] = TemplateNote;
    localStorage.setItem('LocalStorageNotes',JSON.stringify(arrNote));
    this.props.handleButtonAddFalse();

    // для state
    let arrStateNotes = this.state.notes;
    this.setState({notes: arrStateNotes[arrStateNotes.length] = arrNote})
    return arrStateNotes;
  }

   componentDidUpdate() {
    if (this.state.textareaValueNow !== this.props.textareaValueNow){
      this.setState({textareaValueNow : this.props.textareaValueNow});
    }

    if (this.state.isButtonAddPressed !== this.props.isButtonAddPressed) {
      this.setState({isButtonAddPressed : this.props.isButtonAddPressed}); 
    }

    if (this.props.isButtonAddPressed === true) {
      this.addNoteLocalStorage();
    }

  }

  handleDeleteNote = (id) => {
    this.setState(({notes}) => ({
      notes: notes.filter((note) => note.id !== id)
    }));

    let arrNote = this.loadingLocalStorage();
    arrNote = arrNote.filter((note) => note.id !== id);
    localStorage.setItem('LocalStorageNotes',JSON.stringify(arrNote));
  }

  handleImportantNote = (index) => {
    const arr = this.state.notes;
    const result = arr.map((el, i) => {
      return index === el.id ? { ...el, isImportant: !el.isImportant} : el;
    });
    this.setState({ notes: result});
 
    let arrNote = this.loadingLocalStorage();
    arrNote = arrNote.map((el, i) => {
      return el.id === index ? {...el, isImportant: !el.isImportant} : el;
    })
    localStorage.setItem('LocalStorageNotes',JSON.stringify(arrNote));
    return result;
  }

  handleLineThroughNote = (index) => {
    const arr = this.state.notes;
    const result = arr.map((el, i) => {
      return index === el.id ? { ...el, isDone: !el.isDone } : el;
    });
    this.setState({ notes: result});

    let arrNote = this.loadingLocalStorage();
    arrNote = arrNote.map((el, i) => {
      return el.id === index ? {...el, isDone: !el.isDone} : el;
    })
    localStorage.setItem('LocalStorageNotes',JSON.stringify(arrNote));
    return result;
  }

  render() {
    let headerInput = this.props.headerInput || '';
    let copyNotes = this.state.notes;
    const WhichPressedNavButton = this.props.WhichPressedNavButton;

    if (WhichPressedNavButton === 'myButtonAll') {
      return (
        <ul id="myUl" className="list">
  
          { copyNotes.map((note) => {
            return (note.p.toLowerCase()).includes(headerInput.toLowerCase()) ?(
            <Note
              handleDeleteNote={this.handleDeleteNote}
              handleImportantNote={this.handleImportantNote}
              handleLineThroughNote = {this.handleLineThroughNote}
              key={note.key}
              id={note.id}
              p={note.p}
              isImportant={note.isImportant}
              isDone={note.isDone} 
            />
          ) : console.log();
        })}
          
        </ul>
      );
    }
    
    if (WhichPressedNavButton === 'myButtonActive') {
      return (
        <ul id="myUl" className="list">
  
          { copyNotes.map((note) => {
            return (note.isDone === false && (note.p.toLowerCase()).includes(headerInput.toLowerCase())) ? (
            <Note
              handleDeleteNote={this.handleDeleteNote}
              handleImportantNote={this.handleImportantNote}
              handleLineThroughNote = {this.handleLineThroughNote}
              key={note.key}
              id={note.id}
              p={note.p}
              isImportant={note.isImportant}
              isDone={note.isDone}
            />
          ) : console.log();
          })}
        </ul>
      );
    }

    if (WhichPressedNavButton === 'myButtonDone') {
      return (
        <ul id="myUl" className="list">
  
          { copyNotes.map((note) => {
            return (note.isDone === true && (note.p.toLowerCase()).includes(headerInput.toLowerCase())) ? (
            <Note
              handleDeleteNote={this.handleDeleteNote}
              handleImportantNote={this.handleImportantNote}
              handleLineThroughNote = {this.handleLineThroughNote}
              key={note.key}
              id={note.id}
              p={note.p}
              isImportant={note.isImportant}
              isDone={note.isDone} 
            />
          ) : console.log();
          })}
        </ul>
      );
    }
  }
}

export default Notes;