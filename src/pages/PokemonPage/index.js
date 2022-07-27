import useEvolutions from "../../hooks/useEvolutions";
import usePokemon from "../../hooks/usePokemon";
import usePokemonArr from "../../hooks/usePokemonArr";
import { useEffect, useState } from "react";
import { getPokemon, getEvolutions } from "../../utils/api";
import styles from "./PokemonPage.module.scss";
import LoadingComp from "../../components/LoadingComp";
import { useLocation } from "wouter";

import colours from "../../utils/colours";

export default function PokemonPage({ params }) {
  const { id } = params;
  const { pokemon, loading, sprites } = usePokemon(id);
  const { name = "", types, abilities, stats } = pokemon;
  const [color, setColor] = useState("#fff");
  const { front_default } = sprites;
  const [location, setLocation] = useLocation();
  useEffect(() => {
    if (types) {
      setColor(colours[types[0].type.name]);
      console.log(color);
    }
    if (stats) {
      console.log(stats);
    }
  }, [pokemon]);

  return (
    <>
      <div
        style={{ backgroundColor: `${color}` }}
        className={styles.pokemonDetailPage}
      >
        {loading ? (
          <LoadingComp />
        ) : (
          <>
            <div>
              <img src={front_default} alt={name} />
            </div>
            <div className={styles.columnInfo}>
              <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
              <small>Id: {pokemon.id}</small>
              <div className={styles.keyContainer}>
                Types:
                {types
                  ? types.map((typeObj, index) => (
                      <small key={index} className={styles.type}>
                        {typeObj.type.name}
                      </small>
                    ))
                  : null}
              </div>
              <div className={styles.keyContainer}>
                Abilities:
                {abilities
                  ? abilities.map((ability, index) => (
                      <small key={index} className={styles.type}>
                        {ability.ability.name}
                      </small>
                    ))
                  : null}
              </div>
            </div>
          </>
        )}
      </div>
      <div
        style={{ backgroundColor: `${color}`, marginTop: "20px" }}
        className={styles.pokemonStatsPage}
        e
      >
        <strong>Stats</strong>
        <div className={styles.statsTable}>
          {stats
            ? stats.map((stat, index) => {
                return (
                  <div key={index} className={styles.stat}>
                    <strong>
                      {stat.stat.name.charAt(0).toUpperCase() +
                        stat.stat.name.slice(1)}
                    </strong>
                    <div>{stat.base_stat}</div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
