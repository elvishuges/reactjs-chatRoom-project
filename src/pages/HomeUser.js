import React from "react";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import AppBarUser from "./components/HomeUser/AppBarUser/AppBarUser";
import Index from "./components/HomeUser/Index/Index";
import Sala from "./components/HomeUser/Sala/Sala";

import { connect } from "react-redux";
import { compose } from "redux";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(3, 2, 2, 3),
  },
}));

function HomeUser(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBarUser title="Início"></AppBarUser>
      <div className={classes.content}>
        <Switch>
          <Route path="/user/index" render={() => <Index></Index>} />
          <Route exact path="/user/sala/:roomTitle" render={() => <Sala />} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  user: store.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(HomeUser);
