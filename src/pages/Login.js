import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
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
import CircularProgress from "@material-ui/core/CircularProgress";

import Copyright from "./components/utils/Copyright";
import LoginRegisterBar from "./components/utils/LoginRegisterBar";

import { connect } from "react-redux";
import { compose } from "redux";
import { loginUser, logoutUser } from "../actions/auth.action";
import TextInput from "./components/utils/TextInput";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(5),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
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

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    if (this.props.user.isLoggedIn) {
      this.props.history.push("/user/index");
    }
    console.log("# MODE", process.env.REACT_APP_API_URL_PRODUCTION, "#");
  }

  handleChangeInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  async componentDidMount() {
    console.log("LOGIN INTERFACE !!!");
    const resp = await this.props.dispatch(logoutUser());
  }

  handleRegister() {
    this.props.history.push("/register");
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      const resp = await this.props.dispatch(loginUser(email, password));
    }
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    const { user } = this.props;

    const txtButton = () => {
      return user.isLoadingLogin ? (
        <CircularProgress size={25} className={classes.fabProgress} />
      ) : (
        "Logar"
      );
    };

    return (
      <Container component="main" maxWidth="xs">
        <LoginRegisterBar title="Chat app"></LoginRegisterBar>
        <CssBaseline />
        <Paper elevation={4} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>{" "}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>{" "}
          <form className={classes.form}>
            <TextInput
              label="Email"
              name="email"
              id="email"
              size="small"
              value={email}
              type="email"
              onChange={this.handleChangeInput}
              id="password"
              autoComplete="email"
            />
            <TextInput
              label="Password"
              name="password"
              size="small"
              value={password}
              type="password"
              onChange={this.handleChangeInput}
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {user.errorLogin && <div>{user.errorMessage}</div>}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={user.isLoadingLogin}
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              {txtButton()}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {" "}
                  {"Não posssue uma conta? Cadastre-se"}{" "}
                </Link>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </form>{" "}
        </Paper>{" "}
        <Box mt={8}>
          <Copyright websiteTitle="SistemasHuges" />
        </Box>{" "}
      </Container>
    );
  }
}
const mapStateToProps = (store) => ({
  user: store.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const LoginStyled = withStyles(styles)(Login); // fiz isso para adicionar um store do reducer

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  LoginStyled
);
