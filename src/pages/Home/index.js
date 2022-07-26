import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import PokemonGrid from "../../components/PokemonGrid";
import usePokemons from "../../hooks/usePokemons";
import useFilteredPokemonsByNameOrId from "../../hooks/useFilteredPokemonsByNameOrId";
import { Link, useLocation } from "wouter";

export default function Home() {
  const { pokemons, loading } = usePokemons();
  const [pokemonName, setPokemonName] = useState("");
  const { filteredPokemons } = useFilteredPokemonsByNameOrId(
    pokemonName,
    pokemons
  );
  const [path, pushLocation] = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/pokemon/${pokemonName}`);
  };

  const handleOnChange = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <div className={styles.home}>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit}>
          <input
            value={pokemonName}
            onChange={handleOnChange}
            placeholder="Search Pokemon"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <PokemonGrid pokemons={filteredPokemons} loading={loading} />
    </div>
  );
}
