import { useState, useEffect } from "react";
import usePokemon from "./usePokemon";
import { getEvolutions, getPokemonByName } from "../utils/api";

export default function useEvolutions(pokemonId) {
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    getEvolutions(pokemonId).then((res) => {
      setEvolutions(res);
    });
  }, []);

  return evolutions;
}
