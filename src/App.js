import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';

import './App.css';
import Quiz from "./components/Quiz";
import Introductie from "./components/Introductie";

function App() {
  return (
      <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/play" exact component={Quiz}/>
          <Route path="/intro" exact component={Introductie}/>
      </Router>

  );
}

export default App;
