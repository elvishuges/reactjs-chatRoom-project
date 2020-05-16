import React from "react";
import List from "./components/List/List";
import Drawer from "./components/Drawer/Drawer";
import appService from "./services/app.service";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    appService
      .users()
      .then((rsp) => {
        console.log("resposta lista", rsp);
        this.setState({ list: rsp.data.data });
      })
      .catch((err) => {
        // handle your error here
        console.log(err);
      });
  }
  render() {
	//var list = this.state.list;
	//console.log("lista aqui",list)
    return (
      <div>
            <Drawer >
		     	<List list={this.state.list}/>
			</Drawer>
      </div>
    );
  }
}
