import { useEffect, useState } from "react";
import { getPokemon } from "../utils/api";

export default function usePokemon(pokemonIdorName = 1) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPokemon(pokemonIdorName).then((item) => {
      setPokemon(item);
      setLoading(false);
    });
  }, [pokemonIdorName]);

  return { pokemon, loading };
}
