// tarea
// 1. tranformar la funcion a una funcion flecha
// 2. tiene que retornar un objeto implicito
// 3. pruebas

/* function getUsuarioActivo( nombre ){
    return {
        uid: 'ABC567',
        username: nombre
    }
} */
const getUsuarioActivo = ( nombre ) => ({uid: 'ABC567', username: nombre})
const UsuarioActivo = getUsuarioActivo('Farid');
console.log( UsuarioActivo );