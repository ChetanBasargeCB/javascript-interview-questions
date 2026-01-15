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
