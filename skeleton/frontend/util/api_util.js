export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon'
  })
}

export const fetchPokemonById = (id) => {
  return $.ajax({
    url: `/api/pokemon/${id}`
  });
}