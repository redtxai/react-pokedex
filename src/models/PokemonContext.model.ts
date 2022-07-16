import { PokemonSearchService } from "../services/PokemonSearchService.service";
import { PokemonValue } from "./Pokemon.model"

export type PokemonDataState = {
  cache: PokemonDataCache;
  setNewCache: (newCache: PokemonDataCache) => void;

  selectedPokemon: PokemonValue;
  selectNewPokemon: (pokemon: PokemonValue) => void;

  pokemonSearchService: PokemonSearchService

  globalLoading: boolean
  setNewGlobalLoading: (globalLoading: boolean) => void;
}

export type PokemonDataCache = Record<string, PokemonValue>
