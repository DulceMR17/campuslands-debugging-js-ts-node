# Reporte de Corrección - Ejercicio 030: MOBA Builds

## Error encontrado
1. `calcularPromedio`: Dividía el total de puntos/estadísticas acumuladas entre la cantidad total de registros (`registros.length`), incluyendo ítems inactivos o no equipados.
2. `obtenerMejor`: Retornaba el ítem o build con el menor puntaje/rendimiento debido a un ordenamiento ascendente.

## Causa raíz
1. Usar `registros.length` sesgaba el promedio al contabilizar elementos donde `activo === false`.
2. El método `.sort()` ordenaba con la condición `a.puntos - b.puntos`, ubicando la peor opción en la primera posición (`[0]`).

## Cambio aplicado
1. Se ajustó el divisor a `activos.length` agregando validaciones para arreglos vacíos.
2. Se corrigió la lógica de `.sort()` a `b.puntos - a.puntos` sobre una copia del arreglo para determinar la mejor combinación de objetos.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-030/tests/moba-build.test.ts
```

## Resultado final
Todas las pruebas pasaron exitosamente.