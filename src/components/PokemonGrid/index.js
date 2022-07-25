import usePokemons from "../../hooks/usePokemons";
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import styles from "./PokemonGrid.module.scss";
import LoadingComp from "../LoadingComp";

export default function PokemonGrid({ pokemons, loading }) {
  return (
    <div className={styles.grid}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
