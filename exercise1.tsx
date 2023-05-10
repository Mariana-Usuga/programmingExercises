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
    let a = '';
    let b = '';
    let divide = 0;
    let lastElement;
    for(let i=0; i<num; i++){
      if (num % 2 === 0 ) {
        divide = num / 2;
        for(let j=0; j<divide; j++) {
          a += ' ' + inputArray[j]?.toString();
        }
        for(let k=divide; k<= num; k++) {
          b += ' ' + inputArray[k]?.toString();
        }
      } else {
        lastElement = inputArray.pop();
        divide = inputArray.length / 2;
        for(let j=0; j<divide; j++) {
          a += ' ' + inputArray[j]?.toString();
        }
        for(let k=divide; k<= num; k++) {
          b += ' ' + inputArray[k]?.toString();
        }
      }
    }

    console.log('A', a)
    console.log('B', b)
return 8;

}

minMax(6, [2,9,7,6,3,7]);