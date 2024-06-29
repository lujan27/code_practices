/*
Sum Arrays

DESCRIPTION:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.*/

function sum(numbers: number[]) {
  let total: number = 0;

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers.length == 0) {
      total = 0;
    }

    if (numbers[i] != undefined) {
      total = total + numbers[i];
    }
  }

  return total;
}

//console.log(sum([1, 5.2, 4, 0, -1]));

/*
Opposites Attract

DESCRIPTION:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1: number, flower2: number) {
  if (flower1 % 2 == 0 && flower2 % 2 != 0) {
    return true;
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(lovefunc(1, 4));
// console.log(lovefunc(2, 2));
// console.log(lovefunc(0, 1));
// console.log(lovefunc(0, 0));

/*
Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(num: number) {
  let newNum: string;

  if (num >= 0 && num != 0) {
    newNum = `-${num}`;
  } else {
    newNum = num.toString();
  }

  return newNum;
}

//console.log(makeNegative(1)); // return -1
//console.log(makeNegative(-5)); // return -5
//console.log(makeNegative(0)); // return 0
//console.log(makeNegative(0.12)); // return -0.12

/*
Grasshopper - Grade book

Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1: number, s2: number, s3: number) {
  let final = 0;

  final = (s1 + s2 + s3) / 3;

  let score = "";

  if (final <= 0 || final < 60) {
    score = "F";
  } else if (final <= 60 || final < 70) {
    score = "D";
  } else if (final <= 70 || final < 80) {
    score = "C";
  } else if (final <= 80 || final < 90) {
    score = "B";
  } else if (final <= 90 || final <= 100) {
    score = "A";
  }

  return score;
}

//console.log(getGrade(80, 83, 0));

/*
Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/

const reverseSeq = (n: number) => {
  let myArray: number[] = [];

  for (let i = n; i > 0; i--) {
    myArray.push(i);
  }

  return myArray;
};

//console.log(reverseSeq(10));

/* Generador de matriculas */

let letras: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

class generateMatricula {
  randomNum() {
    let rndNum = Math.floor(Math.random() * numeros.length);

    let rndNumPos = numeros[rndNum];

    return rndNumPos;
  }

  randomChar() {
    let rndChar = Math.floor(Math.random() * letras.length);

    let rndCharPos = letras[rndChar];
    return rndCharPos.toUpperCase();
  }

  matricula() {
    let matri = `${this.randomChar()}${this.randomChar()}${this.randomChar()}-${this.randomNum()}${this.randomNum()}${this.randomNum()}-${this.randomChar()}`;

    return matri;
  }
}

let matri = new generateMatricula();

//console.log(matri.matricula());

/*
Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.*/

function areYouPlayingBanjo(name: string) {
  let convert = name.toString();

  if (convert[0].toLowerCase() == "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Paul"));
// console.log(areYouPlayingBanjo("Ringo"));
// console.log(areYouPlayingBanjo("bravo"));
// console.log(areYouPlayingBanjo("rolf"));

/*Convert a Number to a String!
We need a function that can transform a number (integer) 
into a string.

What ways of achieving this do you know?*/

function numberToString(num: number) {
  // Return a string of the number here!
  return num.toString();
}

//console.log(numberToString(67));

/*Convert a String to a Number!
We need a function that can transform a string into a number. 
What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, 
and every string is a perfectly valid representation of 
an integral number.*/

const stringToNumber = function (str: string) {
  // put your code here
  return Number(str);
};

//console.log(stringToNumber("1234"));

/*Convert number to reversed array of digits
Convert number to reversed array of digits
Given a random non-negative number, you have to return the 
digits of this number within an array in reverse order.*/

function digitize(n: number) {
  //code here
  let myString = n.toString();

  let reversed = myString.split("").reverse();

  let result: number[] = [];

  reversed.map((rever) => {
    result.push(Number(rever));
  });

  return result;
}

//console.log(digitize(35231));

/*
Reversed Strings


DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function reverseString(str: string) {
  return str.split("").reverse().join("");
}

console.log(reverseString("world"));
