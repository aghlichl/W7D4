import React from 'react'
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  return (
    <Link to={`/pokemon/${props.pokemon.id}`}> 
      <li className="poke-thumb">
          {props.pokemon.name}
          <img src={props.pokemon.image_url} />
      </li>
    </Link>
  );
};

export default PokemonIndexItem;