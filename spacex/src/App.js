import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Auth} from 'aws-amplify';

// pages
import Home from './pages/LandingPage';
//import Auth from './pages/Auth';
import Launches from './pages/Launches';
import Authentication from './pages/Authentication';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Authentication}/>
        </Switch>
      </Router>
    );
  }
}

export default App;