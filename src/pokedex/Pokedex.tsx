import React, { useState } from 'react'

import { PokemonData } from './pokemon-data/PokemonData'
import { PokedexCover } from './pokedex-cover/PokedexCover'
import { Hinge } from './hinge/Hinge'
import { PokedexControls } from './pokedex-controls/PokedexControls'

import './Pokedex.css'

export const Pokedex = () => {
  const [isFlipped, toggleIsFlipped] = useState(false);

  return (<div className="pokedex">
      <PokemonData/>
        <div className={`turn-effect ${isFlipped ? ' flip' : ''}`}>
          <PokedexCover onClick={() => toggleIsFlipped(!isFlipped)}/>
          <PokedexControls/>
        </div>
      <Hinge/>
    </div>
  )
}
