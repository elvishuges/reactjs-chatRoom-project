import React from "react";
import { useHistory } from "react-router";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";

const WhiteTextTypography = withStyles({
  root: {
    color: "#eceff1",
  },
})(Typography);

const styles = (theme) => ({
  root: {
    minHeight: 205,
    color: theme.palette.text.secondary,
    //background: '#ffb74d'
  },
  cardActions: {
    justifyContent: "flex-end",
  },
  cardContent: {
    background: "#78909c",
    minHeight: 120,
  },
});

function RoomCard(props) {
  const history = useHistory();
  const handleClickEnterRoom = (roomTitle) => {
    history.push(`/user/sala/${roomTitle}`);
  };
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <WhiteTextTypography variant="h5" component="h2">
            {props.title}
          </WhiteTextTypography>
          <WhiteTextTypography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.message}
          </WhiteTextTypography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          onClick={() => handleClickEnterRoom(props.title)}
          color="inherit"
          endIcon={<VisibilityIcon />}
        >
          Entrar
        </Button>
      </CardActions>
    </Card>
  );
}

const RoomCardStyled = withStyles(styles)(RoomCard); // fiz isso para adicionar um store do reducer

export default RoomCardStyled;
