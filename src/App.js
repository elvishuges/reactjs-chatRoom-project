import React from "react";
import appService from "./services/app.service";
import Routes from "./pages/Routes";


import "./App.css";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}
