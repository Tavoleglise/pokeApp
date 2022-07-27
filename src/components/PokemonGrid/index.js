import usePokemons from "../../hooks/usePokemons";
import { useEffect, useState, lazy, Suspense } from "react";
import PokemonCard from "../PokemonCard";
import styles from "./PokemonGrid.module.scss";
import LoadingComp from "../LoadingComp";
import { motion } from "framer-motion";

export default function PokemonGrid({ pokemons, loading }) {
  //const PokemonCard = lazy(() => import("../PokemonCard"));
  return (
    <>
      {!loading ? (
        <motion.div className={styles.grid}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </motion.div>
      ) : (
        <LoadingComp />
      )}
    </>
  );
}
