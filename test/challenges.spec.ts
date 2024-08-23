import { expect } from "chai";
import {
  sum,
  lovefunc,
  makeNegative,
  missingNo,
  max,
  min,
  narcissistic,
  digitalRoot,
  alphabetPosition,
  likes,
} from "../practices";

/* Sum Arrays */
describe("Sum Arrays", () => {
  it("Should return a result", () => {
    expect(sum([1, 5.2, 4, 0, -1])).to.equal(9.2);
  });

  it("Should return zero", () => {
    expect(sum([])).to.equal(0);
  });
});

/* Opposites Attract */
describe("Opposites Attract", () => {
  it("Should return true", () => {
    expect(lovefunc(1, 4)).to.equal(true);
    expect(lovefunc(0, 1)).to.equal(true);
  });

  it("Should return false", () => {
    expect(lovefunc(2, 2)).to.equal(false);
  });
});

/* Return Negative */
describe("Return Negative", () => {
  it("Should return negative number", () => {
    expect(makeNegative(1)).to.equal(-1);
    expect(makeNegative(-5)).to.equal(-5);
    expect(makeNegative(0.12)).to.equal(-0.12);
  });

  it("Should return zero", () => {
    expect(makeNegative(0)).to.equal(0);
  });
});

/* Finding the missing number */
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
]; //100
describe("Missing Number", () => {
  it("Array #1", () => {
    expect(missingNo(arr1)).to.equal(26);
  });
  it("Array #2", () => {
    expect(missingNo(arr2)).to.equal(40);
  });
  it("Array #3", () => {
    expect(missingNo(arr3)).to.equal(80);
  });
  it("Array #4", () => {
    expect(missingNo(arr4)).to.equal(100);
  });
});

/* Max and Min value */
describe("Min function test", () => {
  it("Should return the min value", () => {
    expect(min([-52, 56, 30, 29, -54, 0, -110])).to.equal(-110);
    expect(min([42, 54, 65, 87, 0])).to.equal(0);
  });
});

describe("Max function test", () => {
  it("Should return the highest value", () => {
    expect(max([4, 6, 2, 1, 9, 63, -134, 566])).to.equal(566);
    expect(max([5])).to.equal(5);
  });
});

/* Armstrong Number */
describe("Armstrong number", () => {
  it("Should return true", () => {
    expect(narcissistic(7)).to.equal(true);
    expect(narcissistic(153)).to.equal(true);
    expect(narcissistic(1634)).to.equal(true);
  });
});

/* Sum of Digits / Digital Root */
describe("Digital root", () => {
  it("Should return one length number", () => {
    expect(digitalRoot(16)).to.equal(7);
    expect(digitalRoot(456)).to.equal(6);
  });
});

/* Replace With Alphabet Position */

describe("Alphabet position", () => {
  it("Should return an string with the positions", () => {
    expect(alphabetPosition("The sunset sets at twelve o' clock.")).to.equal(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
    expect(alphabetPosition("The narwhal bacons at midnight.")).to.equal(
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
    );
  });
});

/* Who likes it? */

describe("Likes count", () => {
  it("Should return no one liked", () => {
    expect(likes([])).to.equal("no one likes this");
  });
  it("Should return one person liked", () => {
    expect(likes(["Peter"])).to.equal("Peter likes this");
  });
  it("Should return two people liked", () => {
    expect(likes(["Jacob", "Alex"])).to.equal("Jacob and Alex like this");
  });
  it("Should return three people liked", () => {
    expect(likes(["Max", "John", "Mark"])).to.equal(
      "Max, John and Mark like this"
    );
  });
  it("Should return two people and more liked", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).to.equal(
      "Alex, Jacob and 2 others like this"
    );
  });
});
