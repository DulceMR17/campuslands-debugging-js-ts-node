import { describe, expect, it } from 'vitest';
import { calcularPromedio, obtenerMejor } from './moto-diagnostics.js';

describe('ejercicio 025', () => {
  it('calcula el promedio de activos y obtiene el mejor', () => {
    const registros = [
      { nombre: 'inactivo', puntos: 100, activo: false },
      { nombre: 'guerrero', puntos: 20 },
      { nombre: 'mago', puntos: 30 }
    ];
    expect(calcularPromedio(registros)).toBe(25);
    expect(obtenerMejor(registros)?.nombre).toBe('mago');
  });
});
