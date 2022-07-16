import React from 'react';

import { Pokedex } from './pokedex/Pokedex'
import { GlobalLoader } from './components/global-loader/GlobalLoader'
import { SearchPokemon } from './components/SearchPokemon'
import { SearchPokemonProvider } from './context/SelectPokemonProvider';
import { WithAxios } from './context/WithAxios';

import './App.css';



export const App = () => 
  <SearchPokemonProvider>
    <WithAxios>
      <GlobalLoader></GlobalLoader>
      <section className="main-section">
        <SearchPokemon/>
        <Pokedex/>
      </section>
    </WithAxios>
  </SearchPokemonProvider>
