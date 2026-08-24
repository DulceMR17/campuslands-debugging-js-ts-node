# Reporte de Corrección - Ejercicio 037: API de Torneos

## Error encontrado
1. `POST /items`:
   - No validaba si el `id` recibido en el body ya existía en la colección, permitiendo registros duplicados.
   - Retornaba un estado `200 OK` en lugar de `409 Conflict` cuando un `id` repetido era enviado.
2. `GET /items/:id`:
   - No encontraba el elemento por la discrepancia entre string (`req.params.id`) y número (`id`).
   - Respondía con estado `200 OK` en lugar de `404 Not Found` si el recurso no existía.

## Causa raíz
1. Faltaba una verificación con `.some()` antes de agregar el objeto a la lista para detectar colisiones de ID, así como el manejo del código de respuesta `409 Conflict`.
2. Faltaba la conversión explícita a número `Number(req.params.id)` en la ruta `GET /items/:id`.

## Cambio aplicado
1. Se agregó la validación para comprobar si el `id` enviado ya existe. En caso afirmativo, se retorna un estatus `409 Conflict`.
2. Se mantuvo la validación de payload requerida (`400 Bad Request`) y la respuesta con estatus `201 Created` al registrar un torneo o ítem.
3. Se convirtió `req.params.id` a número y se asignó el código de error `404 Not Found` en el endpoint `GET /items/:id`.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-037/tests/tournaments.api.test.js
```

## Resultado final
Todas las pruebas de integración de la API pasaron exitosamente.