export function calcularResultado(datos) {
  // calcula la diferencia sumando valores numéricos
  return datos.reduce((acc, item) => acc + Number(item.puntos), 0);
}

export function ordenarRanking(jugadores) {
  // ordena descendentemente y desempata por diferencia
  return [...jugadores].sort((a, b) => {
    const difVictorias = Number(b.victorias ?? b.puntos) - Number(a.victorias ?? a.puntos);
    if (difVictorias !== 0) return difVictorias;
    
    // Desempate por diferencia
    return Number(b.diferencia ?? 0) - Number(a.diferencia ?? 0);
  });
}