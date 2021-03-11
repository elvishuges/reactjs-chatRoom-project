import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ChipUsers from "./../ChipUsers/ChipUsers";

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
  const { logedSocketList } = props;
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 1" message="user room 1">
            xs=12
          </RoomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 2" message="user room 2">
            xs=12
          </RoomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 3" message="user room 3">
            xs=12
          </RoomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RoomCard title="titulo room 1" message="user room 1">
            xs=12
          </RoomCard>
        </Grid>
      </Grid>
      <div className={classes.chipContent}>
        {" "}
        <Typography variant="h5" gutterBottom>
          Usuários Logados
        </Typography>
      </div>
      <div className={classes.chipUsers}>
        <ChipUsers logedSocketList={logedSocketList}></ChipUsers>
      </div>
    </div>
  );
}
