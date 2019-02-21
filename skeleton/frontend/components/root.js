import React from 'react'
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => ( 
  <Provider store={store}>
    <PokemonIndexContainer />
    <h1>Hello World</h1>
  </Provider>
);

export default Root;