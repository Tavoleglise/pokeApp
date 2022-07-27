import { useEffect, useState } from "react";
import { getPokemon, getPokemonGroup, getPokemonByName } from "../utils/api";

export default function usePokemons(arr) {
  const [pokemonsArr, setPokemonsArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [arrNombres, setArrNombres] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setArrNombres(arr);
      const promises = arrNombres.map(async (pokemon) => {
        return await getPokemonByName(pokemon).sprites;
      });
      const results = await Promise.all(promises);
      //console.log(promises);
      setPokemonsArr(results);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [arr]);

  return { pokemonsArr, loading };
}
