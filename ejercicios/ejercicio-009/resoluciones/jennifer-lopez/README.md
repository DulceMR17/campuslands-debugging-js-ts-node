# Reporte de Corrección - Ejercicio 009: Autos Hiperdeportivos

## Error encontrado
1. `calcularResultado`: Concatenaba las velocidades o puntos como texto (`.join('')`) en lugar de sumarlos numéricamente.
2. `ordenarRanking`: Ordenaba los vehículos de forma ascendente, dejando los autos más veloces al final.

## Causa raíz
1. El método `.map().join('')` generaba una cadena unida sin realizar la suma acumulada de las velocidades.
2. El comparador de `.sort()` ejecutaba `a - b` (orden ascendente) en vez de priorizar las velocidades más altas de mayor a menor.

## Cambio aplicado
1. Se reemplazó `.join('')` por `.reduce()` asegurando la conversión de valores con `Number()` para retornar la suma matemática total.
2. Se corrigió la función comparadora a `velB - velA` sobre una copia del arreglo para devolver el ranking en orden descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-009/tests/hypercar.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.