import React, { useContext } from 'react'

import { PokemonDataHeader } from './header/PokemonDataHeader'
import { PokemonDataFooter } from './footer/PokemonDataFooter'
import { SearchPokemonContext } from '../../context/SelectPokemonProvider'
import './PokemonData.css'

export const PokemonData = () => {
  const { selectedPokemon } = useContext(SearchPokemonContext)

  return <div className="show-pokemon-data">
      <PokemonDataHeader/>
      <div className="pokemon-data">
        <div className="pokemon-data-box">
          <div className="pokemon-display">
            <header className="display-header">
              <div className="display-small-circle"></div>
              <div className="display-small-circle"></div>
            </header>
            <div className="display">
              {!selectedPokemon.sprites.front_default || <img src={selectedPokemon.sprites.front_default} alt="pokemon"/>}
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
          <PokemonDataFooter/>
        </div>
        </div>
    </div>
}
