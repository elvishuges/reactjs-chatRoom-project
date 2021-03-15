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
import { Typography } from "@material-ui/core";
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
  chatItemDark: {
    backgroundColor: "#2E3B55",
  },
  chatItemLight: {
    backgroundColor: "#FFFFFF",
  },
  messageTextWhiteColor: {
    color: "#FFFFFF",
  },
  messageTextBlackColor: {
    color: "#000000",
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
  textField: {
    backgroundColor: "#F3F6FB",
  },
  disabledButton: {
    backgroundColor: "red",
  },
}));

const Chat = (props) => {
  const { roomTitle, user, chatMessageList } = props;
  console.log("props chat", props);
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const handleSendMessageClick = () => {
    chatMessageFromRoom(roomTitle, message, user.email);
    setMessage(""); //clean message
  };

  return (
    <div>
      <br></br>
      <br></br>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          <List style={{ padding: "20px" }} className={classes.messageArea}>
            {chatMessageList.map((element, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid
                    className={
                      element.data.userEmail === user.email
                        ? classes.chatItemDark
                        : classes.chatItemLight
                    }
                    component={Paper}
                    item
                    xs={12}
                  >
                    <ListItemText
                      style={{ padding: "10px" }}
                      align="right"
                      primary={
                        <Typography
                          type="body2"
                          className={
                            element.data.userEmail === user.email
                              ? classes.messageTextWhiteColor
                              : classes.messageTextBlackColor
                          }
                        >
                          {element.data.message}
                        </Typography>
                      }
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
                className={classes.textField}
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
