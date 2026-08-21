# Ejercicio 011: Battle royale

## Error encontrado

- `calcularResultado` concatenaba los valores de `puntos` como texto en lugar de calcular una suma numerica.
- `ordenarRanking` ordenaba los jugadores de menor a mayor puntaje.

## Causa raiz

La funcion de calculo usaba `join('')`, por lo que devolvia una cadena como `10155`. El comparador de `sort` usaba `a.puntos - b.puntos`, que produce un orden ascendente.

## Cambio aplicado

- Se reemplazo la concatenacion por `reduce`, convirtiendo cada puntaje a numero antes de acumularlo.
- Se cambio el comparador a `b.puntos - a.puntos` para ordenar de mayor a menor.

## Comando usado para validar

```bash
npm test -- ejercicios/ejercicio-011/resoluciones/dulce-morales/battle-zone.test.js
```

## Resultado final

La solucion calcula `30` para los puntajes `10`, `15` y `5`, y ordena el ranking como `pro`, `elite`, `novato`. Los casos del test personal pasan.

> Nota: el README base menciona detectar sobrevivientes y zona segura, pero el codigo y el test entregados definen un contrato de suma y ranking por `puntos`. La solucion sigue el contrato verificable del test sin inventar reglas que no estan especificadas.
