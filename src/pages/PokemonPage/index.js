import usePokemon from "../../hooks/usePokemon";
import { useEffect, useState } from "react";
import { getPokemon } from "../../utils/api";
import styles from "./PokemonPage.module.scss";
import LoadingComp from "../../components/LoadingComp";

export default function PokemonPage({ params }) {
  const { id } = params;
  const { pokemon, loading, sprites } = usePokemon(id);
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div className={styles.pokemonDetailPage}>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <div>
            <img src={sprites.front_default} alt="image" />
          </div>
          <div className={styles.columnInfo}>
            <h2>{pokemon.name}</h2>
            <small>Id: {pokemon.id}</small>
          </div>
        </>
      )}
    </div>
  );
}
