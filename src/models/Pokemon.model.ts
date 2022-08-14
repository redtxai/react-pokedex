export type Sprite = {
  front_default?: string
}

export type Type = {
  name: string,
}

export type PokemonValue = {
  id: string,
  name: string,
  sprites: Sprite
  types: Type[]
  species?: PokemonSpeciesValue
}

export type PokemonAPIValue = {
  id: string,
  name: string,
  sprites: Sprite
  types: Array<{ slot: number, type: Type }>
  species: { name: string, url: string }
}

export type PokemonSpeciesValue = {
  flavorTextEntries: Array<{ flavorText: string }>
}

export type PokemonSpeciesAPIValue = {
  flavor_text_entries: Array<{ flavor_text: string, language: SpeciesLanguage, version: SpeciesVersion }>
}

type SpeciesLanguage = { name: string, url: string }
type SpeciesVersion = { name: string, url: string }
