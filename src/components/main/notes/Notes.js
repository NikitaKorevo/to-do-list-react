import { Component } from "react";
import Note from "./note/Note";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          key: 1,
          id: 1,
          p: 'У тебя получилось!',
          isImportant: true,
          isDone: true,
        },
        {
          key: 2,
          id: 2,
          p: 'Вторая заметка',
          isImportant: false,
          isDone: false,
        }
      ]

      
    }

    
  }

  toggleDeleteNote = (id) => {
    this.setState(({notes}) => ({
      notes: notes.filter((note) => note.id !== id)
    }));
  }

  /* toggleImportantNote = (id) => {
    this.setState( ({notes}) => ({
      notes: notes.map((note) => )
    }));
  }  */

  render() {
    const {notes} = this.state;
    console.log({notes});
    return (
      <ul id="myUl" className="list">
        { notes.map(note => (
          <Note
            toggleImportantNote={this.toggleImportantNote}
            toggleDeleteNote={this.toggleDeleteNote}
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