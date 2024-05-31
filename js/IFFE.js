// 1.Print odd numbers in an array

let oddNum = function (num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      array.push(num[i]);
    }
  }
  return array;
};
let array = [];
console.log(oddNum([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// 2.Convert all the strings to title caps in a string array

let titleCase = function (string) {
  string = string.toLowerCase().split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(" ");
};
console.log(titleCase("HI HEllo welcome to Guvi."));

// 3.Sum of all numbers in an array

let result = 0;
let sum = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 4.Return all the prime numbers in an array

let filterPrime = (function (arr) {
  let prime = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      prime.push(arr[i]);
    }
  }
  return prime;
})

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(filterPrime([13,57,66,63,97,117,119,43,47,97,59]));

// 5.Return all the palindromes in an array

const findPalindromes=(function(array) {
  return array.filter(function(str) {
    return str === str.split('').reverse().join('');
  });
})
console.log(findPalindromes(["level", "mothi", "radar", "sudhan", "hello", "edamone", "madam", "sugam", "malayalam", "alle", "noon"]));

// 6.Return median of two sorted arrays of the same size.

const  median=(function(arr1, arr2) {
  let merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const totalLength = merged.length;
  if (totalLength % 2 === 0) {
    return (merged[totalLength / 2 - 1] + merged[totalLength / 2]) / 2;
  } else {
    return merged[Math.floor(totalLength / 2)];
  }
})

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(median(arr1, arr2));

// 7.Remove duplicates from an array

const removeDuplicates=(function (arr) {
  return [...new Set(arr)];
})
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 


// 8.Rotate an array by k times

const rotateArray = (array, k)=> {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
}
console.log(rotateArray([1, 2, 3, 4, 5], 3));

