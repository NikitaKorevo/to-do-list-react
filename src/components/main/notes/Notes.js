import { Component } from "react";
import Note from "./note/Note";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
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
      ]
    }
  }

  handleDeleteNote = (id) => {
    this.setState(({notes}) => ({
      notes: notes.filter((note) => note.id !== id)
    }));
  }

  handleImportantNote = (id) => {
    const arr = this.state.notes;
    const result = arr.map((el, i) => {
      return id === i ? { ...el, isImportant: !this.state.notes[i].isImportant} : el;
    });
    this.setState({ notes: result});
  }

  handleLineThroughNote = (id) => {
    const arr = this.state.notes;
    const result = arr.map((el, i) => {
      return id === i ? { ...el, isDone: !this.state.notes[i].isDone } : el;
    });
    this.setState({ notes: result});
  }


  render() {
    const {notes} = this.state;
    console.log({notes});
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
  }
}

export default Notes;

// <Note id={this.state.notes[0].id} p={this.state.notes[0].p} isImportant={this.state.notes[0].isImportant} isDone={this.state.notes[0].isDone} />
// notes: this.state.notes[id].isImportant = false 