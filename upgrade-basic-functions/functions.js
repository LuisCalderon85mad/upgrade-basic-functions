
/* **Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento devuelva el más alto. */

function sum(numberOne, numberTwo) {
    if(numberOne>numberTwo){
        return numberOne
    } else {
        return numberTwo
    }
  }

  console.log(sum(10,12));


/* **Iteración #2: Buscar la palabra más larga** (FAIL, SOLO PINTO EL PRIMERO)

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */ 

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avengers) {
    let masLargo = []; 

    for (const avenger of avengers){
        if (avenger.length > masLargo.length) {
         masLargo.push(avenger)   
        }
        return masLargo // Nota: me faltaba el return 
    }
}

console.log(findLongestWord(avengers));




/* **Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función: */ 


// Con un bucle 
const numbers = [1, 2, 3, 5, 45, 37, 58];
let suma = 0; 

for (const iteracion of numbers){
    suma += iteracion;
}

console.log(suma);


// Con una función 
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(a) {
    let suma = 0; 

    for (const number of numbers) {
        suma += number;
    }
  return suma
}

console.log(suma); 


// Llamando a la función 

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(a) {
    let suma = 0; 

    for (const number of numbers) {
        suma += number;
    }
  return suma
}

console.log(sumAll(numbers)); // le paso como parámetro el array numbers



/* 
**Iteración #4: Calcular el promedio** 

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */


// CON REDUCE 

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

let sumaP = numbers2.reduce(function(acumulador, numeroActual){
    return acumulador += numeroActual 
}); 
    
console.log(sumaP);

let promedio = sumaP / numbers2.length; 
console.log(promedio);



// CON FUNCIÓN Y BUCLE  (FALLA ALGO)

const numbersA = [12, 21, 38, 5, 45, 37, 6];

function sumAllP(a){
    let sumPa = 0; 

    for (const number of numbersA){
        sumPa += number;
    }
    let promedioDeSum = sumPA / numbersA.length;
    return promedioDeSum; 
}

// console.log(sumPa);

console.log(sumAllP(numbersA))




/*
Iteracion 5 
Crea una función que reciba como parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
 */ 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
    let sumaNumero = 0; 
    let sumaPalabra = 0; 

    for (const iteracion of mixedElements) {
        if (typeof iteracion === "string"){
            sumaPalabra += iteracion.length;
        } else {
            sumaNumero += iteracion;
        }
    }
console.log(sumaNumero);
console.log(sumaPalabra);
}

averageWord(mixedElements);


/* Iteración 6. Eliminar elementos duplicados (FAIL) */ 

/* FUNCIÓN Y FOR OF (DUDA: No "i is not defined")

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    let nuevoDuplicados = []; 

    for (const namePlate of duplicates){
        if (!nuevoDuplicados.includes(duplicates[i]));
        nuevoDuplicados.push(duplicates[i]); 
    } 
         
    }
console.log(removeDuplicates(duplicates)) */


// FUNCIÓN Y FOR 

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    let nuevoDuplicados = []; 

    for (let i = 0; i < duplicates.length; i++) {
        if (!nuevoDuplicados.includes(duplicates[i]));
            nuevoDuplicados.push(duplicates[i]); 
    } 
    return nuevoDuplicados;
         
    }

console.log(removeDuplicates(duplicates));


// Con SET 

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  let sinDuplicar = [...new Set (duplicates)]

  console.log(sinDuplicar);


/*
  **Iteración #7: Buscador de nombres**

  Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
 */ 

  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function searchName(names, value) {

      for (const name of names) {

          if (name === value) {
          return ["Su posición es " + names.indexOf(name) + " y su valor es " + true];
          } // Si el nombre (name) que encuentra en el bucle es igual que el valor que le pasas en la función daría true
          // con indexOf saco la posición
          
      }
    
  }

  console.log(searchName(nameFinder, "Bruce"))

 
/*
  **Iteration #8: Contador de repeticiones**

  Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(words, word) {
      let repeat = 0; 

      for (const w of words) {
          // ¿? 
      }
  }











 /*  
 // EJERCICIOS EN CLASE FUNCIONES 4 MAYO 2022
  

  function sum (num1, num2){
     return num1 + num2;
  }

  sum (3,5); 

  -- 

  function printBye(){
      console.log("Adios vida social!");
  }

  printBye();

  --


  function sayHello (nameUser) {
      console.log("Hola qué tal", " ", nameUser);
  }

  sayHello(Paco);
  sayHello(Paula);

  -- 

  */ 