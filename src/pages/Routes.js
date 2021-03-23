import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import IfNotAuthenticated from "./components/Routes/IfNotAuthenticated";
import { connect } from "react-redux";

import Login from "./Login";
import HomeUser from "./HomeUser";
import Register from "./Register";
import HomeAdmin from "./HomeAdmin";
import PageNotFound from "./components/PageNotFound";
class Routes extends Component {
  componentDidMount() {}

  render() {
    const homeAdminRoutes = [
      {
        path: "/admin/index",
        children: () => <HomeAdmin />,
      },
      {
        path: "/salas",
        children: () => <HomeAdmin />,
      },
    ];
    const homeUserRoutes = [
      {
        path: "/user/index",
        children: () => <HomeUser />,
      },
      {
        path: "/user/sala/:roomTitle",
        children: () => <HomeUser />,
      },
    ];
    return (
      <BrowserRouter>
        <Switch>
          <IfNotAuthenticated
            path="/register"
            user={this.props.user}
            component={Register}
          ></IfNotAuthenticated>
          <IfNotAuthenticated
            path="/login"
            user={this.props.user}
            component={Login}
          ></IfNotAuthenticated>
          {homeUserRoutes.map((route, index) => (
            <PrivateRoute
              key={index}
              path={route.path}
              children={<route.children />}
            ></PrivateRoute>
          ))}
          {homeAdminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              children={<route.children />}
            ></Route>
          ))}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.user,
});

export default connect(mapStateToProps)(Routes);
