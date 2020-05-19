import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated  } from "./auth";
import Sign from './components/Login/Login'
import Register from './components/Register/Register'


const PrivateRoute = ({component:Component, ...rest }) => (
	<Route {...rest} 
	    render={ props =>(
		isAuthenticated() ? (
			<Component {...props}/>
		):(
			<Redirect to ={{pathname:'/' ,state:{from:props.location}}}/>
		)
	)}/>
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1> Página Inicial não autenticada</h1>} />
	  <PrivateRoute path="/app" component={() => <h1> oiii</h1>}></PrivateRoute>
	  <PrivateRoute path="/login" component={Sign}></PrivateRoute>
	  <PrivateRoute path="/register" component={Register}></PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default Routes;
