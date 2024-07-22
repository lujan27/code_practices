import { expect } from "chai";
import { lovefunc } from "../practices";

describe("Opposites Attract", () => {
  it("Should return true", () => {
    expect(lovefunc(1, 4)).to.equal(true);
    expect(lovefunc(0, 1)).to.equal(true);
  });

  it("Should return false", () => {
    expect(lovefunc(2, 2)).to.equal(false);
  });
});
