import React from "react";
import { Route, Redirect } from "react-router-dom";

import { store } from '../../../store';


const PrivateRouteLogin = ({ component: Component,role, ...rest }) => (	
  <Route
    {...rest}
	render={(props) =>{	
		if(store.getState().user.role == 0){
			return <Component {...props} />
		}
		else{
			switch (store.getState().user.role) {
				case 1:
					return <Redirect to={{ pathname: '/HomeUser', state: { from: props.location } }} />		
					
				case 2:
					return <Redirect to={{ pathname: '/HomeUser2', state: { from: props.location } }} />	
				default:
					break;
			}
		}			
    }}
  />
)




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

export {PrivateRoute, PrivateRouteLogin};
