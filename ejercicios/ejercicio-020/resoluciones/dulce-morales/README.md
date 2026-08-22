# Ejercicio 020: Equipo de esports

## Error encontrado

El promedio dividia por todos los registros aunque excluia los inactivos, y `obtenerMejor` devolvia el puntaje menor.

## Causa raiz

El denominador no correspondia al arreglo filtrado y el ordenamiento de mejor resultado era ascendente.

## Cambio aplicado

Se filtraron registros con `activo: false`, se uso la cantidad de activos como denominador y se ordeno de mayor a menor.

## Comando usado para validar

```bash
npx tsc --noEmit
npm test -- ejercicios/ejercicio-020/resoluciones/dulce-morales/esports-team.test.ts
```

## Resultado final

El promedio ignora inactivos y `obtenerMejor` devuelve el registro con mayor puntaje, manteniendo tipos explícitos en TypeScript.
