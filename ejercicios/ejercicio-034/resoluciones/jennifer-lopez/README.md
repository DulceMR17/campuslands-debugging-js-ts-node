# Reporte de Corrección - Ejercicio 034: Turismo

## Error encontrado
1. `calcularPromedio`: Dividía el valor total del paquete o puntaje acumulado entre la totalidad de los registros (`registros.length`), incorporando destinos o paquetes fuera de temporada/inactivos.
2. `obtenerMejor`: Retornaba el paquete turístico con la menor valoración o puntuación debido a una ordenación ascendente.

## Causa raíz
1. Utilizar `registros.length` sesgaba la media de presupuestos/puntos al contabilizar registros donde `activo === false`.
2. El comparador de `.sort()` ejecutaba `a.puntos - b.puntos`, dejando el menor valor en la posición inicial (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando validaciones para arreglos vacíos o sin elementos activos.
2. Se corrigió el criterio de ordenamiento a `b.puntos - a.puntos` sobre una copia inmutable del arreglo para seleccionar la mejor opción de viaje.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-034/tests/tourism.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.