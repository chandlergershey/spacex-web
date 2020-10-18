import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from './pages/LandingPage';
import Auth from './pages/Auth';
import Launches from './pages/Launches';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Auth}/>
        </Switch>
      </Router>
    );
  }
}

export default App;