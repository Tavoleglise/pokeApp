import styles from "./PokemonCard.module.scss";
import { Link } from "wouter";

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className={styles.card}>
      <div className={styles.id}>{pokemon.id}</div>
      <img src={pokemon.sprites.front_default} alt={pokemon.id} />
      <div className={styles.name}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </div>
    </Link>
  );
}
