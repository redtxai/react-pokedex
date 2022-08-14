import React, { useContext, useEffect, useState } from 'react'

import { SearchPokemonContext } from '../../../context/SelectPokemonProvider'
import './PokemonDataHeader.css'

export const PokemonDataHeader = () => {
  const [isVoicePlaying, setVoicePlaying] = useState(false);
  const { pokedexVoiceService } = useContext(SearchPokemonContext)

  useEffect(() => {
    pokedexVoiceService.speech.addEventListener('start', () => {
      setVoicePlaying(true)
    })

    pokedexVoiceService.speech.addEventListener('end', () => {
      setVoicePlaying(false)
    })
  }, [pokedexVoiceService.speech])

  return <header className="pokedex-header">
    <div className="voice-circle-wrapper">
      <div className={`voice-circle ${isVoicePlaying ? 'voice-playing' : ''}`}>
        <div className="glass-effect"></div>
      </div>
    </div>
    <div className="colors-circles">
      <div className="red-circle">
        <div className="color-circle-glass-effect"></div>
      </div>
      <div className="yellow-circle">
        <div className="color-circle-glass-effect"></div>
      </div>
      <div className="green-circle">
        <div className="color-circle-glass-effect"></div>
      </div>
    </div>
  </header>
}
