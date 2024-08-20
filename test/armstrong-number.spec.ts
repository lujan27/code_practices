import { expect } from "chai";
import { narcissistic } from "../practices";

describe("Armstrong number", () => {
  it("Should return true", () => {
    expect(narcissistic(7)).to.equal(true);
    expect(narcissistic(153)).to.equal(true);
    expect(narcissistic(1634)).to.equal(true);
  });
});
