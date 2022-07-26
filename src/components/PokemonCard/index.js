import styles from "./PokemonCard.module.scss";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function PokemonCard({ pokemon }) {
  return (
    <motion>
      <Link to={`/pokemon/${pokemon.name}`}>
        <motion.div layout className={styles.card}>
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
