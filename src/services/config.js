// eslint-disable-next-line
/* eslint-disable */
var axios = require("axios");
var apiURL;
if (process.env.NODE_ENV !== "production") {
  apiURL = process.env.REACT_APP_API_URL_DEVELOPMENT;
} else {
  apiURL = process.env.REACT_APP_API_URL_PRODUCTION;
}
console.log("###API URL###", apiURL);

export const baseURL = apiURL;

export const api = axios.create({
  baseURL: baseURL,
  /* other custom settings */
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
