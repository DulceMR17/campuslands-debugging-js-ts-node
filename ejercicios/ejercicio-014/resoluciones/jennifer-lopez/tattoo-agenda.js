export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.duracion ?? item.sesiones ?? 0), 0);
}

export function ordenarRanking(sesiones) {
  return [...sesiones].sort((a, b) => {
    const duracionA = Number(a.puntos ?? a.duracion ?? a.sesiones ?? 0);
    const duracionB = Number(b.puntos ?? b.duracion ?? b.sesiones ?? 0);
    return duracionB - duracionA;
  });
}