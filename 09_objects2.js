//const tinderUser = new Objects() // this is called singleton
const tinderUser = {}
console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "ashish"
tinderUser.isLoggedIn = false

console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ashish",
            lastname: "yadav",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);// Output:ashish

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // it gives keys only like id,email
console.log(Object.values(tinderUser)); // its gives values only like 1, h@gmail.com
console.log(Object.entries(tinderUser)); // its gives both like id:1, email: h@gmail.com







