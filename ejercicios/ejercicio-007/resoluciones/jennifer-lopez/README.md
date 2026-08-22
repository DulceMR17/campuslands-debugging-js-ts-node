# Reporte de Corrección - Ejercicio 007: Películas de Miedo

## Error encontrado
1. `calcularResultado`: Concatenaba los votos/puntos como cadenas de texto (`.join('')`) en vez de sumarlos numéricamente.
2. `ordenarRanking`: Ordenaba los elementos de forma ascendente, dejando las películas más votadas al final.

## Causa raíz
1. El uso de `.map().join('')` destruía la suma matemática esperada transformando los datos en un String.
2. El comparador en `.sort()` aplicaba orden ascendente `a - b` en lugar de priorizar de mayor a menor votos.

## Cambio aplicado
1. Se reemplazó `.join('')` por `.reduce()` forzando la conversión a número con `Number()` para retornar el total acumulado.
2. Se reestructuró la comparación a `votosB - votosA` sobre una copia del arreglo para asegurar el ranking descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-007/tests/horror-awards.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.