import { expect } from "chai";
import { max, min } from "../practices";

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
