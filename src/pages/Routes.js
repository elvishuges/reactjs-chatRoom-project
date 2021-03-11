import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import IfNotAuthenticated from "./components/Routes/IfNotAuthenticated";
import { connect } from "react-redux";

import Login from "./Login";
import HomeUser from "./HomeUser";
import Register from "./Register";
import HomeAdmin from "./HomeAdmin";
import PageNotFound from "./components/PageNotFound";
import Room from "./Room";
import Index from "./components/HomeUser/Index/Index";
class Routes extends Component {
  componentDidMount() {
    console.log("==== Routes mounted! ====");
  }

  render() {
    const homeAdminRoutes = [
      {
        path: "/admin/index",
        sidebar: () => <HomeAdmin />,
      },
      {
        path: "/salas",
        sidebar: () => <HomeAdmin />,
      },
    ];
    const homeUserRoutes = [
      {
        path: "/user/index",
        sidebar: () => <HomeUser />,
      },
    ];
    console.log("Userrrrrr", this.props.user);
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
          <PrivateRoute
            roles={["Common"]}
            path="/room"
            user={this.props.user}
            component={Room}
          ></PrivateRoute>
          {homeUserRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              children={<route.sidebar />}
            ></Route>
          ))}
          {homeAdminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              children={<route.sidebar />}
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
