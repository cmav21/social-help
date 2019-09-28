import firebase from 'firebase';
import { initialAction } from '../Actions/Filtros';


const initialState = {
    type: 'VER_TODOS',
    zone: 'danger'
};

const filtrosReducer = (state = initialState, action) => {
   switch (action.type) {
       case 'VER_TODOS':
           return Object.assign({}, state, {
               type: action.type,
               payload: action.payload,
               zone: action.zone
           });
       case 'DATOS_USUARIO':
           return Object.assign({}, state, {
               type: action.type,
               payload: action.payload,
               zone: action.zone
           });    
        case 'POR_FILTRO':
            return Object.assign({}, state, {
                type: action.type,
                payload: action.payload,
                zone: action.zone
            });
        case 'SAFE_ZONES':
            return Object.assign({}, state, {
                type: action.type,
                payload: action.payload,
                zone: action.zone
            });        
       default:
           return state;
   }
}

export default filtrosReducer;