# Reporte de Corrección - Ejercicio 050: Depuración Integral

## Error encontrado
1. `GET /items/:id` devolvía `200 OK` con `{ error: 'not found' }` en lugar de estado HTTP `404`. Comparaba `req.params.id` (String) directamente contra el `id` (Number).
2. `POST /items` retornaba estado `200` en lugar de `201 Created` y no validaba campos requeridos, permitiendo objetos corruptos.
3. Faltaba el endpoint `GET /items` para consultar el listado completo y la ruta `DELETE /items/:id` para eliminar recursos de la colección.

## Causa raíz
1. Discrepancia de tipos entre parámetros de ruta (strings) y tipos de datos numéricos en memoria, sumado a códigos de estado HTTP incorrectos en las respuestas.
2. Inexistencia de validaciones de entrada (`payload`) y ausencia de métodos CRUD clave (`GET` global y `DELETE`).

## Cambio aplicado
1. Se parseó `req.params.id` a `Number` y se agregaron validaciones con respuestas `404` (no encontrado) y `422` (ID no numérico).
2. Se corrigió la creación en `POST /items` para validar `name` y `score`, retornando `400` ante entradas inválidas y `201` al crear exitosamente.
3. Se agregaron los endpoints `GET /items` y `DELETE /items/:id` devolviendo `204 No Content` tras la eliminación.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-050/tests/final-api.api.test.js
```

## Resultado final
Todas las pruebas de la suite de depuración integral CRUD pasaron exitosamente.