import React, { createContext, useState, FC } from "react";
import { PokemonValue } from "../models/Pokemon.model";
import { PokemonDataCache, PokemonDataState } from "../models/PokemonContext.model";
import { DEFAULT_POKEMON } from "../utils/Utils";
import { PokemonSearchService } from '../services/PokemonSearchService.service';
import { PokedexVoiceService } from '../services/PokedexVoiceService.service';

const contextDefaultValues: PokemonDataState = {
  cache: {},
  setNewCache: () => {},

  selectedPokemon: DEFAULT_POKEMON,
  selectNewPokemon: () => {},

  pokemonSearchService: new PokemonSearchService(),

  pokedexVoiceService: new PokedexVoiceService(),

  globalLoading: false,
  setNewGlobalLoading: () => {},
};

export const SearchPokemonContext = createContext<PokemonDataState>(
  contextDefaultValues
);

export const SearchPokemonProvider: FC = ({ children }) => {
  const [cache, setCache] = useState<PokemonDataCache>(contextDefaultValues.cache);
  const [selectedPokemon, selectPokemon] = useState<PokemonValue>(contextDefaultValues.selectedPokemon);
  const [pokemonSearchService] = useState<PokemonSearchService>(contextDefaultValues.pokemonSearchService);
  const [pokedexVoiceService] = useState<PokedexVoiceService>(contextDefaultValues.pokedexVoiceService);
  const [globalLoading, setGlobalLoading] = useState<boolean>(contextDefaultValues.globalLoading);

  const setNewCache = (newCache: PokemonDataCache) => setCache(newCache);

  const selectNewPokemon = (newPokemon: PokemonValue) => newPokemon.id !== selectedPokemon.id && selectPokemon(newPokemon)

  const setNewGlobalLoading = (globalLoading: boolean) => setGlobalLoading(globalLoading);

  return (
    <SearchPokemonContext.Provider
      value={{
        cache,
        setNewCache,
        selectedPokemon,
        selectNewPokemon,
        pokemonSearchService,
        pokedexVoiceService,
        globalLoading,
        setNewGlobalLoading
      }}
    >
      {children}
    </SearchPokemonContext.Provider>
  );
};
