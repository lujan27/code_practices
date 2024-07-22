"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const practices_1 = require("../practices");
describe("Sum Arrays", () => {
    it("should return a result", () => {
        (0, chai_1.expect)((0, practices_1.sum)([1, 5.2, 4, 0, -1])).to.equal(9.2);
    });
    it("Should return zero", () => {
        (0, chai_1.expect)((0, practices_1.sum)([])).to.equal(0);
    });
});
