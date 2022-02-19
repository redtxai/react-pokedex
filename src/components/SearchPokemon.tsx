import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { PokemonValue } from '../models/Pokemon.model';

// import './SearchPokemon.css';

interface SearchPokemonProps {
  setSelectedPokemon: React.Dispatch<React.SetStateAction<PokemonValue>>
}

export const SearchPokemon = ({ setSelectedPokemon }: SearchPokemonProps ) => {
  const initialListValue = []
  const [pokemonList, setPokemonList] = useState(initialListValue);

  useEffect(() => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/"
      )
      .then(({ data }) => {
        setPokemonList(data.results)
      })
  })

  const handleSelectPokemon = ({ target }) => {
    if (!target.value) {
      return
    }
    axios
      .get(
        target.value
      )
      .then(({ data }) => {
        const { id, name, sprites } = data
        setSelectedPokemon({ id, name, sprites })
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
