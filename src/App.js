import rachel from './rachel.svg';
import enggLogo from './enggLogo.svg';
import NavBar from './components/navBar';
import './App.css';

const introText = `const intro = “Hi! My " \n + "name is Rachel Ellis”); \n` +
// eslint-disable-next-line no-useless-concat
`console.log($` + `{intro});`;

const introTextMobile = "Hey, my name is Rachel Ellis!";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="split left desktop">
        <h1>{introText}</h1>
        <p>I’m a 4th year Software Engineering student at the University of Alberta </p>
        <img src={enggLogo} className="logo" alt="engg logo" />
      </div>
      <div className="split right desktop">
        <img src={rachel} className="me" alt="me!" />
      </div>
      <div className="mobile">
        <h1>{introTextMobile}</h1>
        <p>I’m a 4th year Software Engineering student at the University of Alberta </p>
        <img src={rachel} className="me" alt="me!" />
        <img src={enggLogo} className="logo" alt="engg logo" />
      </div>
    </div>
  );
}

export default App;
