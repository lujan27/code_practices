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

console.log(spinWords("Hey fellow warriors"));
