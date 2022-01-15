# Callbacks

## ¿Que son?

Son funciones que son pasadas como argumentos a otras funciones. Recordemos la estructura de una función:

```javascript
function myFunction(params) {
  // code to be executed
}

myFunction(argument);
```

Con esto cubierto, estaríamos mandando a llamar a una funcion que recibe un argumento (que a su vez es otra funcion)

Algo que tenemos que tner en consideración es que las funciones son ejecutadas en orden de secuencia como son llamadas. Esto quiere decir que si hay 3 funciones no se puede ejecutar la segunda antes que la primera a menos que lo definas.

Ejemplo:

```javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let result = num1 + num2;
  myCallback(result);
}

myCalculator(14, 9, myDisplayer);
```

**Codigo explicado:**

> Tenemos a la funcion myDisplayer que va a recibir algo como parametro y lo que hara es mostrar la suma de dos numeros. Después se ejecutara la funcion que recibe dos numeros y una funcion. Esta funcion va a ser la suma de los dos numeros. Para finalizar mandaremos a llamr la funcion myCalculator que recibirá a los dos numeros hace la suma y lo muestra en el HTML.

✅ Lo que esta bien es hacer esto:

```javascript
myCalculator(14, 9, myDisplayer);
```

❌ Lo que esta mal es hacer esto:

```javascript
myCalculator(14, 9, myDisplayer());
```

Y ahora surge la pregunta: ¿Cuando debemos de usar un callback?

Bueno, para esto debemos de revisar lo que son las funciones asincronas. Donde la funcion de be de esperar a que se ejecute una funcion asincrona.

Consulta el capitulo [07 de asincronismo]('./07_asincronismo').Tambien puedes ver otro ejemplo de codigo [aqui]('./index/js')
