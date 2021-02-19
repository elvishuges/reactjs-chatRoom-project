import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import IsNotAuthenticated from "./components/Routes/IsNotAuthenticated";
import { connect } from 'react-redux';

import Login from "./Login"
import HomeUser from "./HomeUser";
import Register from "./Register";
import HomeAdmin from "./HomeAdmin"
import Dashboard from "./components/HomeAdmin/Dashboard/Dashboard";
import Lojas from "./components/HomeAdmin/Lojas/Lojas";


class Routes extends Component {

  componentDidMount() {
    console.log('==== Routes mounted! ====');
  }

  render() {

    const homeAdminRoutes = [
      {
        path: "/homeAdmin",
        exact: true,
        sidebar: () => <HomeAdmin />,
        main: () => <Dashboard />
      },
      {
        path: "/lojas",
        sidebar: () => <HomeAdmin />,
        main: () => <Lojas />
      },
    ];
    return (
      <BrowserRouter>
        <Switch >
          <Route exact path="/" component={() => <h1> Página Inicial </h1>} />
          <PrivateRoute roles={['User']} path="/homeUser" user={this.props.user} component={HomeUser}></PrivateRoute>
          <Route path="/register" user={this.props.user} component={Register}></Route>
          {/* <Route path="/homeAdmin" component={HomeAdmin} user={this.props.user}></Route> */}
          <IsNotAuthenticated path="/login" user={this.props.user} component={Login}></IsNotAuthenticated>
          <Route component={() => <h1> 404 Pagina não encontrada </h1>} />
        </Switch>
        <Switch>
          {homeAdminRoutes.map((route, index) => (
            <PrivateRoute
              roles={['Admin']}
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.sidebar />}
            ></PrivateRoute>
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






