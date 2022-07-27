import { url } from "./urls";
import mockPokemon from "./mockPokemon.json";

export function getPokemon(url_id) {
  let urlToUse = "";
  if (typeof url_id === "string") {
    urlToUse = url_id;
  } else {
    urlToUse = `${url}pokemon/${url_id}/`;
  }
  return fetch(urlToUse)
    .then((res) => res.json())
    .then((response) => {
      const { name, id, types, abilities, sprites, stats } = response;
      return { name, id, types, abilities, sprites, stats };
    })
    .catch((err) => {
      console.error(err);
      return mockPokemon;
    });
}
export function getPokemonByName(pokemonName) {
  return fetch(`${url}pokemon/${pokemonName}/`)
    .then((res) => res.json())
    .then((response) => {
      const { name, id, types, abilities, sprites, stats } = response;
      return { name, id, types, abilities, sprites, stats };
    })
    .catch((err) => {
      console.error(err);
      return mockPokemon;
    });
}
export function getPokemonGroup(numOfPokemons) {
  return fetch(`${url}pokemon?limit=${numOfPokemons}`)
    .then((res) => res.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}

export function getTypes() {
  return fetch(`${url}type`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

export function getEvolutions(pokemonId) {
  return fetch(`${url}pokemon/${pokemonId}`)
    .then((res) => res.json())
    .then((response) =>
      fetch(response.species.url)
        .then((res) => res.json())
        .then((response) =>
          fetch(response.evolution_chain.url).then((res) => res.json())
        )
    )
    .catch((err) => console.error(err));
}
