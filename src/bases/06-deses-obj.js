// desestructuracion
// asignacion desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman'
}


const prueba = ({ clave, nombre, edad, rango = 'capitan'}) => {

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123512,
            lng: 612322
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = prueba( persona );

console.log(lat, lng);
