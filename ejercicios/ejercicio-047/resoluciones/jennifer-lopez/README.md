# Reporte de Corrección - Ejercicio 047: Capas Controller/Service

## Error encontrado
1. Las rutas HTTP realizaban la manipulación de datos directamente en lugar de delegar la tarea a una capa de servicio dedicada.
2. Los métodos de la capa de datos no se comunicaban de forma clara con las rutas de Express ni devolvían los datos formateados o errores esperados.

## Causa raíz
1. Falta de separación de responsabilidades entre el controlador (manejar peticiones/respuestas HTTP) y el servicio (lógica de negocio y manejo de la colección).
2. La firma y el flujo de los métodos del servicio no coincidían con lo que los controladores esperaban para responder al cliente.

## Cambio aplicado
1. Se aisló la lógica en la clase `ItemsService` para encargarse del filtrado, paginación, búsqueda, creación y actualización de registros.
2. Se conectaron las rutas HTTP para que llamen directamente a los métodos del servicio usando `await`.
3. Se delegó al servicio el lanzamiento de errores con sus códigos de estado HTTP correspondientes (`404`, `409`, `422`) para que pasen al middleware global.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-047/tests/layers.api.test.js
```

## Resultado final
Todas las pruebas de la arquitectura de capas pasaron exitosamente.