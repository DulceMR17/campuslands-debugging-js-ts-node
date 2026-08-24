# Reporte de Corrección - Ejercicio 048: Caché Simple

## Error encontrado
1. Al actualizar un elemento (`PATCH /items/:id`) o crear uno nuevo (`POST /items`), la API seguía respondiendo con la información vieja guardada en la caché.
2. Los cambios realizados no se reflejaban al volver a consultar la información individual o la lista general.

## Causa raíz
1. Faltaba eliminar o actualizar las claves guardadas en el objeto Map de la caché cuando ocurria una modificación en los datos.
2. La API leía la respuesta vieja del Map en lugar de consultar la lista actualizada.

## Cambio aplicado
1. Se agrego la invalidación de la caché usando `cache.delete('item_' + id)` dentro del endpoint `PATCH`.
2. Se limpio la caché con `cache.clear()` al agregar o modificar datos para asegurar que las nuevas peticiones entreguen siempre los datos actualizados.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-048/tests/cache.api.test.js
```

## Resultado final
Todas las pruebas de manejo de caché e invalidación pasaron correctamente.