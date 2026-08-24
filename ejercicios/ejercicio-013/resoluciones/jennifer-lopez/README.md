# Reporte de Corrección - Ejercicio 013: Viajes

## Error encontrado
1. `calcularResultado`: Concatenaba los costos o gastos como texto (`.join('')`) en lugar de sumarlos numéricamente.
2. `ordenarRanking`: Ordenaba los destinos/viajes de forma ascendente, dejando los mayores gastos al final.

## Causa raíz
1. El método `.map().join('')` generaba una cadena unida sin realizar la acumulación matemática de los valores.
2. La comparación en `.sort()` realizaba una resta ascendente `a - b` en vez de priorizar en orden descendente.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` casteando los datos con `Number()` para retornar el gasto total acumulado.
2. Se reestructuró la comparación a `costoB - costoA` sobre una copia del arreglo para garantizar el ordenamiento descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-013/tests/travel-costs.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.