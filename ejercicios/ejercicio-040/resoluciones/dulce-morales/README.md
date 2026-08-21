# Ejercicio 040: API de pedidos

## Error encontrado

La busqueda comparaba un ID numerico con el parametro string, los faltantes respondian `200` y la creacion respondia `200` en vez de `201`.

## Causa raiz

`req.params.id` siempre llega como texto y los estados HTTP no respetaban el contrato del test.

## Cambio aplicado

Se convirtio el ID con `Number`, se devolvio `404` cuando no existe el item y `201` al crear.

## Comando usado para validar

```bash
npm test -- ejercicios/ejercicio-040/resoluciones/dulce-morales/orders.api.test.js
```

## Resultado final

`/health`, la busqueda numerica y la creacion de items cumplen los estados y respuestas esperados.
