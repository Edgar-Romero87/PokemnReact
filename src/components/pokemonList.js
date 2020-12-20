import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/pokemonActions.js";



export default function Pokemon() {

  const dispatch = useDispatch();

  const listOfPokemon = useSelector((state) => state.list);
  console.log('HAFSJGSVCJSVJHCV', listOfPokemon);

  useEffect(() => {
    dispatch(actions.getPokemonList())
  }, []);

  return (
    
    <>
      <h2>All Pokemon:</h2>
        <ul>
            {listOfPokemon.map( (item) => 
              <li key={Math.random()} > 
                {item.name}
              </li>              
            )}      
        </ul>
    </>
  );
}
