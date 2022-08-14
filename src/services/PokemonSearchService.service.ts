import axios from 'axios'

import { PokemonAPIValue, PokemonValue } from '../models/Pokemon.model';
import { SearchPokemonData } from "../models/SearchPokemon.model";

export class PokemonSearchService {
  apiURLbase = "https://pokeapi.co/api/v2/pokemon"
  getAllPokemon = () => axios.get<SearchPokemonData>(`${this.apiURLbase}?limit=1154`)

  getPokemon = async (pokemonUrl: string):Promise<PokemonValue> => {
    const res = await axios.get<PokemonAPIValue>(pokemonUrl)
    const { id, name, sprites, types } = res.data
    return { id, name, sprites, types: types.map(({ type }) => ({ name: type.name })) }
  }
}
