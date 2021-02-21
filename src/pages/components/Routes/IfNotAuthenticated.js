import React from "react";
import { Route, Redirect } from "react-router-dom";


const IsNotAuthenticated = ({ component: Component, user, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            !user.isLoggedIn
                ? <Component {...props} />
                : handleRouteAcess(user, props)

        )}
    />
);
function handleRouteAcess(user, props) {
    switch (user.userRole) {
        case 'Commun':
            return <Redirect to={{ pathname: '/homeUser', state: { from: props.location } }} />
        case 'Admin':
            return <Redirect to={{ pathname: '/homeUser', state: { from: props.location } }} />
    }
};



export default IsNotAuthenticated