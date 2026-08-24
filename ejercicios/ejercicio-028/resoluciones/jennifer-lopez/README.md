# Reporte de Corrección - Ejercicio 028: Fútbol

## Error encontrado
1. `calcularPromedio`: Dividía el total acumulado entre la totalidad de los registros (`registros.length`), incluyendo equipos o partidos marcados como inactivos.
2. `obtenerMejor`: Devolvía el equipo con el menor puntaje debido a un criterio de ordenación ascendente.

## Causa raíz
1. Usar `registros.length` sesgaba la media al incluir elementos donde `activo === false`.
2. El comparador de `.sort()` ejecutaba `a.puntos - b.puntos`, dejando el menor puntaje en la primera posición (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando validaciones para arreglos vacíos.
2. Se corrigió la lógica de `.sort()` a `b.puntos - a.puntos` sobre una copia inmutable del arreglo para determinar al líder de la liga.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-028/tests/football-league.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.