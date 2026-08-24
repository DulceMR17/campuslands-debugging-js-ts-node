# Reporte de Corrección - Ejercicio 040: API de Pedidos

## Error encontrado
1. `GET /items/:id` y `PATCH /items/:id`:
   - No diferenciaban entre un parámetro de ID con formato semánticamente inválido (no numérico) y la ausencia de un registro en la base de datos.
   - Retornaban respuestas `200 OK` o `404 Not Found` indistintamente cuando se enviaban valores no numéricos (como letras o símbolos) en los parámetros de ruta.

## Causa raíz
1. La aplicación intentaba buscar un identificador dentro de la lista mediante la conversión implícita sin validar si `Number(req.params.id)` resultaba en `NaN`. 
2. No se estaba aplicando el código semántico `422 Unprocessable Entity` cuando los parámetros recibidos no cumplían con la estructura o tipo esperado para poder procesar la solicitud.

## Cambio aplicado
1. Se agregó la verificación `isNaN(idParam)` en los endpoints `GET /items/:id` y `PATCH /items/:id`.
2. Si el parámetro `:id` no se puede convertir a un número válido, el servidor responde inmediatamente con un código `422 Unprocessable Entity`.
3. Se reservó el código `404 Not Found` exclusivamente para identificadores numéricos bien formados que no coinciden con ningún registro existente.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-040/tests/orders.api.test.js
```

## Resultado final
Todas las pruebas de integración pasaron exitosamente, cumpliendo con la separación adecuada de errores 404 y 422.