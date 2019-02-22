import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from "../actions/pokemon_actions";

export default (state = {}, action) => {
  Object.freeze(state)
  let newState;
  switch (action.type) {

    case RECEIVE_ALL_POKEMON:
      newState = Object.assign({}, action.pokemon, state)
      return newState;

    case RECEIVE_POKEMON:
      newState = Object.assign({}, state)
      newState[action.pokemon.id] = action.pokemon
      return newState;
    
    default:
      return state;
  }
}