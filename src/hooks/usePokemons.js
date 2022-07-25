import { useEffect, useState } from "react";
import { getPokemon, getPokemonGroup } from "../utils/api";

export default function usePokemons(numOfPokemons = 151) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemonGroup(numOfPokemons);
      const promises = data.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, loading };
}
