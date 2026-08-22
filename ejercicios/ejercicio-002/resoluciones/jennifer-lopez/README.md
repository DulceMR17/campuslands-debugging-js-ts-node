# Reporte de Corrección - Ejercicio 002: Inventario RPG

## Error encontrado
1. `calcularResultado`: Concatenaba los puntos como cadenas de texto en lugar de realizar la suma numérica.
2. `ordenarRanking`: Ordenaba los jugadores de forma ascendente (de menor a mayor), dejando los peores puntajes al inicio.

## Causa raíz
1. La función utilizaba `.map().join('')`, transformando el arreglo de puntos en una cadena de texto concatenada.
2. La función de ordenamiento `.sort()` implementaba la resta `a.puntos - b.puntos`, lo cual ordena de menor a mayor en lugar de priorizar los puntajes más altos.

## Cambio aplicado
1. Se reemplazó el `.join('')` por un `.reduce()` asegurando la conversión explícita a tipo número con `Number(item.puntos)` para retornar la suma total.
2. Se corrigió el criterio de ordenamiento a `(a, b) => Number(b.puntos) - Number(a.puntos)` sobre una copia del arreglo para garantizar el ranking descendente de mayor a menor.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-002/tests/inventory.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.