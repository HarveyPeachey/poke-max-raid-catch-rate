import { Pokemon } from './pokemon.js';
import { CatchRate } from './catchRate.js';
import { GmaxPokemon } from './gmaxPokemon.js';
import { SupportedPokeBalls } from './supportedPokeBalls.js';

let reformattedPokemon = Pokemon.map((obj) => {
  if (obj.id > 890) {
    return undefined;
  }
  obj.catch_rate = CatchRate[obj.id-1];
  const averageHP = ((15 + 2 * obj.base_stats[0] ) * 57/100 ) + 10 + 57;
  obj.ball = [];
  SupportedPokeBalls.forEach( (item, i) => {
    obj.ball.push({});
    const catchValue = ( 3 * averageHP - 2 ) * (CatchRate[obj.id-1] * item.modifier ) / (3 * averageHP);
    obj.ball[i].name = item.name;
    const catchNo = 1048560 / Math.sqrt((Math.sqrt((16711680 / catchValue))));
    obj.ball[i].catch_percent = Math.pow(catchNo/255, 0.75);
    if (catchValue >= 255)
      obj.ball[i].catch_percent = 100;
  });
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
