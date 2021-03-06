
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";

import DrawerAdmin from "./components/HomeAdmin/DrawerAdmin/DrawerAdmin";
import AppBarAdmin from "./components/HomeAdmin/AppBarAdmin/AppBarAdmin";
import Salas from "./components/HomeAdmin/Salas/Salas";

import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { logoutUser } from '../actions/auth.action'
import { useHistory } from "react-router";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 0,
    padding: theme.spacing(2)
  }
}));

function HomeAdmin(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    props.dispatch(logoutUser())
    history.push('/login');
  }

  return (

    <div className={classes.root}>
      <DrawerAdmin handleLogout={handleLogout} />
      <CssBaseline />
      <AppBarAdmin handleDrawerToggle={handleDrawerToggle} title="My Admin" position="fixed"></AppBarAdmin>
      {/* <BrowserRouter> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <DrawerAdmin container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            handleLogout={handleLogout}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <DrawerAdmin variant="permanent"
            open classes={{
              paper: classes.drawerPaper
            }}
            handleLogout={handleLogout}
          />
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Switch>
          <Route path="/homeAdmin" render={() => <Salas></Salas>} />
          <Route path="/salas" render={() => <Salas></Salas>} />
        </Switch>
      </main>
      {/* </BrowserRouter> */}
    </div>
  );
}

const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

//export default HomeAdmin;
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeAdmin);


