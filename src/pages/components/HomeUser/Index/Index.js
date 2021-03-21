import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import RoomCard from "./../../RoomCard/RoomCard";
import rooms from "./fakeRoomList";
// eslint-disable-next-line
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
        {rooms.map((element, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <RoomCard title={element.title} message={element.subtitle} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
