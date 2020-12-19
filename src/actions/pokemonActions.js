import axios from "axios";

// ?limit=${perPage}&offset=${offset}

export const getPokemonList = () => async (dispatch) => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  const items = response.data.results;
  dispatch({
    type: "POKEMON_LIST",
    payload: items
  });
};
