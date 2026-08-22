# Resolucion ejercicio 005

## Error encontrado

Se encontraron dos errores en `moto-service.js`:

- `calcularResultado` intentaba leer la propiedad `punto`, pero los objetos reciben la propiedad `puntos`. Esto producia un resultado incorrecto.
- `ordenarRanking` ordenaba los jugadores de menor a mayor puntaje, aunque el ranking debe mostrar primero los puntajes mas altos.

## Causa raiz

La implementacion no respetaba los nombres de propiedades ni el orden definido por el contrato del ejercicio y sus pruebas. Ademas, la suma no tenia un valor inicial, lo que podia provocar resultados incorrectos con datos vacios.

## Cambio aplicado

- Se cambio `item.punto` por `item.puntos`.
- Se agrego `0` como valor inicial de `reduce` para realizar una suma numerica segura.
- Se cambio el comparador del ranking a `b.puntos - a.puntos` para ordenar de mayor a menor.
- Se mantuvo la copia del arreglo original usando `[...]`, evitando mutarlo.


La prueba copiada en esta carpeta conserva la importacion `../codigo/moto-service.js`, por lo que no puede ejecutarse desde `resoluciones/dulce-morales/` sin ajustar esa ruta. El test original del ejercicio sigue apuntando al archivo base de `codigo/`.

## Resultado final

La suma de los puntajes devuelve `30` y el ranking devuelve `pro`, `elite`, `novato`, cumpliendo los casos esperados del ejercicio.
