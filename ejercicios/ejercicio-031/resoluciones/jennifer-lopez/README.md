# Reporte de Corrección - Ejercicio 031: Autos de Lujo

## Error encontrado
1. `calcularPromedio`: Dividía el valor acumulado (potencia/precio) entre la cantidad total de vehículos (`registros.length`), incluyendo vehículos o registros fuera de stock o inactivos.
2. `obtenerMejor`: Retornaba el vehículo con el menor puntaje o relación potencia/precio debido a una ordenación ascendente.

## Causa raíz
1. Utilizar `registros.length` sesgaba el cálculo promedio al incluir elementos donde `activo === false`.
2. El comparador de `.sort()` ejecutaba `a.puntos - b.puntos`, dejando el menor valor en el primer índice (`[0]`).

## Cambio aplicado
1. Se cambió el divisor a `activos.length` incorporando guardas para evitar divisiones entre cero con arreglos vacíos.
2. Se corrigió la ordenación a `b.puntos - a.puntos` sobre una copia inmutable del arreglo para seleccionar la mejor opción del catálogo.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-031/tests/luxury-cars.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.