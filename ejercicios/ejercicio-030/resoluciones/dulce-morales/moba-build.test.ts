import { describe, expect, it } from 'vitest';
import { calcularPromedio, obtenerMejor } from './moba-build.js';

describe('ejercicio 030', () => {
  it('calcula el promedio de activos y obtiene el mejor', () => {
    const registros = [{ nombre: 'inactivo', puntos: 100, activo: false }, { nombre: 'uno', puntos: 20 }, { nombre: 'dos', puntos: 30 }];
    expect(calcularPromedio(registros)).toBe(25);
    expect(obtenerMejor(registros)?.nombre).toBe('dos');
  });
});
