import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { login } from "../../services/auth";

import communUserService from "../../services/communUser.service";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Creators as AuthActions } from "./../../reducers/duck/auth";
import { bindActionCreators } from "redux";

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
      username: "",
      password: "",
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.dispatch = useDispatch();
  }

  handleChange(e) {
	//this.props.login("oiii")
    console.log("handleChange", e.target);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  register = () => {
    this.props.history.push("/register");
  };

  handleSubmit(e) {
    console.log("handleSubmit", e.target);
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      communUserService.usuario
        .login(username, password)
        .then((rsp) => {
          console.log("rsp login", rsp);
		  // persistir data in redux-persist
		  var user = { nome: "S Logado", role: 1 }
          this.props.login(user)
          this.props.history.push("/HomeUser");
        })
        .catch((err) => {
          // handle your error here
          console.log(err);
        });
    }
  }

  render() {
	const { classes } = this.props;
	console.log("propsssssssssssss",this.props)
    const { username, password, submitted } = this.state;
    const { login, user } = this.props;

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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              onChange={this.handleChange}
              label="Email Address"
              name="username"
              value={username}
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={password}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign In{" "}
            </Button>{" "}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password ?
                </Link>{" "}
              </Grid>{" "}
              <Grid item>
                <Link href="#" variant="body2">
                  {" "}
                  {"Don't have an account? Sign Up"}{" "}
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...AuthActions }, dispatch);

const SignStyled = withStyles(styles)(SignIn); // fiz isso para adicionar um store do reducer
export default connect(mapStateToProps, mapDispatchToProps)(SignStyled);
