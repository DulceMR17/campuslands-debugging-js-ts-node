# Reporte de Corrección - Ejercicio 044: Validación con Zod

## Error encontrado
1. `POST /items` y `PATCH /items/:id`:
   - No se realizaba una validación estructurada con esquema sobre el payload entrante en las peticiones de mutación.
   - Las respuestas de error `400 Bad Request` no incluían información descriptiva ni la lista detallada de campos inválidos/faltantes bajo la propiedad `details`.

## Causa raíz
1. Falta de integración de un validador de esquemas como `zod` (`safeParse`) para interpretar las reglas de los campos (`name`, `score`, etc.).
2. No se mapeaban las incidencias (`validation.error.issues`) para formatear los mensajes descriptivos requeridos por el cliente.

## Cambio aplicado
1. Se definieron los esquemas de validación con Zod: `itemPostSchema` e `itemPatchSchema`.
2. Se implementó `safeParse` en los endpoints `POST` y `PATCH`.
3. Al detectar errores de validación, la API responde con un estado `400 Bad Request` retornando el cuerpo formateado con `error: 'invalid payload'`, el arreglo `details` con `{ field, message }`, y el `requestId`.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-044/tests/zod.api.test.js
```

## Resultado final
Todas las pruebas de validación con Zod pasaron exitosamente.