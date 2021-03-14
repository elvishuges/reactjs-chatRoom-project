import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { chatMessageFromRoom } from "./../../../../services/socket";
// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "900%",
    top: theme.spacing(9),
    backgroundColor: "#F3F6FB",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "65vh",
    overflowY: "auto",
  },
}));

const Chat = (props) => {
  const { roomTitle } = props;
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const handleSendMessageClick = () => {
    chatMessageFromRoom(roomTitle, message);
    setMessage("");
  };

  return (
    <div>
      <br></br>
      <br></br>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          <List style={{ padding: "20px" }} className={classes.messageArea}>
            {props.chatMessageList.map((message, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid component={Paper} item xs={12}>
                    <ListItemText
                      style={{ padding: "10px" }}
                      align="right"
                      primary={message.data}
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align="right"
                      secondary="09:30"
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            component={Paper}
            container
            style={{ padding: "20px" }}
          >
            <Grid item xs={8} md={10} sm={9}>
              <TextField
                id="outlined-basic-email"
                label="Digite algo..."
                fullWidth
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} md={2} sm={3} align="right">
              <Button
                onClick={handleSendMessageClick}
                variant="contained"
                disabled={!message.length}
                color="primary"
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
