import { Component } from "react";
import Textarea from "./textarea/Textarea";
import ButtonAdd from "./buttonAdd/ButtonAdd";
import Notes from "./notes/Notes";

class Main extends Component {

  render() {
    return (
      <main className="main">
        <p className="main__new-task">New Task</p>
        <Textarea />
        <ButtonAdd />
        <Notes />
     </main>
    );
  }
}

export default Main;