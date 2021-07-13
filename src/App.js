import { Component } from 'react';
import './scss/app.scss';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main/main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      WhichPressedNavButton: 'myButtonAll'
    }
  }
  getHeaderInput = (stringHeaderInput) => {
    this.setState({headerInput: stringHeaderInput})
  }

  getPressedNavButton = (namePressedNavButton) => {
    this.setState({WhichPressedNavButton: namePressedNavButton});
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header getHeaderInput={this.getHeaderInput} />
          <Nav getPressedNavButton={this.getPressedNavButton} />
          <Main headerInput={this.state.headerInput} WhichPressedNavButton={this.state.WhichPressedNavButton} />
        </div>
      </div>
    );
  }
}

export default App;

 /* takeStatusNavButton = () => {
  console.log('123');
} */

/* 
function App() {
  

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App; */