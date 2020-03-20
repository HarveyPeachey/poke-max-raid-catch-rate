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
      <div><p>Poke Ball Catch Rate: 0%</p></div>
      <div><p>Great Ball Catch Rate: 0%</p></div>
      <div><p>Ultra Ball Catch Rate: 0%</p></div>
      <div><p>Quick Ball Catch Rate: 0%</p></div>
      <h2>{pokemon[434].name}</h2>
      <img src={pokemon[434].img} alt={pokemon[434].name} />
    </div>
  );
}

export default App;
