/*You are groen an inputArray of ienem num that contains integers.
 Your task is to divide the inputArray in two non-empty subsequences:
  A and B so that (man(A) miniB) results in the minimum possible value

Keep in mind:
-You can delete any or no elements from the original sequence t derive the two subsequences
-You cannot change the order of the remaining elements in
the sequence ar subsequences 
- 2 <= num <= 60
- 1 <= inputArray[i] <= 100

Example 1:
Input1(num): 25
Input 2(InputArray): 1, 5, 7, 9, 15
Output: 2

Explanation:
The inputAray is 5 integers long and can be divided into the following 
two subsequences to give the minimum possible answer to |max(A)-mun()|:

A = 1,5,7,  B = 9,15

So the minimum possible value of mast) min(B) is 2*/

function minMax(num, inputArray) {
    let a = [];
    let b = [];
    let divide = 0;
    let lastElement;
      if (num % 2 === 0 ) {
        divide = num / 2;
        for(let j=0; j<divide; j++) {
          a.push(inputArray[j]?.toString());
        }
        for(let k=divide; k< num; k++) {
          b.push(inputArray[k]?.toString());
        }
      } else {
        lastElement = inputArray.pop();
        divide = inputArray.length / 2;
        for(let j=0; j<divide; j++) {
          a.push(inputArray[j]?.toString());
        }
        for(let k=divide; k< num; k++) {
          b.push(inputArray[k]?.toString());
        }
      }

    let maxA = 0;
    let maxB = 0;
    for(let i=0; i<a.length; i++){
      if(a[i] > maxA){
        maxA = a[i];
      }
    }
    for(let i=0; i<b.length; i++){
      if(b[i] > maxB){
        maxB = b[i];
      }
    }

    const result = maxA - maxB;
    return Math.abs(result);

}

//console.log(minMax(6, [2,5,1,6,3]));

/** SUMS IN LOOP
Input data will contain the total count of pairs to process in the first line.
The following lines will contain pairs themselves - one pair at each line.
Answer should contain the results separated by spaces.*/

function sumsInLoop(array1, array2){
  const result = [];
  if(array1.length >= array1.length){
    for(let i=0; i<array1.length; i++) {
      //for(let j=0; j<array2; j++) {
        if(isNaN(array1[i]) || isNaN(array2[i])) {
          continue;
        }else{
          result[i] = array1[i] + array2[i];
        }
      //}
    } 
  }
  return result;
}

//console.log('RESUL ', sumsInLoop([9,24,4,2], [7,6,5]))

/* Minimum of Two
Depending on your programming language syntax could be different and else part is almost always optional. You can read more in wikipedia article on Conditional statements.

Of two numbers, please, select one with minimum value. Here are several pairs of numbers for thorough testing.

Input data will contain number of test-cases in the first line.
Following lines will contain a pair of numbers to compare each.*/

function minimumOfTwo(array1, array2){
  let result = []
  if(array1.length >= array1.length){
    for(let i=0; i<array1.length; i++) {
      if(array1[i] >= array2[i]){
        result = [...result, array2[i]]
      } else {
        result = [...result, array1[i]]
      }
    }
  }
  return result;
}

//console.log('minimum ', minimumOfTwo([3,9,8,9], [4,2,9]))

/*
Minimum of Three
m
To have more practice with conditional statements we are going to write a program which uses complex condition. I.e. one if ... else statement could be (and should be) nested inside other to solve this problem.

Several triplets of numbers are given to you. Your task is to select minimum among each of triplets.

Input data will contain in the first line the number of triplets to follow.
Next lines will contain one triplet each.
Answer should contain selected minimums of triplets, separated by spaces.
data:
3
7 3 5
15 20 40
300 550 137

answer:
3 15 137  
*/

function minimumOfThree(array1, array2){
  let result = []
  if(array1.length >= array1.length){
    for(let i=0; i<array1.length; i++) {
      if(array1[i] >= array2[i]){
        result = [...result, array2[i]]
      } else {
        result = [...result, array1[i]]
      }
    }
  }
  return result;
}

//console.log('minimum ', minimumOfTwo([3,9,8,9], [4,2,9]))

/**  
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 

Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
 */

 /** Preguntar aleatorio a una entrevista */
 function randomQuestion(){
  const a = ['1. Cual es mi meta en la vida?', '2. como te ves en corto, mediano y largo plazo?',
'3. que esperas aprender de nosostros?', '4. como reaccionarias ante una tarea que no supieses realizar?',
'5.¿podrias enumerar 3 virtudes y 3 defectos?', '6. cual es tu motivacion?', '7. Cómo manejas el estrés y los plazos ajustados?',
'8. Cómo te mantienes actualizado con las últimas tecnologías y lenguajes de programación?', '9. Describe una situación en la que tuviste que colaborar estrechamente con alguien cuyo estilo de trabajo era muy diferente al tuyo?',
'10. ¿Podrías darme un ejemplo de un problema técnico complicado que hayas resuelto? ¿Cómo lo abordaste?',
'11. ¿Cómo manejas las críticas o el feedback constructivo?', '12. ¿Has tenido que explicar un concepto técnico complejo a un compañero de trabajo no técnico o a un cliente? ¿Cómo lo hiciste?',
'13. ¿Puedes contarme sobre un proyecto o logro del que estés particularmente orgulloso?',
'14. ¿Cómo te adaptas a los cambios, como por ejemplo, un cambio en las prioridades del proyecto o en la dirección del proyecto?',
'15. ¿Cuál crees que es tu mayor debilidad como desarrollador Full Stack y cómo estás trabajando para mejorarla?',
'16. Describe una vez que hayas cometido un error en tu trabajo. ¿Cómo lo manejaste y qué aprendiste de ello?',
'17.  cuales son tus objetivos profesionales?']

const number = Math.floor(Math.random() * (a.length - 0 + 1) + 0);
console.log('NUMBER ', number)
return a[number]
 }

 //console.log('PREGUNTA ', randomQuestion())

 /**Write a function that checks if a given value is an instance of a given class or superclass. 
  * For this problem, an object is considered an instance of a given class if that object has access 
  * to that class's methods.
There are no constraints on the data types that can be passed to the function. For example, 
the value or the class could be undefined.*/

var checkIfInstanceOf = function(obj, classFunction) {
    if(typeof obj === classFunction || obj instanceof classFunction){
      return true
    }
    return false
};

//console.log(checkIfInstanceOf(new Date(), 'object'));

class Rectangle {
  alto;
  ancho;
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}
const p = new Rectangle(2, 4);

//console.log(checkIfInstanceOf(p, Rectangle));

/**https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
 */

function longestSubarray(nums){
  const newArray = [];
  for(let i=0; i<nums.length; i++) {
    if(nums[i] === 1){
      newArray.push(nums[i])
    }
  }
  return newArray.length;
}

//console.log(longestSubarray([1,1,1,1,0,1,0]))

/**Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
https://leetcode.com/problems/median-of-two-sorted-arrays/
*/

function findMedianSortedArrays(nums1, nums2){
  let small1 = 0
  let small2 = 0
  const array = [];
  const con = nums1.concat(nums2);
  console.log('con ', con)
  for (let i = 0; i < con.length - 1; i++) {
    for (let j = 0; j < con.length - i - 1; j++) {
      if (con[j] > con[j + 1]) {
        // Intercambiar los elementos
        let temp = con[j];
        con[j] = con[j + 1];
        con[j + 1] = temp;
      }
    }
  }
  return con;
}

//console.log('findMedianSortedArrays', findMedianSortedArrays([1,7,6,5], [2,3,4]))

/**https://leetcode.com/problems/regular-expression-matching/
 * 
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
 */

function isMatch(nums1, nums2){
  let small1 = 0
  let small2 = 0
  const array = [];
  const con = nums1.concat(nums2);
  console.log('con ', con)
  for (let i = 0; i < con.length - 1; i++) {
    for (let j = 0; j < con.length - i - 1; j++) {
      if (con[j] > con[j + 1]) {
        // Intercambiar los elementos
        let temp = con[j];
        con[j] = con[j + 1];
        con[j + 1] = temp;
      }
    }
  }
  return con;
}

/** https://leetcode.com/problems/palindrome-number/
 * Given an integer x, return true if x is a palindrome
, and false otherwise. */
let mar = null
//console.log('mar ', mar)

/**https://leetcode.com/problems/memoize-ii/
 * Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice 
with the same inputs. Instead it will return a cached value.

fn can be any function and there are no constraints on what type of values it accepts. 
Inputs are considered identical if they are === to each other. */
function memoize(fn) {
  return function() {
      
  }
}

function no (){
  var n = 1
  console.log('de ', n)
  for (var n = 0; n < 3; n++) {
    console.log('for ', n)
  }
}
//console.log('fu ', n)
//no()

//INTERVIEW => codeShare
const numeros = [1, 3, 5, 9, 8]

numeros.filter(numero => numero % 2 === 0);

//console.log(numeros);

//////////////////////////////////////////

const productos = [
  {
    id: 1,
    precio: 9
  },
  {
    id: 2,
    precio: -3
  },
];

const productosCambiados =  productos.map(producto => {
  if(producto.precio < 0 ) {
    
     producto.precio = 0;
  }
});
//console.log(productosCambiados);

//////////////////////////////////////////

/*
 * Dado un array de enteros, retornar un nuevo array tal que cada elemento en el índice i del nuevo array 
 * sea el producto de todos los números en el array original exceptuando el elemento en la posición i.
Ejemplo 1: si el input es [1, 2, 3, 4, 5], el output debería ser [120, 60, 40, 30, 24]. 
Ejemplo 2: Si el input es [3, 2, 1], el output debería ser [2, 3, 6].
Ejemplo 3: [7, 2, 5, 3] ==> [30, ]
*/
function newArray(array){
  const newArray = []
  let re = 1
  for(let i = 0; i < array.length; i++){
      array.map((num, ind) => {
        if(i !== ind){
          re *= num;
        }
      } )
      newArray.push(re)
      re = 1
  }
  
  return newArray;
}

//console.log(newArray([1, 2, 3, 4, 5]));

/**  
 * Given an array of strings, return a new array where each element is the length of the corresponding 
 * string in the original array.
Example: If the input is ["apple", "banana", "orange"], the output should be [5, 6, 6].*/



/*Given an array of numbers, return a new array where each element is the square of the corresponding number in the original array.
Example: If the input is [2, 4, 6], the output should be [4, 16, 36].

Given an array of strings, return a new array where each element is the reverse of the corresponding string in the original array.
Example: If the input is ["hello", "world", "javascript"], the output should be ["olleh", "dlrow", "tpircsavaj"].

Given an array of numbers, return a new array where each element is the sum of all the numbers in the original array except the number at that index.
Example: If the input is [1, 2, 3, 4], the output should be [9, 8, 7, 6].

Given an array of strings, return a new array where each element is the uppercase version of the corresponding string in the original array.
Example: If the input is ["hello", "world", "javascript"], the output should be ["HELLO", "WORLD", "JAVASCRIPT"].
 */



/**   
 * Given an array of numbers, find the two numbers that add up to a given target sum and return their indices 
 * in a new array. If there are multiple pairs that add up to the target sum, return any one of them.
Example: If the input array is [2, 4, 6, 8] and the target sum is 10, the output should be [1, 2], as 4 + 6 equals 10.*/
function AddTwoNumbers(array, target){
  let output = []
  let foundSum = false
  let i = 0
    while(i < array.length){
    for(let j = 0; j < array.length -1; j++){
        if((array[i] !== array[j]) && array[i] + array[j] === target){
          foundSum = true
          output = [...output, i, j]
          break
        }
      if(foundSum) break;
    }
    if(foundSum) break;
    i++
}
return output
}

console.log('AddTwoNumbers ', AddTwoNumbers([2,4,6,8], 14))


/*
Given an array of integers, find the longest subarray that contains an equal number of even and odd elements. Return the subarray itself.
Example: If the input array is [2, 5, 10, 4, 7], the output should be [5, 10, 4], as it contains two even numbers (2 and 10) and two odd numbers (5 and 7).

Given an array of words, find the longest word that can be formed by combining two words from the original array. Return the longest word itself.
Example: If the input array is ["apple", "banana", "orange", "pie"], the output should be "bananaorange", as it is the longest word that can be formed by combining "banana" and "orange".

Given an array of numbers, find the longest increasing subarray and return the subarray itself.
Example: If the input array is [1, 2, 3, 2, 5, 6, 1, 7], the output should be [2, 5, 6, 1, 7], as it is the longest subarray that is strictly increasing.

Given an array of strings, find the common prefix among all the strings and return the prefix itself.
Example: If the input array is ["apple", "apricot", "apartment"], the output should be "ap", as it is the common prefix among all the strings.
  */