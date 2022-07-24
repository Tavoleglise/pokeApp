import usePokemons from "../../hooks/usePokemons";
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import styles from "./PokemonGrid.module.scss";

export default function PokemonGrid() {
  const [listOfPokemons, setListOfPokemons] = useState([]);
  const { pokemons, loading } = usePokemons();
  useEffect(() => {
    setListOfPokemons(pokemons);
  });

  return (
    <div className={styles.grid}>
      {listOfPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
