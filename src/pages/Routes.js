import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { connect } from 'react-redux';

import Sign from "./Login"
import HomeUser from "./HomeUser";
import Register from "./Register";
import HomeAdmin from "./HomeAdmin"
import ResponsiveDrawer from "./components/HomeAdmin/Drawer"
import Dashboard from "./components/HomeAdmin/Dashboard/Dashboard";
import Lojas from "./components/HomeAdmin/Lojas/Lojas";


class Routes extends Component {

  omponentDidMount() {
    console.log('==== Routes mounted! ====');
  }

  render() {

    console.log('*** Routes props ***', this.props);

          const homeAdminRoutes = [
        {
          path: "/dashboard",
          exact: true,
          sidebar: () => <ResponsiveDrawer/>,
          main: () => <Dashboard/>
        },
        {
          path: "/lojas",
          sidebar: () => <ResponsiveDrawer/>,
          main: () => <Lojas/>
        },        
      ];
    return (
      <BrowserRouter>
        <Switch >
          <Route exact path="/" component={() => <h1> Página Inicial </h1>} />
          <Route path="/HomeUser" user={this.props.user} component={HomeUser}></Route>
          <PrivateRoute path="/register" user={this.props.user} component={Register}></PrivateRoute>         
          <Route path="/drawer" component={ResponsiveDrawer}></Route>
          <PrivateRoute path="/homeAdmin" component={HomeAdmin} user={this.props.user}></PrivateRoute>
          <Route path="/login" component={Sign}></Route>
        </Switch>
        <Switch>
            {homeAdminRoutes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
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






