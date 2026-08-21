# Solucion ejercicio 006

## Error encontrado

- `calcularResultado` concatenaba los puntajes como texto con `join('')` en lugar de calcular una suma numerica.
- `ordenarRanking` ordenaba los jugadores de menor a mayor puntaje.

## Causa raiz

La implementacion convertia el arreglo de puntajes en una cadena y no aplicaba una acumulacion numerica. Ademas, el comparador de `sort` usaba el orden ascendente, contrario al contrato del ejercicio, que prioriza los puntajes mas altos.

## Cambio aplicado

- Se reemplazo `join('')` por `reduce`, usando `Number(item.puntos)` para asegurar una suma numerica.
- Se cambio el comparador del ranking a `b.puntos - a.puntos` para ordenar de mayor a menor.
- Se mantuvo una copia del arreglo antes de ordenar para no mutar los datos originales.

## Comando usado para validar

```bash
npm test -- ejercicios/ejercicio-006/resoluciones/dulce-morales/playlist.test.js
```

## Resultado final

La solucion pasa las pruebas de suma numerica y ordenamiento descendente del ranking.
