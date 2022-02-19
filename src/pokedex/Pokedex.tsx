import React, { useState } from 'react'

import PokemonData from './pokemon-data/PokemonData'
import { PokedexCover } from './pokedex-cover/PokedexCover'
import Hinge from './hinge/Hinge'
import { PokedexControls } from './pokedex-controls/PokedexControls'

import './Pokedex.css'

interface PokedexProps {
  sprite: string
}

export const Pokedex = ({ sprite }: PokedexProps) => {
  const [isFlipped, toggleIsFlipped] = useState(false);

  return (<div className="pokedex">
      <PokemonData sprite={sprite}/>
        <div className={`turn-effect ${isFlipped ? ' flip' : ''}`}>
          <PokedexCover onClick={() => toggleIsFlipped(!isFlipped)}/>
          <PokedexControls/>
        </div>
      <Hinge/>
    </div>
  )
}
