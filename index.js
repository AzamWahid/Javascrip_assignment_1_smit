/* 1. Write a JavaScript program that accepts two numbers in two prompts and
displays the larger one in the console.*/

// Answer

/* 
let num1 = +prompt("pleae enter first number");
let num2 = +prompt("pleae enter second number");
if (num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
} 
*/


/* 2. Write a JavaScript conditional statement to find the sign of a number. Display
an alert box with the specified sign.*/

/* let num = +prompt("write any number which is positive or negative");
if (num >= 0)
{
    alert("The sign is +");
}
else if (num < 0) {
    alert("The sign is -");

} */

/* 3. Write a JavaScript program that accepts five numbers in five prompts and
displays the larger one in the console. */

let num1 = +prompt("pleae enter first number");
let num2 = +prompt("pleae enter second number");
let num3 = +prompt("pleae enter third number");
let num4 = +prompt("pleae enter forth number");
let num5 = +prompt("pleae enter fifth number");

let largest = num1;

if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}

if (num4 > largest) {
    largest = num4;
}

if (num5 > largest) {
    largest = num5;
}
console.log(`largest value is ${largest}`);


