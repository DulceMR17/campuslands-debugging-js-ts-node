export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.tiempo ?? item.penalizacion ?? 0), 0);
}

export function ordenarRanking(corredores) {
  return [...corredores].sort((a, b) => {
    const tiempoA = Number(a.puntos ?? a.tiempo ?? a.penalizacion ?? 0);
    const tiempoB = Number(b.puntos ?? b.tiempo ?? b.penalizacion ?? 0);
    return tiempoB - tiempoA;
  });
}