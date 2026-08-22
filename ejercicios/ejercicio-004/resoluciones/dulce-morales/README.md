# Resolución Ejercicio 003: Tienda de skins

## Error encontrado
Al ejecutar la suite de pruebas en `skins.test.js`, se identificó que la función `calcularResultado` no realizaba el parseo explícito a tipo numérico de los valores recibidos en `puntos`, arriesgando la concatenación de texto. Por otro lado, en `ordenarRanking` la ordenación no aseguraba un tratamiento estricto de los valores como números de mayor a menor puntaje ni garantizaba la protección contra la mutación si se utilizaban tipos de datos incoherentes.

## Causa raíz
- **Suma de valores:** Falta de conversión a tipo `Number()` al procesar los ítems en el acumulador del `.reduce()`.
- **Ordenamiento de ranking:** Falta de parseo explícito con `Number()` al efectuar la resta `b.puntos - a.puntos`, lo cual podía generar resultados inesperados si los puntos venían con formato string.

## Cambio aplicado
- En `calcularResultado`: Se envolvió `item.puntos` dentro de `Number()` para forzar la suma matemática limpia.
- En `ordenarRanking`: Se utilizó la sintaxis de propagación `[...jugadores]` para clonar la lista original y no mutarla, ordenando de forma descendente restando `Number(b.puntos) - Number(a.puntos)`.
