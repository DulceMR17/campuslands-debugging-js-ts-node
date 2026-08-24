# Reporte de Corrección - Ejercicio 020: Equipo de Esports

## Error encontrado
1. `calcularPromedio`: Dividía el puntaje total acumulado entre la totalidad de los jugadores (`registros.length`), incluyendo a los suplentes o inactivos.
2. `obtenerMejor`: Devuelve al jugador con el rendimiento más bajo debido a un ordenamiento ascendente.

## Causa raíz
1. Usar `registros.length` como divisor afectaba el promedio general al contar jugadores inactivos.
2. La función comparadora de `.sort()` ejecutaba `a.puntos - b.puntos`, dejando al jugador con menor puntaje al inicio del arreglo.

## Cambio aplicado
1. Se cambió el divisor a `activos.length` y se agregaron guardas de validación para evitar divisiones por cero.
2. Se ajustó el comparador de `.sort()` a `b.puntos - a.puntos` sobre una copia del arreglo para retornar al mejor jugador.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-020/tests/esports-team.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.