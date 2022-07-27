import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import PokemonGrid from "../../components/PokemonGrid";
import usePokemons from "../../hooks/usePokemons";
import useFilteredPokemons from "../../hooks/useFilteredPokemons";
import { Link, useLocation } from "wouter";
import FiltterOptions from "../../components/FilterOptions";

export default function Home() {
  const [currentType, setCurrentType] = useState("all");
  const { pokemons, loading } = usePokemons();
  const [pokemonName, setPokemonName] = useState("");
  const { filteredPokemons } = useFilteredPokemons(
    pokemonName,
    currentType,
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
        <div>
          {" "}
          <label htmlFor="typeSelector" className={styles.typeLabel}>
            Type:
            <FiltterOptions setCurrentType={setCurrentType} />
          </label>
        </div>
      </div>
      <PokemonGrid pokemons={filteredPokemons} loading={loading} />
    </div>
  );
}
