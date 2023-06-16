// Problem 1: Even or Odd
// Write a program that takes an integer as input and determines whether it is even or odd

// function evenOdd(number) {
//   number % 2 === 0 ? console.log("Even") : console.log("Odd");
  
// }
// function main() {
//   let number = Number(prompt("Give me number, please:"));
//   evenOdd(number)
// }
// main();

// Problem 2: Fibonacci Series
// Write a program that generates the Fibonacci series up to a given number of terms. The Fibonacci series starts with 0 and 1, and each subsequent term is the sum of the previous two terms

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// const terms = 10;
// const series = [];

// for (let i = 0; i < terms; i++) {
//   series.push(fibonacci(i));
// }

// console.log(series);

// Problem 3 Reverse a String
// Write a program that takes a string as input and reverses it. For example, if the input is "hello," the program should output "olleh."

// function reverses(reverseWord) {
//   const arr = []
//   for(let i=reverseWord.length-1; i>=0; i--)  {
//     arr.push(reverseWord[i]);
//   }
//   return (
//     console.log(arr.join(''))
//   )
// }
// function reversed() {
//   let reverseWord = prompt("Enter word:");
//   reverses(reverseWord);
// }
// reversed();

// Problem 4: Leap Year
// Write a program that determines whether a given year is a leap year or not. A leap year is divisible by 4, but not divisible by 100, unless it is also divisible by 400.

// function leapYear(year) {
//   if((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
//     console.log(year + ' is a leap year')
//   }else{
//     console.log(year + " isn't a leap year")
//   }
// }
// function main() {
//   let year = Number(prompt("Enter year:"));
//   leapYear(year);
// }
// main();

// Problem 5: Prime Numbers
// Write a program that prints all the prime numbers between 1 and a given number. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

// function prime(number) {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printPrimes(maxNumber) {
//   for (let i = 2; i <= maxNumber; i++) {
//     if (prime(i)) {
//       console.log(i);
//     }
//   }
// }
// printPrimes(5);


// Problem 6: Palindrome
// Write a program that checks whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

// function isPalindrome(string) {
//   let reversedString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }
//   if(string === reversedString) {
//     console.log("Palindrome");
//   }else{
//     console.log("Is not palindrome");
//   }
// }

// function checkPalindrome() {
//   let string = prompt("Enter word: ");
//   isPalindrome(string)
// }
// checkPalindrome();

// Problem 7: Factorial
// Write a program that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// function factorial(num) {
//   let factorial = 1;
//     for(let i=1; i<=num; i++) {
//     factorial*=i
//   }
//   console.log(factorial);
// }
// function main() {
//   let num = Number(prompt("Give a num:"));
//   factorial(num);
// }
// main();

// Problem 8: Sorting Algorithms
// Implement a sorting algorithm such as bubble sort, selection sort, or insertion sort to sort an array of integers in ascending order
// let arr = [5, 6, 8, 7];
// console.log(arr.sort());


// Problem 9: Sum of Array Elements
// Write a program that calculates the sum of all elements in an array of integers.
// let sum = 0;
// for(let i=0; i<arr.length; i++) {
//   sum+=arr[i]
// }
// console.log(sum);

// Problem 10: Find Maximum and Minimum
// Write a program that finds the maximum and minimum values in an array of integers.

// let max = arr[0];
// let min = arr[0];
// for(let i=0; i<arr.length; i++) {
//   if(arr[i] > max) {
//     max = arr[i]
//     console.log(arr[i])
//   }
//   if(arr[i] < min) {
//     min = arr[i]
//     console.log(min)
//   }
// }

// Problem 11: Count Vowels and Consonants
// Write a program that takes a string as input and counts the number of vowels and consonants in it.

// function countVowelsAndConsonants(string) {
//   let vowels = 0;
//   let consonants = 0;
//   let characters = string.toLowerCase();

//   for (let i = 0; i < characters.length; i++) {
//     let character = characters[i];

//     if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//       vowels++;
//     } else if (character >= "a" && character <= "z") {
//       consonants++;
//     }
//   }

//   return {
//     vowels: vowels,
//     consonants: consonants,
//   };
// }

// function main() {
//   let string = prompt("Enter word:");
//   console.log(countVowelsAndConsonants(string));
// }

// main();

// Problem 12: Sum of Digits
// Write a program that calculates the sum of the digits of a given positive integer.

// function sumOfDigits(number) {
//   if (number < 1) {
//     console.log("Number is a negative");
//   }
//   let sum = number.toString().split('').map(Number).reduce(function(a, b) {
//     return a + b;
//   }, 0)
//   console.log(sum);
// }
// function main() {
//   let number = Number(prompt("Enter numbers:"));
//   sumOfDigits(number);
// }
// main()

// Problem 13: Largest Word in a Sentence
// Write a program that finds the largest word in a sentence. The program should ignore punctuation marks and consider words as sequences of characters separated by spaces.

// function findLargestWord(sentence) {
//   let words = sentence.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// function main() {
//   let sentence = prompt("Enter sentence:");
//   console.log(findLargestWord(sentence))
// }
// main();

// Problem 14: Duplicate Elements
// Write a program that finds and prints all duplicate elements in an array of integers.

// Problem 15: Armstrong Number
// Write a program that checks whether a given number is an Armstrong number or not. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

// function isArmstrongNumber(number) {
//   let digits = number.toString().split("").map(Number);
//   let power = digits.length;
//   let sum = 0;

//   for (let i = 0; i < digits.length; i++) {
//     sum += Math.pow(digits[i], power);
//   }

//   return sum === number;
// }

// function main() {
//   let number = Number(prompt("Enter number:"));
//   console.log(isArmstrongNumber(number));
// }
// main();

// Problem 16: Check for Anagrams
// Write a program that checks whether two given strings are anagrams or not. Anagrams are words or phrases formed by rearranging the letters of another word or phrase.

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   str1 = str1.toLowerCase().split("").sort();
//   str2 = str2.toLowerCase().split("").sort();

//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// function main() {
//   const letters1 = prompt("Enter word:");
//   const letters2 = prompt("Enter word:");
//   console.log(areAnagrams(letters1, letters2));
// }
// main();


// Problem 17: Find Missing Number
// Write a program that finds the missing number in a given array of consecutive integers from 1 to n, where only one number is missing.
// function findMissingNumber(arr) {
//   let missingNumber = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== missingNumber) {
//       break;
//     } else {
//       missingNumber++;
//     }
//   }
//   return missingNumber;
// }
// const arr = [1, 2, 3, 4, 5, 7];
// console.log(findMissingNumber(arr));