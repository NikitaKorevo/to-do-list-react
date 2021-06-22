import './scss/app.scss';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './components/main/main';

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

export default App;
