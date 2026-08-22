export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos), 0);
}

export function ordenarRanking(jugadores) {
  return [...jugadores].sort((a, b) => Number(b.puntos) - Number(a.puntos));
}