import { useEffect, useState } from "react";

export default function useFilteredPokemons(
  word = "",
  currentType = "all",
  pokemons = []
) {
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    if (currentType !== "all") {
      setFilteredPokemons(
        pokemons.filter(
          (pokemon) =>
            (pokemon.name.includes(word.toLocaleLowerCase()) ||
              word == pokemon.id) &&
            pokemon.types.some((typeObj) => typeObj.type.name === currentType)
        )
      );
    } else if (word) {
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
    /*if (currentType !== "all") {
      setFilteredPokemons(
        pokemons.filter((pokemon) =>
          pokemon.types.some((typeObj) => typeObj.type.name === currentType)
        )
      );
    } else {
    }*/
  }, [word, currentType]);
  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  return { filteredPokemons };
}
