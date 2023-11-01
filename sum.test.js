const { sum, capitalize, reverse, Calculator } = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalizes first letter of word", () => {
  expect(capitalize("Test")).toBe("Test");
});

test("Returns reversed word", () => {
  expect(reverse("word")).toBe("drow");
});

test("Returns 1 + 2 to equal 3", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("Returns 2 - 1 to equal 1", () => {
  expect(Calculator.subtract(2, 1)).toBe(1);
});

test("Returns 4 / 2 to equal 2", () => {
  expect(Calculator.divide(4, 2)).toBe(2);
});

test("Returns 2 * 2 to equal 4", () => {
  expect(Calculator.multiply(2, 2)).toBe(4);
});
