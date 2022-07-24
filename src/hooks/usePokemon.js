import { useEffect, useState } from "react";
import { getPokemon } from "../utils/getPokemons";

export default function usePokemon({ pokemonId } = { pokemonId: null }) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPokemon(currentId).then((item) => {
      setPokemon(item);
      setLoading(false);
    });
  }, [pokemonId]);

  return { pokemon, loading };
}
