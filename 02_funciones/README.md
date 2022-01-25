# Funciones

Una `función` es una un subprograma que puede ser llamado externamente a la funcion. De la misma manera que un programa va a requerir de una serie de instrucciones o generalmente conocido como: _cuerpo de la funcion_. Se pueden pasar valores a las funciones y las funciones reegresaran valores.

En JavaScript las funciones son objetos de primer clase, porque tienen propiedades y métodos como cualquier otro objeto.

Una función debe de tener regresar un valor con `return`. Si una funcion no regresa un valor, el valor regresado será `undefined`.

## Estructura de las funciones

```js
function nombreFuncion(parametros) {
  // cuerpo de la funcion
}

// llamando a la funcion
nombreFuncion(valor1, valor2, valor3);
```

## Ejemplo de una funcion

```js
function suma(a, b) {
  return a + b;
}

suma(5, 3); // 8
```
