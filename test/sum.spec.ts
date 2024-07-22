import { expect } from "chai";
import { sum } from "../practices";

describe("Sum Arrays", () => {
  it("should return a result", () => {
    expect(sum([1, 5.2, 4, 0, -1])).to.equal(9.2);
  });

  it("Should return zero", () => {
    expect(sum([])).to.equal(0);
  });
});
