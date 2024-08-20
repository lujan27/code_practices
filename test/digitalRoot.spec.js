"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const practices_1 = require("../practices");
describe("Digital root", () => {
    it("Should return one length number", () => {
        (0, chai_1.expect)((0, practices_1.digitalRoot)(16)).to.equal(7);
        (0, chai_1.expect)((0, practices_1.digitalRoot)(456)).to.equal(6);
    });
});
