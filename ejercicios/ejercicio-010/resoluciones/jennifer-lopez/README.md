# Reporte de Corrección - Ejercicio 010: Pedidos de Comida

## Error encontrado
1. `calcularResultado`: Concatenaba los valores como texto (`.join('')`) en lugar de totalizar los pedidos numéricamente.
2. `ordenarRanking`: Ordenaba los pedidos de forma ascendente, dejando los montos o pedidos de mayor prioridad al final.

## Causa raíz
1. Se utilizaba `.map().join('')`, lo que generaba una cadena de texto sin realizar la acumulación matemática.
2. La función de comparación en `.sort()` aplicaba orden ascendente `a - b` en vez de organizar descendentemente de mayor a menor.

## Cambio aplicado
1. Se implementó `.reduce()` casteando los valores con `Number()` para retornar el total acumulado de los pedidos.
2. Se corrigió el criterio de ordenamiento a `totalB - totalA` sobre una copia del arreglo.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-010/tests/food-orders.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.