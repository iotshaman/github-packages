var math = require('./math');
let rslt = math.FibonacciNumber(7);
if (rslt != 13) throw new Error("Invalid fibonacci number.");
else console.log("Test successful.");