import { expect } from "chai";
import { digitalRoot } from "../practices";

describe("Digital root", () => {
  it("Should return one length number", () => {
    expect(digitalRoot(16)).to.equal(7);
    expect(digitalRoot(456)).to.equal(6);
  });
});
