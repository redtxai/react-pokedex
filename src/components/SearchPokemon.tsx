import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { PokemonValue } from '../models/Pokemon.model';

// import './SearchPokemon.css';

interface SearchPokemonProps {
  setSelectedPokemon: React.Dispatch<React.SetStateAction<PokemonValue>>
}

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

export const SearchPokemon = ({ setSelectedPokemon }: SearchPokemonProps ) => {
  const initialListValue = []
  const [pokemonList, setPokemonList] = useState(initialListValue);

  useEffect(() => {
    axios
      .get<SearchPokemonData>(
        "https://pokeapi.co/api/v2/pokemon/"
      )
      .then((res) => {
        setPokemonList(res.data.results)
      })
  }, [])

  const handleSelectPokemon = ({ target }) => {
    if (!target.value) {
      return
    }
    axios
      .get<PokemonValue>(
        target.value
      )
      .then((res) => {
        const pokemon: PokemonValue = res.data
        setSelectedPokemon(pokemon)
      })
  }

  return (
    <select onChange={handleSelectPokemon}>
      <option/>
      {
        pokemonList.map(({ name, url }, index) => {
          return <option key={index} value={url}>{name}</option>
        })
      }
    </select>
  )
}
