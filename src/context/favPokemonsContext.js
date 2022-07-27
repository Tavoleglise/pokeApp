import React, { useState } from "react";

const Context = React.createContext({});

export function FavPokemonContextProvider({ children }) {
  const [favPokemons, setFavoPokemons] = useState([]);

  return (
    <Context.Provider value={{ favPokemons, setFavoPokemons }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
