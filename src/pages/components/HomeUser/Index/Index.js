import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import RoomCard from "./../../RoomCard/RoomCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    margin: theme.spacing(3, 2, 2, 3),
  },

  chipContent: {
    margin: theme.spacing(3, 2, 0, 0),
    maxHeight: 100,
    overflow: "auto",
  },
  chipUsers: {
    maxHeight: 100,
    overflow: "auto",
  },
}));

export default function Index(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 1" message="user room 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 2" message="user room 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 3" message="user room 3" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 1" message="user room 1" />
        </Grid>
      </Grid>
    </div>
  );
}
