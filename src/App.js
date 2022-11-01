
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/navBar';
import { Home } from './screens/Home';
import AboutMe from './screens/AboutMe';
import './App.css';

const App = () => (
    <div className="App">
      <NavBar/> 
    <Router><Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/landing' element={< Home />}></Route>
        <Route exact path='/about' element={< AboutMe />}></Route>
    </Routes></Router>
    </div>
);

export default App;
