"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const practices_1 = require("../practices");
describe("Armstrong number", () => {
    it("Should return true", () => {
        (0, chai_1.expect)((0, practices_1.narcissistic)(7)).to.equal(true);
        (0, chai_1.expect)((0, practices_1.narcissistic)(153)).to.equal(true);
        (0, chai_1.expect)((0, practices_1.narcissistic)(1634)).to.equal(true);
    });
});
