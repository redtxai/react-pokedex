import React from 'react'

import './Pokeball.css'

export type PokeballAnimation = 'tada'

interface PokeballProps {
  pokeballSize?: number;
  animation?: PokeballAnimation;
}

export const Pokeball = ({ pokeballSize, animation }: PokeballProps) =>
  <div className={'pokeball ' + (animation && 'pokeball-' + animation)}
    style={{ "--pokeball-size": (pokeballSize || 50) + 'px' } as React.CSSProperties}>
  </div>
