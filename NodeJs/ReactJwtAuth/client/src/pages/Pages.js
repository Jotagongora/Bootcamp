import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Public from "./Public";
import Login from './Login';
import Dashboard from './Dashboard';
import Error from './Error';
import PrivateRoute from './PrivateRoute';

export default function Pages() {
    return (
        <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/Public" component={Public}/>
          <PrivateRoute path="/Dashboard">
              <Dashboard/>
          </PrivateRoute>
          <Route component={Error}/>
        </Switch>
        </div>
    )
}
