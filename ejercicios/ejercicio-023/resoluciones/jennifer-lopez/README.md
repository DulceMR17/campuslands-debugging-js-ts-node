# Reporte de Corrección - Ejercicio 023: Ropa Streetwear

## Error encontrado
1. `calcularPromedio`: Dividía el stock/puntos totales acumulados entre todos los registros (`registros.length`), incluyendo prendas inactivas o fuera de stock.
2. `obtenerMejor`: Retornaba el producto con menor stock/puntaje debido a un ordenamiento ascendente.

## Causa raíz
1. Usar `registros.length` afectaba el promedio al considerar elementos donde `activo === false`.
2. La comparación en `.sort()` ejecutaba `a.puntos - b.puntos`, dejando la prenda con menor valor en la primera posición (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando validaciones para arreglos vacíos.
2. Se corrigió el criterio de `.sort()` a `b.puntos - a.puntos` sobre una copia del arreglo para retornar la prenda con mayor puntuación o stock.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-023/tests/streetwear-stock.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.