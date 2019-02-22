import React from 'react'

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestPokemonById();
  }

  render() {
    if(this.props.pokemon === undefined){
      return null;
    }
    return( 

      <div className="detail">
        <p>{this.props.pokemon.name}</p>
        <img src={this.props.pokemon.image_url}/>
      </div>
    )
  }
}

export default PokemonDetail;