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

console.log(minMax(6, [2,5,1,6,3]));

/**Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 
Example 1:
Input: nums = [1,2,3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:
Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
 
Constraints:
0 <= arr.length <= 1000
0 <= arr[i] <= 1000*/