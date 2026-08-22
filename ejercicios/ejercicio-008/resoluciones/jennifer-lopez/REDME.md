# Reporte de Corrección - Ejercicio 008: Fútbol Sala

## Error encontrado
1. `calcularResultado`: Concatenaba los valores como cadenas de texto (`.join('')`) en vez de sumarlos numéricamente.
2. `ordenarRanking`: Ordenaba la tabla en sentido ascendente e ignoraba la diferencia de goles a favor y en contra.

## Causa raíz
1. La función realizaba un `.map().join('')` generando un String en lugar de calcular la suma total de puntos o goles.
2. La comparación de `.sort()` usaba resta ascendente `a.puntos - b.puntos` sin considerar el desempate por diferencia de goles.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` forzando la conversión a número con `Number()` para retornar el total acumulado.
2. Se reestructuró la lógica de ordenamiento para ordenar descendentemente por puntos y desempatar por la diferencia de goles (`golesFavor - golesEnContra`).

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-008/tests/futsal-table.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.