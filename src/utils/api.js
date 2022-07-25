import { url } from "./urls";

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
      const { name, id, types, abilities, sprites } = response;
      return { name, id, types, abilities, sprites };
    })
    .catch((err) => console.error(err));
}

export function getPokemonGroup(numOfPokemons) {
  return fetch(`${url}pokemon?limit=${numOfPokemons}`)
    .then((res) => res.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}
