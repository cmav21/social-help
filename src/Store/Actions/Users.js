
export const login = (user) => ({ type: 'LOGGED', logged: true, user });
export const logout = () => ({ type: 'LOGOUT', logged: false });
export const errorLogin = () => ({type: 'ERROR_LOGIN', logged: false});