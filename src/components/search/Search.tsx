import React, { useEffect, useRef, useState } from 'react'

import { SearchPokemonValue } from '../../models/SearchPokemon.model';

import './Search.css'

interface SearchProps {
  pokemonList: SearchPokemonValue[];
  onPokemonSelected: (index: number) => void;
}

export const Search = ({ pokemonList, onPokemonSelected }: SearchProps) => {
  const timerRef = useRef(null);

  const [pokemonListState, setPokemonListState] = useState([]);
  const [inputSearchText, setInputSearchText] = useState('');

  useEffect(() => {
    setPokemonListState(pokemonList)
  }, [pokemonList])

  const filterPokemonList = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (!event.currentTarget.value || !event.currentTarget.value.trim()) {
      setPokemonListState(pokemonList)
      return
    }
    setInputSearchText(event.currentTarget.value)

    timerRef.current = setTimeout(() => {
      const a = pokemonListState.filter(pokemon => pokemon.name.includes(inputSearchText.toLowerCase()))
      setPokemonListState(a)
    }, 1000)
  }

  return (
    <section className="search-wrapper">
      <input className="search-input" onKeyUp={filterPokemonList}/>
      {
        pokemonListState.length > 0 && 
        <ul className="search-pokemon-list">
          {pokemonListState.map((pokemon, index) => (
            <li className="search-pokemon"
              key={index}
              onClick={() => onPokemonSelected(index)}>
                {(index + 1) + ' - ' + pokemon.name}
            </li>
          ))}
        </ul>
      }
    </section>
  )
}
