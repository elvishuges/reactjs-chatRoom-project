import React, { useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AppBarUser from './components/HomeUser/AppBarUser/AppBarUser'
import RoomCard from "./components/RoomCard/RoomCard";
import ChipUsers from "./components/HomeUser/ChipUsers/ChipUsers";

import { connect } from "react-redux";
import { compose } from "redux";

import { loginUser } from '../actions/auth.action';
import { baseURL } from "./../services/config";

import socket from './../services/socket'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    margin: theme.spacing(3, 2, 2, 3),
  },

  chipContent: {
    margin: theme.spacing(3, 2, 2, 3),
    maxHeight: 100,
    overflow: 'auto'
  },
  chipUsers: {
    maxHeight: 100,
    overflow: 'auto'
  },

}));



function HomeUser(props) {

  const user = {
    username: props.user.username,
    email: props.user.email,
    id: props.user.id
  }

  const [userListLoged, setUserListLoged] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    socket.emit('inInitialPage', { user: user });
    socket.on("logedUserList", data => {
      console.log('logedUserList', data);
      setUserListLoged(data);
    })
    socket.on("newUserLoged", data => {
      console.log('newUserLoged', data);
    })
  }, []);

  return (
    <div  >
      <AppBarUser title="Início" ></AppBarUser>

      <div className={classes.content} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} >
            <RoomCard title="titulo room 1" message="Message room 1" >xs=12</RoomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <RoomCard title="titulo room 2" message="Message room 2" >xs=12</RoomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <RoomCard title="titulo room 3" message="Message room 3" >xs=12</RoomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <RoomCard title="titulo room 1" message="Message room 1" >xs=12</RoomCard>
          </Grid>
        </Grid>
      </div>
      <div className={classes.chipContent}  > <Typography variant="h5" gutterBottom>
        Usuários Logados</Typography>  </div>
      <div className={classes.chipUsers}  >
        <ChipUsers userList={userListLoged} ></ChipUsers>
      </div>

    </div>
  )
}

const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeUser);
