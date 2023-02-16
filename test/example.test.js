const functions = require("../index");

test("Addition", async () => {
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});
