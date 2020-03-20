import { Pokemon } from './pokemon.js';
import { CatchRate } from './catchRate.js';
import { GmaxPokemon } from './gmaxPokemon.js';

let reformattedPokemon = Pokemon.map((obj) => {
  if (obj.id > 890) {
    return undefined;
  }
  obj.catch_rate = CatchRate[obj.id-1];
  obj.img = `https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/${(obj.name).toLowerCase()}.gif`.replace(' ','_');
  obj.gmax = false;
  if (obj.id === GmaxPokemon.find(id => obj.id)) {
    obj.gmax = true;
    obj.img_gmax = `https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/${(obj.name).toLowerCase()}-gigantamax.gif`.replace(' ','_');
  }
  return obj;
})

reformattedPokemon = reformattedPokemon.filter((i) => i);

var json = JSON.stringify(reformattedPokemon);

var fs = require('fs');
fs.writeFile('./processedData/pokemon.min.json', json, 'utf8', () => {});
