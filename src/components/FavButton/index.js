import { useContext, useState, useEffect } from "react";
import FavPokemonContext from "../../context/favPokemonsContext";

export default function FavButton({ pokemon }) {
  const { favPokemons, setFavoPokemons } = useContext(FavPokemonContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (favPokemons.some((el) => el.name === pokemon.name)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [favPokemons]);

  const handleOnClick = () => {
    setFavoPokemons([pokemon]);

    console.log(favPokemons);
    console.log(pokemon);
  };
  return (
    <button onClick={handleOnClick}>{active ? "active" : "Set Active"}</button>
  );
}
