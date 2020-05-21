import React, { lazy } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Sign from './components/Login/Login'
import Register from './components/Register/Register'



const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1> Página Inicial</h1>} />
	  <PrivateRoute path="/app" component={() => <h1> oiii</h1>}></PrivateRoute>
	  <PrivateRoute path="/login" component={Sign}></PrivateRoute>
	  <PrivateRoute path="/register" component={Register}></PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default Routes;
