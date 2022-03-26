import React, { Fragment, useState } from 'react';

import { Pokedex } from './pokedex/Pokedex'
import { SearchPokemon } from './components/SearchPokemon'

import './App.css';
import { PokemonValue } from './models/Pokemon.model';



export const App = () => {
  const initialPokemonValue: PokemonValue = {
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