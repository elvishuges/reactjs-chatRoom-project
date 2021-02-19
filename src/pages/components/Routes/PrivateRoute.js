import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, roles, ...rest }) => (

	<Route
		{...rest}
		render={props => {
			if (roles && roles.indexOf(user.userRole) === -1) {
				return <Redirect to={{ pathname: '/login' }} />
			}
			return <Component {...props} />
		}}
	/>

);

export default PrivateRoute;
