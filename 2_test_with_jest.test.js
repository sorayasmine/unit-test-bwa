const { test, expect } = require("@jest/globals");
const getTotalPrice = require("./2_test_with_jest");

test("function will return total price correctly", () => {
  const result = getTotalPrice(100000, 20); // Rp. 70.0000
  expect(result).toBe("Rp. 70.000");
});

test("will return error if argumant invalid", () => {
  const result = getTotalPrice("100000", "invalid");
  expect(result).toBe("Error, invalid arguments");
});
