# Reporte de Corrección - Ejercicio 006: Playlist de Entrenamiento

## Error encontrado
1. `calcularResultado`: Concatenaba los valores como cadenas de texto (`.join('')`) en lugar de sumar los puntos acumulados.
2. `ordenarRanking`: Ordenaba los elementos de forma ascendente, dejando los puntajes/energía más altos al final.

## Causa raíz
1. El uso de `.map().join('')` transformaba el arreglo en una cadena unida sin realizar la suma aritmética esperada por la prueba (acumulado de 30 puntos).
2. La función comparadora en `.sort()` aplicaba `a - b` (orden ascendente) en lugar de ordenar descendentemente.

## Cambio aplicado
1. Se implementó `.reduce()` casteando los valores con `Number()` para retornar la suma matemática del total de puntos.
2. Se ajustó el callback de `.sort()` a `puntosB - puntosA` sobre una copia del arreglo para devolver el ranking de mayor a menor.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-006/tests/playlist.test.js
```

## Resultado final
Todas las pruebas pasaron exitosamente.