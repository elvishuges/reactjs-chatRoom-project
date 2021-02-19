import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from "react-redux";
import { compose } from "redux";
import { loginUser } from '../actions/auth.action'
import TextInput from './components/utils/TextInput'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" "}
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website{" "}
      </Link>{" "}
      {new Date().getFullYear()} {"."}{" "}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleRegister() {
    //this.props.history.push("/homeUser");
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const resp = await this.props.dispatch(loginUser(email, password))
    try {
      if (resp.status == 200) {
        // direcionar para interface
        console.log('...rota...resp');
        this.props.history.push("/homeUser");
      }
      else {
        throw (resp)
      }
    } catch (error) {
      alert("Erro ao logar")
    }
  }

  render() {
    const { classes } = this.props;
    const { email, password, submitted } = this.state;
    const { isLoading } = this.props.user;

    const txtButton = () => {
      return isLoading ? <CircularProgress size={25} className={classes.fabProgress} /> : 'Logar'
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div> </div>{" "}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>{" "}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>{" "}
          <form className={classes.form} noValidate>
            <TextInput
              label="Email"
              name="email"
              id="email"
              value={this.state.email}
              type="email"
              onChange={this.handleChangeInput}
              id="password"
              autoComplete="email"
            />
            <TextInput
              label="Password"
              name="password"
              value={this.state.password}
              type="password"
              onChange={this.handleChangeInput}
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoading}
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              {txtButton()}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password ?
                </Link>{" "}
              </Grid>{" "}
              <Grid item>
                <Link to="/register" variant="body2">
                  {" "}
                  {"Não posssue uma conta? Sign Up"}{" "}
                </Link>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </form>{" "}
        </div>{" "}
        <Box mt={8}>
          <Copyright />
        </Box>{" "}
      </Container>
    );
  }
}
const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});


const SignStyled = withStyles(styles)(SignIn); // fiz isso para adicionar um store do reducer

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SignStyled);


