# Reporte de Corrección - Ejercicio 026: Libros

## Error encontrado
1. `calcularPromedio`: Dividía el progreso acumulado de lectura entre la totalidad de los registros (`registros.length`), incluyendo libros inactivos o descartados.
2. `obtenerMejor`: Retornaba el libro con menor puntaje/páginas leídas debido a un ordenamiento ascendente.

## Causa raíz
1. Usar `registros.length` afectaba la media real al tomar en cuenta elementos con `activo === false`.
2. La comparación en `.sort()` ejecutaba `a.puntos - b.puntos`, dejando el valor más bajo en la primera posición (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` y se añadieron guardas para evitar divisiones por cero con arreglos vacíos.
2. Se modificó la ordenación a `b.puntos - a.puntos` sobre una copia del arreglo para devolver el libro con mayor progreso/puntaje.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-026/tests/book-progress.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.