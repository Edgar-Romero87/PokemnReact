import React from "react";
import { Provider } from "react-redux";
import store from "../src/reducers/combineReducers.js";
import Pokemon from "../src/components/pokemonList.js";


export default function App() {
  return (
    <Provider store={ store }>
      <h1>*Pokemon World *</h1>
        <Pokemon />
    </Provider>
  );
}
