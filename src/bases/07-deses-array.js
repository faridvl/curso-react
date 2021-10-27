const personajes = ['Goku','Vegeta','Trunks'];


const [ , , p3 ] = personajes;

console.log( p3 );

const prueba = ( valor ) => {
    return [valor, ()=>{console.log('Hola Mundo')}]
};

const [nombre, setNombre]= prueba('Goku');
console.log(nombre);
setNombre();