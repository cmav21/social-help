
const initialState = {
    type: 'VER_TODOS' 
}

const filtrosReducer = (state = initialState, action) => {
   switch (action.type) {
       case 'VER_TODOS':
           return Object.assign({}, state, {
               type: action.type,
               payload: action.data,
               section: action.section
           });
       case 'DATOS_USUARIO':
           return Object.assign({}, state, {
               type: action.type,
               payload: action.data,
               section: action.section
           });    
        case 'POR_FILTRO':
        return Object.assign({}, state, {
            type: action.type,
            payload: action.data,
            section: action.section,
            filters: action.filters
        });    
        case 'TODAS_ZONAS':
            return Object.assign({}, state, {
                type: action.type,
                payload: action.data,
                section: action.section
            });   
        case 'FILTRO_ZONA':
            return Object.assign({}, state, {
                type: action.type,
                filter: action.filtro,
                payload: action.data,
                section: action.section
            });     
       default:
           return state;
   }
}

export default filtrosReducer;