# Reporte de Corrección - Ejercicio 004: Torneo MOBA

## Error encontrado
1. `calcularResultado`: Concatenaba los puntos como texto (`.join('')`) en lugar de sumarlos numéricamente.
2. `ordenarRanking`: Ordenaba los equipos/jugadores de forma ascendente y no contemplaba el criterio de desempate por diferencia.

## Causa raíz
1. El método `.map().join('')` generaba cadenas de texto concatenadas en vez de realizar un cálculo.
2. La función de ordenamiento utilizaba la resta ascendente `a.puntos - b.puntos`, omitiendo la prioridad descendente por victorias y el desempate por diferencia de puntos.

## Cambio aplicado
1. Se implementó `.reduce()` casteando los valores con `Number()` para retornar la suma matemática correcta.
2. Se reestructuró la comparación en `.sort()` para ordenar de mayor a menor por victorias/puntos y, en caso de empate (`difVictorias === 0`), desempatar descendentemente por la propiedad `diferencia`.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-004/tests/moba-ranking.test.js
```
## Resultado final
Todas las pruebas pasaron exitosamente.