
const initialState = {
     type: 'LOGOUT', 
     logged: false 
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED':
            return Object.assign({}, state, {
                type: action.type,
                logged: action.logged,
                payload: action.user
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                type: action.type,
                logged: action.logged
            });   
        case 'ERROR_LOGIN': 
            return Object.assign({}, state, {
                type: action.type,
                logged: action.logged
            })
        default:
            return state;
    }
}

export default loginReducer;