# Reporte de Corrección - Ejercicio 014: Tatuajes

## Error encontrado
1. `calcularResultado`: Concatenaba la duración o cantidad de sesiones como cadenas de texto (`.join('')`) en lugar de calcular el total acumulado.
2. `ordenarRanking`: Ordenaba la agenda de sesiones en sentido ascendente, dejando las de mayor duración/prioridad al final.

## Causa raíz
1. El uso de `.map().join('')` destruía el cálculo matemático generando un String.
2. La comparación en `.sort()` realizaba una resta ascendente `a - b` en vez de organizar descendentemente.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` forzando la conversión a número mediante `Number()` para obtener el total.
2. Se reestructuró el callback de `.sort()` a `duracionB - duracionA` sobre una copia del arreglo.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-014/tests/tattoo-agenda.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.