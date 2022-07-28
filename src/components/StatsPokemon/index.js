export default function StatsPokemon({ stats, styles, color }) {
  return (
    <div
      style={{ backgroundColor: `${color}`, marginTop: "20px" }}
      className={styles.pokemonStatsPage}
      e
    >
      <strong>Stats</strong>
      <div className={styles.statsTable}>
        {stats
          ? stats.map((stat, index) => {
              return (
                <div key={index} className={styles.stat}>
                  <strong>
                    {stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.slice(1)}
                  </strong>
                  <div>{stat.base_stat}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
