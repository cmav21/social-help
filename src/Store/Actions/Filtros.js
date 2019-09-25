export const verTodos = (data) => ({type:'VER_TODOS', data})
export const datosUsuario = (data) => ({type:'DATOS_USUARIO', data})
export const porFiltro = (data) => ({type:'POR_FILTRO', data})
export const todasZonas = (data) => ({type:'TODAS_ZONAS', data})
export const zonaPorFiltro = (filtro, data) => ({type:'FILTRO_ZONA', data, filtro})

