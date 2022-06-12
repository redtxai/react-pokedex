import React, { createContext, useState, FC } from "react";
import { PokemonValue } from "../models/Pokemon.model";
import { PokemonDataCache, PokemonDataState } from "../models/PokemonContext.model";
import { DEFAULT_POKEMON } from "../utils/Utils";

const contextDefaultValues: PokemonDataState = {
  cache: {},
  setNewCache: () => {},

  selectedPokemon: DEFAULT_POKEMON,
  selectNewPokemon: () => {}
};

export const SearchPokemonContext = createContext<PokemonDataState>(
  contextDefaultValues
);

export const SearchPokemonProvider: FC = ({ children }) => {
  const [cache, setCache] = useState<PokemonDataCache>(contextDefaultValues.cache);
  const [selectedPokemon, selectPokemon] = useState<PokemonValue>(contextDefaultValues.selectedPokemon);

  const setNewCache = (newCache: PokemonDataCache) => setCache(newCache);

  const selectNewPokemon = (newPokemon: PokemonValue) => newPokemon.id !== selectedPokemon.id && selectPokemon(newPokemon)

  return (
    <SearchPokemonContext.Provider
      value={{
        cache,
        setNewCache,
        selectedPokemon,
        selectNewPokemon
      }}
    >
      {children}
    </SearchPokemonContext.Provider>
  );
};
