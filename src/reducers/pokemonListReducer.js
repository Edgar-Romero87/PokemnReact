// import axios from 'axios';

const initialState = []

export default function Reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'POKEMON_LIST':
 

      return payload.results

    default:
      return state;
  }
}