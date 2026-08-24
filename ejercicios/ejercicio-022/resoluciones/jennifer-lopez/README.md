# Reporte de Corrección - Ejercicio 022: Soldadura

## Error encontrado
1. `calcularPromedio`: Dividía el consumo o puntaje acumulado entre el total general de cordones (`registros.length`), incluyendo aquellos inactivos.
2. `obtenerMejor`: Retornaba el cordón con el valor menor debido a una ordenación ascendente.

## Causa raíz
1. Usar `registros.length` afectaba el promedio real al contar registros donde `activo === false`.
2. El comparador de `.sort()` ejecutaba `a.puntos - b.puntos`, dejando el menor valor en la primera posición.

## Cambio aplicado
1. Se cambió el divisor a `activos.length` agregando validaciones para evitar divisiones por cero.
2. Se corrigió el criterio de `.sort()` a `b.puntos - a.puntos` sobre una copia del arreglo para retornar el valor más alto.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-022/tests/welding.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.