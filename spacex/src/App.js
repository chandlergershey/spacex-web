import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Auth} from 'aws-amplify';

// pages
import Home from './pages/LandingPage';
//import Auth from './pages/Auth';
import Launches from './pages/Launches';
import MyAuth from './pages/MyAuth';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MyAuth}/>
          <Route path='/login' component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;