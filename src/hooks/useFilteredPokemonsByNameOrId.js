import { useEffect, useState } from "react";

export default function useFilteredPokemonsByNameOrId(
  word = "",
  pokemons = []
) {
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    if (word) {
      setFilteredPokemons(
        pokemons.filter(
          (pokemon) =>
            pokemon.name.includes(word.toLocaleLowerCase()) ||
            word == pokemon.id
        )
      );
    } else {
      setFilteredPokemons(pokemons);
    }
  }, [word]);
  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  return { filteredPokemons };
}
