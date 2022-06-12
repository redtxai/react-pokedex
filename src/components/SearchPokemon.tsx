import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { PokemonValue } from '../models/Pokemon.model';
import { SearchPokemonData, SearchPokemonValue } from '../models/SearchPokemon.model';
import { SearchPokemonContext } from '../context/SelectPokemonProvider';

// import './SearchPokemon.css';

export const SearchPokemon = () => {
  const {
    cache, setNewCache,
    selectedPokemon, selectNewPokemon,
    pokemonSearchService } = useContext(SearchPokemonContext)

  const initialListValue: SearchPokemonValue[] = []
  const [pokemonList, setPokemonList] = useState(initialListValue);

  const selectPokemon = (newPokemon: PokemonValue) => newPokemon.id !== selectedPokemon.id && selectNewPokemon(newPokemon)

  useEffect(() => {
    pokemonSearchService.getAllPokemon()
      .then((res) => {
        const pokemonDataList: SearchPokemonData = res.data
        setPokemonList(pokemonDataList.results)
      })
  }, [pokemonSearchService])

  const handleSelectPokemon = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (!event.currentTarget.value) {
      return
    }

    const selectedSearchPokemon = pokemonList[+event.currentTarget.value]
    const cachedPokemon = cache[selectedSearchPokemon.name]

    if (cachedPokemon) {
      selectPokemon(cachedPokemon)
      return
    }

    pokemonSearchService.getPokemon(selectedSearchPokemon.url)
      .then((res) => {
        const pokemon: PokemonValue = res.data
        cache[selectedSearchPokemon.name] = pokemon
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
