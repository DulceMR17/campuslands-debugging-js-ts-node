export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.energia ?? 0), 0);
}

export function ordenarRanking(jugadores) {
  return [...jugadores].sort((a, b) => {
    const puntosA = Number(a.puntos ?? a.energia ?? 0);
    const puntosB = Number(b.puntos ?? b.energia ?? 0);
    return puntosB - puntosA;
  });
}