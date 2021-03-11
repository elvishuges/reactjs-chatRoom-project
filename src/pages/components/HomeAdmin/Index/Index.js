import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

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
    overflow: "auto",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Paper> Index</Paper>
    </div>
  );
}
