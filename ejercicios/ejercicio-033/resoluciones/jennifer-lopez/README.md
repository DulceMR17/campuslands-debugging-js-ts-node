# Reporte de Corrección - Ejercicio 033: Animación 3D

## Error encontrado
1. `calcularPromedio`: Dividía el total de frames renderizados o puntos entre el número total de registros (`registros.length`), incluyendo escenas o nodos inactivos.
2. `obtenerMejor`: Devuelvía el nodo o escena con menor rendimiento/puntuación debido a un ordenamiento ascendente.

## Causa raíz
1. Usar `registros.length` sesgaba la media al incluir elementos con `activo === false`.
2. La función `.sort()` utilizaba el comparador `a.puntos - b.puntos`, posicionando la menor cifra en el primer índice (`[0]`).

## Cambio aplicado
1. Se cambió el divisor a `activos.length` y se añadieron guardas para evitar divisiones entre cero con arreglos vacíos.
2. Se corrigió la ordenación a `b.puntos - a.puntos` sobre una copia inmutable del arreglo para seleccionar el mejor rendimiento de renderizado.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-033/tests/render-farm.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.