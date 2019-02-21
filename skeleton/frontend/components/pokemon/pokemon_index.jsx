import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }
  
  render() {
    const {pokemon} = this.props
    
    return (
      <div>
        <ul>
          {pokemon.map(poke => (
            <li className="poke-thumb">
              {poke.name}
              <img src={poke.image_url}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;