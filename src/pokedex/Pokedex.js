import React, { Component } from 'react'

import PokemonData from './pokemon-data/PokemonData.js'
import PokedexCover from './pokedex-cover/PokedexCover.js'
import Hinge from './hinge/Hinge.js'
import PokedexControls from './pokedex-controls/PokedexControls.js'

import './Pokedex.css'

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {isFlipped: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('teste')
    this.setState(state => ({
      isFlipped: !state.isFlipped
    }));
  }

  render() {
    let className = 'turn-effect';
    if (this.state.isFlipped) {
      className += ' flip';
    }
    return (
      <div className="pokedex">
        <PokemonData/>
          <div className={className}>
            <PokedexCover onClick={this.handleClick}/>
            <PokedexControls/>
          </div>
        <Hinge/>
      </div>
    );
  }
}

export default Pokedex
