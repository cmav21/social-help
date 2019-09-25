import { combineReducers } from 'redux';
import Usuarios from './usuarios';
import Filtros from './filtros';

const reducers = combineReducers({
    Usuarios,
    Filtros
});



export default reducers;