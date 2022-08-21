export type PokemonControlsState = {
  flavorTextIndex: number;
  setNewFlavorTextIndex: (pokemon: number) => void;

  isShiny: boolean;
  toggleIsShinyValue: () => void;

  isFemale: boolean;
  toggleIsFemaleValue: () => void;

  isBack: boolean;
  toggleIsBackValue: () => void;
}
