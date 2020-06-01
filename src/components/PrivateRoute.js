import React from "react";
import { Route, Redirect } from "react-router-dom";

import { store } from './../store';


const PrivateRoute = ({ component: Component,role, ...rest }) => (
	console.log('storeeeeeeeeee11111 state',store.getState()),
  <Route
    {...rest}
	render={(props) =>{	
		if(role !== 0){
			return <Component {...props} />
		}
		else if (store.getState().user.role !== role ) {
			return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />		
		}
		
    }}
  />
);

export default PrivateRoute;
