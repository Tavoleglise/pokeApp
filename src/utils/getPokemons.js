export function getPokemon(url_id) {
  let urlToUse = "";
  if (typeof url_id === "string") {
    urlToUse = url_id;
  } else {
    urlToUse = `https://pokeapi.co/api/v2/pokemon/${url_id}/`;
  }
  return fetch(urlToUse)
    .then((res) => res.json())
    .then((response) => {
      const { name, id, types, abilities, sprites } = response;
      return { name, id, types, abilities, sprites };
    })
    .catch((err) => console.error(err));
}

export function getPokemonGroup() {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then((res) => res.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
}
