/**Exercise 1
I want this code to log out “hey amy”, but it logs out “hey arnold” - why? */

function greet(person) {
  if ('person == { name: "amy" }') {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
//en JavaScript, la comparación de objetos se basa en su referencia en memoria y no en su contenido.
//son dos objetos distintos en memoria.
greet({ name: 'amy' })

function greet2(person) {
  if (person.name === 'amy') {
    return 'hey amy'
  }
  return 'hey arnold'
}
greet({ name: 'amy' }) // "hey amy"

/**Exercise 2
I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t do what I expect 
(this is a bug you run into once in a while, and some people love to ask about it in interviews). */
function settime(){
  for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
  }
}
settime()

/**FIZZBUZZ
 * Firstly, let’s get this out of the way, FizzBuzz is a task where the programmer is asked to print numbers 
 * from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” 
 * for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
 */

function fizzBuzz(){
  for(let i = 1; i <=100; i++ ){
    let men = "";
    if(i % 3 === 0){
      men += "Fizz"
    }
    if(i % 5 === 0){
      men += "Buzz"
    }
    //console.log(men || i)
  }
}

function variables(){
  let i = 'con'// var

  for(let i = 1; i <=100; i++ ){ //var

  }

 // console.log(i)// con pero si es var i=2
}

/**To find the largest number in an array. */

function mayor(){
  var arreglo = [3 , 6, 2, 56, 32, 5, 89, 32];
var mayor = 0;
 
for(let i = 0; i < arreglo.length; i++){
    if (arreglo[i] > mayor)
    {
        mayor = arreglo[i];
    };
}
return mayor;
}

/**Reverse a string of text. */

function invertirCadena(cad) {
  // Paso 1. Usa el método split() para devolver un nuevo arreglo
  var separarCadena = cad.split(""); // var separarCadena = "hola".split("");
  // ["h", "o", "l", "a"]

  // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
  var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
  // ["a", "l", "o", "h"]

  // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
  var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
  // "aloh"
  
  //Paso 4. Devolver la cadena invertida
  return unirArreglo; // "aloh"
}

/**find the largest or smallest number in an array.
Reverse a string of text.
Determine if a string of text is a palindrome (reads the same forwards and backwards).
Calculate the sum of all elements in an array.
Find the missing number in a number sequence.
Sort an array in ascending or descending order.
Search for a specific element in an array and return its index.
Calculate the factorial of a number.
Determine if two strings are anagrams (have the same letters but in a different order).
Implement search and sorting algorithms such as Binary Search, Merge Sort, or Quick Sort. */

/** Detector de bombas */
const arra1 = [1, 7, 2, 6, 10, 15, 17, 27, 25, 125, 467, 1070]
  const arra2 = [0, 23, 40, 55, 62, 44, 18, 101, 405, 1080]
function detector(arr){
  const bomb = []
  arr.forEach(e => {
    const numString = e.toString()
    for(let i = 0; i < numString.length; i++){
      bomb.push(+numString.charAt(i)) // obtener el carácter en una posición específica de una cadena.
    }
  });
  const contain = bomb.includes(7)//boolean
  //const c = bomb.filter(seven => seven === 7) // new array
  if(contain){
    return 'tiene bomba'
  } else {
    return 'tranqui'
  }
}
//console.log(detector(arra1));

/**Create a function that allows us to perform the 4 arithmetic operations, namely, addition, subtraction, 
 * division, and multiplication. The function should take 3 parameters, where two of them are the values (a and b), 
 * and one is the name of the operation (in lowercase). If the operation parameter is not valid, it should log a
 * custom error message to the console. */
function performArithmeticOperation(a, b, operation) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      console.log("Invalid operation. Please provide a valid operation: add, subtract, multiply, or divide.");
  }
}

//console.log(performArithmeticOperation(2,3, "adh"))

/** Create a function that stores all the even numbers from a to b in an array. */

function evenNumbers(a, b){
  const evenMunbers = []
  for(let i = a; i < b; i++ ){
    if(i % 2 === 0){
      evenMunbers.push(i)
    }
  }
  return evenMunbers;
}
 
//console.log(evenNumbers(10,20)) 

/** Create a multiplication table for a number (a) from 0 to x, but exclude the multiplication of a * 5. */

/** Concurrencia */
function fetchMultipleUrls(urls) {
  const promises = urls.map(url => fetch(url)); // Supongamos que fetch() es una función que realiza una solicitud de red y devuelve una Promesa

  return Promise.all(promises)
    .then(responses => {
      const results = responses.map(response => response.text());
      return Promise.all(results);
    })
    .then(contents => {
      console.log('Contenido de las URLs:', contents);
    })
    .catch(error => {
      console.error('Error al realizar las solicitudes:', error);
    });
}

// Ejemplo de uso, CONCURRENCIA
const urls = ['https://example.com', 'https://api.com', 'https://google.com'];
//fetchMultipleUrls(urls);


function performTask(taskName, duration) {
  console.log(`Iniciando tarea: ${taskName}`);

  setTimeout(() => {
    console.log(`Tarea completada: ${taskName}`);
  }, duration);
}

/*console.log('Inicio del programa');

performTask('Tarea 1', 2000);
performTask('Tarea 2', 3000);
performTask('Tarea 3', 1000);

console.log('Fin del programa');*/

/**Exercise 3
I want this code to log out “doggo”, but it logs out undefined! */
let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  },
}
let sayName = dog.sayName
sayName()
/*El resultado de sayName() es undefined debido al contexto de ejecución de la función 
y cómo se relaciona con la propiedad name del objeto dog.
Cuando haces let sayName = dog.sayName, estás creando una nueva variable sayName que 
referencia a la función sayName que está definida dentro del objeto dog. Sin embargo, 
en este caso, la función sayName se está ejecutando sin tener un objeto al que esté vinculada.
Cuando invocas sayName(), la función se ejecuta sin un contexto de objeto (this), lo que significa 
que this.name dentro de la función no está haciendo referencia al objeto dog. En su lugar, this se 
refiere al objeto global (window en el navegador o global en Node.js), y como el objeto global no 
tiene una propiedad name, la expresión this.name es undefined.*/ 