//! Q1 Write a JavaScript function to reverse a given string.
//? Solution 1: Using built-in methods

function ReverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(ReverseStr("Hello"));

//? SOlution 2: Without Using built-in methods
function Reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(Reverse("Hello"));

//! Q2 Check if a number and str is a palindrome
// A number/string reads the same forward and backward.
//? Number
const ispalindrome = (num) => {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}
console.log(ispalindrome(121));

//? String
function isPalindrome(str) {
  let same = str.toLowerCase();
  return same === same.split("").reverse().join("");
}
console.log(isPalindrome("madam"));

//! Q3 Remove Duplicates from Array
function uniqueArr(arr){
  let result = [];
  for(let i=0; i<arr.length;i++){
    //here includes() prevents adding duplicate values
    if(!result.includes(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}

console.log(uniqueArr([1,2,2,3,4]))

//? 2.Using ES6 inbuilt Set() method
// “Set stores only unique values, so duplicates are automatically removed.”
const arr1 = [1, 2, 2, 3, 4, ];
const uniqueArr1 = [...new Set(arr1)];
console.log(uniqueArr1);

//! Q4 Remove Duplicates from String 

function RemoveDuplicate(str){
    let result = '';
    for(let i=0; i<str.length;i++){
      if(!result.includes(str[i])){
        result += str[i];
      }
    }
    return result
}

console.log(RemoveDuplicate("Helloo"))

//!Q5 Find Maximum Number in Array 
//? Solution-1 Using Math() built-in method
function FindmaxNum(arr){
  // Math.max() is automatically finds and returns maximum value in the array
  return Math.max(...arr)
}
console.log("Maximum Num in the Array is",FindmaxNum([1,2,3,4]))


//? Solution-2 Without built-in 
function LargestNum(arr){
  let max=arr[0];
  for(let i=0; i<arr.length;i++){
    // if blocks only runs  max when less than arr[i]
    if(max<arr[i]){
      max=arr[i]
    }
  }
return max
}
console.log("Maximum num in the Array Using loop is",LargestNum([1,2,3,4,5])) //5

//! Q6 Sum of Array Elements
//? Solution-1 Using reduce() built-in method

function SumOfArray(arr){
  // reduce() is an array method that combines all array element in singal value
    return arr.reduce((acc,curr)=>acc+curr)
}

console.log("Sum of Array element Using built-in method",SumOfArray([10,20,30])) //60

//? Solution-2 without using built-in method

function ArraySum(arr){
  let sum = 0;
  for(let i=0; i<arr.length;i++){
    sum += arr[i]
  }
  return sum
}
console.log("Sum of Array element is",ArraySum([10,20,30])) //60

//! Q7. Check if the given Number is  Prime or not
 // What is Prime Number=> Number is only  divided 1 and itself & reminder get 0

function isPrime(num){
  // Num is less than 2 like (0,1 or negative) it returns false and function execution breaks

    if(num<2) return false
    for(let i =2; i<=Math.sqrt(num);i++){
      if(num%i===0) return false
    }
    // if No divisors were found 
    return true
}

//! Q8 Write a Program to find Factorial of a given Number

// In this code we use Recursion 
// Recursion => The function calls itself.
//? Solution-1 Using Recursion method

function Factorial(num){
  if(num===1 ) return 1 
  //Recursion happens here
  return num*Factorial(num-1)
}
console.log(Factorial(5)) //120

//? Solution-2 without using built-in method

function FactorialNum(num){
  let result = 1;
  // for loop that runs from i = 1 to i = num.
  // if we use here i = 0 then multiplication is not works
  for(let i =1;i<=num;i++){
    result *= i
  }
  return result;
}
console.log(FactorialNum(5))//120
