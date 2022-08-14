export type Sprite = {
  front_default?: string
}

export type Type = {
  name: string,
}

export interface PokemonValue {
  id: string,
  name: string,
  sprites: Sprite
  types: Type[]
}

export interface PokemonAPIValue {
  id: string,
  name: string,
  sprites: Sprite
  types: Array<{ slot: number, type: Type }>
}
