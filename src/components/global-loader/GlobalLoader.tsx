import React, { useContext } from 'react'
import { SearchPokemonContext } from '../../context/SelectPokemonProvider'
import { Pokeball } from '../pokeball/Pokeball'

import './GlobalLoader.css'

export const GlobalLoader = () => {
  const { globalLoading } = useContext(SearchPokemonContext)

  return <>
    <div className={'backdrop ' + (globalLoading ? 'display-block' : '')}></div>
    <div className={'global-loader ' + (globalLoading ? 'display-block' : '')}>
      <Pokeball pokeballSize={100} animation="tada" />
    </div>
  </>
}
