# Reporte de Corrección - Ejercicio 035: API de Jugadores

## Error encontrado
1. `GET /items/:id`:
   - No encontraba ningún elemento porque `req.params.id` venía como un string (`"1"`), mientras que el `id` almacenado en el arreglo es de tipo numérico (`1`).
   - Si un recurso no se encontraba, retornaba un código de estado `200 OK` en lugar de un error `404 Not Found`.
2. `POST /items`:
   - Retornaba un código de estado `200 OK` tras crear un nuevo elemento en lugar del estándar `201 Created`.

## Causa raíz
1. Faltaba parsear o convertir `req.params.id` a tipo número (`Number(...)` o `parseInt(...)`) antes de realizar la comparación estricta (`===`) en `.find()`.
2. Las respuestas del servidor no estaban alineadas con los códigos de estado HTTP semánticos REST (`404` para recursos inexistentes y `201` para creación exitosa).

## Cambio aplicado
1. Se convirtió `req.params.id` a número con `Number(req.params.id)` dentro del endpoint `GET /items/:id`.
2. Se corrigió la respuesta del caso negativo en `GET /items/:id` a `res.status(404).json({ error: 'not found' })`.
3. Se ajustó el status HTTP en `POST /items` a `res.status(201).json(item)`.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-035/tests/players.api.test.js
```

## Resultado final
Todas las pruebas unitarias e integración de la API pasaron exitosamente.