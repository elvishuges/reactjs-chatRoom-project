import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AppBarUser from './components/HomeUser/AppBarUser/AppBarUser'
import RoomCard from "./components/HomeUser/RoomCard/RoomCard";
import ChipUsers from "./components/HomeUser/ChipUsers/ChipUsers";

const styles = theme => ({
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

});

class HomeUser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
    //this.dispatch = useDispatch();
  }

  handleChange(e) {

  }

  render() {
    const { classes } = this.props;
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
        <div className={classes.chipContent} >
          <Typography variant="h5" gutterBottom>
            Usuários Logados
         </Typography>
          <ChipUsers></ChipUsers>
        </div>

      </div>
    )
  };
}

const HomeUserStyled = withStyles(styles)(HomeUser) // fiz isso para adicionar um store do reducer

export default HomeUserStyled;