import React from "react";
import { Route, Redirect } from "react-router-dom";


const IsNotAuthenticated = ({ component: Component, user, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            !user.isLoggedIn
                ? <Component {...props} />
                : handleAcess(user, props, Component)

        )}
    />
);

const handleAcess = (user, props, Component) => {
    switch (user.userRole) {
        case 'Commun':
            return <Redirect to="/homeUser" />
        case 'Admin':
            return <Redirect to="/homeAdmin" />
        default:
            return <Component {...props} />
    }
}

export default IsNotAuthenticated