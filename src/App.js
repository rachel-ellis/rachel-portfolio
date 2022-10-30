import rachel from './rachel.svg';
import enggLogo from './enggLogo.svg';
import NavBar from './components/navBar';
import './App.css';

const introText = `const intro = “Hi! My " \n + "name is Rachel Ellis”); \n` +
`console.log($` + `{intro});`;

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="split left">
        <h1>{introText}</h1>
        <p>I’m a 4th year Software Engineering student at the University of Alberta </p>
        <img src={enggLogo} className="logo" alt="engg logo" />
      </div>
      <div className="split right">
        <img src={rachel} className="me" alt="me!" />
      </div>
    </div>
  );
}

export default App;
