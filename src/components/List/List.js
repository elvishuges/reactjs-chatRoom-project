import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "150ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default (props) => {
  const classes = useStyles();

  const renderRows = () => {
	console.log('props>>',props)
    const list = props.list || [];

    return list.map((todo) => (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={todo.avatar} />{" "}
        </ListItemAvatar>{" "}
        <ListItemText
          primary={"Brunch this weekend?"}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {todo.first_name} {todo.last_name}{" "}
              </Typography>{" "}
              {" — I'll be in your neighborhood doing errands this…"}{" "}
            </React.Fragment>
          }
        />{" "}
      </ListItem>
    ));
  };

  return <List className={classes.root}> {renderRows()} </List>;
};
