import axios from 'axios'

import { PokemonAPIValue, PokemonSpeciesAPIValue, PokemonSpeciesValue, PokemonValue } from '../models/Pokemon.model';
import { SearchPokemonData } from "../models/SearchPokemon.model";

export class PokemonSearchService {
  apiURLbase = "https://pokeapi.co/api/v2/pokemon"
  getAllPokemon = () => axios.get<SearchPokemonData>(`${this.apiURLbase}?limit=1154`)

  getPokemon = async (pokemonUrl: string): Promise<PokemonValue> => {
    const res = await axios.get<PokemonAPIValue>(pokemonUrl)
    const { id, name, sprites, types, species } = res.data

    const speciesParsed = await this.getPokemonFlavorText(species.url)

    return { id, name, sprites, types: types.map(({ type }) => ({ name: type.name })), species: speciesParsed }
  }

  getPokemonFlavorText = async (url: string): Promise<PokemonSpeciesValue> => {
    const res = await axios.get<PokemonSpeciesAPIValue>(url)
    const hashCache: { [key: string]: boolean; } = {}
    return {
      flavorTextEntries: res.data.flavor_text_entries.reduce((acc, entry) => {
        if (entry.language.name === 'en' && !hashCache[entry.flavor_text]) {
          acc.push({ flavorText: entry.flavor_text.replace(/(?:\\[fnr]|[\f\n\r]+)+/g," ") })
          hashCache[entry.flavor_text] = true
        }
        return acc
      },[])
    }
  }
}
