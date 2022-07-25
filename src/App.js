import { useEffect, useState } from "react";
import { getPokemon } from "./utils/api";

import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

import "./App.css";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Route path="/" component={Home} />
        <Route path="/pokemon/:id" component={PokemonPage} />
      </div>
    </div>
  );
}

export default App;
