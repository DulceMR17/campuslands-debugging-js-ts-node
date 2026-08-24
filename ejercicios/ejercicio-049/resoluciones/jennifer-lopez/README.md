# Reporte de Corrección - Ejercicio 049: Concurrencia Simulada

## Error encontrado
1. Al recibir múltiples peticiones de reserva al mismo tiempo, el servidor permitía reservar más cupos de la capacidad total disponible.
2. Se producía una condición de carrera (Race Condition) en la que varias peticiones leían la misma capacidad inicial antes de decrementarla.

## Causa raíz
1. Las operaciones asincrónicas leían y actualizaban la propiedad `capacity` sin sincronización o bloqueo durante el tiempo de espera.
2. Al evaluarse la capacidad de manera simultánea en hilos asincrónicos superpuestos, todas las peticiones creían que aún había cupos disponibles.

## Cambio aplicado
1. Se implementó una cola de ejecución asincrónica (Mutex con Promesas) en la ruta de reservas `/items/:id/reserve`.
2. Se forzó la lectura y descuento de capacidad para que ocurran de forma secuencial, garantizando que cuando la capacidad sea `0`, las solicitudes concurrentes restantes retornen correctamente el estado HTTP `409 Conflict`.

## Comando usado para validar
```bash
npm test -- ejercicios/ejercicio-049/tests/concurrency.api.test.js
```

## Resultado final
Todas las pruebas de reserva de cupos bajo condiciones de concurrencia simulada pasaron exitosamente.