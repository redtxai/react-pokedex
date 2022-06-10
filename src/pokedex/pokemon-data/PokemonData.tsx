import React from 'react'

import { PokemonDataHeader } from './header/PokemonDataHeader'
import { PokemonDataFooter } from './footer/PokemonDataFooter'
import './PokemonData.css'

interface PokemonDataProps {
  sprite: string
}

export const PokemonData = ({ sprite }: PokemonDataProps) => <div className="show-pokemon-data">
  <PokemonDataHeader />
  <div className="pokemon-data">
    <div className="pokemon-data-box">
      <div className="pokemon-display">
        <header className="display-header">
          <div className="display-small-circle"></div>
          <div className="display-small-circle"></div>
        </header>
        <div className="display">
          {!sprite || <img src={sprite} alt="pokemon"/>}
        </div>
        <footer className="display-footer">
          <div className="display-circle"></div>
          <div className="display-audio">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </footer>
      </div>
      <PokemonDataFooter />
    </div>
  </div>
</div>
