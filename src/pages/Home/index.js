import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import PokemonGrid from "../../components/PokemonGrid";
import usePokemons from "../../hooks/usePokemons";
import useFilteredPokemonsByNameOrId from "../../hooks/useFilteredPokemonsByNameOrId";

export default function Home() {
  const { pokemons, loading } = usePokemons();
  const [pokemonName, setPokemonName] = useState("");
  const { filteredPokemons } = useFilteredPokemonsByNameOrId(
    pokemonName,
    pokemons
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit}>
          <input
            value={pokemonName}
            onChange={handleOnChange}
            placeholder="Search Pokemon"
          />
        </form>
      </div>
      <PokemonGrid pokemons={filteredPokemons} />
    </>
  );
}
