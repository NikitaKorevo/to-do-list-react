import { Component } from "react";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  deleteNote = (id) => {
    this.props.handleDeleteNote(id);
  }

  importantNote = (id) => {
    this.props.handleImportantNote(id);
  }

  lineThroughNote = (id) => {
    this.props.handleLineThroughNote(id);
  }

  render() {
    const {id, p, isImportant, isDone} = this.props;
    const important = isImportant === true ? 'important'  : undefined;
    const done = isDone === true ? 'line-through' : undefined;

    return (
        <li>
          <p onClick={() => this.lineThroughNote(id)} className={[important, done].join(' ')}>{p}</p>
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

// {[important, done].join(' ')}