# Reporte de Corrección - Ejercicio 032: Paracaidismo

## Error encontrado
1. `calcularPromedio`: Dividía la puntuación o verificación acumulada entre la totalidad de los registros (`registros.length`), incluyendo elementos del checklist inactivos o no completados.
2. `obtenerMejor`: Retornaba el registro o ítem con el menor puntaje debido a un ordenamiento ascendente.

## Causa raíz
1. Utilizar `registros.length` sesgaba la media al considerar registros donde `activo === false`.
2. La comparación dentro de `.sort()` ejecutaba `a.puntos - b.puntos`, dejando el menor valor en el primer índice (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` incorporando guardas de seguridad para evitar divisiones por cero en arreglos vacíos.
2. Se modificó el criterio de `.sort()` a `b.puntos - a.puntos` sobre una copia inmutable del arreglo para seleccionar la mejor métrica.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-032/tests/skydiving.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.