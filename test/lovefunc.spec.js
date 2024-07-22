"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const practices_1 = require("../practices");
describe("Opposites Attract", () => {
    it("Should return true", () => {
        (0, chai_1.expect)((0, practices_1.lovefunc)(1, 4)).to.equal(true);
        (0, chai_1.expect)((0, practices_1.lovefunc)(0, 1)).to.equal(true);
    });
    it("Should return false", () => {
        (0, chai_1.expect)((0, practices_1.lovefunc)(2, 2)).to.equal(false);
    });
});
