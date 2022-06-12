import React from 'react';

import { Pokedex } from './pokedex/Pokedex'
import { SearchPokemon } from './components/SearchPokemon'
import { SearchPokemonProvider } from './context/SelectPokemonProvider';

import './App.css';



export const App = () => {

  return (
    <SearchPokemonProvider>
      <section className="main-section">
        <SearchPokemon/>
        <Pokedex/>
      </section>
    </SearchPokemonProvider>
  )
}
