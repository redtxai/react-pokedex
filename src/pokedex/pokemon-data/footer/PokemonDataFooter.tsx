import React from 'react'

import './PokemonDataFooter.css'

export const PokemonDataFooter = () => <footer className="pokedex-footer">
  <div className="footer-button-column">
    <div className="footer-button"></div>
  </div>
  <div className="footer-number-display-column">
    <header className="number-display-header">
      <div className="number-black-button"></div>
      <div className="number-blue-button"></div>
    </header>
    <div className="number-display"></div>
  </div>
  <div className="footer-directions-column">
    <header>
      <div className="up-directional">
        <svg height="7" width="7">
          <polygon points="3.5,0 7,4 0,4"/>
        </svg>
      </div>
    </header>
    <div>
      <div className="left-directional">
        <svg height="7" width="7">
          <polygon points="3.5,0 7,4 0,4"/>
        </svg>
      </div>
      <div className="center-directional">
        <svg height="7" width="7">
          <polygon points="3.5,0 7, 3.5 3.5, 7 0,3.5"/>
        </svg>
      </div>
      <div className="right-directional">
        <svg height="7" width="7">
          <polygon points="3.5,0 7,4 0,4"/>
        </svg>
      </div>
    </div>
    <footer>
      <div className="down-directional">
        <svg height="7" width="7">
          <polygon points="3.5,0 7,4 0,4"/>
        </svg>
      </div>
    </footer>
  </div>
</footer>
