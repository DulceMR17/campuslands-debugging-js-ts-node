# Ejercicio 018: Formulas quimicas

## Error encontrado

`calcularResultado` concatenaba los puntos como texto y `ordenarRanking` ordenaba de menor a mayor.

## Causa raiz

Se usaba `join('')` en lugar de una suma numerica y el comparador de `sort` priorizaba puntajes bajos.

## Cambio aplicado

Se uso `reduce` con conversion numerica y se cambio el comparador a `b.puntos - a.puntos`.

## Comando usado para validar

```bash
npm test -- ejercicios/ejercicio-018/resoluciones/dulce-morales/formula-parser.test.js
```

## Resultado final

La solucion suma correctamente `10 + 15 + 5 = 30` y devuelve el ranking `pro`, `elite`, `novato`.
