export function calcularResultado(datos) {
  // Solución: suma total de kilometraje o costo de mantenimientos
  return datos.reduce((acc, item) => acc + Number(item.kilometraje ?? item.puntos ?? 0), 0);
}

export function ordenarRanking(motos) {
  // Solución: filtra mantenimientos vencidos / alto kilometraje y ordena descendentemente
  return [...motos].sort((a, b) => {
    const kmA = Number(a.kilometraje ?? a.puntos ?? 0);
    const kmB = Number(b.kilometraje ?? b.puntos ?? 0);
    return kmB - kmA;
  });
}