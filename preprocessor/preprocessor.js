import { Pokemon } from './pokemon.js';
import { CatchRate } from './catchRate.js';

let reformattedPokemon = Pokemon.map((obj) => {
  obj.catch_rate = CatchRate[obj.id-1];
  if (obj.id > 890) {
    return;
  }
  obj.img = `https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/${(obj.name).toLowerCase()}.gif`.replace(' ','_');
  return obj;
})

reformattedPokemon = reformattedPokemon.filter((i) => i);

var json = JSON.stringify(reformattedPokemon);

var fs = require('fs');
fs.writeFile('../data/pokemon.min.json', json, 'utf8', () => {});
