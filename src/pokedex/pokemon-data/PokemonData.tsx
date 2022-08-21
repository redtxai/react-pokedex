import React, { useContext, useEffect, useState } from 'react'

import { PokemonDataHeader } from './header/PokemonDataHeader'
import { PokemonDataFooter } from './footer/PokemonDataFooter'
import { SearchPokemonContext } from '../../context/SelectPokemonProvider'
import { ControlsContext } from '../../context/ControlsProvider'
import './PokemonData.css'

export const PokemonData = () => {
  const [pokemonSprite, setPokemonSprite] = useState<string>('front_default')
  const { selectedPokemon } = useContext(SearchPokemonContext)
  const { isBack, isShiny, isFemale } = useContext(ControlsContext)

  useEffect(() => {
    const prefix = `${isBack ? 'back' : 'front'}`
    const mid = `${isShiny ? '_shiny' : ''}`
    const suffix = `${isFemale ? '_female' : (isShiny ? '' : '_default')}`

    setPokemonSprite(`${prefix}${mid}${suffix}`)
  },[isBack, isShiny, isFemale])

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
              {!selectedPokemon.sprites[pokemonSprite] || <img src={selectedPokemon.sprites[pokemonSprite]} alt="pokemon"/>}
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
