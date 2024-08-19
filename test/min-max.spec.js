"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const practices_1 = require("../practices");
describe("Min function test", () => {
    it("Should return the min value", () => {
        (0, chai_1.expect)((0, practices_1.min)([-52, 56, 30, 29, -54, 0, -110])).to.equal(-110);
        (0, chai_1.expect)((0, practices_1.min)([42, 54, 65, 87, 0])).to.equal(0);
    });
});
describe("Max function test", () => {
    it("Should return the highest value", () => {
        (0, chai_1.expect)((0, practices_1.max)([4, 6, 2, 1, 9, 63, -134, 566])).to.equal(566);
        (0, chai_1.expect)((0, practices_1.max)([5])).to.equal(5);
    });
});
