export const types = {
    login: "auth/login",
    logout: "auth/logout"
};


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  console.log(action);
  console.log('state authentication', state);

  switch (action.type) {    
    case types.login:
      return {
        loggedIn: true,
        user: action.user
      };    
    case types.logout:
      return {};
    default:
      return state
  }
}

export const Creators = {
    login: (value) => ({
        type: types.click,
        newValue: value
    }),

    logout: (value) => ({
        type: types.login,
        newValue: value
    })
};