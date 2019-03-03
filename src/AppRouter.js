import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import SignIn from './containers/Signin/SignIn';
import SignUp from './containers/SignUp/SignUp';

import Dashboard from './containers/Dashboard/Dashboard';

const isUserLogIn = false;

const Home = () => {
  return isUserLogIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isUserLogIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const NoMatch = () => {
  return (
    <div>
      <h3>Page not found</h3>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/Signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
