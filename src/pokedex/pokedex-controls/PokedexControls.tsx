import React, { useContext } from 'react'
import { ControlsContext } from '../../context/ControlsProvider'

import './PokedexControls.css'

export const PokedexControls = () => {
  const { isShiny, toggleIsShinyValue, isFemale, toggleIsFemaleValue } = useContext(ControlsContext)

  return (
    <div className="pokedex-controls">
      <div className="pokedex-controls-box">
        <div className="controls-bumper"></div>
        <div className="controls-buttons-grid">
          <div className="line">
            <div className="control-button"></div>
            <div className="control-button"></div>
            <div className="control-button"></div>
            <div className="control-button"></div>
            <div className="control-button"></div>
          </div>
          <div className="line">
            <div className="control-button"></div>
            <div className="control-button"></div>
            <div className="control-button"></div>
            <div className="control-button"></div>
            <div className="control-button"></div>
          </div>
        </div>
        <footer>
          <div className="controls-footer-column-left">
            <div className="gray-buttons">
              <div className={`gray-button ${isShiny ? 'gray-button-selected' : ''}`} onClick={() => toggleIsShinyValue()}></div>
              <div className={`gray-button ${isFemale ? 'gray-button-selected' : ''}`} onClick={() => toggleIsFemaleValue()}></div>
            </div>
            <div className="footer-bumper"></div>
          </div>
          <div className="controls-footer-column-right">
            <div className="controls-double-buttons">
              <div className="bumper-button"></div>
              <div className="bumper-button"></div>
            </div>
            <div className="controls-yellow-circle">
              <div className="controls-yellow-circle-glass"></div>
            </div>
            <div className="footer-bumper"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}
