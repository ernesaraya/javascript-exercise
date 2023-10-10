var http = require("http");

const initServer = () => {
  http
  .createServer(function (req, res) {
    //Here We add the calls for the functions
    res.write(`Example: add 5 + 6 = ${add(5,6)}`); // 5 + 6
    /**
     * Add calls
     */
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
};

const add = (a, b) => {
  return a + b;
};

initServer();
exports.add = add;

/**
 * Create a phone number from an array
 */
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// => returns "(123) 456-7890"

/**
 * Write a function that converts an object into an array,
 * where each element represents a key-value pair in the form of an array.
 */
// toArray({ a: 1, b: 2 })
// => returns [["a", 1], ["b", 2]]

/**
 * Create a function that takes two dates and
 * returns the number of days between the first and second date.
 */
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// )
// => returns 6

/**
 * Create a function that takes an array of objects (groceries)
 * which calculates the total price and returns it as a number.
 * A grocery object has a product, a quantity and a price
 */
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ])
// => returns 4

/**
 * Create a function named that takes a string (URL) as input.
 * Decompose the string and return an object with the following properties:
 * - protocol: This is the url protocol (e.g. "http").
 * - ipAdress: Should contain IP address (if valid) of URL or null.
 * - subDomain: Should contain subDomain of URL (e.g. "www" or null).
 * - domainName: Should contain domain without subDomain (e.g. "google.com" or null).
 * - folderTree: Should contain an array of folders (e.g. "www.google.com/test/image/index.html" ➞ ["test", "image"] or null)
 * - targetFile: Should return targeted file.
 *      e.g. 1. "www.google.com/test/image" ➞ "image"
 *      e.g. 2. "www.google.com/test/index.html" ➞ "index.html" or null
 * - argumentsFile: Should return arguments of targetedFile.
 *      e.g. "www.google.com/test/image?search=ok" ➞ "?search=ok" or null
 */
//decomposeUrl("https://www.google.com/search/test.js?ok=1")
// => returns {
//   protocol: "https",
//   ipAdress: null,
//   subDomain: "www",
//   domainName: "google.com",
//   folderTree: (1) […],
//   targetFile: "test.js",
//   argumentsFile: "?ok=1"
// }

/**
 * Given an array, create a function that returns an object detailing
 * how many times each element was repeated. Sort the object by value in descending order.
 */
//countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0])
// => returns { 0: 6, 5: 3, 12: 2, 1: 1 }
