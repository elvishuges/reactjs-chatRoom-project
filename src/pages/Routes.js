import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import IfNotAuthenticated from "./components/Routes/IfNotAuthenticated";
import { connect } from 'react-redux';

import Login from "./Login"
import HomeUser from "./HomeUser";
import Register from "./Register";
import HomeAdmin from "./HomeAdmin"
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./components/HomeAdmin/Dashboard/Dashboard";
import Lojas from "./components/HomeAdmin/Salas/Salas";
class Routes extends Component {

  componentDidMount() {
    console.log('==== Routes mounted! ====');
  }

  render() {

    const homeAdminRoutes = [
      {
        path: "/homeAdmin",
        sidebar: () => <HomeAdmin />,
      },
      {
        path: "/salas",
        sidebar: () => <HomeAdmin />,
      },
    ];
    console.log('Userrrrrr', this.props.user);
    return (
      <BrowserRouter>
        <Switch >
          <IfNotAuthenticated path="/register" user={this.props.user} component={Register}></IfNotAuthenticated>
          <IfNotAuthenticated path="/login" user={this.props.user} component={Login}></IfNotAuthenticated>
          <PrivateRoute roles={["Common"]} path="/homeUser" user={this.props.user} component={HomeUser}></PrivateRoute>
          <Route path="/homeAdmin" component={HomeAdmin} user={this.props.user}></Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Switch>
          {homeAdminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              children={<route.sidebar />}
            ></Route>
          ))}
        </Switch>
      </BrowserRouter>
    )
  }

}

const mapStateToProps = (store) => ({
  user: store.user
});

export default connect(mapStateToProps)(Routes);






