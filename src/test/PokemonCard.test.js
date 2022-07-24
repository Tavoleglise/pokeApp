import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import PokemonCard from "../components/PokemonCard";

test("renders content", () => {
  const pokemon = {
    name: "gustavo",
    id: 1,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
  };

  const component = render(<PokemonCard pokemon={pokemon} />);
  //Testing if component is rendering
  console.log(component);
});
