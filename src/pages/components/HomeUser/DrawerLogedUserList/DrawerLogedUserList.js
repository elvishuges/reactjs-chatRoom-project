import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SettingsPowerIcon from "@material-ui/icons/SettingsPower";
import users from "./fakeUserList";
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    position: "relative",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "#2E3B55",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

function DrawerLogedUserList(props) {
  const classes = useStyles();
  const theme = useTheme();

  const {
    drawerState,
    handleDrawerStateChange,
    roomTitle,
    users,
    window,
  } = props;

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
        <WhiteTextTypography variant="h6">
          <Box fontStyle="italic" m={1}>
            {roomTitle}
          </Box>
        </WhiteTextTypography>
      </div>
      <Grid style={{ padding: "7px" }}>
        <ListItem>
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
            />
          </ListItemIcon>
          <div style={{ width: 200, whiteSpace: "nowrap" }}>
            <Box textOverflow="ellipsis" overflow="hidden">
              Online
            </Box>
          </div>
        </ListItem>
      </Grid>
      <Divider></Divider>
      <Grid style={{ padding: "10px" }}>
        <TextField
          size="small"
          id="outlined-basic-email"
          label="Buscar usuários"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid style={{ padding: "10px" }}>Usuários</Grid>
      <List>
        {users.map((element, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/1920/1080?random"
              />
            </ListItemIcon>
            <div style={{ width: 200, whiteSpace: "nowrap" }}>
              <Box textOverflow="ellipsis" overflow="hidden">
                {element.username}
              </Box>
            </div>
          </ListItem>
        ))}
        <Divider></Divider>
        <Grid style={{ padding: "10px" }}>Configurações</Grid>
        <ListItem button>
          <ListItemIcon>
            <SettingsPowerIcon />
          </ListItemIcon>
          <ListItemText primary="Minha conta" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsPowerIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={drawerState}
            onClose={handleDrawerStateChange}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

DrawerLogedUserList.propTypes = {
  window: PropTypes.func,
};

export default DrawerLogedUserList;
