# Reporte de Corrección - Ejercicio 045: Servicios Asincrónicos

## Error encontrado
1. Las funciones de las rutas no esperaban a que las operaciones con tiempo de espera o Promesas terminaran antes de responder al cliente.
2. Si ocurría un problema dentro de una operación asincrónica, el servidor se quedaba colgado o no respondía con el error correspondiente.

## Causa raíz
1. Faltaba colocar la palabra clave `async` en los endpoints y `await` antes de llamar a las tareas asincrónicas o consultas simuladas.
2. Las rutas no tenían bloques de control `try/catch` para atrapar posibles fallos y pasarlos al manejador global de errores.

## Cambio aplicado
1. Se marcaron las funciones de las rutas (`GET`, `POST`, `PATCH`) como `async`.
2. Se agregó `await` en cada llamada a funciones asincrónicas para asegurar que Node.js espere la respuesta antes de enviar el resultado JSON al usuario.
3. Se envolvió el código de las rutas dentro de bloques `try/catch` llamando a `next(err)` si algo falla.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-045/tests/async.api.test.js
```

## Resultado final
Todas las pruebas de servicios asincrónicos pasaron correctamente.