# Reporte de Corrección - Ejercicio 016: Carreras

## Error encontrado
1. `calcularResultado`: Concatenaba los tiempos o penalizaciones de vuelta como texto (`.join('')`) en lugar de sumarlos numéricamente.
2. `ordenarRanking`: Ordenaba la lista de corredores de forma ascendente, invirtiendo la jerarquía del ranking.

## Causa raíz
1. El método `.map().join('')` generaba una cadena unida en vez de realizar el cálculo acumulado de los tiempos.
2. El comparador de `.sort()` ejecutaba `a - b` en lugar de organizar el listado en orden descendente.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` asegurando la conversión a número con `Number()` para retornar la suma acumulada de tiempos.
2. Se reestructuró la comparación a `tiempoB - tiempoA` sobre una copia del arreglo para devolver el ranking en orden descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-016/tests/racing-laps.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.