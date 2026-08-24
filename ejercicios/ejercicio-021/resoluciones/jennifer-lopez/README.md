# Reporte de Corrección - Ejercicio 021: Arquitectura 3D

## Error encontrado
1. `calcularPromedio`: Dividía el costo o puntaje total acumulado entre la totalidad de los materiales (`registros.length`), incluyendo los inactivos o no considerados.
2. `obtenerMejor`: Retornaba el elemento con el presupuesto o puntaje menor debido a una ordenación ascendente.

## Causa raíz
1. Utilizar `registros.length` como divisor en lugar del total de registros activos (`activos.length`) provocaba una reducción incorrecta del promedio.
2. La función comparadora de `.sort()` ejecutaba `a.puntos - b.puntos`, ubicando al menor valor en el primer índice del arreglo.

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando validaciones para arreglos vacíos.
2. Se corrigió el criterio de `.sort()` a `b.puntos - a.puntos` para organizar los elementos en orden descendente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-021/tests/architecture-budget.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.