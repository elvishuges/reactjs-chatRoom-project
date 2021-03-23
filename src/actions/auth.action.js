import { types } from "../reducers/duck/reducer.auth";
import React from "react";
import api from "../services/communUser.service";
import { Redirect } from "react-router";

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch({
      type: types.submit_login,
    });
    const response = await api
      .login(username, password)
      .then((rsp) => {
        console.log("*#THEN LOGIN USER#", rsp);
        dispatch({
          type: types.success_login,
          payload: rsp.data.user,
        });
        return <Redirect to="/" />;
      })
      .catch((rsp) => {
        console.log("#CATCH LOGIN USER#", rsp);
        let payload;
        if (!rsp.response) {
          payload = "Algo deu errado. Tente novamente mais tarde!";
        } else {
          payload = rsp.response.data.error;
        }
        dispatch({
          type: types.failed_login,
          payload: payload,
        });
        return rsp;
      });
    return response;
  };
};

export const registerUser = (email, username, password) => {
  return async (dispatch) => {
    dispatch({
      type: types.submit_login,
    });
    const response = await api
      .register(email, username, password)
      .then((rsp) => {
        dispatch({
          type: types.success_login,
          payload: rsp.data.user,
        });
        return;
      })
      .catch((rsp) => {
        let payload;
        if (!rsp.response) {
          payload = "Algo deu errado. Tente novamente mais tarde!";
        } else {
          payload = rsp.response.data.error;
        }
        dispatch({
          type: types.failed_login,
          payload: payload,
        });
        return rsp;
      });
    return response;
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: types.submit_logout,
    });
    dispatch({
      type: types.success_logout,
    });
  };
};
