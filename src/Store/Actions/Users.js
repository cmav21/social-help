
export const login = (user) => ({ type: 'LOGGED', logged: true, user });
export const logout = () => ({ type: 'LOGOUT', logged: false });


