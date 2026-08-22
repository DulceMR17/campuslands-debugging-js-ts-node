export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.velocidad ?? item.puntos ?? 0), 0);
}

export function ordenarRanking(autos) {
  return [...autos].sort((a, b) => {
    const velA = Number(a.velocidad ?? a.puntos ?? 0);
    const velB = Number(b.velocidad ?? b.puntos ?? 0);
    return velB - velA;
  });
}