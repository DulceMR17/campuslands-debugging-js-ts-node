# Reporte de Corrección - Ejercicio 012: Kickboxing

## Error encontrado
1. `calcularResultado`: Concatenaba los valores como texto (`.join('')`) en lugar de sumar los puntos de las tarjetas de los jueces.
2. `ordenarRanking`: Ordenaba a los peleadores de forma ascendente, dejando las calificaciones más altas al final.

## Causa raíz
1. El método `.map().join('')` generaba una cadena unida en vez de realizar el cálculo acumulado.
2. La comparación en `.sort()` realizaba una resta ascendente `a - b` omitiendo la prioridad descendente del ranking.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` forzando la conversión a número con `Number()`.
2. Se reestructuró la comparación a `puntosB - puntosA` sobre una copia del arreglo para garantizar el orden descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-012/tests/kickboxing.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.