const functions = require("../index");
var http = require("http");
var server;
/* 
beforeAll(()=> {
  server = http.createServer((req, res) => {
      res.write('ok');
      res.end();
  });
  server.listen(()=>{
    console.log("Test Servesr Up");  
    
  });
}); */


  test("Addition", async () => {
    const expected = 5;
    const result = functions.add(2, 3);
    expect(result).toBe(expected);
  });
  
  test('CreatePhoneNumber', async () => {
    const expected = "(123) 456-7890";
    const result =  functions.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result).toBe(expected);
    
  });
  
  
  test('Convert object to Array', async () => {
    const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'd', 5 ] ];
    const result = functions.objToArray({ a: 1, b: 2, d: 5 });
    expect(result).toStrictEqual(expected);
    
  });

  test('Get day between dates', async () => {
    const expected = 6;
    const result = functions.getDays(new Date("June 14, 2019"),new Date("June 20, 2019"));
    expect(result).toStrictEqual(expected);
    
  });

  test('Get total price groceries', async () => {
    const expected = 6.50;
    const result = functions.getTotalPrice([{product: "Milk", quantity: 1, price: 1.50  },{ product: "Cereals", quantity: 2, price: 2.50 }]);
    expect(result).toStrictEqual(expected);
    
  });

  test('Get a Decompose Url', async () => {
    
  const  objExpected = new Object ( {
      
    protocol: "https:",
    ipAdress: null,
    subDomain: "www",
    domainName: "www.google.com",
    folderTree: [
        "search"
    ],
    targetFile: "test.js",
    argumentFiles: "?ok=1"
  });
    
  const objResult = functions.decomposeUrl("https://www.google.com/search/test.js?ok=1");
  expect(objResult).toStrictEqual(objExpected);
  


    
  });


  

/* 
afterAll(done => {
    server.close(done);
});
 */
