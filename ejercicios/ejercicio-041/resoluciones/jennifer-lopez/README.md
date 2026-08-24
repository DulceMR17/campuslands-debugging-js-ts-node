# Reporte de Corrección - Ejercicio 041: Middleware de Request ID

## Error encontrado
1. Faltaba la implementación de un middleware personalizado para procesar y asignar un identificador único de trazabilidad (`X-Request-Id` / `req.requestId`).
2. Las respuestas de error de la API (`400`, `404`, `409`, `422`, `500`) no propagaban la propiedad `requestId` en el cuerpo JSON del mensaje ni en los encabezados HTTP.

## Causa raíz
1. El servidor Express no contaba con un middleware al inicio de la cadena de peticiones que leyera el encabezado `X-Request-Id` o generara un UUID por defecto utilizando el módulo nativo `node:crypto`.
2. Al responder ante fallos del cliente o del servidor, las respuestas se retornaban omitiendo el atributo `requestId`.

## Cambio aplicado
1. Se importó `randomUUID` desde el módulo nativo `'node:crypto'`.
2. Se añadió un middleware global al inicio de `createApp()` que:
   - Extrae el encabezado `x-request-id` enviado o genera un UUID con `randomUUID()`.
   - Establece `res.setHeader('X-Request-Id', requestId)` y expone `req.requestId`.
3. Se incluyó la clave `requestId: req.requestId` en todas las respuestas JSON de error (`400`, `404`, `409`, `422`).
4. Se integró un middleware global de captura de errores (`app.use((err, req, res, next) => ...)`), garantizando la propagación del `requestId` incluso en excepciones no controladas.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-041/tests/request-id.api.test.js
```

## Resultado final
Todas las pruebas unitarias e integración de la API pasaron exitosamente, confirmando la correcta propagación de requestId en respuestas exitosas y de error.