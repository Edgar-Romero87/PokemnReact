import React from "react";
import { Provider } from "react-redux";
import store from "../src/reducers/combineReducers.js";
import Pokemon from "../src/components/pokemonList.js";

import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
        <Pokemon />
      </div>
    </Provider>
  );
}
