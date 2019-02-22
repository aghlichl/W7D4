import { connect } from 'react-redux'
import { selectPokemonByID } from '../../reducers/selectors'
import PokemonDetail from './pokemon_detail';
import { requestPokemonById } from '../../actions/pokemon_actions'
const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: selectPokemonByID(state, ownProps.match.params.id)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestPokemonById: () => dispatch(requestPokemonById(ownProps.match.params.id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);