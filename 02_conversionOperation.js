let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN-- Not a Number
// true => 1;  false => 0
// undefined = NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// ashish" => true

let someNumber = 23

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *************** Operations *******************

let value = 3
let negValue = -value
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "ashish"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3)

console.log(+true); // output 1
console.log(+""); // output 0

//console.log(true+); // output error 