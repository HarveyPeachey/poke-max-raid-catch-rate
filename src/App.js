import React from 'react';
import './App.css';
import pokemon from './data/pokemon.min.js'

function App() {
  console.log(pokemon);
  return (
    <div className="App">
      <h2>{pokemon[5].name}</h2>
      <img src={pokemon[5].img} alt={pokemon[5].name} />
      <h2>{pokemon[434].name}</h2>
      <img src={pokemon[434].img} alt={pokemon[434].name} />
    </div>
  );
}

export default App;
