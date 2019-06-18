import React, { Component } from 'react'

import './PokemonData.css'

class PokemonData extends Component {
  render() {
    return (
      <div className="show-pokemon-data">
        <header className="pokedex-header">
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
        <div className="pokemon-data">
          <div className="pokemon-data-box">
            <div className="pokemon-display">
              <header className="display-header">
                <div className="display-small-circle"></div>
                <div className="display-small-circle"></div>
              </header>
              <div className="display">
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
            <footer className="pokedex-footer">
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
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonData
