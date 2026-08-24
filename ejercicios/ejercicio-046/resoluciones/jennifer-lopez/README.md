# Reporte de Corrección - Ejercicio 046: Manejo Centralizado de Errores

## Error encontrado
1. Cuando ocurrian fallos inesperados en el servidor (errores 500), la API enviaba la lista completa de detalles tecnicos y rastreo de codigo (stack trace) al cliente.
2. Los codigos de estado de respuesta HTTP no siempre coincidian con el tipo de fallo devuelto.

## Causa raíz
1. El middleware que maneja los errores globales no limpiaba la respuesta, dejando pasar informacion sensible del sistema hacia afuera.
2. Faltaba asegurarnos de responder con un mensaje generico seguro como `internal server error` cuando el estado era 500.

## Cambio aplicado
1. Se ajusto el middleware al final de Express para capturar cualquier error capturado con `next(err)`.
2. Se ocultaron los detalles tecnicos internos en los errores 500, respondiendo únicamente con el nombre general del error y el `requestId`.
3. Se garantizo el envio del código HTTP adecuado según las propiedades del objeto de error recibido.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-046/tests/errors.api.test.js
```

## Resultado final
Todas las pruebas de manejo de errores pasaron sin problemas.