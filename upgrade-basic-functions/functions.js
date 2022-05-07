
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


/* **Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */ 

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
    let masLargo = []; 

    for (const avenger of avengers){
        if () {
         masLargo.push(avenger)   
        }
    }
}

console.log(masLargo);



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

function sumAll(array) {
    let suma = 0; 

    for (const iteracion of numbers) {
        suma += iteracion;
    }
  return suma
}

console.log(suma); 


/* 
**Iteración #4: Calcular el promedio** (FAIL)

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */


const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma1 = numbers.reduce(function(acumulador, numeroActual)){
    return acumulador += numeroActual 
}; 
    
// console.log(suma1);

let promedio = suma1 / numbers.length; 
console.log(promedio);


/* FAIL 
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(arr) {
  let resultado = 0;
  for (const number of numbers){
      resultado = resultado + arr;
  } 
  return resultado;

}
console.log(resultado); */ 



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

    for (const name of duplicates){
        if (name.includes(duplicates[i])); 
            console.log("Se repite");
    } else {
        nuevoDuplicados.push(name); // ¿? 
    }

}

removeDuplicates();


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