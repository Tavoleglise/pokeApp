import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import PokemonGrid from "../components/PokemonGrid";

test("renders content", () => {
  const component = render(<PokemonGrid />);
  //Testing if component is rendering
  console.log(component);
});
