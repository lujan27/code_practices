"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const practices_1 = require("../practices");
describe("Return Negative", () => {
    it("Should return negative number", () => {
        (0, chai_1.expect)((0, practices_1.makeNegative)(1)).to.equal(-1);
        (0, chai_1.expect)((0, practices_1.makeNegative)(-5)).to.equal(-5);
        (0, chai_1.expect)((0, practices_1.makeNegative)(0.12)).to.equal(-0.12);
    });
    it("Should return zero", () => {
        (0, chai_1.expect)((0, practices_1.makeNegative)(0)).to.equal(0);
    });
});
