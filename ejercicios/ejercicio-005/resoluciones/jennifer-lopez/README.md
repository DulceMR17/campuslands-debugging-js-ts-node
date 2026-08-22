# Reporte de Corrección - Ejercicio 005: Motos en Taller

## Error encontrado
1. `calcularResultado`: Concatenaba el kilometraje/datos como texto (`.join('')`) en lugar de sumar los valores numéricos.
2. `ordenarRanking`: Ordenaba los registros de forma ascendente, dejando las motos con mayor kilometraje o mantenimientos más urgentes/vencidos al final.

## Causa raíz
1. Se realizaba un `.map().join('')` convirtiendo los datos a cadenas de texto sin realizar operaciones aritméticas.
2. El callback en `.sort()` aplicaba `a - b` (orden ascendente) en vez de priorizar descendentemente el nivel de kilometraje o días de mantenimiento vencido.

## Cambio aplicado
1. Se reemplazó el `.join('')` por `.reduce()` forzando el casteo a tipo número con `Number()` para retornar el total acumulado.
2. Se corrigió la función comparadora en `.sort()` a `kmB - kmA` sobre una copia del arreglo para garantizar el orden descendente de mayor a menor urgencia.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-005/tests/moto-service.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.