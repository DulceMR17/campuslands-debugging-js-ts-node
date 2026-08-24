# Reporte de Corrección - Ejercicio 036: API de Motos

## Error encontrado
1. `POST /items`:
   - Aceptaba peticiones con payloads incompletos o inválidos sin realizar validación previa de los datos de entrada.
   - Retornaba un código de estado `200 OK` en lugar de `201 Created` al crear un elemento exitosamente.
2. `GET /items/:id`:
   - No encontraba elementos al comparar `req.params.id` (string) contra `id` (número).
   - Retornaba un código de estado `200 OK` en lugar de `404 Not Found` ante recursos inexistentes.

## Causa raíz
1. El endpoint `POST /items` insertaba directamente `req.body` sin verificar los atributos requeridos (`name` y `score`), ni manejaba los códigos HTTP REST adecuados (`400 Bad Request` y `201 Created`).
2. Faltaba parsear el parámetro `id` a numérico mediante `Number(req.params.id)` en `GET /items/:id`.

## Cambio aplicado
1. Se agregó validación en `POST /items` para responder con un estatus `400 Bad Request` cuando la petición carezca de los datos obligatorios.
2. Se corrigió el estatus de creación exitosa en `POST /items` a `201 Created`.
3. Se convirtió `req.params.id` a número y se asignó la respuesta `404 Not Found` en `GET /items/:id`.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-036/tests/motos.api.test.js
```

## Resultado final
Todas las pruebas de integración pasaron exitosamente.