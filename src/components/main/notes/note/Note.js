import { Component } from "react";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    console.log(this.props.handleDeleteNote);
  }

  deleteNote = (id) => {
    this.props.toggleDeleteNote(id);
  }

  importantNote = (id) => {
    this.props.toggleImportantNote(id);
  }

  render() {
    const {id, p, isImportant, isDone} = this.props;
    const important = isImportant ? 'important'  : undefined;
    const done = isDone ? 'line-through' : undefined;

    return (
        <li>
          <p className={[important, done].join(' ')}>{p}</p>
          <button onClick={() => this.importantNote(id)}  className="button-important">MARK IMPORTANT</button>
          <button onClick={() => this.deleteNote(id)} className="button-trash"></button>
        </li> 
    );
  }
}

export default Note;

//(isDone ? 'line-through' : undefined)

/*hundleDeleteNote = (id) => {
      this.setState({notes}) => ({
        notes: notes.filter(note => note.id !== id)
      }));
    } */