// para dizer se usuário esta authenticado ou n
// aqui poderiamos is no localstorage, verificar se ele esta authenticado e retornar true ou false.
//export const isAuthenticated = () => true;
//localStorage.getItem('user')
export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};