import React, { useEffect, useRef, useState } from 'react'

import { SearchPokemonValue } from '../../models/SearchPokemon.model';

import './Search.css'

interface SearchProps {
  pokemonList: SearchPokemonValue[];
  onPokemonSelected: (index: number) => void;
}

export const Search = ({ pokemonList, onPokemonSelected }: SearchProps) => {
  const timerRef = useRef(null);

  const [inputSearchText, setInputSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputSearchText) {
      timerRef.current = setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [inputSearchText]);

  const filterPokemonList = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value || !event.currentTarget.value.trim()) {
      setLoading(false)
      setInputSearchText('')
      return
    }

    const newInputSearchTextValue = event.currentTarget.value.trim()
    if (newInputSearchTextValue === inputSearchText) {
      return
    }

    setLoading(true)
    setInputSearchText(newInputSearchTextValue)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }

  return (
    <section className="search-wrapper">
      <input className="search-input" onKeyUp={filterPokemonList}/>
      {
        pokemonList.length > 0 && 
        !loading && 
        <ul className="search-pokemon-list">
          {pokemonList.filter(pokemon => pokemon.name.includes(inputSearchText.toLowerCase())).map(({ id, name }) => (
            <li className="search-pokemon"
              key={id}
              onClick={() => onPokemonSelected(id)}>
                {`${id + 1} - ${name}`}
            </li>
          ))}
        </ul>
      }
      {
        loading && <div>loading</div>
      }
    </section>
  )
}
