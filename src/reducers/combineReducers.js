import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import  ListReducer from "./pokemonListReducer.js";

const reducers = combineReducers({
  list: ListReducer
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
