// 1. Arithmetic Operators
// + , - , * , / , % , **

let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition: " + (a + b));      // 10 + 5 = 15
console.log("Subtraction: " + (a - b));   // 10 - 5 = 5
console.log("Multiplication: " + (a * b)); // 10 * 5 = 50
console.log("Division: " + (a / b));      // 10 / 5 = 2
console.log("Modulus: " + (a % b));       // 10 % 5 = 0
console.log("Exponentiation: " + (a ** b)); // 10 ** 5 = 100000


// 2. Assignment Operators
let P = 20;

P += 5;  // x = x + 5
console.log("\n Assignment Operators:");
console.log("P += 5: " + P); // 20 + 5 = 25

P -= 3;  // x = x - 3
console.log("P -= 3: " + P); // 25 - 3 = 22

P *= 2;  // x = x * 2
console.log("P *= 2: " + P); // 22 * 2 = 44

P /= 4;  // x = x / 4
console.log("P /= 4: " + P); // 44 / 4 = 11

P %= 3;  // x = x % 3
console.log("P %= 3: " + P); // 11 % 3 = 2

P **= 3; // x = x ** 3
console.log("P **= 3: " + P); // 2 ** 3 = 8

// 3. Comparison Operators

let u = 29;
let n = 15;
console.log("\n Comparison Operators:");
console.log(" u equal to n? " + (u == n));  // false
console.log(" u not equal to n? " + (u != n)); // true
console.log(" u greater than n? " + (u > n));  // true
console.log(" u less than n?" + (u < n));//false
console.log(" u greater than or equal to n?",+ (u >= n)); //true
console.log(" u less than or equal to n? " + (u <= n)); // false
console.log(" u strictly equal to n? " + (u === n)); // false
console.log(" u strictly not equal to n? " + (u !== n)); // true