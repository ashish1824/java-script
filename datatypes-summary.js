// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const ScoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // output : object

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

// const bigNumber = 34595778425772n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "superman","deadpool"] // object

let myObj = {
name: "Ashish",
age: 18,

} // object

const myFunction = function(){
    console.log("Hello World");

} // function
    
console.log(typeof myObj);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) , Heap (non-primitive)

let myYoutubeName = "ashishranjandotcom"

let anothername = myYoutubeName    
anothername = "ashish and arnav"

console.log(myYoutubeName); // ashishranjandotcom
console.log(anothername); // ashish and arnav

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}                           // In Heap work by reference

let userTwo = userOne

userTwo.email = "ashish@google.com"

console.log(userOne.email); // ashish@google.com
console.log(userTwo.email); // ashish@google.com