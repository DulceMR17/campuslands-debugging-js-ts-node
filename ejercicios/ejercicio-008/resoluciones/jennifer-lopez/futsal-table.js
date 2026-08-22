export function calcularResultado(datos) {

  return datos.reduce((acc, item) => acc + Number(item.puntos ?? item.golesFavor ?? 0), 0);
}

export function ordenarRanking(equipos) {

  return [...equipos].sort((a, b) => {
    const puntosA = Number(a.puntos ?? 0);
    const puntosB = Number(b.puntos ?? 0);
    const difPuntos = puntosB - puntosA;

    if (difPuntos !== 0) return difPuntos;

  
    const difGolesA = Number(a.golesFavor ?? 0) - Number(a.golesEnContra ?? 0);
    const difGolesB = Number(b.golesFavor ?? 0) - Number(b.golesEnContra ?? 0);

    return difGolesB - difGolesA;
  });
}