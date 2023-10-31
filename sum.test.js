const { sum, capitalize, reverse } = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalizes first letter of word", () => {
  expect(capitalize("Test")).toBe("Test");
});

test("Returns reversed word", () => {
  expect(reverse("word")).toBe("drow");
});
