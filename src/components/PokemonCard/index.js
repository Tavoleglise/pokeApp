export default function PokemonCard({ pokemon }) {
  return (
    <div className="card">
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} alt={pokemon.id} />
      <div>{pokemon.id}</div>
    </div>
  );
}
