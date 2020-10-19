import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

import Home from './pages/LandingPage';
import Launches from './pages/Launches';
import Authentication from './pages/Authentication';

Amplify.configure(awsconfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <Launches />
      </div>
    ) : (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Authentication}/>
        </Switch>
      </Router>
  );
}

export default AuthStateApp;


