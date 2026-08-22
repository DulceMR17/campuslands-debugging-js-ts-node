# Ejercicio 033: Animacion 3D

## Error encontrado

El promedio incluia mal los registros inactivos y `obtenerMejor` devolvia el puntaje menor.

## Causa raiz

Se usaba un denominador distinto de la cantidad de activos y el ordenamiento era ascendente.

## Cambio aplicado

Se filtraron registros inactivos para promedio y mejor resultado, y se ordeno de mayor a menor.

## Comando usado para validar

```bash
npx tsc --noEmit
npm test -- ejercicios/ejercicio-033/resoluciones/dulce-morales/render-farm.test.ts
```

## Resultado final

El promedio y el mejor registro respetan el estado `activo` y los tipos definidos en TypeScript.
