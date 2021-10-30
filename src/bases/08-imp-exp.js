import { heroes } from '../data/heroes';

//console.log(heroes);
//USO DEL FIND
const getHeroeById = (id) => {
    return heroes.find((value) => value.id = id)
}


//USO DEL FILTER
const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner)

/* console.log(getHeroeById(3));
console.log(getHeroesByOwner('Marvel'));
 */

export {
    getHeroeById,
    getHeroesByOwner
}