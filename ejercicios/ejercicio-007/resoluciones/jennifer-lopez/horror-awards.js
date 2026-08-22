export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.votos ?? 0), 0);
}

export function ordenarRanking(peliculas) {
  return [...peliculas].sort((a, b) => {
    const votosA = Number(a.puntos ?? a.votos ?? 0);
    const votosB = Number(b.puntos ?? b.votos ?? 0);
    return votosB - votosA;
  });
}