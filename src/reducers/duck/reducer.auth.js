export const types = {
  submit_login: "auth/submit_login",
  success_login: "auth/success_login",
  failed_login: "auth/failed_login",
  submit_logout: "auth/submit_logout",
  success_logout: "auth/success_logout",
  submit_register: "auth/submit_register",
  success_register: "auth/success_register",
  failed_register: "auth/failed_register",
};

const initialState = {
  user: {
    username: null,
    email: null,
    role: null,
    isLoggedIn: false,
    isLoadingLogin: false,
    errorLogin: false,
    errorMessage: "",
    id: "",
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.submit_login:
      return {
        user: {
          username: null,
          email: null,
          role: null,
          isLoggedIn: false,
          isLoadingLogin: true,
          errorLogin: false,
          errorMessage: "",
          id: "",
        },
      };
    case types.success_login:
      return {
        user: {
          username: action.payload.username,
          email: action.payload.email,
          role: action.payload.role,
          isLoggedIn: true,
          isLoadingLogin: false,
          errorLogin: false,
          errorMessage: "",
          id: action.payload._id,
        },
      };
    case types.failed_login:
      return {
        user: {
          username: null,
          email: null,
          role: null,
          isLoggedIn: false,
          isLoadingLogin: false,
          errorLogin: true,
          errorMessage: action.payload,
          id: "",
        },
      };
    case types.submit_logout:
      return {
        user: {
          username: null,
          email: null,
          role: null,
          isLoggedIn: false,
          isLoadingLogin: false,
          errorLogin: false,
          errorMessage: "",
          id: "",
        },
      };
    case types.success_logout:
      return {
        user: {
          username: null,
          email: null,
          role: null,
          isLoggedIn: false,
          isLoadingLogin: false,
          errorLogin: false,
          errorMessage: "",
          id: "",
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  login: (value) => ({
    type: types.success_login,
    newValue: value,
  }),

  logout: (value) => ({
    type: types.success_logout,
    newValue: value,
  }),
};
