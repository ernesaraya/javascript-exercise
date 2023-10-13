const functions = require("../index");

test("Addition", async () => {
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test('CreatePhoneNumber', async () => {
  const expected = "(123) 456-7890";
  const result = functions.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  expect(result).toBe(expected);
  
});


test('Convert object to Array', async () => {
  const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'd', 5 ] ];
  const result = functions.objToArray({ a: 1, b: 2, d: 5 });
  expect(result).toStrictEqual(expected);
  
});

afterAll(async() => {
    functions.close();
});
