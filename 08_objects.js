// singleton
// Object.create

// object literals
const mySym = Symbol("mykey1")
const JsUser = {
    name: "Ashish",
    "full name": "Ashish Yadav",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ashish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email); // ashish@google.com
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // Ashish Yadav
console.log(JsUser[mySym]); // mykey1

JsUser.email = "ashish@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "ashish@microsoft.com"
console.log(JsUser); // ashish


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS User
console.log(JsUser.greetingTwo()); // Hello JS User Ashish
