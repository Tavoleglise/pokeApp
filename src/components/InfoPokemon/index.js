import LoadingComp from "../LoadingComp";

export default function InfoPokemon({
  name,
  types,
  abilities,
  loading,
  color,
  styles,
  pokemon,
  front_default,
}) {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={styles.pokemonDetailPage}
    >
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <div>
            <img src={front_default} alt={name} />
          </div>
          <div className={styles.columnInfo}>
            <h2>
              {name ? name.charAt(0).toUpperCase() + name.slice(1) : null}
            </h2>
            <small>Id: {pokemon.id}</small>
            <div className={styles.keyContainer}>
              Types:
              {types
                ? types.map((typeObj, index) => (
                    <small key={index} className={styles.type}>
                      {typeObj.type.name}
                    </small>
                  ))
                : null}
            </div>
            <div className={styles.keyContainer}>
              Abilities:
              {abilities
                ? abilities.map((ability, index) => (
                    <small key={index} className={styles.type}>
                      {ability.ability.name}
                    </small>
                  ))
                : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
