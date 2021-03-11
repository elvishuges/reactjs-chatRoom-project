import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RoomCard from "./../../RoomCard/RoomCard";

const useStyles = makeStyles(theme => ({
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
}));

export default function Lojas() {
  const classes = useStyles();

  return (
    <div className={classes.content} >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} >
          <RoomCard title="titulo room 1" message="adm1 room 1" >xs=12</RoomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <RoomCard title="titulo room 2" message="adm room 2" >xs=12</RoomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <RoomCard title="titulo room 3" message="adm room 3" >xs=12</RoomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <RoomCard title="titulo room 1" message="adm1 room 1" >xs=12</RoomCard>
        </Grid>
      </Grid>
    </div>
  );
}
