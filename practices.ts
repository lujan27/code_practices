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

//Convert a Number to a String!

function numberToString(num: number) {
  // Return a string of the number here!
  return num.toString();
}

//console.log(numberToString(67));

//Convert a String to a Number!
const stringToNumber = function (str: string) {
  // put your code here
  return Number(str);
};

//console.log(stringToNumber("1234"));

//Convert number to reversed array of digits
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

console.log(digitize(35231));
