# Ejercicio 009: Autos hiperdeportivos

## Error encontrado

- `calcularResultado` concatenaba los valores de `puntos` como texto y devolvia `10155` en lugar de la suma numerica `30`.
- `ordenarRanking` ordenaba los jugadores de menor a mayor puntaje.

## Causa raiz

La implementacion usaba `join('')`, que convierte los valores en una cadena. El comparador de `sort` usaba `a.puntos - b.puntos`, por lo que priorizaba los puntajes mas bajos.

## Cambio aplicado

- Se reemplazo la concatenacion por `reduce`, convirtiendo cada puntaje a numero antes de acumularlo.
- Se cambio el comparador a `b.puntos - a.puntos` para ordenar el ranking de mayor a menor.

## Comando usado para validar

```bash
npm test -- ejercicios/ejercicio-009/resoluciones/dulce-morales/hypercar.test.js
```

## Resultado final

La solucion calcula correctamente `30` con los puntajes `10`, `15` y `5`, y ordena el ranking como `pro`, `elite`, `novato`. Los casos esperados pasan en el test de la resolucion personal.
