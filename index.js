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

/* 
let num = +prompt("write any number which is positive or negative");
if (num >= 0)
{
    alert("The sign is +");
}
else if (num < 0) {
    alert("The sign is -");

} 
*/

/* 3. Write a JavaScript program that accepts five numbers in five prompts and
displays the larger one in the console. */
/*
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
*/
/*
4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
will check if the current number is odd or even, and display a message to the
screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
----------
----------
*/
/*
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(`${i} is even <br />` )
    }
    else if (i % 2 !== 0) {
        document.write(`${i} is odd <br />` )
    }
}
*/

/*
5. Write a JavaScript program which computes the average marks of the
following students Then, this average is used to determine the corresponding
grade.
*/

/*
let mark1 = +prompt("pleae enter first student marks");
let mark2 = +prompt("pleae enter second student marks");
let mark3 = +prompt("pleae enter third student marks");
let mark4 = +prompt("pleae enter forth student marks");
let mark5 = +prompt("pleae enter fifth student marks");

let totalStudentsMarks = mark1 + mark2 + mark3 + mark4 + mark5;

let avg = (totalStudentsMarks / 5)

if (avg < 60) {
    console.log('Student Grade is F')
}
else if (avg >= 60 && avg < 70) {
    console.log('Student Grade is D')
}
else if (avg >= 70 && avg < 80) {
    console.log('Student Grade is C')
}
else if (avg >= 80 && avg < 90) {
    console.log('Student Grade is B')
}
else if (avg >= 90 && avg < 100) {
    console.log('Student Grade is A')
}
*/

/* 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
multiples of three print "Fizz" instead of the number and for the multiples of five
print "Buzz". For numbers which are multiples of both three and five print
"FizzBuzz".*/
/*
for (let i =1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        document.write(`FizzBuzz <br />`)
    }
    else if (i % 3 === 0) {
        document.write(`Fizz <br />`)
    }
    else if (i % 5 === 0) {
        document.write(`Buzz <br />`)
    }
    
    else {
        document.write(`${i} <br />`)
    }
}
*/

/* 7. Write a JavaScript program to construct the following pattern, using a nested
for loop.
*
* *
* * *
* * * *
* * * * *
*/
/*
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++){
        document.write('* ');
    }
    document.write('<br/>');
}
*/