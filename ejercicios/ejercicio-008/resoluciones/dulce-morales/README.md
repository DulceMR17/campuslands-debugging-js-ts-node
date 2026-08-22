# Ejercicio 008: Futbol sala

## Error encontrado

- `calcularResultado` concatenaba los puntos como texto en lugar de sumarlos como numeros.
- `ordenarRanking` organizaba los jugadores de menor a mayor puntaje.

## Causa raiz

La funcion de calculo usaba `join('')`, que transforma los valores en una cadena. Ademas, el comparador de `sort` usaba `a.puntos - b.puntos`, cuyo resultado establece un orden ascendente.

## Cambio aplicado

- Se cambio la concatenacion por una suma numerica con `reduce` y conversion explicita de cada puntaje.
- Se invirtio el comparador del ranking a `b.puntos - a.puntos` para ordenar de mayor a menor.

## Comando usado para validar

```bash
npm test -- ejercicios/ejercicio-008/resoluciones/dulce-morales/futsal-table.test.js
```

## Resultado final

La solucion calcula `30` para los puntajes `10`, `15` y `5`, y devuelve el ranking en el orden `pro`, `elite`, `novato`. Los dos casos esperados pasan en el test de la resolucion personal.
