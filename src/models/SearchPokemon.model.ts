export interface SearchPokemonData {
  count: number;
  next: string;
  previous: string;
  results: SearchPokemonValue[];
}

export interface SearchPokemonValue {
  name: string;
  url: string;
}