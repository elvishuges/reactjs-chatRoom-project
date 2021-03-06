import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";

const listItem = [
    { path: "/homeAdmin", name: "Home Admin" },
    { path: "/salas", name: "Salas" },
]
const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
        background: '#2E3B55'
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}));



export default function DrawerAdmin(props) {

    const classes = useStyles();
    const drawer = (
        <div>
            <div className={classes.drawerHeader}>
            </div>
            <Divider />
            <List>
                {listItem.map((text, index) => (
                    <ListItem button key={text.path} component={Link} to={text.path}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text.name} />
                    </ListItem>
                ))}
                <ListItem onClick={props.handleLogout} key='logout' component={Link} to="/login" >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            </List>
        </div>
    );
    return (
        <Drawer
            container={props.container}
            variant={props.variant}
            anchor={props.anchor}
            open={props.open}
            onClose={props.onClose}
            classes={props.classes}
        >
            {drawer}
        </Drawer>
    )
}



