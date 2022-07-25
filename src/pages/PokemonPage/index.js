import usePokemon from "../../hooks/usePokemon";
import { useEffect, useState } from "react";
import { getPokemon } from "../../utils/api";

export default function PokemonPage({ params }) {
  const { id } = params;
  const { pokemon, loading } = usePokemon(parseInt(id));

  useEffect(() => {}, [pokemon]);

  return <div>{pokemon.name}</div>;
}
