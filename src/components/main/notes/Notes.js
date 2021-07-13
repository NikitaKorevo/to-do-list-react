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
    console.log('Arrnote в addNoteLocalStorage  ' + arrNote);
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
    console.log('arrStateNotes' + arrStateNotes.length);
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

  handleImportantNote = (id) => {
    const arr = this.state.notes;
    const result = arr.map((el, i) => {
      return id === i ? { ...el, isImportant: !this.state.notes[i].isImportant} : el;
    });
    this.setState({ notes: result});

    let arrNote = this.loadingLocalStorage();
    arrNote[id].isImportant = !arrNote[id].isImportant;
    localStorage.setItem('LocalStorageNotes',JSON.stringify(arrNote));
  }

  handleLineThroughNote = (id) => {
    const arr = this.state.notes;
    const result = arr.map((el, i) => {
      return id === i ? { ...el, isDone: !this.state.notes[i].isDone } : el;
    });
    this.setState({ notes: result});

    let arrNote = this.loadingLocalStorage();
    arrNote[id].isDone = !arrNote[id].isDone;
    localStorage.setItem('LocalStorageNotes',JSON.stringify(arrNote));
  }


  render() {
    let copyNotes = this.state.notes;
    const WhichPressedNavButton = this.props.WhichPressedNavButton;
    console.log(WhichPressedNavButton);
    if (WhichPressedNavButton === 'myButtonAll' || WhichPressedNavButton === undefined) {
      return (
        <ul id="myUl" className="list">
  
          { copyNotes.map((note) => {
            return (
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
          )})}
          
        </ul>
      );
    }
    
    if (WhichPressedNavButton === 'myButtonActive') {
      return (
        <ul id="myUl" className="list">
  
          { copyNotes.map((note) => {
            return note.isDone === false ? (
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
            return note.isDone === true ? (
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

/* render() {
  const {notes} = this.state;
  console.log(this.props.StatusNavButton);
  return (
    <ul id="myUl" className="list">
      { notes.map(note => (
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
      ))}
      
    </ul>
  );
} */


// <Note id={this.state.notes[0].id} p={this.state.notes[0].p} isImportant={this.state.notes[0].isImportant} isDone={this.state.notes[0].isDone} />
// notes: this.state.notes[id].isImportant = false 

//[{"key":0,"id":0,"p":"asdfasdf","isImportant":false,"isDone":false}]
//LocalStorageNotes

/* notes: [
        {
          key: 0,
          id: 0,
          p: 'У тебя получилось! asdfasdfasdfssssadfsdfsdf asd fasd fa sdf asf sadf sd sa sadf sda sd sd asd d as s dasd s  ',
          isImportant: false,
          isDone: false,
        },
        {
          key: 1,
          id: 1,
          p: 'Вторая заметка',
          isImportant: true,
          isDone: true,
        },
        {
          key: 2,
          id: 2,
          p: '333333 заметка',
          isImportant: false,
          isDone: false,
        }
      ]  */