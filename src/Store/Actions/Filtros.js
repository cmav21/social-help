import firebase from 'firebase';


export const verTodos = () => {
    return dispatch => {
        firebase.database().ref('incidents').on('value', (snapshot) => {
            const data = snapshot.val();
            return dispatch({type:'VER_TODOS', payload: data, zone: 'danger'}) ;
        });
}}

export const datosUsuario = usuarioId => {
    return dispatch => {
        firebase.database().ref('incidents').orderByChild('usuarioId').equalTo(usuarioId).on('value', (snapshot) => {
            return dispatch({type: 'DATOS_USUARIO', payload: snapshot.val(), zone: 'danger'}) ;
    });
}}

export const porFiltro = (filters) => {
    return dispatch => {
        firebase.database().ref('incidents').on('value', snapshot => {
            const data = snapshot.val();
            let keysFilters = Object.keys(filters)
            const keysFiltered = filterData(data, keysFilters, filters);
            const dataFiltered = keysFiltered.map((incident, i) => data[incident]);
            return dispatch({type: 'POR_FILTRO', payload: dataFiltered, zone: filters.hasOwnProperty('environment') ? 'almostDanger' : 'danger' });
        })
    }
};

const filterData = (data, keysFilters, filters) => {
    const keysFiltered = Object.keys(data).filter((key, i) => {
        const incident = data[key];
        keysFilters = { ...keysFilters } = incident
        for (const key in keysFilters) {
            if(incident[key] === filters[key])
                return incident;
        }
    });
    return keysFiltered;
}

export const getSafeZones = () => {
    return dispatch => {
        firebase.database().ref('safeZones').on('value', snapshot => {
            const data = snapshot.val()
            return dispatch({ type: 'SAFE_ZONES', payload: data, zone: 'safe' })
        })
    }
}