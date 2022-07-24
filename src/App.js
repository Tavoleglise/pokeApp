import { useEffect, useState } from "react";
import { getPokemon } from "./utils/getPokemons";

import Home from "./pages/Home";

import "./App.css";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Route path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
