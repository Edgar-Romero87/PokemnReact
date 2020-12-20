import axios from "axios";
import { createUnparsedSourceFile } from "typescript";


// ?limit=${perPage}&offset=${offset}

const api  = 'https://pokeapi.co/api/v2/pokemon/';


export const getPokemonList = () => async dispatch => {
  const response = await axios.get(api);
  const items = response.data;
  console.log(items)
  dispatch({
    type: 'POKEMON_LIST',
    payload: items
  });
};
