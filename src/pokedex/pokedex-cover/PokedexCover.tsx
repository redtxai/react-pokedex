import React from 'react';

import './PokedexCover.css'

interface PokedexCoverProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const PokedexCover = (props: PokedexCoverProps) => <div className="pokedex-cover" onClick={props.onClick}>
  <header></header>
  <div className="triangle">
  <svg height="40" width="25">
    <polygon points="1,0 17.0, 17.0 1, 34"/>
    </svg>
  </div>
  <footer></footer>
</div>
