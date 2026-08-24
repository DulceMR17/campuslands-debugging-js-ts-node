# Reporte de Corrección - Ejercicio 025: Mecánica de Motos

## Error encontrado
1. `calcularPromedio`: Dividía el puntaje/mantenimiento acumulado entre la totalidad de los registros (`registros.length`), incluyendo diagnósticos inactivos.
2. `obtenerMejor`: Retornaba el componente o síntoma de menor prioridad/puntaje debido a una ordenación ascendente.

## Causa raíz
1. Utilizar `registros.length` como divisor en lugar del total de registros activos (`activos.length`) provocaba un cálculo erróneo del promedio.
2. La función comparadora de `.sort()` ejecutaba `a.puntos - b.puntos`, ubicando al menor valor en la primera posición del arreglo (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando guardas de validación para evitar divisiones por cero con arreglos vacíos.
2. Se corrigió el criterio de `.sort()` a `b.puntos - a.puntos` sobre una copia del arreglo para retornar el diagnóstico principal.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-025/tests/moto-diagnostics.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.