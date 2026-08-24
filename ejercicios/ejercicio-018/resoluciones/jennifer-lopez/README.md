# Reporte de Corrección - Ejercicio 018: Fórmulas Químicas

## Error encontrado
1. `calcularResultado`: Concatenaba el conteo de átomos o puntos como texto (`.join('')`) en lugar de calcular el total numérico acumulado.
2. `ordenarRanking`: Ordenaba los elementos en sentido ascendente, dejando las moléculas o elementos con mayor presencia al final.

## Causa raíz
1. Se estaba utilizando `.map().join('')`, lo que generaba un String unificado omitiendo la suma de los valores.
2. La función de comparación en `.sort()` aplicaba una resta ascendente `a - b` en vez de organizar descendentemente.

## Cambio aplicado
1. Se reemplazó `.join('')` por `.reduce()` forzando el cast numérico mediante `Number()` para retornar el total acumulado.
2. Se reestructuró la comparación a `atomosB - atomosA` sobre una copia del arreglo para garantizar el orden descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-018/tests/formula-parser.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.