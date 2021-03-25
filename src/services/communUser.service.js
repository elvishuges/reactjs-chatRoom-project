import { api } from "./config";

export default {
  login(email, password) {
    console.log("*** login ***", email, password);
    var obj = {
      email: email,
      password: password,
    };
    return api.post("/auth/login", obj);
  },

  register(email, username, password) {
    var obj = {
      email: email,
      username: username,
      password: password,
    };
    return api.post("/auth/register", obj);
  },
};
