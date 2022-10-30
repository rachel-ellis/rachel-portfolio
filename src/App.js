import rachel from './rachel.svg';
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={rachel} className="Rachel" alt="logo" />
        <p>
        def intro():
          print(“Hi! My name
          is Rachel Ellis”)
        </p>
      </header>
    </div>
  );
}

export default App;
