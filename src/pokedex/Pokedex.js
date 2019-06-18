import React, { Component } from 'react'

import PokemonData from './pokemon-data/PokemonData.js'
import Hinge from './hinge/Hinge.js'
import PokedexControls from './pokedex-controls/PokedexControls.js'

import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        <PokemonData/>
        <Hinge/>
        <PokedexControls/>
      </div>
    );
  }
}

export default Pokedex
