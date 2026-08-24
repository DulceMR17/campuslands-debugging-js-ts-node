# Reporte de Corrección - Ejercicio 024: Ciencia Ficción

## Error encontrado
1. `calcularPromedio`: Dividía el total acumulado entre el total de misiones (`registros.length`), sin considerar que solo se debían tomar en cuenta las activas.
2. `obtenerMejor`: Retornaba la misión con el menor nivel o puntaje debido a una ordenación ascendente.

## Causa raíz
1. Usar `registros.length` como divisor en lugar de `activos.length` distorsionaba el promedio final al contabilizar misiones inactivas.
2. La comparación en `.sort()` aplicaba `a.puntos - b.puntos`, dejando el valor más bajo en el primer índice.

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando validaciones para casos de arreglos vacíos.
2. Se corrigió la comparación a `b.puntos - a.puntos` sobre una copia del arreglo para devolver la misión con mayor puntaje/riesgo.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-024/tests/space-missions.test.ts
```
## Resultado final
Todas las pruebas pasaron exitosamente.
