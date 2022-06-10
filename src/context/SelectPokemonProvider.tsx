import React, { createContext, useState, FC } from "react";
import { PokemonDataCache, PokemonDataState } from "../models/PokemonContext.model";

const contextDefaultValues: PokemonDataState = {
  cache: {},
  setNewCache: () => {}
};

export const SearchPokemonContext = createContext<PokemonDataState>(
  contextDefaultValues
);

export const SearchPokemonProvider: FC = ({ children }) => {
  const [cache, setCache] = useState<PokemonDataCache>(contextDefaultValues.cache);

  const setNewCache = (newCache: PokemonDataCache) => setCache(newCache);

  return (
    <SearchPokemonContext.Provider
      value={{
        cache,
        setNewCache
      }}
    >
      {children}
    </SearchPokemonContext.Provider>
  );
};
