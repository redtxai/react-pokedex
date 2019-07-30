import React, { Component } from 'react'

import PokemonData from './pokemon-data/PokemonData'
import PokedexCover from './pokedex-cover/PokedexCover'
import Hinge from './hinge/Hinge'
import PokedexControls from './pokedex-controls/PokedexControls'

import './Pokedex.css'

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {isFlipped: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
