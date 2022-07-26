import { useEffect, useState } from "react";
import { getPokemon } from "./utils/api";

import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

import "./App.css";
import { Link, Route, Switch } from "wouter";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pokemon/:id" component={PokemonPage} />
          <Route>404</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
