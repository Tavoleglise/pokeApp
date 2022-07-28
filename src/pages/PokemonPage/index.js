import usePokemon from "../../hooks/usePokemon";
import { useEffect, useState } from "react";
import styles from "./PokemonPage.module.scss";
import InfoPokemon from "../../components/InfoPokemon";
import StatsPokemon from "../../components/StatsPokemon";
import colours from "../../utils/colours";

export default function PokemonPage({ params }) {
  const { id } = params;
  const { pokemon, loading, sprites } = usePokemon(id);
  const { name, types, abilities, stats } = pokemon;
  const [color, setColor] = useState("#fff");
  const { front_default } = sprites;
  useEffect(() => {
    if (types) {
      setColor(colours[types[0].type.name]);
    }
  }, [pokemon]);

  return (
    <>
      <InfoPokemon
        name={name}
        types={types}
        abilities={abilities}
        loading={loading}
        color={color}
        styles={styles}
        pokemon={pokemon}
        front_default={front_default}
      />

      <StatsPokemon stats={stats} styles={styles} color={color} />
    </>
  );
}
