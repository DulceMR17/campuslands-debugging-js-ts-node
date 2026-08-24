# Reporte de Corrección - Ejercicio 027: Música

## Error encontrado
1. `calcularPromedio`: Dividía el valor acumulado (BPM / puntaje) entre la totalidad de los registros (`registros.length`), incluyendo aquellos marcados como inactivos.
2. `obtenerMejor`: Retornaba la pista o registro con el menor valor en lugar del mejor o más relevante debido a una ordenación ascendente.

## Causa raíz
1. Usar `registros.length` afectaba el promedio general al contabilizar elementos donde `activo === false`.
2. La comparación dentro de `.sort()` ejecutaba `a.puntos - b.puntos`, dejando la pista con menor puntuación en el primer índice (`[0]`).

## Cambio aplicado
1. Se cambió el divisor a `activos.length` incorporando guardas de seguridad para evitar divisiones entre cero con arreglos vacíos.
2. Se modificó el criterio de `.sort()` a `b.puntos - a.puntos` sobre una copia inmutable del arreglo para retornar la pista principal.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-027/tests/bpm-validator.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.