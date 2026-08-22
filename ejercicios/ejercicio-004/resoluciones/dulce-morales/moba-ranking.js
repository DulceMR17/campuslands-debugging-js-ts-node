export function calcularResultado(datos) {
  return datos.reduce((total, item) => total + Number(item.puntos), 0);
}

export function ordenarRanking(jugadores) {
  return [...jugadores].sort((a, b) => Number(b.puntos) - Number(a.puntos));
}