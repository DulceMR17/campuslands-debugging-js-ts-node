export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.costo ?? item.gasto ?? 0), 0);
}

export function ordenarRanking(viajes) {
  return [...viajes].sort((a, b) => {
    const costoA = Number(a.puntos ?? a.costo ?? a.gasto ?? 0);
    const costoB = Number(b.puntos ?? b.costo ?? b.gasto ?? 0);
    return costoB - costoA;
  });
}