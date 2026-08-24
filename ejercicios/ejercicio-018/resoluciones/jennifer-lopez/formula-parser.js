export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.atomos ?? item.cantidad ?? 0), 0);
}

export function ordenarRanking(elementos) {
  return [...elementos].sort((a, b) => {
    const atomosA = Number(a.puntos ?? a.atomos ?? a.cantidad ?? 0);
    const atomosB = Number(b.puntos ?? b.atomos ?? b.cantidad ?? 0);
    return atomosB - atomosA;
  });
}