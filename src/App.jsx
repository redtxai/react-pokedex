import React, { Fragment, useState } from 'react';

import Pokedex from './pokedex/Pokedex'
import SearchPokemon from './components/SearchPokemon'

import './App.css';

function App() {
  const initialPokemonValue = {
    id: '',
    name: '',
    sprites: {}
  }
  const [selectedPokemon, setSelectedPokemon] = useState(initialPokemonValue)

  return (
    <Fragment>
      <SearchPokemon setSelectedPokemon={setSelectedPokemon}/>
      <Pokedex sprite={selectedPokemon.sprites.front_default}/>
    </Fragment>
  )
}

export default App;
