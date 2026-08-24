# Reporte de Corrección - Ejercicio 015: Dibujo Digital

## Error encontrado
1. `calcularResultado`: Concatenaba las capas o puntos como cadenas de texto (`.join('')`) en lugar de calcular el total acumulado.
2. `ordenarRanking`: Ordenaba la lista de capas en sentido ascendente, dejando las de mayor visibilidad o prioridad al final.

## Causa raíz
1. El uso de `.map().join('')` generaba una cadena de texto sin realizar la suma acumulada de los valores.
2. La función de comparación en `.sort()` aplicaba orden ascendente `a - b` en vez de organizar descendentemente.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` forzando la conversión a número con `Number()` para retornar el total acumulado de capas.
2. Se reestructuró la comparación a `ordenB - ordenA` sobre una copia del arreglo para devolver el orden descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-015/tests/layers.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.