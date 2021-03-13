import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import DrawerLogedUserList from "./../DrawerLogedUserList/DrawerLogedUserList";
import { makeStyles } from "@material-ui/core/styles";

import {
  initiateSocket,
  disconnectSocket,
  subscribeToRoom,
} from "./../../../../services/socket";

import Chat from "../Chat/Chat";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(3, 2, 2, 3),
  },
  buttonTogleDrawer: {
    position: "absolute",
    top: "70px",
    right: "30px",
  },
}));

function Sala(props) {
  const classes = useStyles();
  let { roomTitle } = useParams();

  const [logedSocketList, setUserListLoged] = useState([]);
  const [openDrawerListUser, setOpenDrawerListUser] = useState(true);
  const [inRoom, setInRoom] = useState(false);
  const [chatMessageList, setchatMessageList] = useState([]);

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

  useEffect(() => {
    initiateSocket({ roomTitle: roomTitle, user: user });

    subscribeToRoom((err, data) => {
      if (err) return;
      console.log("data recebida", data);
      setchatMessageList((oldChatList) => [data, ...oldChatList]);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <React.Fragment>
      <DrawerLogedUserList
        users={logedSocketList}
        drawerState={openDrawerListUser}
      ></DrawerLogedUserList>
      <Button
        onClick={handleDrawerStateChange}
        variant="contained"
        className={classes.buttonTogleDrawer}
        color="secondary"
      >
        usuários Logados
      </Button>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Chat chatMessageList={chatMessageList} roomTitle={roomTitle}></Chat>
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
