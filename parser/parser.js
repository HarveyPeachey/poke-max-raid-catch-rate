import { Pokemon } from './pokemon.js';
import { CatchRate } from './catchRate.js';

let reformattedPokemon = Pokemon.map((obj) => {
  obj.catch_rate = CatchRate[obj.id-1];
  if (obj.id > 890) {
    return;
  }
  obj.img = `https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/${(obj.name).toLowerCase()}.gif`;
  return obj;
})

reformattedPokemon = reformattedPokemon.filter((i) => i);

console.log(reformattedPokemon);

//https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/eternatus.gif
