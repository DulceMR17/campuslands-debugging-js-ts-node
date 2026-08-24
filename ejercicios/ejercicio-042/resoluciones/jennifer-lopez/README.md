# Reporte de Corrección - Ejercicio 042: Auth Simple

## Error encontrado
1. `GET /health`: La ruta estaba retornando la propiedad extra `requestId`, provocando que la aserción exacta `.expect({ ok: true })` del test fallara.
2. Manejo de autenticación: Cuando se enviaba la cabecera `Authorization` con un formato o token inválido, la API no retornaba el estado `401 Unauthorized` junto con su `requestId`.

## Causa raíz
1. Respuesta con datos innecesarios en el endpoint `/health` frente a comparaciones estrictas de objetos en Supertest.
2. Ausencia de un middleware que inspeccionara la presencia y validez del token en `req.headers.authorization`.

## Cambio aplicado
1. Se ajustó `GET /health` para retornar únicamente `{ ok: true }`.
2. Se implementó un middleware para validar la cabecera `Authorization: Bearer <token>`, devolviendo `401 Unauthorized` y `{ error: 'unauthorized', requestId }` cuando el token es inválido.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-042/tests/auth.api.test.js

```

## Resultado final
Todas las pruebas unitarias e integración de autenticación y autorización pasaron exitosamente.