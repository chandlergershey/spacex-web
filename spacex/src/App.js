import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

import Home from './pages/LandingPage';
import Launches from './pages/Launches';
import Authentication from './pages/Authentication';
import NextLaunch from './pages/NextLaunch'
import PastLaunches from './pages/PastLaunches';
import UpcomingLaunches from './pages/UpcomingLaunches';

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
        {/* <Router>
          <Switch>
          <Route exact path='/' component={Home}/>
            <Route path='/launches' component={Launches}/>
          </Switch>
        </Router> */}
          
          <Launches />
          {/* <AmplifyAuthenticator /> */}
      </div>
    ) : (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Authentication}/>
          <Launches>
            <Route component={({ match }) =>
              <div>
                <Route path='/past-launches' component={PastLaunches} />
                <Route path='/next-launch' component={NextLaunch} />
                <Route path='/upcoming-launches' component={UpcomingLaunches} />
              </div>
            }/>
          </Launches>

          {/* <Route path='/past-launches' component={Launches}/>
          <Route path='/next-launch' component={NextLaunch}/> */}
        </Switch>
      </Router>
  );
}

export default AuthStateApp;


