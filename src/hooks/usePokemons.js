import { useEffect, useState } from "react";
import { getPokemon, getPokemonGroup } from "../utils/getPokemons";

export default function usePokemons(
  { numOfPokemons } = { numOfPokemons: 150 }
) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemonGroup();
      const promises = data.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, loading };
}
