import { describe, expect, it } from 'vitest';
import { calcularResultado, ordenarRanking } from './layers.js';

describe('ejercicio 015', () => {
  it('calcula suma numerica y ordena el ranking', () => {
    expect(calcularResultado([{ puntos: 10 }, { puntos: 15 }, { puntos: 5 }])).toBe(30);
    expect(ordenarRanking([
      { nombre: 'novato', puntos: 7 },
      { nombre: 'pro', puntos: 22 },
      { nombre: 'elite', puntos: 18 }
    ]).map((item) => item.nombre)).toEqual(['pro', 'elite', 'novato']);
  });
});
