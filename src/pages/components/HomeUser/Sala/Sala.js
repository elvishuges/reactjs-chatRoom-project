import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

import DrawerLogedUserList from "./../DrawerLogedUserList/DrawerLogedUserList";
import { makeStyles } from "@material-ui/core/styles";

import socket from "./../../../../services/socket";

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

  const handleNewLogedSocket = (socket) => {
    setUserListLoged((oldArray) => [...oldArray, socket.data]);
  };

  const handleRemoveLogedSocket = (socket) => {
    console.log("handleRemoveLogedSocket", socket);
  };
  useEffect(() => {
    socket.emit("onInitialPage", { user: user });

    socket.on("logedSocketList", (data) => {
      console.log("Loged List", data);
      setUserListLoged(data);
    });

    socket.on("newLogedSocket", (data) => {
      handleNewLogedSocket(data);
    });

    socket.on("removeLogedSocket", (data) => {
      handleRemoveLogedSocket(data);
    });
  }, []);

  return (
    <React.Fragment>
      <DrawerLogedUserList
        users={logedSocketList}
        drawerState={openDrawerListUser}
      ></DrawerLogedUserList>
      Teste
      <Button
        onClick={handleDrawerStateChange}
        variant="contained"
        className={classes.buttonTogleDrawer}
        color="secondary"
      >
        Usuários
      </Button>
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
