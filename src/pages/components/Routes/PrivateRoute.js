import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!user.isLoggedIn) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }
      if (!roles) {
        // not roles
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      // check if route is restricted by role
      if (roles && roles.indexOf(user.role.name) === -1) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: "/login" }} />;
      }
      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
