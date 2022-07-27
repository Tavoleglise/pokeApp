import { useEffect, useState } from "react";
import { getPokemon } from "./utils/api";

import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

import "./App.css";
import { Link, Route, Switch } from "wouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { FavPokemonContextProvider } from "./context/favPokemonsContext";

function App() {
  return (
    <FavPokemonContextProvider>
      <div className="App">
        <div className="App-content">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/pokemon/:id" component={PokemonPage} />
            <Route>404</Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </FavPokemonContextProvider>
  );
}

export default App;
