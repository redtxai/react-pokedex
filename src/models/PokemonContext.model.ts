import { PokemonValue } from "./Pokemon.model"

export type PokemonDataState = {
  cache: PokemonDataCache;
  setNewCache: (newCache: PokemonDataCache) => void;

  selectedPokemon: PokemonValue;
  selectNewPokemon: (pokemon: PokemonValue) => void;
}

export type PokemonDataCache = Record<string, PokemonValue>
