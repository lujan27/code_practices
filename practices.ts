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

export const sum = function (numbers: number[]): number {
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
};

//console.log(sum([1, 5.2, 4, 0, -1]));

/*
Opposites Attract

DESCRIPTION:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

export const lovefunc = function (flower1: number, flower2: number) {
  if (flower1 % 2 == 0 && flower2 % 2 != 0) {
    return true;
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

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

export const makeNegative = function (num: number): number {
  let newNum: string;

  if (num >= 0 && num != 0) {
    newNum = `-${num}`;
  } else {
    newNum = num.toString();
  }

  return Number(newNum);
};

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

//console.log(reverseString("world"));

/* 
Keep up the hoop

DESCRIPTION:
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

export function hoopCount(n: number): string {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// console.log(hoopCount(6));
// console.log(hoopCount(10));
// console.log(hoopCount(22));

/*
Detect Pangram

DESCRIPTION:
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(phrase: string): boolean {
  let separator: string[] = phrase.toLowerCase().split("");

  let characters: string[] = [];

  let exceptions: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " ",
    ".",
    ",",
  ];

  for (let i = 0; i <= separator.length; i++) {
    if (exceptions.includes(separator[i]) || separator[i] == undefined) {
    } else if (!characters.includes(separator[i])) {
      characters.push(separator[i]);
    }
  }

  console.log(characters);
  if (characters.length == 26) {
    return true;
  } else {
    return false;
  }
}

//console.log(isPangram("The quick brown fox jumps over the lazy dog."));
//console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));

/* 
Categorize New Member

DESCRIPTION:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data: number[][]): string[] {
  let member: string[] = [];

  for (let datas of data) {
    datas[0] >= 55 && datas[1] > 7
      ? member.push("Senior")
      : member.push("Open");
  }

  return member;
}

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

// console.log(
//   openOrSenior([
//     [3, 12],
//     [55, 1],
//     [91, -2],
//     [53, 23],
//   ])
// );

// console.log(
//   openOrSenior([
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12],
//   ])
// );

/* 
DNA to RNA Conversion

DESCRIPTION:
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


*/

function DNAtoRNA(dna: string): string {
  // create a function which returns an RNA sequence from the given DNA sequence
  let splitted: string[];

  splitted = dna.split("");

  for (let i = 0; i <= splitted.length; i++) {
    if (splitted[i] == "T") {
      splitted[i] = "U";
    }
  }

  return splitted.join("");
}

// console.log(DNAtoRNA("TTTT"));
// console.log("GCAT");
// console.log("GACCGCCGCC");

/* 
Beginner Series #3 Sum of Numbers

DESCRIPTION:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

function getSum(a: number, b: number): number {
  //Good luck!

  let result: number = 0;

  let first: number;

  let second: number;
  //console.log(Math.sign(a));

  if (a < b) {
    first = a;
    second = b;
  } else {
    first = b;
    second = a;
  }

  for (let i = first; i <= second; i++) {
    result = result + i;
  }

  return result;
}

//console.log(getSum(5, -1));
// console.log(getSum(0, -1));
// console.log(getSum(0, 1));
// console.log(getSum(2, 2));

/* 
MakeUpperCase

DESCRIPTION:
Write a function which converts the input string to uppercase.
*/

function makeUpperCase(str: string): string {
  // Code here

  return str.toUpperCase();
}

// console.log(makeUpperCase(""), "");
// console.log(makeUpperCase("hello"), "HELLO");
// console.log(makeUpperCase("Hello"), "HELLO");
// console.log(makeUpperCase("HELLO"), "HELLO");

/* 
Shortest Word

DESCRIPTION

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s: string): number {
  let result: number = 0;

  let allLongs: number[] = [];

  for (let ss of s.split(" ")) {
    allLongs.push(ss.length);
  }

  allLongs.sort((a, b) => a - b);

  result = allLongs[0];

  return result;
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(
//   findShort(
//     "turns out random test cases are easier than writing out basic ones"
//   )
// );
// console.log(findShort("Let's travel abroad shall we"));

/* 
Beginner - Reduce but Grow

DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x: number[]): number {
  return x.reduce((acc, curr) => acc * curr);
}

// console.log(grow([1, 2, 3]));
// console.log(grow([4, 1, 1, 1, 4]));
// console.log(grow([2, 2, 2, 2, 2, 2]));

/*
Descending Order

DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n: number): number {
  //...
  let conString: string[] = n.toString().split("");

  let arrayNum: number[] = [];

  for (let i = 0; i < conString.length; i++) {
    arrayNum.push(Number(conString[i]));
  }

  return Number(arrayNum.sort((a, b) => b - a).join(""));
}

// console.log(descendingOrder(123456789));
// console.log(descendingOrder(0));
// console.log(descendingOrder(1));
// console.log(descendingOrder(111));
// console.log(descendingOrder(15));
// console.log(descendingOrder(1021));

/*
Convert a Boolean to a String

DESCRIPTION

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b: boolean) {
  //your code here

  return b == true ? "true" : "false";
}

//console.log(booleanToString(true));
//console.log(booleanToString(false));

/* 
Friend or Foe?

DESCRIPTION:
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

function friend(friends: string[]) {
  //your code here

  let trueFriends: string[] = [];

  friends.map((friend) => {
    if (friend.match(/[0-9]/g)) {
    } else if (friend.length == 4) {
      trueFriends.push(friend);
    }
  });

  return trueFriends;
}

// console.log(friend(["Ryan", "Kieran", "Mark"]));
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
// console.log(
//   friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// );
// console.log(friend(["Love", "Your", "Face", "1"]));

/*
Printer Errors

DESCRIPTION:
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s: string): string {
  let errCount: string[] = [];

  s.split("").map((elem) => (elem.match(/[a-m]/g) ? "" : errCount.push(elem)));

  return `${errCount.length}/${s.length}`;
}

// console.log(
//   printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
// );

/*
Ones and Zeros

DESCRIPTION:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = (arr: number[]): number => {
  // your code

  let result: number[] = [];

  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * Math.pow(2, i));
  }

  return result.reduce((prev, curr) => prev + curr, 0);

  //return parseInt(arr.join(""), 2);
};

// console.log(binaryArrayToNumber([1, 1, 1, 1]));
// console.log(binaryArrayToNumber([0, 1, 1, 0]));
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// console.log(binaryArrayToNumber([1, 0, 0, 1, 1]));

/*
Square(n) Sum

DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
*/

function squareSum(numbers: number[]): number {
  let increased: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    increased.push(Math.pow(numbers[i], 2));
  }

  return increased.reduce((prev, curr) => prev + curr, 0);
}

// console.log(squareSum([1, 2]));
// console.log(squareSum([0, 3, 4, 5]));
// console.log(squareSum([]));

/*
Even or Odd

DESCRIPTION:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number: number): string {
  return number % 2 == 0 ? "Even" : "Odd";
}

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(7));
// console.log(evenOrOdd(-42));
// console.log(evenOrOdd(-7));
// console.log(evenOrOdd(0));

/*
List Filtering

DESCRIPTION:
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l: any[]): number[] {
  //Solution #1
  let filtered: number[] = [];

  for (let element of l) {
    if (typeof element == "number") {
      filtered.push(element);
    }
  }

  return filtered;

  //Solution #2
  //return l.filter((element) => typeof element == "number");
}

// console.log(filter_list([1, 2, "a", "b"]));
// console.log(filter_list([1, "a", "b", 0, 15]));
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

/*
You're a square!

DESCRIPTION:
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

function isSquare(n: number): boolean {
  let squareApplied: number = Math.sqrt(n);

  let numberPow: number = Math.pow(Number(squareApplied.toFixed(1)), 2);

  if (numberPow == n) {
    return true;
  } else {
    return false;
  }
}

// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
// console.log(isSquare(4));
// console.log(isSquare(25));
// console.log(isSquare(26));
// console.log(isSquare(53));

/*
Stop gninnipS My sdroW!

DESCRIPTION:
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

export function spinWords(words: string): string {
  //TODO Have fun :)

  //Solution #1
  let splitted: string[] = words.split(" ");
  let result: string[] = [];
  for (let i = 0; i < splitted.length; i++) {
    splitted[i].length >= 5
      ? result.push(splitted[i].split("").reverse().join(""))
      : result.push(splitted[i]);
  }
  return result.join(" ");

  //Solution #2
  // return words
  //   .split(" ")
  //   .map((word) =>
  //     word.length >= 5 ? word.split("").reverse().join("") : word
  //   )
  //   .join(" ");
}

//console.log(spinWords("Hey fellow warriors"));

/*
Duplicate Encoder

DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

export function duplicateEncode(word: string) {}

// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));

/* Find the Missing Number

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. 
Write a function to find and return this number. What are the time and space complexities of your solution?
*/

export const missingNo = function (nums: number[]): number {
  let serial: number[] = [];

  let ordered: number[] = nums.sort((a, b) => a - b);

  for (let i = 0; i <= ordered.length; i++) {
    if (i != ordered[i]) {
      serial.push(i);
    }
  }

  return serial[0];
};

let arr1 = [
  9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
  71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
  94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
  19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
  55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
  16,
]; // 26
let arr2 = [
  26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25,
  1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2,
  86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80,
  72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76,
  12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20,
  94,
]; // 40
let arr3 = [
  15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57,
  59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34,
  7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99,
  53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21,
  88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20,
  43,
]; // 80

let arr4 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99,
];
//console.log(missingNo(arr4));

export const min = (list: number[]): number => {
  return list.sort((a, b) => a - b)[0];
};

//console.log(min([-52, 56, 30, 29, -54, 0, -110]));

export const max = (list: number[]): number => {
  return list.sort((a, b) => b - a)[0];
};

//console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

/* 
Does my number look big in this?

A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

export const narcissistic = function (value: number): boolean {
  let values: string[] = value.toString().split("");

  let result: number = 0;
  for (let i = 0; i < values.length; i++) {
    result += Math.pow(Number(values[i]), values.length);
  }

  return result == value ? true : false;
};

// console.log(narcissistic(7));
// console.log(narcissistic(153));
// console.log(narcissistic(1634));

/* 
Sum of Digits / Digital Root

Description:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

export const digitalRoot = (n: number): number => {
  let values: string[] = n.toString().split("");

  let result: number = 0;
  for (let i = 0; i < values.length; i++) {
    result += Number(values[i]);
  }

  return result.toString().split("").length > 1 ? digitalRoot(result) : result;
};

// console.log(digitalRoot(16));
// console.log(digitalRoot(456));

/* Replace With Alphabet Position

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

export function alphabetPosition(text: string): string {
  let toLow: string[] = text.toLowerCase().split("");

  let modified: string[] = [];

  let positions: string = "";
  for (let low of toLow) {
    for (let word of letras) {
      if (low == word) {
        modified.push(low);
        positions += letras.indexOf(word) + 1 + " ";
      }
    }
  }
  return positions.trim();
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// console.log(alphabetPosition("The narwhal bacons at midnight."));
// console.log(alphabetPosition("[opakk_7"));
// console.log(alphabetPosition("2+:)|mmg"));
// console.log(alphabetPosition("q;w{/e,*"));
// console.log(alphabetPosition(",:;]ae}k"));

/*
Who likes it?

Description:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

export const likes = (a: string[]): string => {
  // TODO

  let peopleLiked: string = "";
  switch (a.length) {
    case 0:
      peopleLiked = "no one likes this";
      break;
    case 1:
      peopleLiked = `${a[0]} likes this`;
      break;
    case 2:
      peopleLiked = `${a[0]} and ${a[1]} like this`;
      break;
    case 3:
      peopleLiked = `${a[0]}, ${a[1]} and ${a[2]} like this`;
      break;
    default:
      peopleLiked = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
      break;
  }

  return peopleLiked;
};

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(
//   likes(["Alex", "Jacob", "Mark", "Max", "Orlando", "Jexe", "Eduardo"])
// );

/* Turing's Equation */

export const isTuringEquation = function (s: string) {
  //coding and coding..
  let arrSymbols: string[] = s.replace(/[+=]/g, " ").split(" ");

  let newString: number[] = [];
  for (let sym of arrSymbols) {
    newString.push(Number(sym.split("").reverse().join("")));
  }

  let [el1, el2, el3] = [...newString];

  return el1 + el2 == el3 ? true : false;
};

// console.log(isTuringEquation("73+42=16"));
// console.log(isTuringEquation("5+8=13"));
// console.log(isTuringEquation("10+20=30"));
// console.log(isTuringEquation("0001000+000200=00030"));
// console.log(isTuringEquation("1234+5=1239"));
// console.log(isTuringEquation("1+0=0"));
// console.log(isTuringEquation("7000+8000=51"));
// console.log(isTuringEquation("0+0=0"));

/* Is this a triangle? */

export const isTriangle = function (a: number, b: number, c: number): boolean {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

// console.log(isTriangle(1, 2, 3));
// console.log(isTriangle(7, 2, 2));
// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(6, -2, 5));
// console.log(isTriangle(-2, 1, 2));
// console.log(isTriangle(2, 2, -2));
// console.log(isTriangle(-2, 10, 9));

/* A Needle in the Haystack */

export const findNeedle = function (haystack: any[]) {
  // your code here
  return `found the needle at position ${haystack.indexOf("needle")}`;
};

// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );
// console.log(
//   findNeedle([
//     "283497238987234",
//     "a dog",
//     "a cat",
//     "some random junk",
//     "a piece of hay",
//     "needle",
//     "something somebody lost a while ago",
//   ])
// );
// console.log(
//   findNeedle([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     8,
//     7,
//     5,
//     4,
//     3,
//     4,
//     5,
//     6,
//     67,
//     5,
//     5,
//     3,
//     3,
//     4,
//     2,
//     34,
//     234,
//     23,
//     4,
//     234,
//     324,
//     324,
//     "needle",
//     1,
//     2,
//     3,
//     4,
//     5,
//     5,
//     6,
//     5,
//     4,
//     32,
//     3,
//     45,
//     54,
//   ])
// );

/* Invert values */

export const invert = function (array: number[]): number[] {
  let result: number[] = [];
  array.map((arr) => {
    Math.sign(arr) == 0 ? result.push(0) : result.push(arr * -1);
  });
  return result;
};

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([1, -2, 3, -4, 5]));
// console.log(invert([]));
// console.log(invert([0]));

/* Century From Year */

export const century = function (year: number): number {
  let rounded: number = year / 100;
  return rounded % 1 != 0 ? Math.ceil(rounded) : rounded;
};

// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(2000));
// console.log(century(2742));

/* If you can't sleep, just count sheep!! */

export const sheep = function (num: number): string {
  let sheeps: string = "";
  for (let i = 1; i <= num; i++) {
    sheeps += `${i} sheep...`;
  }

  return sheeps;
};

// console.log(sheep(0));
// console.log(sheep(1));
// console.log(sheep(2));
// console.log(sheep(3));
