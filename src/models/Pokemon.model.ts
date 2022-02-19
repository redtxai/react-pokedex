export interface Sprite {
  front_default?: string
}

export interface PokemonValue {
  id: string,
  name: string,
  sprites: Sprite
}
