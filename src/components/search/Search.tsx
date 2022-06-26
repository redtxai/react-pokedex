import React from 'react'

import { SearchPokemonValue } from '../../models/SearchPokemon.model';

import './Search.css'

interface SearchProps {
  pokemonList: SearchPokemonValue[];
  onPokemonSelected: (index: number) => void;
}

export const Search = (props: SearchProps) => {
  return (
    <section className="search-wrapper">
      <input className="search-input" />
      {
        props.pokemonList.length > 0 && 
        <ul className="search-pokemon-list">
          {props.pokemonList.map((pokemon, index) => (
            <li className="search-pokemon"
            key={index}
            onClick={() => props.onPokemonSelected(index)}>
              {(index + 1) + ' - ' + pokemon.name}
            </li>
          ))}
        </ul>
      }
    </section>
  )
}
