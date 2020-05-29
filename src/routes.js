import React, { lazy } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Sign from './components/Login/Login'
import HomeUser from './HomeUser'
import Register from './components/Register/Register'



const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1> Página Inicial</h1>} />
	  <PrivateRoute path="/HomeUser" component={HomeUser}></PrivateRoute>
	  <PrivateRoute path="/login" component={Sign}></PrivateRoute>
	  <PrivateRoute path="/register" component={Register}></PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default Routes;
