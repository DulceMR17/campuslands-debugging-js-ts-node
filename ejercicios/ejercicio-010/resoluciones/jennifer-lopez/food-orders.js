export function calcularResultado(datos) {
  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.monto ?? item.total ?? 0), 0);
}

export function ordenarRanking(pedidos) {
  return [...pedidos].sort((a, b) => {
    const totalA = Number(a.puntos ?? a.monto ?? a.total ?? 0);
    const totalB = Number(b.puntos ?? b.monto ?? b.total ?? 0);
    return totalB - totalA;
  });
}