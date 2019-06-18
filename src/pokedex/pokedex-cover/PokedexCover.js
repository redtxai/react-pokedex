import React, { Component } from 'react'

import './PokedexCover.css'

class PokedexCover extends Component {
  render() {
    return (
      <div className="pokedex-cover" onClick={this.props.onClick}>
        <header></header>
        <div className="triangle">
        <svg height="40" width="25">
          <polygon points="1,0 17.0, 17.0 1, 34"/>
          </svg>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default PokedexCover
