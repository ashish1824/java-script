const score = 400
console.log(score); // Output: 400

const balance = new Number(100)
console.log(balance); // Output: [Number:100]

console.log(balance.toString().length); // Output: 3
console.log(balance.toFixed(1)); // Output: 100.0

const otherNumber = 23.8983

console.log(otherNumber.toPrecision(3)); // Output: 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000

// +++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // Output: 4
console.log(Math.round(4.6)); // Output: 5
console.log(Math.ceil(4.9)); // Output: 5
console.log(Math.min(4, 3, 6, 8)); // Output: 3
console.log(Math.max(4, 3, 6, 8)); // Output: 8

console.log(Math.random());
console.log(Math.random()*10 + 1); // 0.3415251  1.3454343
console.log(Math.floor(Math.random()*10) + 1); // min 1 hoga

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) )+ min) // Output: the number b/w 10 to less than 20

