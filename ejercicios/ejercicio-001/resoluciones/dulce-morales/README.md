# Resolución Ejercicio 001: Ranking gamer con parseo numérico

## Error encontrado
Al ejecutar las pruebas unitarias en `scoreboard.test.js`, la función `calcularResultado` devolvía una cadena de texto concatenada (por ejemplo, `"10155"`) en lugar de retornar la suma aritmética esperada de los puntos (`30`). Adicionalmente, la función `ordenarRanking` retornaba el arreglo en orden ascendente (de menor a mayor puntaje), cuando el test requería un orden descendente (de mayor a menor puntaje).

## Causa raíz
1. **En `calcularResultado`:** Se estaba utilizando `datos.map(item => item.puntos).join('')`, lo cual unía todos los valores numéricos como una sola cadena de texto (`string`) sin realizar la operación de suma matemática.
2. **En `ordenarRanking`:** Se utilizaba `a.puntos - b.puntos` dentro de `.sort()`, lo cual ordena los elementos de menor a mayor en lugar de mayor a menor (`b.puntos - a.puntos`).

## Cambio aplicado
Se modificó la lógica en `scoreboard.js` aplicando las siguientes correcciones:

```javascript
export function calcularResultado(datos) {
  // Suma numérica asegurando el parseo con Number()
  return datos.reduce((total, item) => total + Number(item.puntos), 0);
}

export function ordenarRanking(jugadores) {
  // Ordenamiento descendente (de mayor a menor puntaje)
  return [...jugadores].sort((a, b) => Number(b.puntos) - Number(a.puntos));
}