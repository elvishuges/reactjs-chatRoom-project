import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import DrawerLogedUserList from "./../DrawerLogedUserList/DrawerLogedUserList";
import Chat from "../Chat/Chat";

import {
  initiateSocket,
  disconnectSocket,
  subscribeToRoom,
  logedUsersList,
  newUserInRoom,
  userOutRoom,
} from "./../../../../services/socket";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(3, 2, 2, 3),
  },
  buttonTogleDrawer: {
    position: "absolute",
    top: theme.spacing(9),
    right: theme.spacing(2),
  },
}));

function Sala(props) {
  const classes = useStyles();
  let { roomTitle } = useParams();

  const [userListLoged, setUserListLoged] = useState([]);
  const [openDrawerListUser, setOpenDrawerListUser] = useState(false);
  const [chatMessageList, setChatMessageList] = useState([]);

  const user = {
    username: props.user.username,
    email: props.user.email,
    id: props.user.id,
  };

  const handleDrawerStateChange = () => {
    openDrawerListUser
      ? setOpenDrawerListUser(false)
      : setOpenDrawerListUser(true);
  };

  const handleUserOutRoom = (user) => {
    setUserListLoged(userListLoged.filter((item) => item.email !== user.email));
  };

  userOutRoom((err, data) => {
    if (err) return;
    console.log("userOutRoom", data.user);
    handleUserOutRoom(data.user);
  });

  useEffect(() => {
    initiateSocket({ roomTitle: roomTitle, user: user });

    subscribeToRoom((err, data) => {
      if (err) return;
      var d = new Date();
      data.data.time = `${d.getHours()}:${d.getMinutes()} `;
      setChatMessageList((oldChatList) => [data, ...oldChatList]);
    });

    newUserInRoom((err, data) => {
      if (err) return;
      setUserListLoged((oldLogedUsersList) => [data, ...oldLogedUsersList]);
    });

    logedUsersList((err, data) => {
      if (err) return;
      setUserListLoged((oldLogedUsersList) => [...data, ...oldLogedUsersList]);
    });

    return () => {
      disconnectSocket(user, roomTitle);
    };
  }, []);

  return (
    <React.Fragment>
      <DrawerLogedUserList
        users={userListLoged}
        roomTitle={roomTitle}
        drawerState={openDrawerListUser}
        handleDrawerStateChange={handleDrawerStateChange}
      ></DrawerLogedUserList>
      <Hidden smUp implementation="css">
        <Button
          onClick={handleDrawerStateChange}
          variant="contained"
          className={classes.buttonTogleDrawer}
          color="primary"
          size="small"
        >
          Menu
        </Button>
      </Hidden>
      <br></br>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Chat
            user={user}
            chatMessageList={chatMessageList}
            roomTitle={roomTitle}
          ></Chat>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (store) => ({
  user: store.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sala);
