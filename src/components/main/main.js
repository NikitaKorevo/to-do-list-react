import { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <p className="main__new-task">New Task</p>
        <textarea id="myTextarea" name=""></textarea>
        <button id="myButtonAdd" className="button-add">ADD</button>
        <ul id="myUl" className="list"></ul>
     </main>
    );
  }
}

export default Main;