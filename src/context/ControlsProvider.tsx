import React, { createContext, useState, FC } from "react";
import { PokemonControlsState } from "../models/PokemonControlsContext.model";

const contextDefaultValues: PokemonControlsState = {
  flavorTextIndex: 0,
  setNewFlavorTextIndex: () => {},

  isShiny: false,
  toggleIsShinyValue: () => {},

  isFemale: false,
  toggleIsFemaleValue: () => {},

  isBack: false,
  toggleIsBackValue: () => {},
};

export const ControlsContext = createContext<PokemonControlsState>(
  contextDefaultValues
);

export const ControlsProvider: FC = ({ children }) => {
  const [flavorTextIndex, setFlavorTextIndex] = useState<number>(contextDefaultValues.flavorTextIndex);
  const [isShiny, setIsShiny] = useState<boolean>(contextDefaultValues.isShiny);
  const [isFemale, setIsFemale] = useState<boolean>(contextDefaultValues.isFemale);
  const [isBack, setIsBack] = useState<boolean>(contextDefaultValues.isFemale);

  const setNewFlavorTextIndex = (newFlavorTextIndex: number) => newFlavorTextIndex !== flavorTextIndex && setFlavorTextIndex(newFlavorTextIndex);

  const toggleIsShinyValue = () => setIsShiny(!isShiny);

  const toggleIsFemaleValue = () => setIsFemale(!isFemale);

  const toggleIsBackValue = () => setIsBack(!isBack);

  return (
    <ControlsContext.Provider
      value={{
        flavorTextIndex,
        setNewFlavorTextIndex,
        isShiny,
        toggleIsShinyValue,
        isFemale,
        toggleIsFemaleValue,
        isBack,
        toggleIsBackValue
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};
