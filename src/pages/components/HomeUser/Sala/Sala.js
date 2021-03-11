import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import RoomCard from "./../../RoomCard/RoomCard";
import { makeStyles } from "@material-ui/core/styles";

import socket from "./../../../../services/socket";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(3, 2, 2, 3),
  },
}));

function Sala(props) {
  const classes = useStyles();
  let { roomTitle } = useParams();
  const user = {
    username: props.user.username,
    email: props.user.email,
    id: props.user.id,
  };

  const [logedSocketList, setUserListLoged] = useState([]);

  const handleNewLogedSocket = (socket) => {
    setUserListLoged((oldArray) => [...oldArray, socket.data]);
  };

  const handleRemoveLogedSocket = (socket) => {
    console.log("handleRemoveLogedSocket", socket);
  };
  useEffect(() => {
    socket.emit("onInitialPage", { user: user });

    socket.on("logedSocketList", (data) => {
      setUserListLoged(data);
    });

    socket.on("newLogedSocket", (data) => {
      handleNewLogedSocket(data);
    });

    socket.on("removeLogedSocket", (data) => {
      handleRemoveLogedSocket(data);
    });
  }, []);

  return <React.Fragment>Sala</React.Fragment>;
}

const mapStateToProps = (store) => ({
  user: store.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sala);
