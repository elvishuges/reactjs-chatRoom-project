import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, roles, ...rest }) => (
	<Route {...rest} render={props => {
		if (!roles) {
			console.log('if 1');
			// not logged in so redirect to login page with the return url
			return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
		}

		// check if route is restricted by role
		if (roles && roles.indexOf(user.userRole) === -1) {
			console.log('if 2');
			// role not authorised so redirect to home page
			return <Redirect to={{ pathname: '/login' }} />
		}
		console.log('out if');

		// authorised so return component
		return <Component {...props} />
	}} />
)

export default PrivateRoute
