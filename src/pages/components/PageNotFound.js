import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useHistory } from "react-router";

import { Helmet } from "react-helmet";
import { Box, Container, Typography } from "@material-ui/core";

import { logoutUser } from "./../../actions/auth.action";

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
    margin: "auto",
  },
}));

const NotFoundView = () => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>
    <Box>
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h5">
          A página que você está procurando não existe
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle2">
          Página não encontrada
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <img
            alt="Under development"
            src="https://react-material-dashboard.devias.io/static/images/undraw_page_not_found_su7k.svg"
            style={{
              textAlign: "center",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);

const mapStateToProps = (store) => ({
  user: store.user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  NotFoundView
);
