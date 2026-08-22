# Ejercicio 028: Futbol

## Error encontrado

El promedio incluia mal los registros inactivos y `obtenerMejor` devolvia el puntaje menor.

## Causa raiz

Se usaba un denominador distinto de la cantidad de activos y el ordenamiento era ascendente.

## Cambio aplicado

Se filtraron registros inactivos para promedio y mejor resultado, y se ordeno de mayor a menor.

## Comando usado para validar

```bash
npx tsc --noEmit
npm test -- ejercicios/ejercicio-028/resoluciones/dulce-morales/football-league.test.ts
```

## Resultado final

El promedio y el mejor registro respetan el estado `activo` y los tipos definidos en TypeScript.
