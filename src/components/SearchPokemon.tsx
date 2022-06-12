import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { PokemonValue } from '../models/Pokemon.model';
import { SearchPokemonContext } from '../context/SelectPokemonProvider';

// import './SearchPokemon.css';

interface SearchPokemonData {
  count: number;
  next: string;
  previous: string;
  results: SearchPokemonValue[];
}

interface SearchPokemonValue {
  name: string;
  url: string;
}

export const SearchPokemon = () => {
  const { cache, setNewCache, selectedPokemon, selectNewPokemon } = useContext(SearchPokemonContext)

  const initialListValue: SearchPokemonValue[] = []
  const [pokemonList, setPokemonList] = useState(initialListValue);

  const selectPokemon = (newPokemon: PokemonValue) => newPokemon.id !== selectedPokemon.id && selectNewPokemon(newPokemon)

  useEffect(() => {
    axios
      .get<SearchPokemonData>(
        "https://pokeapi.co/api/v2/pokemon/"
      )
      .then((res) => {
        const pokemonDataList: SearchPokemonData = res.data
        setPokemonList(pokemonDataList.results)
      })
  }, [])

  const handleSelectPokemon = ({ target }) => {
    if (!target.value) {
      return
    }

    const selectedPokemon = pokemonList[target.value]
    const cachedPokemon = cache[selectedPokemon.name]

    if (cachedPokemon) {
      selectPokemon(cachedPokemon)
      return
    }

    axios
      .get<PokemonValue>(
        selectedPokemon.url
      )
      .then((res) => {
        const pokemon: PokemonValue = res.data
        cache[selectedPokemon.name] = pokemon
        setNewCache(cache)
        selectPokemon(pokemon)
      })
  }

  return (
      <select onChange={handleSelectPokemon}>
        <option/>
        {
          pokemonList.map((pokemon: SearchPokemonValue, index) => {
            return <option key={index} value={index}>{pokemon.name}</option>
          })
        }
      </select>
  )
}
