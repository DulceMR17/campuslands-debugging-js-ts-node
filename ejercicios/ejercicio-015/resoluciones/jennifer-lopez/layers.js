export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.capas ?? item.visibles ?? 0), 0);
}

export function ordenarRanking(capas) {
  return [...capas].sort((a, b) => {
    const ordenA = Number(a.puntos ?? a.capas ?? a.visibles ?? 0);
    const ordenB = Number(b.puntos ?? b.capas ?? b.visibles ?? 0);
    return ordenB - ordenA;
  });
}