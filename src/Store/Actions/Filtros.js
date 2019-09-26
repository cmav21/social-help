export const verTodos = (data) => ({type:'VER_TODOS', data, section: 'incidents'})
export const datosUsuario = (data) => ({type:'DATOS_USUARIO', data, section: 'incidents'})
export const porFiltro = (data, filters) => ({type:'POR_FILTRO', data, section: 'incidents', filters})
export const todasZonas = (data) => ({type:'TODAS_ZONAS', data, section: 'zone'})
export const zonaPorFiltro = (filtro, data) => ({type:'FILTRO_ZONA', data, filtro, section: 'zone'})

