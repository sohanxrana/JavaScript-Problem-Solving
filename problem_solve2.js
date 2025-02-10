//Question 01
let numberOne = 30;
let numberTwo = 20;

if (numberOne > numberTwo) {
  console.log("Number one is maximum");
} else {
  console.log("Number two is maximum");
}

//Question 02
let number = 5;
if (number > 0) {
  console.log("Number is positive");
} else if (number < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is Zero");
}

// Question 03
let num = 100;
if (num % 10 == 0) {
  console.log("The number is divisible by 10.");
} else {
  console.log("The number is not divisible by 10.");
}

//Question 04
let checkEvenOdd = 2;
if (checkEvenOdd % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

//Question 05
let alpha = 2;
if ((alpha >= "a" && alpha <= "z") || (alpha >= "A" && alpha <= "Z")) {
  console.log("Character is Alphabet");
} else {
  console.log("Character is not Alphabet");
}

// Question 06
let temperature = 30;
if (temperature >= 30) {
  console.log("Temp is hot");
} else if (temperature <= 25) {
  console.log("Temp is Cold");
} else {
  console.log("Temp is normal");
}

//Question 07
let num1 = 50;
let num2 = 200;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
  console.log("Num1 is Maximum");
} else if (num2 > num1 && num2 > num3) {
  console.log("Num2 is Maximum");
} else {
  console.log("Num3 is Maximum");
}

//Question 08
let x = 20;
let result = x % 2 === 0 ? "Even Number" : "Odd Number";
console.log(result);

//Question 09
let numOne = 40;
let numTwo = 40;

if (numOne > 30 && numTwo > 30) {
  console.log("Both numbers are greater than 30.");
} else {
  console.log("At least one number is not greater than 30.");
}

//Question 10
let age = 15;
if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}
