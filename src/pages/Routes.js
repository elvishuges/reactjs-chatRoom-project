import React, { lazy } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {PrivateRoute, PrivateRouteLogin} from "./components/Routes/PrivateRoute";
import Sign from "./Login"
import HomeUser from "./HomeUser";
import Register from "./Register";
import HomeAdmin from "./HomeAdmin"
import ResponsiveDrawer from "./components/HomeAdmin/Drawer"


export const Routes = () => (
  <BrowserRouter>
    <Switch>	 
      <Route exact path="/" component={() => <h1> Página Inicial </h1>} />
      <PrivateRoute
        path="/HomeUser"
        role={1}
        component={HomeUser}
      ></PrivateRoute>
      <PrivateRoute path="/register" component={Register}></PrivateRoute>
      <Route path="/register" component={Register}></Route>
      <Route path="/drawer" component={ResponsiveDrawer}></Route>
      <Route path="/homeAdmin" component={HomeAdmin}></Route>
      <PrivateRouteLogin path="/login" component={Sign}></PrivateRouteLogin>
    </Switch>
  </BrowserRouter>
);


	

