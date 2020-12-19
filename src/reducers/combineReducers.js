import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import pokemonListReducer from "./pokemonReducer.js";

const reducers = combineReducers({
  list: pokemonListReducer
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
