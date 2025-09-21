"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const either_1 = require("./either");
function doSomeThing(shouldSuccess) {
    if (shouldSuccess) {
        return (0, either_1.right)(10);
    }
    else {
        return (0, either_1.left)('error');
    }
}
(0, vitest_1.test)('success result', () => {
    const result = doSomeThing(true);
    (0, vitest_1.expect)(result.isRight()).toBe(true);
    (0, vitest_1.expect)(result.isLeft()).toBe(false);
});
(0, vitest_1.test)('error result', () => {
    const result = doSomeThing(false);
    (0, vitest_1.expect)(result.isLeft()).toBe(true);
    (0, vitest_1.expect)(result.isRight()).toBe(false);
});
