const name = "ashish"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ashishhc');

console.log(gameName[0]); // Output: a
console.log(gameName.__proto__); // {}


console.log(gameName.length); // Output: 8

console.log(gameName.toUpperCase()); // Output: ASHISHHC

console.log(gameName.charAt(2)); // Output: h

console.log(gameName.indexOf('i')); // Output: 3

const newString = gameName.substring(0, 4)
console.log(newString); // Output: ashi

const anotherString = gameName.slice(-8,4)
console.log(anotherString); // Output: ashi

const newStringOne = "   ashish   "
console.log (newStringOne); // Output:     ashish
console.log(newStringOne.trim()); // Output: ashish

const url = "https;//ashish.com/ashish%20ranjan"

console.log(url.replace('%20', '-')) // Output: https;//ashish.com/ashish-ranjan

console.log(url.includes('arnav')) // Output: false

console.log(gameName.split('-')); // Output: [ 'ashishhc' ]
