import { expect } from "chai";
import { makeNegative } from "../practices";

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
