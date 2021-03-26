import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import Copyright from "./components/utils/Copyright";
import LoginRegisterBar from "./components/utils/LoginRegisterBar";

import { connect } from "react-redux";
import { compose } from "redux";
import { registerUser } from "../actions/auth.action";

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register(props) {
  const classes = useStyles();
  const { userProps } = props;

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (user.email && user.username && user.username && user.password) {
      dispatch(registerUser(user.email, user.username, user.password));
    }
  }
  const txtButton = () => {
    return userProps.isLoadingLogin ? (
      <CircularProgress size={25} />
    ) : (
      "Cadastar"
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <LoginRegisterBar title="Chat app"></LoginRegisterBar>
      <CssBaseline />
      <Paper elevation={4} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastrar-se
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                value={user.email}
                onChange={handleChange}
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                value={user.username}
                onChange={handleChange}
                id="username"
                label="Usuário"
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                value={user.password}
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          {userProps.errorLogin && <div>{userProps.errorMessage}</div>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={user.isLoadingLogin}
            className={classes.submit}
            onClick={handleSubmit}
            className={classes.submit}
          >
            {txtButton()}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Já possue uma conta ?
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={8}>
        <Copyright websiteTitle="SistemasHuges" />
      </Box>{" "}
    </Container>
  );
}

const mapStateToProps = (store) => ({
  userProps: store.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Register);
