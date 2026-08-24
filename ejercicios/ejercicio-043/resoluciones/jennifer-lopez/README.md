# Reporte de Corrección - Ejercicio 043: Paginación

## Error encontrado
1. `GET /items`:
   - No soportaba los parámetros de consulta `limit` y `offset` para rebanar la colección de resultados.
   - Carecía de la respuesta estructurada con objeto envolvente y metadatos de paginación (`data`, `total`, `limit`, `offset`) cuando se especificaban dichos query params.

## Causa raíz
1. El endpoint `GET /items` retornaba el arreglo completo sin aplicar slicing mediante `.slice(offset, offset + limit)`.
2. Faltaba parsear y sanitizar numéricamente las propiedades `req.query.limit` y `req.query.offset` con sus valores por defecto.

## Cambio aplicado
1. Se extrajeron y convirtieron a número `limit` y `offset` desde `req.query`.
2. Se aplicó rebanado de resultados mediante `result.slice(offset, offset + limit)`.
3. Se condicionó la respuesta: cuando se envían parámetros de paginación, la API responde con la envoltura `{ data, total, limit, offset }`; de lo contrario, entrega el arreglo formateado directamente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-043/tests/pagination.api.test.js
```

## Resultado final
Todas las pruebas de integración pasaron exitosamente.