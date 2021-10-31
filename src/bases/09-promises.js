import { getHeroeById } from './bases/08-imp-exp'

/* const  promesa = new Promise((resolve, reject)=>{

    setTimeout( ()=> { 
        const heroe = getHeroeById(2)
        //console.log("2 segundos  depues")
        //console.log(heroe)
        resolve( heroe );
        //reject( 'No se encontro el Heroe' )
     } , 2000)


}); */

/* promesa.then((hero) => {
    console.log('heroe', hero)
})
    .catch((err) => console.log(err))
 */
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id)

            if (heroe) {
                resolve(heroe);
            } else {
                reject('no se encontro');
            }

        }, 2000)
    });
}

getHeroeByIdAsync(89)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.log(err))