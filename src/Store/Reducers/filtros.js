
const initialState = {
    type: 'VER_TODOS' 
}

const filtrosReducer = (state = initialState, action) => {
   switch (action.type) {
       case 'VER_TODOS':
           return Object.assign({}, state, {
               type: action.type,
               payload: action.data
           });
       case 'DATOS_USUARIO':
           return Object.assign({}, state, {
               type: action.type,
               payload: action.data
           });    
        case 'POR_FILTRO':
        return Object.assign({}, state, {
            type: action.type,
            payload: action.data
        });    
        case 'TODAS_ZONAS':
            return Object.assign({}, state, {
                type: action.type,
                payload: action.data
            });   
        case 'FILTRO_ZONA':
            return Object.assign({}, state, {
                type: action.type,
                filter: action.filtro,
                payload: action.data
            });   
        case 'INCIDENTES':
        return Object.assign({}, state, {
            type: action.type,
            payload: 'incidentes'
        }); 
        case 'ZONAS':
            return Object.assign({}, state, {
                type: action.type,
                payload: 'zonas'
            });   
              
       default:
           return state;
   }
}

export default filtrosReducer;