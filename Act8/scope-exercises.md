# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> El resultado sería 2, debido a que la variable "a = 1" está declarada por debajo del console.log, y cuando el Scope la busca a nivel de bloque, es decir, cuando se imprime 'test', este empieza buscando por la function foo y cuando se pasa a la funcion test encuentra a la variable a como indefinida
> _console answer_ : 2


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> Como la variable a = 5, no esta definida, el resultado será ese
> _console answer_: undefined


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> 2 porque como siempre, el scope siempre busca a nivel de bloque y encuentra primero que la variable a = 2, por lo que a = 1 la convierte en una variable invisible
> _console answer_: 2


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> Como a sigue sin estar definida, el resultado puede ser ese
> _console answer_: undefined
