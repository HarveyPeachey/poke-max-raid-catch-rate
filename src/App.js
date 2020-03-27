import React from 'react';
import './App.css';
import pokemon from './data/pokemon.min.js'

function App() {
  console.log(pokemon);
  return (
    <div className="App">
      <h2>{pokemon[5].name}</h2>
      <img src={pokemon[5].img} alt={pokemon[5].name} />
      <img src={pokemon[5].img_gmax} alt={pokemon[5].name} />
      <div><p>{pokemon[5].ball[0].name} Catch Rate: {pokemon[5].ball[0].catch_percent}</p></div>
      <div><p>{pokemon[5].ball[1].name} Catch Rate: {pokemon[5].ball[1].catch_percent}</p></div>
      <div><p>{pokemon[5].ball[2].name} Catch Rate: {pokemon[5].ball[2].catch_percent}</p></div>
      <h2>{pokemon[434].name}</h2>
      <img src={pokemon[434].img} alt={pokemon[434].name} />
      <div><p>{pokemon[434].ball[0].name} Catch Rate: {pokemon[434].ball[0].catch_percent}</p></div>
      <div><p>{pokemon[434].ball[1].name} Catch Rate: {pokemon[434].ball[1].catch_percent}</p></div>
      <div><p>{pokemon[434].ball[2].name} Catch Rate: {pokemon[434].ball[2].catch_percent}</p></div>
    </div>
  );
}

export default App;
