import { useContext, useState, useEffect } from "react";
import FavPokemonContext from "../../context/favPokemonsContext";
import styles from "./PokemonCard.module.scss";
import { Link } from "wouter";
import { motion } from "framer-motion";
import FavButton from "../FavButton";
import colours from "../../utils/colours";

export default function PokemonCard({ pokemon }) {
  const [color, setColor] = useState("#fff");
  useEffect(() => {
    if (pokemon.types) {
      setColor(colours[pokemon.types[0].type.name]);
    }
  }, [pokemon]);
  return (
    <motion>
      <Link to={`/pokemon/${pokemon.name}`}>
        <motion.div
          layout
          style={{ backgroundColor: `${color}` }}
          className={styles.card}
        >
          <div className={styles.id}>{pokemon.id}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.id} />
          <div className={styles.name}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
        </motion.div>
      </Link>
    </motion>
  );
}
