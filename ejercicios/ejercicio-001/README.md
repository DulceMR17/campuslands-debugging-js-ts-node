b# Ejercicio 001: Ranking gamer con parseo numerico

## Dificultad

Facil

## Tecnologia principal

JS

## Tematica usada

Ranking gamer con parseo numerico

## Contexto del problema

Un equipo de desarrollo de Campuslands recibio una funcionalidad relacionada con ranking gamer con parseo numerico. El codigo ya existe, pero contiene uno o varios errores intencionales. Tu tarea es comportarte como desarrollador en revision: reproducir el fallo, entender la causa y corregirlo sin romper el contrato esperado.

## Objetivo

Corregir suma de puntos que concatena texto.

## Que debes aprender

- Leer el test antes de tocar codigo.
- Identificar la diferencia entre resultado esperado y resultado real.
- Separar sintomas de causa raiz.
- Corregir el minimo codigo necesario.
- Documentar tu razonamiento tecnico.

## Paso a paso recomendado

1. Abre el archivo base en `codigo/`.
2. Abre el test en `tests/`.
3. Ejecuta el test del ejercicio.
4. Lee el primer error completo.
5. Escribe una hipotesis en una nota corta.
6. Copia el archivo base a tu carpeta personal dentro de `resoluciones/`.
7. Corrige tu copia.
8. Ejecuta el test apuntando a tu version o replica el caso manualmente.
9. Agrega un `README.md` dentro de tu carpeta explicando la causa del bug.

## Comando de validacion

```bash
npm test -- ejercicios/ejercicio-001/tests/scoreboard.test.js
```

## Entregable esperado

```text
ejercicios/ejercicio-001/resoluciones/nombre-apellido/
+-- scoreboard.js
+-- README.md
```

Tu README debe incluir:

- Error encontrado.
- Causa raiz.
- Cambio aplicado.
- Comando usado para validar.
- Resultado final.

## Reglas

- No modifiques archivos de otros estudiantes.
- No borres archivos base.
- No cambies los tests para hacer pasar una solucion incorrecta.
- No subas `node_modules`.
- Tu PR debe apuntar a `dev`.

## Consejos

- Si el resultado parece correcto pero el test falla, revisa tipos de datos.
- Si una API responde mal, revisa status HTTP antes que el body.
- Si TypeScript se queja, no uses `any` como escape automatico.
- Antes de corregir, explica que crees que esta fallando.

## Errores comunes

- Cambiar el test en lugar de arreglar el codigo.
- Corregir solo el caso visible y dejar otros casos rotos.
- Subir la solucion directamente en `resoluciones/` sin carpeta personal.
- Hacer commit desde `main`.

## Pistas opcionales

- Revisa el nombre de variables y tipos de datos.
- Compara entrada, transformacion y salida.
- Si hay arreglos, revisa si el orden importa.
- Si hay objetos, revisa si estas mutando datos originales.

## Como validar que quedo bien

El ejercicio queda bien cuando:

- Puedes explicar por que fallaba.
- Tu solucion pasa los casos esperados.
- Tu entrega esta dentro de `resoluciones/nombre-apellido/`.
- Tu commit describe claramente la correccion.
