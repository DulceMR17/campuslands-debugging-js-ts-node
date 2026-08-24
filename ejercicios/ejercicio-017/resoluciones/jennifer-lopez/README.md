# Reporte de Corrección - Ejercicio 017: Pingpong

## Error encontrado
1. `calcularResultado`: Concatenaba los puntos como cadenas de texto (`.join('')`) en lugar de sumarlos numéricamente.
2. `ordenarRanking`: Ordenaba a los jugadores en sentido ascendente, dejando las mayores puntuaciones al final.

## Causa raíz
1. El uso de `.map().join('')` transformaba el arreglo en un String sin realizar la suma matemática acumulada.
2. El comparador de `.sort()` ejecutaba `a - b` (orden ascendente) en lugar de ordenar descendentemente.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` aplicando `Number()` para asegurar la suma total del marcador.
2. Se reestructuró la comparación a `puntosB - puntosA` sobre una copia del arreglo para devolver el ranking de mayor a menor.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-017/tests/pingpong.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.