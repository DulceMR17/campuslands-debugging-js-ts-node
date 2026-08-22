# Ejercicio 044: Validacion con Zod

## Error encontrado

La busqueda comparaba un ID numerico con el parametro string, los faltantes respondian `200` y la creacion respondia `200` en vez de `201`.

## Causa raiz

`req.params.id` llega como texto y los estados HTTP no respetaban el contrato del test.

## Cambio aplicado

Se convirtio el ID con `Number`, se devolvio `404` cuando no existe el item y `201` al crear.

## Comando usado para validar

```bash
npm test -- ejercicios/ejercicio-044/resoluciones/dulce-morales/zod.api.test.js
```

## Resultado final

La API responde correctamente en health, busqueda y creacion de items.
