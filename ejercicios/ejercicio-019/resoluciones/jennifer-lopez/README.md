# Reporte de Corrección - Ejercicio 019: Personajes RPG

## Error encontrado
1. `calcularPromedio`: Dividía el total de puntos acumulados entre la cantidad total de registros (`registros.length`), en lugar de dividir entre la cantidad de registros activos.
2. `obtenerMejor`: Retornaba el personaje con el menor puntaje debido a una ordenación ascendente.

## Causa raíz
1. Al usar `registros.length` en la división del promedio, los registros inactivos diluían incorrectamente el cálculo sobre los activos.
2. La función de comparación en `.sort()` ejecutaba `a.puntos - b.puntos`, lo cual dejaba al elemento de menor poder al principio del arreglo (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando validaciones para arreglos vacíos.
2. Se corrigió el criterio de `.sort()` a `b.puntos - a.puntos` para organizar descendentemente y retornar el de mayor poder.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-019/tests/rpg-character.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.