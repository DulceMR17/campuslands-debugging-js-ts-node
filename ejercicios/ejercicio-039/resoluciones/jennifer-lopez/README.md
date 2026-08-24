# Reporte de Corrección - Ejercicio 039: API de Películas

## Error encontrado
1. `GET /items`:
   - No soportaba la lectura y filtrado seguro de parámetros de consulta (`query params`), como `name` o `minScore`.
2. `GET /items/:id`:
   - No parseaba `req.params.id` a número para la búsqueda y retornaba un estatus `200 OK` para recursos no encontrados.
3. `POST /items`:
   - No aplicaba validación de payload (`400 Bad Request`), control de duplicados (`409 Conflict`), ni el estatus `201 Created`.

## Causa raíz
1. La ruta `GET /items` no estaba implementada para procesar `req.query`, imposibilitando el filtrado por coincidencia parcial de texto o comparaciones numéricas seguras.
2. `req.params.id` venía en formato string (`"1"`), lo que provocaba que la comparación estricta `===` fallara frente al tipo numérico del recurso.

## Cambio aplicado
1. Se implementó el endpoint `GET /items` para extraer y validar parámetros de consulta (`req.query`):
   - Filtrado insensible a mayúsculas/minúsculas para el nombre mediante `includes()`.
   - Conversión y validación numérica (`Number()`) para filtrados por puntuación mínima (`minScore`).
2. Se convirtió `req.params.id` a tipo número y se ajustó la respuesta a `404 Not Found` en caso de no existir el recurso.
3. Se integraron las validaciones requeridas de payload y códigos semánticos REST (`201`, `400`, `409`).

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-039/tests/movies.api.test.js
```

## Resultado final
Todas las pruebas de integración para la API pasaron exitosamente.