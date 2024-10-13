const { calculadora } = require("../models/calculadora");
test("adds 1 + 2 to equal 3", () => {
  expect(calculadora(1, 2)).toBe(3);
});
