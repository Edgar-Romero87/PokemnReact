const initialState = {
  pokemonList: [],
  count: 0
};

export default function pokemonListReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "POKEMON_LIST":
      console.log(payload);
      return {
        ...state,
        pokemonList: payload
      };

    default:
      return state;
  }
}
