"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Test no = 1 
const numbers = 546;
const number = 21;
console.log(numbers !== number);
console.log(numbers === number);
// Test no = 2  
const mixedCaseString = "Hello Shayan";
console.log(mixedCaseString.toLowerCase() === "hello shayan");
console.log(mixedCaseString.toUpperCase() === "HELLO SHAYAN ");
//  Test no = 3
const num1 = 21;
const num2 = 75;
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
//  Test no = 4 
const Conditiona1 = true;
const Conditiona2 = false;
console.log(Conditiona1 || Conditiona2);
console.log(Conditiona1 && Conditiona2);
// Test no = 5
const Fruits = ["Apple", "Cherry", "Pecah", "Coconut", "Black berry"];
console.log(Fruits.includes("Cherry"));
console.log(Fruits.includes("cherry"));
