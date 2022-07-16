import React, { useState, useEffect, useContext } from 'react'

import { PokemonValue } from '../models/Pokemon.model';
import { SearchPokemonData, SearchPokemonValue } from '../models/SearchPokemon.model';
import { SearchPokemonContext } from '../context/SelectPokemonProvider';
import { Search } from './search/Search';

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

  const handleSelectPokemon = (pokemonIndex: number) => {
    const selectedSearchPokemon = pokemonList[pokemonIndex]
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

  return <Search pokemonList={pokemonList} onPokemonSelected={handleSelectPokemon}></Search>
}
