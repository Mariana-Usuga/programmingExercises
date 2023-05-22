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

console.log('minimum ', minimumOfTwo([3,9,8,9], [4,2,9]))

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

console.log('minimum ', minimumOfTwo([3,9,8,9], [4,2,9]))