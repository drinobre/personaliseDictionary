import { multiple } from "./index.js";

const actual = multiple(3, 2);
const expected = 6;

// if (actual !== expected) {
//   throw new Error(`${actual} is not equal to ${expected}`);
// }

test("adds 1 + 2 to equal 3", () => {
  expect(actual).toBe(expected);
});
