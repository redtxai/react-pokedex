import axios from 'axios'

import { PokemonValue } from '../models/Pokemon.model';
import { SearchPokemonData } from "../models/SearchPokemon.model";

export class PokemonSearchService {
  apiURLbase = "https://pokeapi.co/api/v2/pokemon"
  getAllPokemon = () => axios.get<SearchPokemonData>(`${this.apiURLbase}?limit=1154`)

  getPokemon = (pokemonUrl: string) => axios.get<PokemonValue>(pokemonUrl)
}
