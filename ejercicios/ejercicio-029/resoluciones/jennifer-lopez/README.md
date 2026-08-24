# Reporte de Corrección - Ejercicio 029: Shooter Táctico

## Error encontrado
1. `calcularPromedio`: Dividía el daño o puntaje acumulado entre el total de registros (`registros.length`), incluyendo disparos o registros inactivos/nulos.
2. `obtenerMejor`: Retornaba el disparo o jugador con menor rendimiento debido a un ordenamiento ascendente.

## Causa raíz
1. Utilizar `registros.length` afectaba el cálculo al contabilizar elementos donde `activo === false`.
2. El comparador de `.sort()` usaba `a.puntos - b.puntos`, dejando el menor valor en la primera posición (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` incorporando validaciones de seguridad para arreglos vacíos.
2. Se modificó el comparador de `.sort()` a `b.puntos - a.puntos` sobre una copia inmutable del arreglo para seleccionar la mejor métrica.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-029/tests/damage-engine.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.