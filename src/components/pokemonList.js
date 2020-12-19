import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../actions/pokemonActions.js";

export default function Pokemon() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.list);
  console.log(pokemonList);

  useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  return (
    <>
      <h2>HELLO{pokemonList}</h2>
    </>
  );
}
