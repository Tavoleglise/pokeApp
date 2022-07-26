import { useEffect, useState } from "react";
import { getPokemon, getPokemonByName } from "../utils/api";

export default function usePokemon(pokemonId = 1) {
  const [pokemon, setPokemon] = useState({});
  const [sprites, setSprites] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (typeof pokemonId === "number") {
      getPokemon(pokemonId).then((item) => {
        setPokemon(item);
        setLoading(false);
        setSprites(item.sprites);
      });
    } else {
      getPokemonByName(pokemonId).then((item) => {
        setPokemon(item);
        setLoading(false);
        setSprites(item.sprites);
      });
    }
  }, [pokemonId]);

  return { pokemon, loading, sprites };
}
