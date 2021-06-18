import React from "react";
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/services' component={Projects} />
          <Route path='/products' component={AboutMe} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
