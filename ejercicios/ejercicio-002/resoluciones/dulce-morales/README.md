# Resolución Ejercicio 002: Inventario RPG

## Error encontrado
Al ejecutar las pruebas unitarias con Vitest (`inventory.test.js`), se identificaron dos fallos principales en las funciones exportadas:
1. `calcularResultado`: Si la propiedad `puntos` venía representada como una cadena de texto (`string`), los datos se concatenaban (ejemplo: `"10155"`) en lugar de sumarse aritméticamente.
2. `ordenarRanking`: En versiones previas no se aseguraba el orden descendente numérico estricto o no se protegía la inmutabilidad de la estructura original de jugadores al ser procesada.

## Causa raíz
- En JavaScript, el operador `+` realiza una concatenación cuando uno de sus operandos es un `string`.
- La falta de conversión explícita a tipo numérico con `Number()` provocaba que las operaciones matemáticas fallaran o generaran comportamientos inesperados.
- Para el ordenamiento, no hacer una copia mediante el operador spread (`[...]`) o no forzar los tipos numéricos en la resta comparativa (`b.puntos - a.puntos`) causaba discrepancias en el ranking resultante.

## Cambio aplicado
- **En `calcularResultado`**: Se envolvió `item.puntos` dentro de `Number()` dentro de la iteración de `.reduce()`, garantizando el tratamiento como entero/decimal y estableciendo `0` como acumulador inicial.
- **En `ordenarRanking`**: Se aplicó la sintaxis de propagación `[...jugadores]` para clonar la lista original y se ordenó calculando `Number(b.puntos) - Number(a.puntos)` para obtener el orden de mayor a menor puntaje.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-002/tests/inventory.test.js