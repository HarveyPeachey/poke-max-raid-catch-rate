import React, { useState, useCallback }  from 'react';
import './App.css';
import pokemon from './data/pokemon.min.js'

function App() {
  const [pokemonId, setPokemonId] = useState(0);
  const optionItems = pokemon.map((item) =>
    <option key={item.name}>{item.name}</option>
  );
  const handleChange = useCallback(e => {
    setPokemonId(e.target.selectedIndex);
  }, [])
  const isGmax = pokemon[pokemonId].img_gmax;
  return (
    <div className="App">
      <div>
        <select onChange={handleChange}>
          {optionItems}
        </select>
      </div>
      <h2>{pokemon[pokemonId].name}</h2>
      <div class='pokemon-images'>
        <img src={pokemon[pokemonId].img} alt={pokemon[pokemonId].name} />
        {isGmax && <img src={pokemon[pokemonId].img_gmax} alt={pokemon[pokemonId].name} />}
      </div>
      <div><strong><p>{pokemon[pokemonId].ball[0].name} Catch Rate: {pokemon[pokemonId].ball[0].catch_percent}</p></strong></div>
      <div><strong><p>{pokemon[pokemonId].ball[1].name} Catch Rate: {pokemon[pokemonId].ball[1].catch_percent}</p></strong></div>
      <div><strong><p>{pokemon[pokemonId].ball[2].name} Catch Rate: {pokemon[pokemonId].ball[2].catch_percent}</p></strong></div>
    </div>
  );
}

export default App;
