export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.tarjeta ?? 0), 0);
}

export function ordenarRanking(peleadores) {
  return [...peleadores].sort((a, b) => {
    const puntosA = Number(a.puntos ?? a.tarjeta ?? 0);
    const puntosB = Number(b.puntos ?? b.tarjeta ?? 0);
    return puntosB - puntosA;
  });
}