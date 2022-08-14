import React from 'react'

import './PokemonDataHeader.css'

export const PokemonDataHeader = () => {
  return <header className="pokedex-header">
    <div className="voice-circle">
      <div className="glass-effect"></div>
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
